import { Component } from '@angular/core';
import { TitleBus } from './core/title.bus';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Don't forget to provide TitleBus inside app.module
  constructor(titleService: Title, bus: TitleBus) {
    bus.title().subscribe(title => titleService.setTitle(title));
  }

  showGreeting(message: string) {
    window.confirm(message);
  }
}
