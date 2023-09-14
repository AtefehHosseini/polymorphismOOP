# polymorphismOOP
Polymorphism Principle in OOP Practice- Dublin Transportation
# Polymorphism Principle of OOP Practice

Welcome to my GitHub repository! Here, I explore and practice the Polymorphism principle in Object-Oriented Programming (OOP) using JavaScript. This project serves as a hands-on demonstration of how polymorphism allows different classes to share a common interface while providing their own unique implementations.
.
## About This Project

In this project, I've created a simple example using JavaScript classes to illustrate the concept of polymorphism. We have a base class called `Transportation`, and two subclasses, `LoasTransportation` and `BusTransportation`, that inherit from it.

- `Transportation`: The base class with a method `transportInDublin` that provides a generic message about transportation in Dublin.
- `LoasTransportation`: A subclass that overrides the `transportInDublin` method to add specific information about Loas Transportation in Dublin.
- `BusTransportation`: Another subclass that also overrides the `transportInDublin` method to provide information about bus transportation in Dublin.

## How It Works

Here's a quick overview of the code:

```javascript
class Transportation {
    transportInDublin() {
        console.log("There are different Transportation facilities in Dublin");
    }
}

class LoasTransportation extends Transportation {
    transportInDublin() {
        super.transportInDublin();
        console.log("1. Loas Trans are one of them");
    }
}

class BusTransportation extends Transportation {
    transportInDublin() {
        console.log("2. Also, buses are accessible in the city to facilitate transportation");
    }
}

const redLineLoas = new LoasTransportation();
const yellowBus = new BusTransportation();

redLineLoas.transportInDublin();
yellowBus.transportInDublin();
