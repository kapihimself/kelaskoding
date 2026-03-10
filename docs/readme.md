# MANUAL PENDIRI: KODELOKAL (The Vibe Coder's Blueprint)

Dokumen ini adalah panduan langkah demi langkah untuk membangun "KodeLokal" — platform belajar koding interaktif (seperti FreeCodeCamp/Codecademy) khusus untuk pasar Indonesia, menggunakan bantuan AI (Cursor/Windsurf).

**Target Akhir:**
- **Stack:** Next.js 14, Tailwind, Shadcn UI, Zustand.
- **Style:** Premium Dark Mode (UI8/Dribbble aesthetics).
- **Fitur Inti:** 3-Pane Interactive IDE (Materi, Editor, & Live Canvas/Preview).
- **Kecerdasan:** Sistem validasi jawaban otomatis (DOM Checking).

---

## FASE 1: PERSIAPAN OTAK PROYEK (Context Files)

Sebelum menyuruh AI coding, kita harus menanamkan "memori jangka panjang" agar AI tahu persis apa yang kita mau. Buatlah file-file berikut di dalam folder proyekmu.

### 1. File `.cursorrules` (Simpan di root folder)
*File ini memaksa AI mematuhi aturan desain dan bahasa.*

```markdown
# KODELOKAL - PROJECT CONSTITUTION & RULES

## 1. Identitas & Filosofi Produk
Kita membangun "KodeLokal", platform belajar koding interaktif untuk pemula di Indonesia.
- **BAHASA:** 100% UI (Tombol, Pesan Error, Instruksi, Modal) WAJIB dalam **Bahasa Indonesia**. Gunakan bahasa yang santai & suportif (Contoh: "Mantap!", "Coba lagi yuk", "Jalankan").
- **TONE:** Friendly, tidak kaku, seperti mentor yang asik.
- **TARGET:** Gen Z & Millennial Indonesia yang ingin switch career.

## 2. Tech Stack (Strict)
- **Framework:** Next.js 14 (App Router).
- **Styling:** Tailwind CSS + Lucide Icons + Framer Motion.
- **UI Lib:** Shadcn UI (Radix Primitives).
- **State:** Zustand (Lesson progress tracking).
- **Editor Engine:** - Track Web: `@codesandbox/sandpack-react` (Real-time browser preview).
  - Track AI: `@monaco-editor/react` (Terminal Simulation).

## 3. Estetika Desain (Premium Dark Mode)
**Visual Style:** Inspired by UI8.net, Linear, & Vercel.
- **Background:** Gunakan `zinc-950` atau `slate-900` (Bukan hitam pekat).
- **Lighting:** Gunakan efek "Glow" halus atau gradient mesh di belakang elemen hero.
- **Glassmorphism:** Panel transparan dengan blur (`backdrop-blur`) dan border tipis (`border-white/10`).
- **Layout:** **3-Pane IDE Layout** (Materi - Editor - Canvas).

## 4. Struktur Folder Penting
- `/app`: Routing & Pages.
- `/components/ide`: Komponen khusus Workspace belajar.
- `/lib/validator`: Logika pengecekan kode pintar (DOM Checker).
- `/data`: Silabus pelajaran (JSON).

## 5. Aturan Pengerjaan
- Jangan hapus file tanpa izin.
- Pastikan tampilan **Mobile Responsive** (Stack layout ke bawah di HP).
- Kode harus bersih dan modular.