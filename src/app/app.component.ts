import { Component, VERSION } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular Template form";
  _modelFirstName;

  onSubmit(form: NgForm) {
    console.log(form);
  }

  set modelFirstName(val: string) {
    this._modelFirstName = val;
    console.log(this._modelFirstName);
  }
}
