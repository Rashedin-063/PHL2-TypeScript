/**
 * ### Task 10: Nullish Coalescing

**Objective**: Handle null and undefined values using nullish coalescing.

**Instructions**:

- Write a function `getDisplayName(name: string | null | undefined): string` that returns `"Anonymous"` if `name` is null or undefined.
 */

function getDisplayName(name: string | null | undefined): string{
 return  name ?? 'Anonymous';
  return name === null ? 'Anonymous' : `The name is ${name}`
}

console.log(getDisplayName(null))
console.log(getDisplayName(undefined))
console.log(getDisplayName('Sraboni'))

