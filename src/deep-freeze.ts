export type DeepReadonly<T> = T extends (...args: never[]) => unknown
  ? T
  : T extends readonly unknown[]
    ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
    : T extends object
      ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
      : T;

export function deepFreeze<T extends object>(value: T): DeepReadonly<T> {
  Object.freeze(value);

  Object.values(value).forEach((property) => {
    if (property && typeof property === 'object' && !Object.isFrozen(property)) {
      deepFreeze(property as Record<PropertyKey, unknown>);
    }
  });

  return value as DeepReadonly<T>;
}
