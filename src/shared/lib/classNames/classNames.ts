type Mods = Record<string, string | boolean | undefined>;
type Additional = Array<string | undefined>;

export function classNames(cls: string, mods: Mods = {}, additional: Additional = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ]
    .join(" ")
    .trim();
}
