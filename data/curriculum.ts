export type ValidationType = 'element_exists' | 'style_match' | 'text_contains' | 'python_logic';

export interface ValidationRule {
  type: ValidationType;
  target: string; // e.g., 'button', 'h1', or code regex
  value?: string; // expected value
  message: string; // error message if failed
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  initialCode: string;
  previewMode: "html" | "terminal";
  validationRules: ValidationRule[];
}

export const curriculum: Record<string, Lesson[]> = {
  software_engineer: [
    {
      id: "se-1",
      title: "Tombol Pertamamu",
      description: "Website butuh interaksi. Mari buat tombol yang bisa diklik.",
      content: `
        <h3 class="font-bold text-lg">Tag Button</h3>
        <p class="mb-4">Gunakan tag <code>&lt;button&gt;</code> untuk membuat tombol.</p>
      `,
      initialCode: `\n`,
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
      ]
    }
  ],
  ai_engineer: [
    {
      id: "ai-1",
      title: "Hello Python",
      description: "Perintah pertama untuk berkomunikasi dengan mesin.",
      content: "<p>Gunakan <code>print()</code> untuk mencetak teks.</p>",
      initialCode: `# Tulis kodemu\n`,
      previewMode: "terminal",
      validationRules: [
        {
          type: "python_logic",
          target: "print",
          value: "Halo AI",
          message: "Gunakan print('Halo AI') persis seperti contoh."
        }
      ]
    }
  ]
};