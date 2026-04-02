import { ValidationRule } from "@/data/curriculum";

export interface ValidationResult {
  success: boolean;
  message?: string;
}

export const validateCode = async (
  code: string,
  rules: ValidationRule[],
  mode: 'html' | 'terminal'
): Promise<ValidationResult> => {
  if (mode === 'html') {
    const parser = new DOMParser();
    const doc = parser.parseFromString(code, 'text/html');

    for (const rule of rules) {
      if (rule.type === 'element_exists') {
        const el = doc.querySelector(rule.target);
        if (!el) return { success: false, message: rule.message };
      }

      if (rule.type === 'text_contains') {
        const el = doc.querySelector(rule.target);
        if (!el || !el.textContent?.toLowerCase().includes(rule.value?.toLowerCase() || '')) {
          return { success: false, message: rule.message };
        }
      }
    }
  }

  if (mode === 'terminal') {
    for (const rule of rules) {
      if (rule.type === 'python_logic') {
        // Simple regex to check for print('...') or print("...")
        const regex = new RegExp(`${rule.target}\\s*\\(\\s*['"]${rule.value}['"]\\s*\\)`);
        if (!regex.test(code)) {
          return { success: false, message: rule.message };
        }
      }
    }
  }

  return { success: true };
};
