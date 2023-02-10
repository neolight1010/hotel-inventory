import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, Observable } from "rxjs";

@Component({
  selector: "hia-room-booking",
  templateUrl: "./room-booking.component.html",
  styleUrls: ["./room-booking.component.scss"],
})
export class RoomBookingComponent implements OnInit {
  roomId$: Observable<number> = this.router.params.pipe(
    map((params) => params["id"])
  );

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {}
}
