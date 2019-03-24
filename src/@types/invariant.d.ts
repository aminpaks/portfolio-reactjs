// types/invariant.d.ts
declare module 'invariant' {
  interface Invariant {
    (condition: boolean, message: string): never;
  }

  let invariant: Invariant;
  export = invariant;
}
