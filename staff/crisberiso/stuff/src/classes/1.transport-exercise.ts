abstract class Vehicle {
  constructor(public chargeWeight: number, public distanceToTravel: number) { }
  
  calculateFuel(chargeWeight:number, distanceToTravel: number, transportBaseConsume: number): number {
    const chargeFactor: number = 1 + (chargeWeight * 0.02)
    const adjustedConsumePer100km: number = transportBaseConsume * chargeFactor
    const totalFuelNeeded: number = (adjustedConsumePer100km / 100 * distanceToTravel)
    return totalFuelNeeded 
  }

  abstract showDetails (): void
}

interface IRefrigerated {
  keepTemperature(tempertature: number): void
}

interface IDangerous {
  verifySecurity(): void
}

class Truck extends Vehicle {
  constructor (public chargeWeight: number, public distanceToTravel: number) {
    super(chargeWeight, distanceToTravel)
  }

  showDetails(): object {
    return {
      "Charge weight": this.chargeWeight,
      "Distance to travel": this.distanceToTravel,
      "Fuel needed": this.calculateFuel(this.chargeWeight, this.distanceToTravel, 30)
    }
  }
}

class RefrigeratedTruck extends Vehicle implements IRefrigerated {
  constructor (public chargeWeight: number, public distanceToTravel: number) {
    super(chargeWeight, distanceToTravel)
  }

  keepTemperature(temperature: number): string {
    return (`The temperature is keeping on ${temperature}`)
  }

  showDetails(): object {
    return {
      "Charge weight": this.chargeWeight,
      "Distance to travel": this.distanceToTravel,
      "Fuel needed": this.calculateFuel(this.chargeWeight, this.distanceToTravel, 30),
      "Observations": this.keepTemperature(-10)
    }  
  }
}

class DangerousTruck extends Vehicle implements IDangerous {
  constructor (public chargeWeight: number, public distanceToTravel: number) {
    super(chargeWeight, distanceToTravel)
  }

  verifySecurity(): string {
     return (`Everything is secure`)
  }

  showDetails(): object { 
    return {
      "Charge weight": this.chargeWeight,
      "Distance to travel": this.distanceToTravel,
      "Fuel needed": this.calculateFuel(this.chargeWeight, this.distanceToTravel, 30),
      "Observations": this.verifySecurity()
    }  
  }
  
}

const pepeTruck = new Truck(2000, 500)
console.log(pepeTruck.showDetails())

const fridgeTruck = new RefrigeratedTruck(2000, 400)
console.log(fridgeTruck.showDetails())

const monsterTruck = new DangerousTruck(2000, 600)
console.log(monsterTruck.showDetails())