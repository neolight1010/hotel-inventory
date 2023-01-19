import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "hia-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeComponent implements OnInit {
  employeeName: string = "";

  constructor() {}

  ngOnInit(): void {}
}
