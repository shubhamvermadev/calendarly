type ClassValue = string | number | boolean | null | undefined;

type ClassNameInput = ClassValue | Record<string, boolean> | ClassValue[];

export function cn(...args: ClassNameInput[]): string {
  return args
    .flatMap(arg => {
      if (!arg) return [];
      if (typeof arg === "string" || typeof arg === "number") return [arg];
      if (Array.isArray(arg)) return cn(...arg).split(" ");
      return Object.entries(arg)
        .filter(([_, value]) => value)
        .map(([key]) => key);
    })
    .filter(Boolean)
    .join(" ");
}

// Example usage
// cn("btn", "primary", { active: true, disabled: false }, ["extra-class", "another"])
// Output: "btn primary active extra-class another"
