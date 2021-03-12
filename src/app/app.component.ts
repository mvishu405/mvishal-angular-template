import { Component, VERSION } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Customer } from "./customer";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular Template form";
  customer = new Customer();

  onSubmit(form: NgForm) {
    console.log(form, this.customer);
  }
}
