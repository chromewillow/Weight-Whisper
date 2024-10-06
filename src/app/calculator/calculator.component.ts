import { Component } from '@angular/core'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  truckWeight: number = 0
  trailerWeight: number = 0
  cargoWeight: number = 0
  axlePosition: number = 50 // Default to middle position (0-100)

  calculateWeightDistribution() {
    const totalWeight = this.truckWeight + this.trailerWeight + this.cargoWeight
    const frontAxleWeight = totalWeight * (1 - this.axlePosition / 100)
    const rearAxleWeight = totalWeight * (this.axlePosition / 100)

    return {
      frontAxleWeight: Math.round(frontAxleWeight),
      rearAxleWeight: Math.round(rearAxleWeight),
      totalWeight: Math.round(totalWeight)
    }
  }

  get weightDistribution() {
    return this.calculateWeightDistribution()
  }

  isLegal(): boolean {
    const { frontAxleWeight, rearAxleWeight } = this.weightDistribution
    // Example legal limits (adjust based on actual regulations)
    const frontAxleLimit = 12000 // 12,000 lbs
    const rearAxleLimit = 34000 // 34,000 lbs

    return frontAxleWeight <= frontAxleLimit && rearAxleWeight <= rearAxleLimit
  }
}