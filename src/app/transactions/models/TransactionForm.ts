import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

export default class TransactionForm extends FormGroup {

  get id(): AbstractControl<any, any> {
    return this.get('id');
  }


}
