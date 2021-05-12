import { VisitorInterface } from './VisitorInterface'

export class Visitor implements VisitorInterface {
  count: number
  age: number
  gender: string

  constructor(count: number, age: number, gender: string) {
    this.count = count
    this.age = age
    this.gender = gender
  }
}
