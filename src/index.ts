//Basic Types
let id: number = 5
let company: string = 'CK'
let isValid: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, 2, 'ck', false]

//Tuple
let person: [number, string, boolean] = [1, 'ck', true]
//Tuple Array
let employee: [number, string][]

employee = [
  [1, 'CK'],
  [2, 'AA'],
]

//Union
let pid: string | number
pid = '5'

//Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

//Objects
type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'CK',
}

//Type Assertion
let cid: any = 1
//1
let customerId = <number>cid
//2
let customerID = cid as number

//Functions

function addNum(x: number, y: number): number {
  return x + y
}

//Void
function log(message: string | number): void {
  console.log(message)
}
//Interfaces
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const newUser: UserInterface = {
  id: 1,
  name: 'CK',
}

//Optional = ?  && readonly

//Interface with function

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

//Classes
// public private protected
//Classes with interface

interface PersonInterface {
  id: number
  name: string
  register(): string
}

class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register(): string {
    return `${this.name} is registered`
  }
}
const ck = new Person(11, 'CK')
console.log(ck.register())

//Subclass

class Employee extends Person {
  position: string
  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}
const newEmp = new Employee(111, 'CKE', 'Dev')
console.log(newEmp.register())

//Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}
let numArray = getArray<number>([1, 2, 3, 4, 5])
let strArray = getArray<string>(['sdfsdf', 'sdfsdf', 'sdfsdf'])

strArray.push('dfgdf')
