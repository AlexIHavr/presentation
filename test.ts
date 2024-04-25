//Array is a generic
const names: Array<string> = [];

function createTuple<T1, T2>(value1: T1, value2: T2): [T1, T2] {
  return [value1, value2];
}
createTuple('hello', 42); 

//generic in conditional type 
type GenericOf<T> = T extends string ? 'test' : never;