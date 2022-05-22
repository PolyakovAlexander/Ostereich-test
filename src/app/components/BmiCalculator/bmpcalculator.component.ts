import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'bmp-calculator',
  templateUrl: './bmpcalculator.component.html',
  styleUrls: ['./bmpcalculator.component.scss'],
})
export class BmpCalculator {
  @ViewChild('bmiInput') bmiInput!: ElementRef;

  @Input()
  settings!: Array<{
    title: string;
    width: number;
    points: number;
    defaultColor: string;
    activeColor: string;
  }>;

  public petBMI: string = '';
  public petBMINumber!: number;
  constructor() {}

  public bmiChanged(): void {
    let maxPoints = 0;
    this.settings
      ? this.settings.forEach((item) => (maxPoints += item.points))
      : 0;

    this.bmiInput.nativeElement.value.replace('^[1-9][0-9]?$|^120$');
    const currentBMI = Number(this.petBMI);
    if (this.bmiInput.nativeElement.value > maxPoints) {
      this.bmiInput.nativeElement.value = maxPoints;
      this.petBMINumber = 100;
    }
    if (this.bmiInput.nativeElement.value < 0) {
      this.bmiInput.nativeElement.value = 0;
      this.petBMINumber = 0;
    }

    let currentWidth = 0;
    let nextStepPoints = 0;
    let currentStepPoints = 0;

    for (let i = 0; nextStepPoints < currentBMI; i++) {
      nextStepPoints += this.settings[i].points;
      if (nextStepPoints >= currentBMI) {
        currentWidth =
          currentWidth +
          (currentBMI - currentStepPoints) *
            (this.settings[i].width / this.settings[i].points);
        this.petBMINumber = currentWidth;
        break;
      }
      currentStepPoints += this.settings[i].points;
      currentWidth += this.settings[i].width;
    }
  }
}
