import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeComponent } from "./employee/employee.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: "employee",
    component: EmployeeComponent,
  },

  { path: "login", component: LoginComponent },
  {
    path: "rooms",
    loadChildren: () => import("./rooms.module").then((m) => m.RoomsModule),
  },

  { path: "", redirectTo: "/rooms", pathMatch: "full" },
  {
    path: "booking",
    loadChildren: () =>
      import("./booking/booking.module").then((m) => m.BookingModule),
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
