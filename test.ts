// Partial changes all the properties
// in an object to be optional
type Point = {
  x: number;
  y: number;
};
const pointPartial: Partial<Point> = {};
//equals
type PointPartial = {
  x?: number;
  y?: number;
};

// Required changes all the properties
// in an object to be required
type Car = {
  model: string;
  speed?: number;
};
let myCar: Required<Car> = {
  model: 'BMW',
  speed: 10,
};
//equals
type RequiredCar = {
  model: string;
  speed: number;
};

// Record is a shortcut to defining an object type
// with a specific key type and value type
const names: Record<string, number> = {
  Alice: 21,
  Bob: 25,
};

//Omit removes keys from an object type.
type Person = {
  name: string;
  age: number;
  place: string;
};
const bob: Omit<Person, 'age' | 'place'> = {
  name: 'Bob',
};

//Pick removes all but the specified keys
//from an object type.
type Person = {
  name: string;
  age: number;
  place?: string;
};
const bob: Pick<Person, 'name'> = {
  name: 'Bob',
};
