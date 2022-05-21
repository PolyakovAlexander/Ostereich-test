import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'ostereich-proj';
  public petBMI: string = '50';
  public petBMINumber!: number;
  public isActive = false;
  public activeRank!: string;

  constructor() {
  }

  public bmiChanged(): void {
    this.petBMINumber = Number(this.petBMI);
    switch (true) {
      case ( this.petBMINumber < 30 || this.petBMINumber === 30 ) : {
        this.petBMINumber = this.petBMINumber * 1.111;
        this.isActive = true;
        this.activeRank = 'underweight';
        break;
      }
      case ( this.petBMINumber === 31 || this.petBMINumber < 90 || this.petBMINumber === 90 ) : {
        this.petBMINumber = 33.33 + (this.petBMINumber - 30) * 0.5555;
        this.isActive = true;
        this.activeRank = 'normal';
        break;
      }
      case ( this.petBMINumber > 90) : {
        this.petBMINumber = 66.66 + (this.petBMINumber - 90) * 1.111;
        this.isActive = true;
        this.activeRank = 'overweight';
        break;
      }
    }
  }
}
