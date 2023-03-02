import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-changer-number',
  templateUrl: './changer-number.component.html',
  styleUrls: ['./changer-number.component.css'],
})
export class ChangerNumberComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.changeNumber.emit();
  }
}
