import { Component, OnInit } from "@angular/core";
import { Room, Rooms } from "./rooms";

@Component({
  selector: "hia-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.scss"],
})
export class RoomsComponent implements OnInit {
  hotelName = "Neo Hotel";
  numberOfRooms = 10;

  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: Room[] = [];

  hideRooms = false;

  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: "Deluxe Room",
        amenities: "Air Conditioner, Free Wi-Fi, TV, Kitchen",
        price: 500,
        photo: "",
        rating: 4.9,
        checkInTime: new Date("11/10/2022"),
        checkOutTime: new Date("11/14/2022"),
      },
      {
        roomNumber: 2,
        roomType: "Regular Room",
        amenities: "TV",
        price: 200,
        photo: "",
        rating: 3.5,
        checkInTime: new Date("11/9/2022"),
        checkOutTime: new Date("11/11/2022"),
      },
      {
        roomNumber: 3,
        roomType: "Cheap room",
        amenities: "Nothing",
        price: 100,
        photo: "",
        rating: 2,
        checkInTime: new Date("11/8/2022"),
        checkOutTime: new Date("11/13/2022"),
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
