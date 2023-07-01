type Argument =
  | Record<string, boolean>
  | Array<string | number | undefined>
  | string
  | number
  | undefined;

function classNames(...args: Argument[]): string {
  const classes: string[] = [];

  for (const arg of args) {
    if (!arg) continue;

    if (typeof arg === "number") {
      classes.push(String(arg));
    } else if (typeof arg === "string") {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      const inner = classNames(...arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (typeof arg === "object" && !Array.isArray(arg)) {
      for (const key in arg) {
        if (arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(" ");
}

export default classNames;
