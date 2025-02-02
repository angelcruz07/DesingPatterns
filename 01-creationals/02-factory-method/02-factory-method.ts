/*
 * Factory Method
 * Creational pattern used to define a interface for creating an object
 * in a superclass, but allows subclasses to alter the type of objects
 * that will be created.
 */

import { COLORS } from "../../helpers/colors.ts";

interface Hamburger {
  prepare(): void;
}

class ChickenHamburger implements Hamburger {

  prepare(): void {
    console.log('Preparing hamburger %cChicken', COLORS.yellow)
  }

}


class BeefHamburger implements Hamburger {

  prepare(): void {
    console.log('Preparing hamburger %cBeef', COLORS.brown)
  }

}

class BeanHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparing hamburger %cBean', COLORS.green)
  }

}

abstract class Restaurant {
  protected abstract createHamburger(): Hamburger;

  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }

}

class ChickenRestaurant extends Restaurant {

  override createHamburger(): Hamburger {
    return new ChickenHamburger();
  }

}


class BeefRestaurant extends Restaurant {

  override createHamburger(): Hamburger {
    return new BeefHamburger();
  }
}

class BeanRestaurant extends Restaurant {

  override createHamburger(): Hamburger {
    return new BeanHamburger();
  }

}


function main() {
  let restaurant: Restaurant

  const burgerType = prompt("Which hamburger do you want ( chicken/beef/bean )");


  switch (burgerType) {
    case "chicken":
      restaurant = new ChickenRestaurant();
      break;
    case "beef":
      restaurant = new BeefRestaurant();
      break;
    case "bean":
      restaurant = new BeanRestaurant();
      break;
    default:
      throw new Error("Invalid Hamburget Type");
  }

  restaurant.orderHamburger();
}

main()
