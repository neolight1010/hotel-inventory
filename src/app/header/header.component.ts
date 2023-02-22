import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../services/config.service";

@Component({
  selector: "hia-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  title: string = "";

  constructor(private configService: ConfigService) {
    this.configService;
  }

  ngOnInit(): void {}
}
