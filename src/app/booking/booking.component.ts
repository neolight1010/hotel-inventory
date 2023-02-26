import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "hia-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const initialBooking: Booking = {
      roomId: "",
      guestEmail: "",
      checkInDate: new Date(),
      checkOutDate: new Date(),
      bookingStatus: "",
      bookingAmount: 0,
      bookingDate: new Date(),
      mobileNumber: "",
      guestName: "",
      guestAddress: "",
      guestCity: "",
      guestState: "",
      guestCountry: "",
      guestZipCode: "",
      guestCount: 0,
      guestList: [],
    };

    this.bookingForm = this.formBuilder.group(initialBooking);
  }
}

interface Booking {
  roomId: string;
  guestEmail: string;
  checkInDate: Date;
  checkOutDate: Date;
  bookingStatus: string;
  bookingAmount: number;
  bookingDate: Date;
  mobileNumber: string;
  guestName: string;
  guestAddress: string;
  guestCity: string;
  guestState: string;
  guestCountry: string;
  guestZipCode: string;
  guestCount: number;
  guestList: Guest[];
}

interface Guest {}
