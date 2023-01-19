import { Inject, Injectable } from "@angular/core";
import { Room } from "../rooms";
import { AppConfigService } from "../../app-config/app-config.service";
import { AppConfig } from "../../app-config/app-config.interface";
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
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
  }

  deleteRoom(roomNumber: string): Observable<Room[]> {
    return this.http.delete<Room[]>(`/api/rooms/${roomNumber}`);
  }

  getPhotos(): Observable<HttpEvent<Photo>> {
    const request = new HttpRequest(
      "GET",
      "http://jsonplaceholder.typicode.com/photos",
      {
        reportProgress: true,
      }
    );

    return this.http.request(request);
  }
}

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
