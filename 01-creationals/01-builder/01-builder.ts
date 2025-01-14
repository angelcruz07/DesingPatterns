/*
Builder Pattern
Creational design pattern used to construct complex objects stepe bv step

When to use:
It is util when we need to create an complex object 
with many parts and we want the process of creation to be
independent of the parts that compose the object
*/

//Example:
import { COLORS } from "../../helpers/colors.ts";

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
      `);
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  // Return the instance of the class ComputerBuilder
  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;

    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram

    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage

    return this
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;

    return this;
  }

  //Method for access the property computer of type private
  build() {
    return this.computer;
  }
}


function main() {
  const basicComputer: Computer = new ComputerBuilder()
    .setCPU("Intel i5 10th gen")
    .setRAM("8GB")
    .setStorage("256GB")
    .build()

  console.log("%cBasic Computer: ", COLORS.purple);
  basicComputer.displayConfiguration();


  const gamingComputer: Computer = new ComputerBuilder()
    .setCPU("Intel i9 13900K")
    .setRAM("32GB")
    .setStorage("1TB")
    .setGPU("NVIDIA RTX 3090 Ti")
    .build()

  console.log("%cGaming Computer: ", COLORS.green);
  gamingComputer.displayConfiguration();

}

main();
