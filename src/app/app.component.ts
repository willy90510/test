import { Component , OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  showArea = 0;
  


  onClick(number: number) {
    switch (number) {
      case 1:
        this.showArea = 1;
        break;
      case 2:
        this.showArea = 2;
        break;
      case 3:
        this.showArea = 3;
        break;
      default:
        this.showArea = 0;
        break;
    }
  }
}
