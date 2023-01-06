import { Component, OnInit } from "@angular/core";

@Component({
  selector: "hia-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"],
})
export class EmployeeComponent implements OnInit {
  employeeName: string = "";

  constructor() {}

  ngOnInit(): void {}
}
