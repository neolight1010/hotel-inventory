import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RoomsTableComponent } from "./rooms/rooms-table/rooms-table.component";

@NgModule({
  declarations: [AppComponent, RoomsComponent, RoomsTableComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
