import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() collapsible: AppComponent;
  email: String;
  password: String;
  sEmail: String;
  sPassword: String;
  scPassword: String;
  fname: String;
  lname: String;

  viewSignin = false;
  constructor() { }

  ngOnInit() {
  }

}
