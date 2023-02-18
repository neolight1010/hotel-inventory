import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'hia-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.email === "admin" && this.password === "admin") {
      this.router.navigateByUrl("/rooms/add");
    } else {
      alert(`Invalid Credentials ${this.email} ${this.password}`);
    }
  }
}
