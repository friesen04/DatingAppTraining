import { Component, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-inputs',
  templateUrl: './text-inputs.component.html',
  styleUrls: ['./text-inputs.component.css']
})
export class TextInputsComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() type = "text";

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
   }

  writeValue(obj: any): void {

  }
  registerOnChange(fn: any): void {

  }
  registerOnTouched(fn: any): void {

  }

}
