import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-error',
  template: `
    <p class="text-danger">
      {{errorMessage}}
    </p>
  `,
  styleUrls: ['./form-field-error.component.css']
})
export class FormFieldErrorComponent implements OnInit {

  @Input('form-control') formControl: FormControl;

  constructor() { }

  ngOnInit() {
  }

  get errorMessage(): string | null {
    if (this.mustShowErrorMessage()) {
      return this.getErrorMessage();
    } else {
      return null;
    }
  }

  private mustShowErrorMessage(): boolean {
    return this.formControl.invalid && this.formControl.touched;
  }

  private getErrorMessage(): string | null {
    if (this.formControl.errors.required) {
      return "Dado obrigatório!";
    } else if (this.formControl.errors.minlength) {
      const minCaracteres = this.formControl.errors.minlength.requiredLength;
      return "Deve ter no mínimo " + minCaracteres + " caractes!";
    } else if (this.formControl.errors.maxlength) {
      const maxCaracteres = this.formControl.errors.maxlength.requiredLength;
      return "Deve ter no maximo " + maxCaracteres + " caractes!";
    }
  }
}

