import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RoomsTableComponent } from "./rooms/rooms-table/rooms-table.component";
import { HeaderComponent } from "./header/header.component";
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";
import { APP_CONFIG, AppConfigService } from "./app-config/app-config.service";

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsTableComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: AppConfigService,
      useValue: APP_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
