import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hia-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.email === "admin" && this.password === "admin") {
      alert("Login Successful");
    } else {
      alert(`Invalid Credentials ${this.email} ${this.password}`);
    }
  }
}
