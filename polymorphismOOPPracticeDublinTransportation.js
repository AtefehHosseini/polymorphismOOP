//Polymorphism Principle of OOP Practice

class Transportation{
    transportInDublin(){
        console.log("There are different Transportation facility in Dublin")
    }

}

class loasTransportation extends Transportation{
        
    transportInDublin(){
        super.transportInDublin()
        console.log("1. Loas Trans are one of them")
    }
}

class busTransportation extends Transportation{

    transportInDublin(){
        console.log("2. Also, buses are accessible in the city to facilate transportation")
    }
}

const redLineLoas= new loasTransportation()
const yellowBus = new busTransportation()

redLineLoas.transportInDublin()
yellowBus.transportInDublin()