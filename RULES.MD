# KODELOKAL - PROJECT CONSTITUTION & RULES (Updated)

## 1. Identitas & Filosofi Produk
"KodeLokal" - One-Stop Solution belajar koding untuk Indonesia.
- **BAHASA:** 100% Bahasa Indonesia.
- **TONE:** Friendly, santai, suportif.

## 2. Tech Stack
- **Framework:** Next.js 14 (App Router).
- **Styling:** Tailwind CSS + Framer Motion.
- **UI Lib:** Shadcn UI.
- **State:** Zustand (Progress, XP, Badges).
- **Editor:** Monaco Editor.

## 3. Fitur Utama "One-Stop Solution"
- **AI Tutor:** Komponen bantuan kontekstual di setiap pelajaran.
- **Sistem Kuis:** Verifikasi pemahaman setelah koding.
- **Sistem XP:** Poin pengalaman untuk setiap aktivitas.
- **Badge:** Pencapaian visual untuk motivasi.

## 4. Struktur Data
- `/data/curriculum.ts`: Harus mencakup materi, instruksi, kuis, dan aturan validasi.
- `/store/useStore.ts`: Harus mengelola `completedLessons`, `xp`, `badges`, dan `quizScores`.

## 5. Aturan Pengerjaan
- Pastikan Mobile Responsive.
- Gunakan Premium Dark Mode (zinc-950).
- Verifikasi setiap perubahan besar.
