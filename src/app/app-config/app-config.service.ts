import { InjectionToken } from "@angular/core";
import { AppConfig } from "./app-config.interface";
import { environment } from "../../environments/environment";

export const AppConfigService = new InjectionToken<AppConfig>("app.config");

export const APP_CONFIG: AppConfig = {
  apiUrl: environment.apiUrl,
};
