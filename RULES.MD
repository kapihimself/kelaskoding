
# KODELOKAL - PROJECT RULES

## 1. Core Philosophy
You are building "KodeLokal", a coding learning platform strictly for INDONESIAN users.
- **Language Rule:** 100% of the User Interface (Buttons, Titles, Error Messages, Modals) MUST be in **Bahasa Indonesia**.
- **Tone:** Santai, approachable, encouraging (e.g., use "Mantap!" instead of "Success", "Coba lagi yuk" instead of "Error").
- **Target Audience:** Beginners in Indonesia (Gen Z/Millennials) who have zero coding experience.

## 2. Tech Stack (Strict)
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + Lucide Icons
- **UI Components:** Shadcn UI
- **State Management:** Zustand (for tracking lesson progress)
- **Code Editor (Web Track):** @codesandbox/sandpack-react
- **Code Editor (AI Track):** Monaco Editor (simulated python execution via text matching)

## 3. Project Structure
- `/app`: Pages and Layouts
- `/components`: Reusable UI components
- `/data`: Static content (JSON/TS files for the syllabus)
- `/lib`: Helper functions

## 4. The Two Tracks
You are ONLY allowed to build logic for these two paths:
1. **Jalur Software Engineer:** HTML/CSS/JS focus.
2. **Jalur AI Engineer:** Python syntax & Prompt Engineering focus.

## 5. Coding Behavior
- Do not use complex TypeScript types unless necessary. Keep it readable.
- When creating UI, always ensure it is "Mobile Responsive" first.
- If the user gets stuck, offer a "Lihat Kunci Jawaban" (See Solution) button.
## App Overview
A web-based learning platform (LMS) where users can learn coding interactively in Bahasa Indonesia.

## Key Features
1.  **Landing Page:**
    - Hero section explaining the value proposition in Bahasa Indonesia.
    - Two clear Call-to-Action cards: "Mulai Jadi Software Engineer" vs "Mulai Jadi AI Engineer".

2.  **Learning Interface (The Classroom):**
    - **Left Panel:** Explanation (Materi) & Instructions (Instruksi).
    - **Right Panel:** Interactive Code Editor.
    - **Action Bar:** "Jalankan" (Run), "Reset", "Lanjut" (Next).

3.  **Gamification (Simple):**
    - Progress bar (e.g., "Modul 1: 20% Selesai").
    - Celebration animation (Confetti) when a challenge is passed.

## Specific Logic for "AI Engineer" Track
- Since we cannot easily run Python in the browser for an MVP, use **"Output Simulation"**.
- If the user types the correct keyword defined in the lesson data, simulate a successful terminal output.

## User Flow
1. User lands on Home.
2. Picks a Track.
3. Enters the "Classroom" (Lesson 1).
4. Reads material -> Types code -> Clicks Run -> Success -> Next Lesson.

## 2. Tech Stack & Aesthetic (Strict)
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + Lucide Icons
- **UI Base:** Shadcn UI (Wajib digunakan sebagai fondasi komponen).
- **Design Aesthetic (NEW):**
  - **Inspiration:** High-end digital products from UI8.net and trendy Dribbble shots.
  - **Theme:** Premium Dark Mode. Use rich dark grays (e.g., slate-900, zinc-950) instead of pure black.
  - **Visuals:** Use subtle gradient glows in backgrounds, clean thin borders for cards, and highly readable typography.
  - **Feel:** The app must feel expensive, polished, and professional. Avoid "default bootstrap" looks.
- **State Management:** Zustand
- **Code Editors:** @codesandbox/sandpack-react & @monaco-editor/react