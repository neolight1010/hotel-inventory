import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Room } from "../rooms";

@Component({
  selector: "hia-rooms-table",
  templateUrl: "./rooms-table.component.html",
  styleUrls: ["./rooms-table.component.scss"],
})
export class RoomsTableComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  rooms: Room[] = [];

  @Output()
  roomSelected: EventEmitter<Room> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changing: ", changes);
  }

  ngOnDestroy(): void {
    console.log("Destroying!");
  }

  selectRoom(room: Room): void {
    this.roomSelected.emit(room);
  }
}
