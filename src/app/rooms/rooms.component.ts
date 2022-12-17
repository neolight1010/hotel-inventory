import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { Room, Rooms } from "./rooms";

@Component({
  selector: "hia-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  hotelName = "Neo Hotel";
  numberOfRooms = 10;

  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: Room[] = [];

  hideRooms = false;

  selectedRoom?: Room;

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

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

  ngAfterViewInit(): void {}

  ngAfterViewChecked(): void {
    this.headerComponent.title = "Rooms View";
  }

  addRoom(): void {
    const room: Room = {
      amenities: "My Amenities",
      checkInTime: new Date(),
      checkOutTime: new Date(),
      photo: "No photo",
      price: 50,
      rating: 5,
      roomNumber: 6,
      roomType: "Simple room room",
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }

  selectRoom(room: Room): void {
    this.selectedRoom = room;
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
