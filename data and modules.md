export const curriculum = {
  software_engineer: [
    {
      id: "se-1",
      title: "Halo Dunia Web",
      description: "Belajar membuat teks pertama kamu di internet.",
      content: `
        <h3>Selamat Datang calon Engineer!</h3>
        <p>Website itu sebenarnya cuma kumpulan teks yang dikasih 'baju' (style).</p>
        <p>Kita akan mulai dengan elemen paling dasar: <b>Heading</b> (Judul).</p>
      `,
      task: "Buat sebuah judul besar bertuliskan 'Halo Indonesia' menggunakan tag <h1>",
      initialCode: `\n`,
      correctSnippet: "<h1>Halo Indonesia</h1>",
      hint: "Gunakan tag pembuka <h1> dan penutup </h1>"
    }
  ],
  ai_engineer: [
    {
      id: "ai-1",
      title: "Bahasa Ular (Python)",
      description: "Python adalah bahasa wajib buat AI. Bayangkan Python itu seperti bahasa Inggris tapi versi robot.",
      content: `
        <h3>Kenalan sama Print</h3>
        <p>Di dunia AI, perintah paling dasar adalah menyuruh komputer bicara.</p>
        <p>Di Python, kita pakai perintah <code>print()</code>.</p>
      `,
      task: "Suruh komputer bilang 'Saya siap belajar AI'",
      initialCode: `# Tulis perintah python di sini\n`,
      correctSnippet: "print('Saya siap belajar AI')",
      hint: "Pastikan pakai tanda kutip di dalam kurung. Contoh: print('Teks')"
    }
  ]
};

export type ValidationType = 'element_exists' | 'style_match' | 'text_contains' | 'python_logic';

export interface ValidationRule {
  type: ValidationType;
  target: string; // misal: 'button', 'h1', atau regex code
  value?: string; // nilai yang diharapkan
  message: string; // Pesan error jika gagal
}

export const curriculum = {
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