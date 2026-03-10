import { ValidationRule } from "@/data/curriculum";

export function validateHtml(htmlString: string, rules: ValidationRule[]): { success: boolean, message?: string } {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');

        for (const rule of rules) {
            if (rule.type === 'element_exists') {
                const element = doc.querySelector(rule.target);
                if (!element) {
                    return { success: false, message: rule.message };
                }
            } else if (rule.type === 'text_contains') {
                const elements = doc.querySelectorAll(rule.target);
                let found = false;
                for (let i = 0; i < elements.length; i++) {
                    if (elements[i].textContent?.includes(rule.value || '')) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    return { success: false, message: rule.message };
                }
            }
        }

        return { success: true };
    } catch {
         return { success: false, message: "Kode HTML tidak valid." };
    }
}

export function validatePython(codeString: string, rules: ValidationRule[]): { success: boolean, message?: string, simulatedOutput?: string } {
    for (const rule of rules) {
        if (rule.type === 'python_logic') {
            const printRegex = /print\s*\(\s*['"](.*?)['"]\s*\)/g;
            let match;
            let found = false;
            let simulatedOutput = "";

            while ((match = printRegex.exec(codeString)) !== null) {
                if (match[1] === rule.value) {
                    found = true;
                    simulatedOutput += match[1] + "\\n";
                }
            }
            if (!found) {
                return { success: false, message: rule.message, simulatedOutput: codeString ? "Error: Syntax tidak dikenali atau salah teks." : "" };
            }

            return { success: true, simulatedOutput };
        }
    }
    return { success: true };
}