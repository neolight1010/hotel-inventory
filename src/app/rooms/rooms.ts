export interface Rooms {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface Room {
  roomNumber: string;
  roomType: string;
  amenities: string;
  price: number;
  photo: string;
  rating: number;

  checkInTime: Date;
  checkOutTime: Date;
}
