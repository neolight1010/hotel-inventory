import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RoomsRoutingModule } from "./rooms-routing.module";
import { RoomAddComponent } from "./room-add/room-add.component";
import { RoomBookingComponent } from "./room-booking/room-booking.component";
import { RoomsTableComponent } from "./rooms/rooms-table/rooms-table.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { FormsModule } from "@angular/forms";
import { HeaderModule } from "./header.module";
import { RouteConfigToken } from "./services/routeConfig.service";

@NgModule({
  declarations: [
    RoomsComponent,
    RoomsTableComponent,
    RoomBookingComponent,
    RoomAddComponent,
  ],
  imports: [CommonModule, FormsModule, HeaderModule, RoomsRoutingModule],
  providers: [
    {
      provide: RouteConfigToken,
      useValue: { title: "Room" },
    },
  ],
})
export class RoomsModule {}
