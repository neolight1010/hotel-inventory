import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoomAddComponent } from "./room-add/room-add.component";
import { RoomBookingComponent } from "./room-booking/room-booking.component";
import {RoomGuard} from "./rooms/guards/room.guard";
import { RoomsComponent } from "./rooms/rooms.component";

const routes: Routes = [
  {
    path: "",
    component: RoomsComponent,
    canActivateChild: [RoomGuard],
    children: [
      { path: "add", component: RoomAddComponent },
      { path: ":id", component: RoomBookingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
