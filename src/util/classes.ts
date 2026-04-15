export function clsList(...classes: (string | null)[]): string[] {
  return classes.filter((v) => v != null);
}
