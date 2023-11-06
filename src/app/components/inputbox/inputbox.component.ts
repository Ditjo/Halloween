import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.css']
})
export class InputboxComponent {
  id = new FormControl();

  UpdateId(){
    this.id.setValue("15")
  }
}
