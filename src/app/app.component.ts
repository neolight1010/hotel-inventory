import { Component, Inject, OnInit, Optional } from "@angular/core";
import { LocalStorageToken } from "../local-storage.token";
import { LoggerService } from "./logger.service";

@Component({
  selector: "hia-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "hotelinventoryapp";

  constructor(
    @Inject(LocalStorageToken) private localStorage: Storage,
    @Optional() private loggerService?: LoggerService
  ) {
    this.loggerService?.log("Hello World");
  }

  ngOnInit(): void {
    this.localStorage.setItem("hotelName", "Hilton Hotel");
  }
}
