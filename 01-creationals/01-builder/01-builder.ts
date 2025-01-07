/*
Builder Pattern
Creational design pattern used to construct complex objects stepe bv step

When to use:
It is util when we need to create an complex object 
with many parts and we want the process of creation to be
independent of the parts that compose the object
*/

//Example:

class Computer {
  public cpu: string = 'CPU not defined'
  public ram: string = 'RAM not defined'
  public storage: string = 'Storage not defined'
  public gpu?: string

  displayConfiguration() {
    console.log(`
      Computer configuration: \n
      CPU: ${this.cpu} \n 
      RAM: ${this.ram} \n
      Storage: ${this.storage} \n
      CPU: ${this.gpu} \n
      `)
  }
}

class ComputerBuilder {
  private computer: Computer

  constructor() {
    this.computer = new Computer()
  }

  setCPU(cpu: string) {
    this.computer.cpu

    return this
  }

  setRAM(ram: string) {
    this.computer.ram

    return this
  }

  setStorage(storage: string) {
    this.computer.storage

    return this
  }

  setGPU(gpu: string) {
    this.computer.gpu

    return this
  }

  build() {
    return this.computer
  }
}
