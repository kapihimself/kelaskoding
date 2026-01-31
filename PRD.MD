# Product Requirement Document (PRD) - KodeLokal

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
# Product Requirement Document (PRD)

## Fitur Utama
1.  **Landing Page Premium:** Hero section dengan tipografi besar, efek glow, dan dua kartu pilihan jalur (Software Engineer vs AI Engineer).
2.  **The Classroom (Interactive IDE):**
    - Layout 3 Kolom yang bisa di-resize.
    - Kolom 1: Materi & Instruksi (Rich Text).
    - Kolom 2: Code Editor (Tempat mengetik).
    - Kolom 3: Live Canvas/Preview (Hasil kodingan langsung muncul).
3.  **Smart Validation System:**
    - Bukan sekadar mencocokkan teks.
    - Untuk Web: Cek apakah elemen HTML benar-benar terbentuk di DOM.
    - Untuk AI: Cek logika syntax Python menggunakan Regex.