// Problem 1
const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((num) => num % 2 === 0);
};

// Problem 2
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

// Problem 3
type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): string => {
  if (typeof input === "string") {
    return "String";
  } else if (typeof input === "number") {
    return "Number";
  } else {
    return "Unknown";
  }
};

// Problem 4
function getProperty<User, Key extends keyof User>(
  obj: User,
  key: Key,
): User[Key] {
  return obj[key];
}

// Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return { ...book, isRead: true };
};

// Problem 6
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 7
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((num) => arr2.includes(num));
};

