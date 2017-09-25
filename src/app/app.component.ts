import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {TitleBox} from "./title-box/title-box.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  @ViewChild(TitleBox) titleBox: TitleBox;

  ngAfterViewInit() {
    this.titleBox.title = 'Modifizierter Titel';
  }
}
