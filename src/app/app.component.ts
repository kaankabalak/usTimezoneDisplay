import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = new Date();
  timestring = 'PST';
  isDisplayed = true;
  PST(){
    this.isDisplayed = true;
    console.log(this.timestring);
    if (this.timestring = 'PST') {
      this.date = new Date();
    }
    else if (this.timestring = 'MST') {
      this.date = new Date();
      this.date.setTime(this.date.getTime() - (60 * 60 * 1000));  
    }
    else if (this.timestring = 'CST') {
      this.date = new Date();
      this.date.setTime(this.date.getTime() - (2 * 60 * 60 * 1000));
    }
    else if (this.timestring = 'EST') {
      this.date = new Date();
      this.date.setTime(this.date.getTime() - (3 * 60 * 60 * 1000));
    }
    console.log(this.date);
    this.timestring = 'PST';
  }
  MST(){
    this.isDisplayed = true;
    console.log(this.timestring);
    if (this.timestring = 'PST') {
      this.date = new Date();
      this.date.setTime(this.date.getTime() + (60 * 60 * 1000));  
    }
    else if (this.timestring = 'MST') {
      this.date = new Date();
    }
    else if (this.timestring = 'CST') {
      this.date = new Date();
      this.date.setTime(this.date.getTime() - (60 * 60 * 1000));
    }
    else if (this.timestring = 'EST') {
      this.date = new Date();
      this.date.setTime(this.date.getTime() - (2 * 60 * 60 * 1000));
    }
    console.log(this.date);
    this.timestring = 'MST';
  }
  CST(){
    this.isDisplayed = true;
    console.log(this.timestring);
    if (this.timestring = 'PST') {
      this.date = new Date();
      this.date.setTime(this.date.getTime() + (2 * 60 * 60 * 1000)); 
    }
    else if (this.timestring = 'MST') {
      this.date = new Date();
      this.date.setTime(this.date.getTime() + (60 * 60 * 1000));  
    }
    else if (this.timestring = 'CST') {
      this.date = new Date();
    }
    else if (this.timestring = 'EST') {
      this.date = new Date();
      this.date.setTime(this.date.getTime() - (60 * 60 * 1000));
    }
    console.log(this.date);
    this.timestring = 'CST';
  }
  EST(){
    this.isDisplayed = true;
    console.log(this.timestring);
    if (this.timestring = 'PST') {
      this.date = new Date();
      this.date.setTime(this.date.getTime() + (3 * 60 * 60 * 1000));     
    }
    else if (this.timestring = 'MST') {
      this.date = new Date();
      this.date.setTime(this.date.getTime() + (2 * 60 * 60 * 1000));  
    }
    else if (this.timestring = 'CST') {
      this.date = new Date();
      this.date.setTime(this.date.getTime() + (60 * 60 * 1000));
    }
    else if (this.timestring = 'EST') {
      this.date = new Date();
    }
    console.log(this.date);
    this.timestring = 'EST';
  }
  clear(){
    this.isDisplayed = false;
    console.log('clear');
    this.timestring = 'PST';
  }
}
