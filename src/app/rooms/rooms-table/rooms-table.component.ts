import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Room } from "../rooms";

@Component({
  selector: "hia-rooms-table",
  templateUrl: "./rooms-table.component.html",
  styleUrls: ["./rooms-table.component.scss"],
})
export class RoomsTableComponent implements OnInit {
  @Input()
  rooms: Room[] = [];

  @Output()
  roomSelected: EventEmitter<Room> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectRoom(room: Room): void {
    this.roomSelected.emit(room);
  }
}
