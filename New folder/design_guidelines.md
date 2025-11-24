# Python Learning Platform - Design Guidelines

## Design Approach
**Reference-Based Approach**: Draw inspiration from premium learning platforms like Khan Academy, Codecademy, and freeCodeCamp - focusing on clean educational interfaces that prioritize readability and interaction.

## Core Design Elements

### A. Typography
- **Primary Font**: Clear, readable sans-serif (e.g., Inter, Segoe UI, or system fonts)
- **Hierarchy**:
  - Section titles: Large, bold weights
  - Subsection headers: Medium weights
  - Body text: Regular weight, comfortable line height (1.6-1.8)
  - Code blocks: Monospace font (Fira Code, Monaco, or Consolas)

### B. Layout System
**Spacing**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Component padding: p-6 to p-8
- Section spacing: py-12 to py-16
- Card spacing: p-6 with gap-4 between elements
- Code blocks: p-4 with mb-4 for output boxes

**Grid Structure**:
- Sidebar: Fixed width ~280px on desktop, full-width drawer on mobile
- Main content: max-w-4xl centered with px-6 to px-8
- Multi-column for exercises: grid-cols-1 md:grid-cols-2 for quiz options

### C. Color Palette
**Primary Colors**:
- Main accent: Blue (#3B82F6) or Teal (#14B8A6) for primary actions, active states
- Secondary accent: Lighter shade of primary for hover states

**Backgrounds**:
- Page background: Very light gray (#F9FAFB or #F3F4F6)
- Card backgrounds: White with subtle shadows
- Code block background: Light neutral (#F5F5F5 or #E5E7EB)
- Output box background: Very light blue/teal tint (#EFF6FF or #F0FDFA)

**Syntax Highlighting**:
- Keywords (if, def, for, while, return, import, match): Blue (#2563EB)
- Strings: Green (#16A34A)
- Comments: Gray (#6B7280), italic
- Numbers: Orange (#EA580C)
- Function names: Purple (#9333EA)

**Feedback Colors**:
- Success: Green (#10B981) for correct answers
- Error: Red (#EF4444) for wrong answers
- Neutral: Gray for inactive states

### D. Component Library

**Navigation Sidebar**:
- White background with subtle border-right
- Title area with app name and subtitle at top
- Search bar below title with rounded input, search icon
- Navigation items: Rounded hover states with blue/teal background
- Active item: Blue/teal background with white text
- Mobile: Hamburger icon (top-left), slide-in drawer with overlay

**Content Cards**:
- White background
- Rounded corners (rounded-lg or rounded-xl)
- Subtle shadow (shadow-md)
- Padding p-6
- Clear visual separation between sections

**Code Blocks**:
- Container: Rounded corners, light background
- Syntax-highlighted <pre><code> with manual span wrapping for colors
- Output box directly below: Distinct background (light blue/teal tint), border-top or full border, monospace font
- "Output:" label in bold

**Interactive Exercises**:
- Question cards with rounded backgrounds
- Multiple choice options as clickable buttons/cards with hover states
- Instant feedback with color changes (green for correct, red for wrong)
- Score display: Prominent number with encouraging text
- Progress indicators: Simple bars or step counters

**Flowcharts**:
- Pure CSS shapes: Ovals (border-radius: 50%), rectangles, diamonds (transform: rotate(45deg))
- Arrows using CSS borders or simple SVG lines
- Labels inside shapes with centered text
- Vertical flow with consistent spacing

**Tables**:
- Clean borders (border-collapse)
- Header row with light blue/teal background
- Zebra striping for rows (alternating light gray)
- Comfortable cell padding (p-3 to p-4)

### E. Animations
**Minimal, purposeful animations**:
- Sidebar drawer: Smooth slide-in transition (300ms)
- Search highlights: Fade-in for <mark> elements
- Exercise feedback: Quick color transition on answer selection
- Hover states: Subtle scale or background color transitions (150-200ms)
- NO: Heavy scroll animations, parallax effects, or distracting motion

## Images
**No hero images required** - This is an educational content platform focused on information delivery. All visual elements should support learning:
- Flowchart diagrams: Generated with HTML/CSS components
- Icons: Use simple icon font (Font Awesome or Heroicons via CDN) for navigation and exercise feedback
- No decorative imagery needed

## Responsive Behavior
- **Mobile (< 768px)**: Single column, hamburger menu, stack all content vertically
- **Tablet (768px - 1024px)**: Sidebar visible, reduced margins
- **Desktop (> 1024px)**: Full sidebar, optimal content width, comfortable spacing

## Special Considerations
- **Search highlighting**: Yellow/gold <mark> background (#FEF3C7) with dark text
- **Accessibility**: High contrast ratios, focus states on all interactive elements, ARIA labels for drawer
- **Content density**: Balance whitespace with information - not too cramped, not too sparse
- **Learning-focused**: Every design decision should support comprehension and engagement