import { Component, ViewChild } from '@angular/core';
import { HeliosSmartFormConfig, HeliosSmartFormTypes } from 'helios';
import { of } from 'rxjs';
import { SmartFormComponent } from 'helios';

@Component({
  selector: 'epsidev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('testForm')
  private form: SmartFormComponent

  public config: HeliosSmartFormConfig<TestForm> = {
    id: 'test-form',
    fields: [
      {name: 'email', type: HeliosSmartFormTypes.Email, label: 'Email', placeholder: 'Ingresa tu email weon'},
      {name: 'archivo', type: HeliosSmartFormTypes.File, label: 'Archivo'},
      {name: 'archivo2', type: HeliosSmartFormTypes.File, label: 'Archivo 2'},
      {name: 'password', type: HeliosSmartFormTypes.TextArea, label: 'Password', placeholder: 'Y la contraseña htptm?'},
      {
        name: 'password2', 
        type: HeliosSmartFormTypes.Radio, 
        label: 'Password2 Select', 
        placeholder: 'Y la contraseña htptm? seleccionala de acá',
        radioDataSource: of([
          {name: 'Wea 1', value: 'wea-1'},
          {name: 'Wea 2', value: 'wea-2'},
          {name: 'Wea 3', value: 'wea-3'},
        ]),
        radioOptionLabel: row => row.name + ' - CUSTOM LABEL',
        radioOptionField: row => row,
        selectedValue: row => row.value == 'wea-3',
      },
      {
        name: 'password3',
        type: HeliosSmartFormTypes.Checkbox,
        checkboxLabel: 'Selecciona la wea weon',
        checkboxSelected: field => true
      }
    ],
    stylingBootstrap: true,
    showFormValue: true,
  }
  
  constructor() {

  }

  onSubmit(data: any) {
    console.log(data)
  }

  setRandomPass() {
    this.form.patchData({password: Date.now()})
  }

}


interface TestForm {
  email: string
  password: string
  password2: string
  password3: string
  archivo: string
  archivo2: string
  lawea?: string
}