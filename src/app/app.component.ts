import { Component, Optional } from "@angular/core";
import { LoggerService } from "./logger.service";

@Component({
  selector: "hia-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "hotelinventoryapp";

  constructor(@Optional() private loggerService?: LoggerService) {
    this.loggerService?.log("Hello World");
  }
}
