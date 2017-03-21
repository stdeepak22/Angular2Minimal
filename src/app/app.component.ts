import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{userName}}</h1>
  Type your name here - <input type='text' [(ngModel)]='userName' />
  `
  ,
})
export class AppComponent  { userName = 'User'; }
