import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: string = '';
  height: string = '';
  miles: string = '';

  onNameChanged(newName: Event) {
    const target = newName.target as HTMLInputElement;
    this.name = target.value;
  }

  onDateChanged(newDate: Event) {
    const target = newDate.target as HTMLInputElement;
    this.date = target.value;
  }

  onAmountChanged(newAmount: Event) {
    const target = newAmount.target as HTMLInputElement;
    this.amount = target.value;
  }

  onHeightChanged(newHeight: Event) {
    const target = newHeight.target as HTMLInputElement;
    this.height = target.value;
  }

  onMilesChanged(newMiles: Event) {
    const target = newMiles.target as HTMLInputElement;
    this.miles = target.value;
  }
}
