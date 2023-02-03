import { Component, Inject, OnInit, Optional } from "@angular/core";
import { LocalStorageToken } from "../local-storage.token";
import {InitService} from "./init.service";
import { LoggerService } from "./logger.service";

@Component({
  selector: "hia-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "hotelinventoryapp";

  constructor(
    private initService: InitService,
    @Inject(LocalStorageToken) private localStorage: Storage,
    @Optional() private loggerService?: LoggerService,
  ) {
    this.loggerService?.log("Hello World");

    console.log("Config: ", this.initService.config)
  }

  ngOnInit(): void {
    this.localStorage.setItem("hotelName", "Hilton Hotel");
  }
}
