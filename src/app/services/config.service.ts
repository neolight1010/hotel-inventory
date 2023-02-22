import { Inject, Injectable } from "@angular/core";
import { RouteConfig } from "./routeConfig";
import { RouteConfigToken } from "./routeConfig.service";

@Injectable({
  providedIn: "any",
})
export class ConfigService {
  constructor(@Inject(RouteConfigToken) private routeConfigToken: RouteConfig) {
    console.log("ConfigService instantiated!");
    console.log(this.routeConfigToken);
  }
}
