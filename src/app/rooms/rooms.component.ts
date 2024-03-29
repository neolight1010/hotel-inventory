import { HttpEventType } from "@angular/common/http";
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  SkipSelf,
  ViewChild,
} from "@angular/core";
import { catchError, map, Observable, of, Subject } from "rxjs";
import { HeaderComponent } from "../header/header.component";
import { ConfigService } from "../services/config.service";
import { Room } from "./rooms";
import { RoomsService } from "./services/rooms.service";

@Component({
  selector: "hia-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.scss"],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  hotelName = "Neo Hotel";
  numberOfRooms = 10;

  errorSubject$: Subject<string> = new Subject();
  getError$ = this.errorSubject$.asObservable();

  rooms$: Observable<Room[]> = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      this.errorSubject$.next(`Error getting rooms!: ${err.message}`);

      return of([]);
    })
  );

  roomsCount$: Observable<number> = this.roomsService.getRooms$.pipe(
    map((rooms) => rooms.length)
  );

  roomList: Room[] = [];

  hideRooms = false;

  selectedRoom?: Room;

  stream = new Observable<string>((observer) => {
    observer.next("user1");
    observer.next("user2");
    observer.next("user3");
    observer.complete();
  });

  photoBytesDownloaded: number = 0;

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  constructor(
    @SkipSelf() private roomsService: RoomsService,
    private configService: ConfigService
  ) {
    this.configService;
  }

  ngOnInit(): void {
    this.roomsService.getRooms$.subscribe((rooms) => {
      this.roomList = rooms;
    });

    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log("Request has been made!");
          break;

        case HttpEventType.ResponseHeader:
          console.log("Response header has been received!");
          break;

        case HttpEventType.DownloadProgress:
          this.photoBytesDownloaded += event.loaded;

          console.log(
            `Download in progress! ${this.photoBytesDownloaded} total bytes downloaded.`
          );
          break;

        case HttpEventType.Response:
          console.log("Photo successfully obtained!", event.body);
      }
    });
  }

  ngAfterViewInit(): void {}

  ngAfterViewChecked(): void {
    this.headerComponent.title = "Rooms View";
  }

  ngDoCheck(): void {
    console.log("Some change has happened!");
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
