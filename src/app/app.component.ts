import { Component, Inject, OnInit, Optional } from "@angular/core";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";
import { filter } from "rxjs";
import { LocalStorageToken } from "../local-storage.token";
import { InitService } from "./init.service";
import { LoggerService } from "./logger.service";
import { ConfigService } from "./services/config.service";

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
    private configService: ConfigService,
    private router: Router,
    @Optional() private loggerService?: LoggerService
  ) {
    this.loggerService?.log("Hello World");
    this.configService;

    console.log("Config: ", this.initService.config);
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        console.log("Navigation Started", event);
      });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log("Navigation Completed", event);
      });

    this.localStorage.setItem("hotelName", "Hilton Hotel");
  }
}
