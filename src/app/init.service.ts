import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

interface Config {}

@Injectable({
  providedIn: "root",
})
export class InitService {
  config!: Config;

  constructor(private http: HttpClient) {}

  init(): Observable<Config> {
    return this.http.get<Config>("/assets/config.json").pipe(
      tap((config) => {
        this.config = config;
      })
    );
  }
}
