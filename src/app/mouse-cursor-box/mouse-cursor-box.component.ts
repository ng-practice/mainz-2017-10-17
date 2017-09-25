import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-cursor-box',
  templateUrl: './mouse-cursor-box.component.html',
  styleUrls: ['./mouse-cursor-box.component.css']
})
export class MouseCursorBox {
  x: number;
  y: number;

  updateCursorPosition($event: MouseEvent) {
    this.x = $event.clientX;
    this.y = $event.clientY;
  }
}
