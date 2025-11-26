/**
 * ChallengeEditor Component
 * Reusable component for displaying and running coding challenges
 * Works with any CodingChallenge object
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Play, 
  RotateCcw, 
  Eye, 
  EyeOff, 
  Loader2, 
  CheckCircle2, 
  XCircle,
  Lightbulb,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Editor from "@monaco-editor/react";
import { usePyodide } from "@/contexts/PyodideContext";
import type { CodingChallenge } from "@/types/challenges";

interface ChallengeEditorProps {
  challenge: CodingChallenge;
  onBack?: () => void;
  onNext?: () => void;
  hasNext?: boolean;
}

export function ChallengeEditor({ challenge, onBack, onNext, hasNext }: ChallengeEditorProps) {
  const { isLoading: pyodideLoading, runPython } = usePyodide();
  
  const [code, setCode] = useState(challenge.starterCode);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [solutionOutput, setSolutionOutput] = useState("");
  const [solutionError, setSolutionError] = useState("");
  const [isRunningSolution, setIsRunningSolution] = useState(false);
  
  // Refs for mobile touch scroll handling
  const codeEditorRef = useRef<any>(null);
  const solutionEditorRef = useRef<any>(null);
  const codeContainerRef = useRef<HTMLDivElement>(null);
  const solutionContainerRef = useRef<HTMLDivElement>(null);

  // Reset editor state when challenge changes
  useEffect(() => {
    setCode(challenge.starterCode);
    setOutput("");
    setError("");
    setShowSolution(false);
    setSolutionOutput("");
    setSolutionError("");
  }, [challenge.id]);

  // Editor mount handlers
  const handleCodeEditorMount = useCallback((editor: any) => {
    codeEditorRef.current = editor;
  }, []);

  const handleSolutionEditorMount = useCallback((editor: any) => {
    solutionEditorRef.current = editor;
  }, []);

  // Mobile touch scroll effect for code editor
  useEffect(() => {
    const container = codeContainerRef.current;
    const editorRef = codeEditorRef;
    if (!container) return;

    let startY = 0;
    let isTouching = false;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        startY = e.touches[0].clientY;
        isTouching = true;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isTouching || e.touches.length !== 1 || !editorRef.current) return;

      const editor = editorRef.current;
      const currentY = e.touches[0].clientY;
      const deltaY = startY - currentY;
      startY = currentY;

      const scrollHeight = editor.getScrollHeight();
      const layoutInfo = editor.getLayoutInfo();
      const clientHeight = layoutInfo.height;
      const scrollTop = editor.getScrollTop();

      const hasOverflow = scrollHeight > clientHeight + 5;

      if (!hasOverflow) return;

      const atTop = scrollTop <= 1;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if ((atTop && deltaY < 0) || (atBottom && deltaY > 0)) return;

      e.preventDefault();
      editor.setScrollTop(scrollTop + deltaY);
    };

    const handleTouchEnd = () => {
      isTouching = false;
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // Mobile touch scroll effect for solution editor
  useEffect(() => {
    if (!showSolution) return;
    
    const container = solutionContainerRef.current;
    const editorRef = solutionEditorRef;
    if (!container) return;

    let startY = 0;
    let isTouching = false;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        startY = e.touches[0].clientY;
        isTouching = true;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isTouching || e.touches.length !== 1 || !editorRef.current) return;

      const editor = editorRef.current;
      const currentY = e.touches[0].clientY;
      const deltaY = startY - currentY;
      startY = currentY;

      const scrollHeight = editor.getScrollHeight();
      const layoutInfo = editor.getLayoutInfo();
      const clientHeight = layoutInfo.height;
      const scrollTop = editor.getScrollTop();

      const hasOverflow = scrollHeight > clientHeight + 5;

      if (!hasOverflow) return;

      const atTop = scrollTop <= 1;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if ((atTop && deltaY < 0) || (atBottom && deltaY > 0)) return;

      e.preventDefault();
      editor.setScrollTop(scrollTop + deltaY);
    };

    const handleTouchEnd = () => {
      isTouching = false;
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [showSolution]);

  const handleRunCode = async () => {
    if (pyodideLoading) {
      setError("Python interpreter is still loading. Please wait...");
      return;
    }

    setIsRunning(true);
    setOutput("");
    setError("");

    try {
      const result = await runPython(code);
      
      if (result.stderr) {
        setError(result.stderr);
      }
      
      if (result.stdout) {
        setOutput(result.stdout);
      } else if (!result.stderr) {
        setOutput("Code executed successfully (no output)");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred while running your code");
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(challenge.starterCode);
    setOutput("");
    setError("");
    setShowSolution(false);
    setSolutionOutput("");
    setSolutionError("");
  };

  const handleRunSolution = async () => {
    if (pyodideLoading) {
      setSolutionError("Python interpreter is still loading. Please wait...");
      return;
    }

    setIsRunningSolution(true);
    setSolutionOutput("");
    setSolutionError("");

    try {
      const result = await runPython(challenge.solutionCode);
      
      if (result.stderr) {
        setSolutionError(result.stderr);
      }
      
      if (result.stdout) {
        setSolutionOutput(result.stdout);
      } else if (!result.stderr) {
        setSolutionOutput("Code executed successfully (no output)");
      }
    } catch (err: any) {
      setSolutionError(err.message || "An error occurred while running the solution");
    } finally {
      setIsRunningSolution(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      {onBack && (
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-4"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Challenges
        </Button>
      )}

      {/* Challenge Header */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl mb-2">{challenge.title}</CardTitle>
          <CardDescription className="text-base">
            {challenge.description}
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Hints (if available) */}
      {challenge.hints && challenge.hints.length > 0 && (
        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertDescription>
            <strong>Hints:</strong>
            <ul className="mt-2 space-y-1">
              {challenge.hints.map((hint, index) => (
                <li key={index} className="text-sm">• {hint}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {/* Code Editor */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Your Code</CardTitle>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                disabled={isRunning}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
              <Button
                onClick={handleRunCode}
                disabled={pyodideLoading || isRunning}
                size="sm"
              >
                {isRunning ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Running...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Run Code
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {pyodideLoading ? (
            <div className="flex items-center justify-center py-12 text-muted-foreground">
              <Loader2 className="w-6 h-6 mr-2 animate-spin" />
              Loading Python engine...
            </div>
          ) : (
            <div ref={codeContainerRef} className="border rounded-lg overflow-hidden">
              <Editor
                height="350px"
                defaultLanguage="python"
                theme="vs-dark"
                value={code}
                onMount={handleCodeEditorMount}
                onChange={(value) => setCode(value || "")}
                options={{
                  minimap: { enabled: false },
                  fontSize: 16,
                  lineNumbers: "on",
                  roundedSelection: false,
                  scrollBeyondLastLine: false,
                  readOnly: false,
                  automaticLayout: true,
                  tabSize: 4,
                  wordWrap: "on",
                  autoClosingBrackets: "always",
                  autoClosingQuotes: "always",
                  autoClosingOvertype: "always",
                  scrollbar: {
                    alwaysConsumeMouseWheel: false,
                  },
                }}
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Output Area */}
      {(output || error) && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              {error ? (
                <>
                  <XCircle className="w-5 h-5 text-destructive" />
                  Error
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Output
                </>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive">
                <AlertDescription>
                  <pre className="whitespace-pre-wrap font-mono text-sm">{error}</pre>
                </AlertDescription>
              </Alert>
            )}
            {output && (
              <div className="bg-muted rounded-lg p-4">
                <pre className="whitespace-pre-wrap font-mono text-sm">{output}</pre>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Expected Output (if available) */}
      {challenge.expectedOutput && (
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle className="text-lg">Expected Output</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted rounded-lg p-4">
              <pre className="whitespace-pre-wrap font-mono text-sm text-muted-foreground">
                {challenge.expectedOutput}
              </pre>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Solution Toggle */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Solution</CardTitle>
            <div className="flex gap-2">
              {showSolution && (
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleRunSolution}
                  disabled={pyodideLoading || isRunningSolution}
                >
                  {isRunningSolution ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Running...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Run Solution
                    </>
                  )}
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSolution(!showSolution)}
              >
                {showSolution ? (
                  <>
                    <EyeOff className="w-4 h-4 mr-2" />
                    Hide Solution
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4 mr-2" />
                    Show Solution
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardHeader>
        {showSolution && (
          <CardContent className="space-y-4">
            <div ref={solutionContainerRef} className="border rounded-lg overflow-hidden">
              <Editor
                height="300px"
                defaultLanguage="python"
                theme="vs-dark"
                value={challenge.solutionCode}
                onMount={handleSolutionEditorMount}
                options={{
                  minimap: { enabled: false },
                  fontSize: 16,
                  lineNumbers: "on",
                  readOnly: true,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  tabSize: 4,
                  wordWrap: "on",
                  scrollbar: {
                    alwaysConsumeMouseWheel: false,
                  },
                }}
              />
            </div>
            
            {/* Solution Output */}
            {(solutionOutput || solutionError) && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  {solutionError ? (
                    <>
                      <XCircle className="w-4 h-4 text-destructive" />
                      Solution Error
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Solution Output
                    </>
                  )}
                </h4>
                {solutionError && (
                  <Alert variant="destructive">
                    <AlertDescription>
                      <pre className="whitespace-pre-wrap font-mono text-sm">{solutionError}</pre>
                    </AlertDescription>
                  </Alert>
                )}
                {solutionOutput && (
                  <div className="bg-muted rounded-lg p-4">
                    <pre className="whitespace-pre-wrap font-mono text-sm">{solutionOutput}</pre>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        )}
      </Card>

      {/* Next Challenge Button */}
      {hasNext && onNext && (
        <Card>
          <CardContent className="pt-6">
            <Button 
              onClick={onNext}
              className="w-full"
              size="lg"
            >
              Next Challenge
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
