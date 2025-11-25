# Coding Challenges System - Implementation Guide

## 🎯 Overview

This document explains the **reusable coding challenges system** that has been implemented for the MIT ITE Python learning website. This system allows you to easily add coding challenges for any topic (Data Types, Operators, Loops, etc.) with minimal code duplication.

---

## 📁 Files Created

### 1. **Type Definitions**
**File:** `client/src/types/challenges.ts`

Defines the structure for all coding challenges:

```typescript
export interface CodingChallenge {
  id: string;              // Unique identifier (e.g., "dt-001")
  title: string;           // Challenge title
  description: string;     // Task description for students
  starterCode: string;     // Pre-filled code in editor
  solutionCode: string;    // Complete solution
  topicTag: string;        // Topic category
  level: "easy" | "medium" | "hard";
  hints?: string[];        // Optional hints
  expectedOutput?: string; // Optional expected output
}
```

### 2. **Pyodide Context**
**File:** `client/src/contexts/PyodideContext.tsx`

Manages Python execution engine for the entire app:
- Loads Pyodide once on app startup
- Provides `usePyodide()` hook with `runPython(code)` function
- Handles loading states and errors
- Captures stdout and stderr from Python execution

**Usage:**
```typescript
const { pyodide, isLoading, runPython } = usePyodide();
const result = await runPython("print('Hello')");
// result = { stdout: "Hello\n", stderr: "" }
```

### 3. **Reusable Components**

#### **ChallengeEditor** (`client/src/components/ChallengeEditor.tsx`)
Displays a single challenge with:
- Challenge title, description, and difficulty badge
- Monaco code editor (syntax highlighting, auto-complete)
- Run Code button (executes Python via Pyodide)
- Output area (shows stdout and errors)
- Show/Hide Solution button (reveals solution without replacing user code)
- Reset button (restores starter code)
- Back button (returns to challenge list)

#### **ChallengeList** (`client/src/components/ChallengeList.tsx`)
Displays all challenges in a grid:
- Groups challenges by difficulty (Easy, Medium, Hard)
- Shows challenge title, preview, and difficulty badge
- Clickable cards that open the challenge editor
- Responsive design (1/2/3 columns based on screen size)

### 4. **Page Component**
**File:** `client/src/pages/DataTypesChallenges.tsx`

Main page for Data Types challenges:
- Displays introduction and instructions
- Shows challenge statistics (total, easy, medium, hard)
- Renders challenge list
- Handles navigation between list and detail views
- Includes search filtering support

### 5. **Data File**
**File:** `client/src/data/dataTypeChallenges.ts`

Contains the array of challenge objects:
- Currently has 1 example challenge
- Ready for your 20 Data Types questions
- Includes detailed comments on how to add challenges

---

## 🚀 How to Add Your 20 Questions

### Step 1: Open the Data File
Navigate to: `client/src/data/dataTypeChallenges.ts`

### Step 2: Add Challenge Objects
For each of your 20 questions, add an object like this:

```typescript
{
  id: "dt-001",
  title: "Create Variables for Student Information",
  description: "Create three variables: name (string), age (int), and gpa (float). Print them in a formatted sentence.",
  starterCode: `# Create variables for student information
# name = ?
# age = ?
# gpa = ?

# Print them here

`,
  solutionCode: `# Solution: Student Information
name = "John Doe"
age = 20
gpa = 3.75

print(f"Student: {name}")
print(f"Age: {age}")
print(f"GPA: {gpa}")`,
  topicTag: "data-types",
  level: "easy",
  hints: [
    "Use quotes for strings",
    "Integers don't need quotes",
    "Use float for decimal numbers",
  ],
  expectedOutput: `Student: John Doe
Age: 20
GPA: 3.75`,
},
```

### Step 3: Guidelines for Writing Challenges

**ID Naming:**
- Use format: `"dt-001"`, `"dt-002"`, etc.
- Keep sequential for easy tracking

**Title:**
- Clear, concise task description (5-10 words)
- Example: "Convert Temperature from Celsius to Fahrenheit"

**Description:**
- Explain what the student needs to do
- Be specific and clear
- 1-3 sentences
- Example: "Write a program that takes a temperature in Celsius and converts it to Fahrenheit using the formula F = (C * 9/5) + 32. Print the result."

**Starter Code:**
- Give students a helpful starting point
- Include comments guiding them
- Don't make it too empty (frustrating) or too complete (no learning)
- Good example:
  ```python
  # Convert Celsius to Fahrenheit
  celsius = 25
  
  # Write your conversion formula here
  # fahrenheit = ?
  
  # Print the result
  
  ```

**Solution Code:**
- Complete, working solution
- Include comments explaining the logic
- Should produce the expected output
- Example:
  ```python
  # Convert Celsius to Fahrenheit
  celsius = 25
  
  # Apply conversion formula
  fahrenheit = (celsius * 9/5) + 32
  
  # Print the result
  print(f"{celsius}°C = {fahrenheit}°F")
  ```

**Level:**
- `"easy"`: Basic syntax, single concept
- `"medium"`: Multiple concepts, some logic
- `"hard"`: Complex logic, multiple steps

**Hints (Optional but Recommended):**
- 2-4 hints that guide without giving away the answer
- Start general, get more specific
- Example:
  ```typescript
  hints: [
    "Remember the formula: F = (C * 9/5) + 32",
    "Use parentheses for order of operations",
    "Use f-string to format the output nicely",
  ]
  ```

**Expected Output (Optional):**
- Show what the output should look like
- Helps students verify their solution
- Example:
  ```typescript
  expectedOutput: "25°C = 77.0°F"
  ```

---

## 🔄 Adding Challenges for Other Topics

The system is **fully reusable**! To add challenges for Operators, Loops, etc.:

### Step 1: Create Data File
Create `client/src/data/operatorsChallenges.ts`:

```typescript
import type { CodingChallenge } from "@/types/challenges";

export const operatorsChallenges: CodingChallenge[] = [
  {
    id: "op-001",
    title: "...",
    // ... rest of challenge
  },
  // ... more challenges
];
```

### Step 2: Create Page Component
Create `client/src/pages/OperatorsChallenges.tsx`:

```typescript
import { useState } from 'react';
import { ChallengeList } from "@/components/ChallengeList";
import { ChallengeEditor } from "@/components/ChallengeEditor";
import { operatorsChallenges } from "@/data/operatorsChallenges";

export default function OperatorsChallenges({ searchQuery = "" }) {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  if (selectedChallenge) {
    return (
      <ChallengeEditor 
        challenge={selectedChallenge}
        onBack={() => setSelectedChallenge(null)}
      />
    );
  }

  return (
    <div className="space-y-6">
      <h1>Operators – Coding Challenges</h1>
      {/* Copy structure from DataTypesChallenges.tsx */}
      <ChallengeList 
        challenges={operatorsChallenges}
        onSelectChallenge={setSelectedChallenge}
      />
    </div>
  );
}
```

### Step 3: Add Route
In `client/src/App.tsx`:
```typescript
import OperatorsChallenges from "@/pages/OperatorsChallenges";

// Add to Router:
<Route path="/operators-challenges" component={() => <OperatorsChallenges searchQuery="" />} />
```

### Step 4: Add Navigation
Update `client/src/components/AppSidebar.tsx` and `client/src/components/Navbar.tsx`:
```typescript
{ title: "Operators Challenges", url: "/operators-challenges", icon: Code2 }
```

---

## 🎨 Component Features

### Code Editor Features:
✅ Syntax highlighting (Python)  
✅ Line numbers  
✅ Auto-closing brackets and quotes  
✅ 16px font size for readability  
✅ Dark theme (vs-dark)  
✅ Word wrap enabled  
✅ 350px height (adjustable)

### Python Execution Features:
✅ Runs Python 3.11 in browser (Pyodide)  
✅ Captures print statements (stdout)  
✅ Captures errors (stderr)  
✅ No server needed - fully client-side  
✅ Loading state while Pyodide initializes  
✅ Error handling and display

### UI Features:
✅ Difficulty badges (color-coded)  
✅ Challenge statistics  
✅ Responsive grid layout  
✅ Mobile-friendly  
✅ Smooth animations  
✅ Consistent with existing site design

---

## 📱 Responsive Design

**Desktop:**
- 3-column grid for challenge cards
- Side-by-side layout for editor and solution
- Fixed sidebar navigation

**Tablet:**
- 2-column grid for challenge cards
- Stacked layout for editor and solution

**Mobile:**
- 1-column grid for challenge cards
- Fully stacked layout
- Quick access bar in navbar
- Larger touch targets

---

## 🔧 Technical Details

### Dependencies Used:
- **Monaco Editor**: Code editor (same as VS Code)
- **Pyodide**: Python in WebAssembly
- **shadcn/ui**: UI components (Button, Card, Badge, etc.)
- **Lucide React**: Icons
- **Wouter**: Routing

### Performance Considerations:
- Pyodide loads once and is shared via context
- Monaco editor is lazy-loaded
- Challenge data is imported only when needed
- No database calls - all data is static

### Code Quality:
- TypeScript for type safety
- Reusable components
- Clean separation of concerns
- Comprehensive comments
- Consistent naming conventions

---

## 🧪 Testing the System

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Navigate to:**
   - Desktop: Click "Data Types Challenges" in sidebar
   - Mobile: Use quick access bar or hamburger menu

3. **Test workflow:**
   - Click a challenge card
   - Modify the code in the editor
   - Click "Run Code"
   - Check output appears correctly
   - Click "Show Solution"
   - Verify solution displays correctly
   - Click "Reset" to restore starter code
   - Click "Back to Challenges" to return to list

---

## 📝 Next Steps for You

1. **Prepare your 20 questions:**
   - Write clear titles and descriptions
   - Design appropriate starter code
   - Write complete solutions
   - Determine difficulty levels
   - Create helpful hints

2. **Add them to the data file:**
   - Open `client/src/data/dataTypeChallenges.ts`
   - Replace the example challenge
   - Add all 20 of your challenges

3. **Test thoroughly:**
   - Make sure each challenge runs correctly
   - Verify solutions produce expected output
   - Check on mobile and desktop

4. **Share the questions with me:**
   - I can help format them into the correct structure
   - I can add them to the data file for you

---

## 🎓 Example Challenge (Complete)

Here's a complete, well-structured example:

```typescript
{
  id: "dt-005",
  title: "Calculate Rectangle Area",
  description: "Create a program that calculates the area of a rectangle. Store the length (10) and width (5) in variables, calculate the area, and print the result in a formatted message.",
  starterCode: `# Calculate rectangle area
length = 10
width = 5

# Calculate area here
# area = ?

# Print the result
`,
  solutionCode: `# Calculate rectangle area
length = 10
width = 5

# Calculate area
area = length * width

# Print the result
print(f"Rectangle Area: {area} square units")
print(f"Length: {length}, Width: {width}")`,
  topicTag: "data-types",
  level: "easy",
  hints: [
    "Area of rectangle = length × width",
    "Use the multiplication operator (*)",
    "Use f-string to format the output",
  ],
  expectedOutput: `Rectangle Area: 50 square units
Length: 10, Width: 5`,
}
```

---

## ✅ Summary

You now have a **complete, production-ready coding challenges system** that:

1. ✅ Works with any list of questions (not hard-coded)
2. ✅ Uses Monaco editor with Python syntax highlighting
3. ✅ Runs Python code in the browser using Pyodide
4. ✅ Shows output and errors clearly
5. ✅ Has show/hide solution functionality
6. ✅ Is fully responsive (mobile + desktop)
7. ✅ Is easily reusable for other topics
8. ✅ Matches your existing site design
9. ✅ Has proper loading states and error handling
10. ✅ Is integrated into your navigation

**All you need to do now is:**
- Provide your 20 Data Types questions
- I'll format them into the challenge structure
- Test the system
- Push to GitHub when ready!

---

## 🤝 Need Help?

If you need assistance:
- Formatting your questions
- Adding more topics
- Customizing the UI
- Fixing any issues

Just let me know! The system is fully functional and ready to receive your challenge questions.
