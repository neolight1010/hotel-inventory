import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  isLoggedIn = false;
  isAdmin = false;

  constructor() {}

  login(email: string, password: string): boolean {
    if (email === "admin" && password === "admin") {
      this.isLoggedIn = true;
      this.isAdmin = true;
    } else if (email === "user" && password === "user") {
      this.isLoggedIn = true;
    }

    return this.isLoggedIn;
  }
}
