import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  backgroundColor: string = 'white';
  fontColor: string = 'black';
  
  toggleColors(){
    this.backgroundColor = this.backgroundColor === 'white' ? 'pink' : 'white';
    this.fontColor = this.fontColor === 'black' ? 'white' : 'black';
  }
}

