/*
  4 - Pick
  -------
  by Anthony Fu (@antfu) #easy #union #built-in

  ### Question

  Implement the built-in `Pick<T, K>` generic without using it.

  Constructs a type by picking the set of properties `K` from `T`

  For example:

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }
  ```

  > View on GitHub: https://tsch.js.org/4
*/

/* _____________ Your Code Here _____________ */

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4/answer
  > View solutions: https://tsch.js.org/4/solutions
  > More Challenges: https://tsch.js.org
*/

/**
 * My understanding
 * keyof - The keyof operator takes an object type and produces a string or numeric literal union of its keys.
 * in: take the value of the union type, mainly used for the construction of arrays and objects
 */

type User = {
  name: string
  age: number
}

type AttributeOfUser = keyof User // "name" | "age"

function getUserAttributeValue(user: User, attribute: AttributeOfUser) {
  return user[attribute]
}

console.log(getUserAttributeValue({ name: 'John', age: 3 }, 'age'))

type CountryAttributes = 'name' | 'language'

type Country = {
  [key in CountryAttributes]: string
}

const India: Country = {
  name: 'India',
  language: 'Hindi, English',
}
