import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("bmiInput") bmiInput!: ElementRef;

  public title = 'Ostereich-proj';
  public petBMI: string = '';
  public petBMINumber!: number;
  public isActive = false;
  public activeRank!: string;
  public min = 0;
  public max = 120;

  constructor() {
  }

  public bmiChanged(): void {
    this.bmiInput.nativeElement.value.replace('^[1-9][0-9]?$|^120$');
    this.petBMINumber = Number(this.petBMI);
    if (this.bmiInput.nativeElement.value > this.max) {
      this.bmiInput.nativeElement.value = this.max;
      this.petBMINumber = this.bmiInput.nativeElement.value;
    }
    if (this.bmiInput.nativeElement.value < this.min) {
      this.bmiInput.nativeElement.value = this.min;
      this.petBMINumber = this.bmiInput.nativeElement.value;
    }
    switch (true) {
      case (this.petBMINumber < 30 || this.petBMINumber === 30) : {
        this.petBMINumber = this.petBMINumber * 1.111;
        this.isActive = true;
        this.activeRank = 'underweight';
        break;
      }
      case (this.petBMINumber === 31 || this.petBMINumber < 90 || this.petBMINumber === 90) : {
        this.petBMINumber = 33.33 + (this.petBMINumber - 30) * 0.555;
        this.isActive = true;
        this.activeRank = 'normal';
        break;
      }
      case (this.petBMINumber > 90) : {
        this.petBMINumber = 66.66 + (this.petBMINumber - 90) * 1.111;
        this.isActive = true;
        this.activeRank = 'overweight';
        break;
      }
    }
  }
}
