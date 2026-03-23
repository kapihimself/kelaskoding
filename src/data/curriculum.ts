export type ValidationType = 'element_exists' | 'style_match' | 'text_contains' | 'python_logic';

export interface ValidationRule {
  type: ValidationType;
  target: string;
  value?: string;
  message: string;
}

export interface QuizData {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  task: string;
  initialCode: string;
  previewMode: 'html' | 'terminal';
  validationRules: ValidationRule[];
  hint: string;
  quiz?: QuizData;
  xpGain: number;
}

export interface Track {
  id: string;
  title: string;
  lessons: Lesson[];
}

export const curriculum: Record<string, Lesson[]> = {
  software_engineer: [
    {
      id: "se-1",
      title: "Halo Dunia Web",
      description: "Belajar membuat teks pertama kamu di internet.",
      content: `
        <h3 class="font-bold text-lg">Selamat Datang calon Engineer!</h3>
        <p>Website itu sebenarnya cuma kumpulan teks yang dikasih 'baju' (style).</p>
        <p>Kita akan mulai dengan elemen paling dasar: <b>Heading</b> (Judul).</p>
        <p>Gunakan tag <code>&lt;h1&gt;</code> untuk membuat judul paling besar.</p>
      `,
      task: "Buat sebuah judul besar bertuliskan 'Halo Indonesia' menggunakan tag <h1>",
      initialCode: "<!-- Tulis kodemu di bawah ini -->\n",
      previewMode: "html",
      validationRules: [
        {
          type: "element_exists",
          target: "h1",
          message: "Kamu belum membuat elemen <h1>."
        },
        {
          type: "text_contains",
          target: "h1",
          value: "Halo Indonesia",
          message: "Judul harus bertuliskan 'Halo Indonesia'."
        }
      ],
      hint: "Gunakan tag pembuka <h1> dan penutup </h1>. Contoh: <h1>Teks</h1>",
      xpGain: 50,
      quiz: {
        question: "Apa kegunaan tag <h1> dalam HTML?",
        options: ["Membuat judul paling besar", "Membuat paragraf", "Membuat tautan"],
        correctAnswer: 0
      }
    },
    {
      id: "se-2",
      title: "Tombol Pertamamu",
      description: "Website butuh interaksi. Mari buat tombol yang bisa diklik.",
      content: `
        <h3 class="font-bold text-lg">Tag Button</h3>
        <p class="mb-4">Gunakan tag <code>&lt;button&gt;</code> untuk membuat tombol.</p>
      `,
      task: "Buat sebuah tombol dengan teks 'Klik Saya'",
      initialCode: "<h1>Halo Indonesia</h1>\n",
      previewMode: "html",
      validationRules: [
        {
          type: "element_exists",
          target: "button",
          message: "Kamu belum membuat elemen <button>."
        },
        {
          type: "text_contains",
          target: "button",
          value: "Klik Saya",
          message: "Tombol harus bertuliskan 'Klik Saya'."
        }
      ],
      hint: "Contoh: <button>Klik Saya</button>",
      xpGain: 50,
      quiz: {
        question: "Tag manakah yang benar untuk membuat tombol?",
        options: ["<btn>", "<button>", "<input type='btn'>"],
        correctAnswer: 1
      }
    }
  ],
  ai_engineer: [
    {
      id: "ai-1",
      title: "Bahasa Ular (Python)",
      description: "Python adalah bahasa wajib buat AI. Bayangkan Python itu seperti bahasa Inggris tapi versi robot.",
      content: `
        <h3 class="font-bold text-lg">Kenalan sama Print</h3>
        <p>Di dunia AI, perintah paling dasar adalah menyuruh komputer bicara.</p>
        <p>Di Python, kita menggunakan perintah <code>print()</code>.</p>
      `,
      task: "Suruh komputer bilang 'Saya siap belajar AI'",
      initialCode: "# Tulis perintah python di sini\n",
      previewMode: "terminal",
      validationRules: [
        {
          type: "python_logic",
          target: "print",
          value: "Saya siap belajar AI",
          message: "Gunakan print('Saya siap belajar AI') persis seperti contoh."
        }
      ],
      hint: "Pastikan pakai tanda kutip di dalam kurung. Contoh: print('Teks')",
      xpGain: 50,
      quiz: {
        question: "Bagaimana cara mencetak teks ke layar di Python?",
        options: ["console.log()", "print()", "echo()"],
        correctAnswer: 1
      }
    }
  ]
};
