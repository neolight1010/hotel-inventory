import { Inject, Injectable } from "@angular/core";
import { Room } from "../rooms";
import { AppConfigService } from "../../app-config/app-config.service";
import { AppConfig } from "../../app-config/app-config.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RoomsService {
  // private rooms: Room[] = [];

  constructor(
    @Inject(AppConfigService) private appConfig: AppConfig,
    private http: HttpClient
  ) {
    console.log("API URL: ", this.appConfig.apiUrl);

    // this.getRooms().subscribe((rooms) => (this.rooms = rooms));
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>("/api/rooms");
  }

  /**
   * Add a new rooms and returns the updated list of rooms.
   */
  addRoom(room: Room): Observable<Room[]> {
    return this.http.post<Room[]>("/api/rooms", room);
  }

  updateRoom(roomData: Room): Observable<Room[]> {
    return this.http.put<Room[]>(`/api/rooms/${roomData.roomNumber}`, roomData);

    // const updatedRooms = this.rooms.map((room) => {
    //   if (room.roomNumber === roomNumber) {
    //     return roomData;
    //   }

    //   return room;
    // });

    // return new Observable((observer) => {
    //   observer.next(updatedRooms);
    //   observer.complete();
    // });
  }
}
