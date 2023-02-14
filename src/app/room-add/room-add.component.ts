import { Component, OnInit } from "@angular/core";
import {Observable, Subject} from "rxjs";
import { Room } from "../rooms/rooms";
import {RoomsService} from "../rooms/services/rooms.service";

@Component({
  selector: "hia-room-add",
  templateUrl: "./room-add.component.html",
  styleUrls: ["./room-add.component.scss"],
})
export class RoomAddComponent implements OnInit {
  room: Room = {
    roomType: "",
    amenities: "",
    checkInTime: new Date(),
    checkOutTime: new Date(),
    photo: "",
    price: 0,
    rating: 0,
    roomNumber: "",
  };

  private successSubject: Subject<boolean> = new Subject();
  success$: Observable<boolean> = this.successSubject.asObservable();

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {}

  addRoom(): void {
    this.roomsService.addRoom(this.room).subscribe(() => {
      this.successSubject.next(true);
    });
  }
}
