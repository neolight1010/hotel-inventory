import { Inject, Injectable } from "@angular/core";
import { Room } from "../rooms";
import { AppConfigService } from "../../app-config/app-config.service";
import { AppConfig } from "../../app-config/app-config.interface";

@Injectable({
  providedIn: "root",
})
export class RoomsService {
  private roomList: Room[] = [
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

  constructor(@Inject(AppConfigService) private appConfig: AppConfig) {
    console.log("API URL: ", this.appConfig.apiUrl);
  }

  get rooms(): Room[] {
    return this.roomList;
  }
}
