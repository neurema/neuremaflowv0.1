export type ClassValue = string | number | false | null | undefined;

type ClassArray = Array<ClassValue | ClassDictionary | ClassArray>;

type ClassDictionary = Record<string, boolean | undefined>;

function toClassName(value: ClassValue | ClassDictionary | ClassArray): string {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(toClassName).filter(Boolean).join(" ");
  }

  if (value && typeof value === "object") {
    return Object.entries(value)
      .filter(([, condition]) => Boolean(condition))
      .map(([className]) => className)
      .join(" ");
  }

  return "";
}

export function cn(...inputs: ClassArray): string {
  return inputs.map(toClassName).filter(Boolean).join(" ");
}
