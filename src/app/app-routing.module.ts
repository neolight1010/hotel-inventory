import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeComponent } from "./employee/employee.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import {RoomAddComponent} from "./room-add/room-add.component";
import {RoomBookingComponent} from "./room-booking/room-booking.component";
import { RoomsComponent } from "./rooms/rooms.component";

const routes: Routes = [
  {
    path: "employee",
    component: EmployeeComponent,
  },
  { path: "rooms", component: RoomsComponent },
  { path: "rooms/add", component: RoomAddComponent },
  { path: "rooms/:id", component: RoomBookingComponent },
  { path: "", redirectTo: "/rooms", pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
