export interface Rooms {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface Room {
  roomNumber: number;
  roomType: string;
  amenities: string;
  price: number;
  photo: string;
  rating: number;

  checkInTime: Date;
  checkOutTime: Date;
}
