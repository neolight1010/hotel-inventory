import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnInit,
  SkipSelf,
  ViewChild,
} from "@angular/core";
import { Observable } from "rxjs";
import { HeaderComponent } from "../header/header.component";
import { Room, Rooms } from "./rooms";
import { RoomsService } from "./services/rooms.service";

@Component({
  selector: "hia-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  // 8: 28: 47
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

  stream = new Observable<string>((observer) => {
    observer.next("user1");
    observer.next("user2");
    observer.next("user3");
    observer.complete();
  });

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  constructor(@SkipSelf() private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.roomsService.getRooms().subscribe((rooms) => {
      this.roomList = rooms;
    });

    this.stream.subscribe({
      next: (data) => console.log(data),
      complete: () => console.log("complete"),
    });
  }

  ngAfterViewInit(): void {}

  ngAfterViewChecked(): void {
    this.headerComponent.title = "Rooms View";
  }

  ngDoCheck(): void {
    console.log("Some change has happened!");
  }

  addRoom(): void {
    const room: Room = {
      amenities: "My Amenities",
      checkInTime: new Date(),
      checkOutTime: new Date(),
      photo: "No photo",
      price: 50,
      rating: 5,
      roomNumber: "6",
      roomType: "Simple room room",
    };

    this.roomsService.addRoom(room).subscribe((allRooms) => {
      this.roomList = allRooms;
    });
  }

  updateRoom(): void {
    this.roomsService
      .updateRoom({
        roomNumber: this.roomList[this.roomList.length - 1].roomNumber,
        roomType: "Updated room type",
        amenities: "Updated amenities",
        checkInTime: new Date(),
        checkOutTime: new Date(),
        photo: "Updated photo",
        price: 100,
        rating: 5,
      })
      .subscribe((allRooms) => {
        this.roomList = allRooms;
      });
  }

  selectRoom(room: Room): void {
    this.selectedRoom = room;
  }

  deleteRoom() {
    this.roomsService
      .deleteRoom(this.roomList[0].roomNumber)
      .subscribe((rooms) => (this.roomList = rooms));
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
