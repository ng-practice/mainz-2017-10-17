import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBox {
  @Input() title: string;
  @Output() titleClicked = new EventEmitter<string>();

  triggerGreet() {
    this.titleClicked.emit('Hey there! I wish you a pleasent and sunny day.');
  }
}
