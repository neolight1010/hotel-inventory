import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from "@angular/core";
import { EmployeeComponent } from "../employee/employee.component";

@Component({
  selector: "hia-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.scss"],
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(EmployeeComponent) employeeComponent!: EmployeeComponent;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.employeeComponent.employeeName = "Rick";
  }
}
