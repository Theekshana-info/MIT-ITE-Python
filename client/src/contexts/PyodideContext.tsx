/**
 * Pyodide Context Provider
 * Manages Python execution engine for the entire app
 * Provides a clean API for running Python code in the browser
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Declare pyodide types
declare global {
  interface Window {
    loadPyodide: any;
  }
}

interface PyodideContextType {
  pyodide: any | null;
  isLoading: boolean;
  error: string | null;
  runPython: (code: string) => Promise<{ stdout: string; stderr: string }>;
}

const PyodideContext = createContext<PyodideContextType | undefined>(undefined);

interface PyodideProviderProps {
  children: ReactNode;
}

export function PyodideProvider({ children }: PyodideProviderProps) {
  const [pyodide, setPyodide] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPyodideInstance = async () => {
      try {
        // Check if pyodide script is already in the document
        if (!document.querySelector('script[src*="pyodide.js"]')) {
          const script = document.createElement('script');
          script.src = "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js";
          script.async = true;
          document.body.appendChild(script);

          await new Promise<void>((resolve, reject) => {
            script.onload = () => resolve();
            script.onerror = () => reject(new Error("Failed to load Pyodide script"));
          });
        }

        // Wait for loadPyodide to be available
        while (!window.loadPyodide) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }

        // Load Pyodide
        const pyodideInstance = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
        });

        setPyodide(pyodideInstance);
        setIsLoading(false);
      } catch (err: any) {
        console.error("Pyodide loading error:", err);
        setError(err.message || "Failed to initialize Python interpreter");
        setIsLoading(false);
      }
    };

    loadPyodideInstance();
  }, []);

  const runPython = async (code: string): Promise<{ stdout: string; stderr: string }> => {
    if (!pyodide) {
      throw new Error("Python interpreter is not ready yet. Please wait...");
    }

    try {
      // Setup stdout capture
      await pyodide.runPythonAsync(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
      `);

      // Run user code
      await pyodide.runPythonAsync(code);

      // Get outputs
      const stdout = await pyodide.runPythonAsync("sys.stdout.getvalue()");
      const stderr = await pyodide.runPythonAsync("sys.stderr.getvalue()");

      return {
        stdout: stdout || "",
        stderr: stderr || "",
      };
    } catch (err: any) {
      // Return error in stderr format
      return {
        stdout: "",
        stderr: err.message || "An error occurred while running your code",
      };
    }
  };

  const value: PyodideContextType = {
    pyodide,
    isLoading,
    error,
    runPython,
  };

  return (
    <PyodideContext.Provider value={value}>
      {children}
    </PyodideContext.Provider>
  );
}

export function usePyodide(): PyodideContextType {
  const context = useContext(PyodideContext);
  if (context === undefined) {
    throw new Error('usePyodide must be used within a PyodideProvider');
  }
  return context;
}
