import { Component, ViewChild } from '@angular/core';
import { HeliosSmartFormConfig, HeliosSmartFormTypes } from 'helios';
import { of, Observable } from 'rxjs';
import { SmartFormComponent } from 'helios';
import { DionisioService } from 'ngx-dionisio';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'epsidev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('testForm')
  private form: SmartFormComponent;

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
  };

  public todos$: Observable<Todo[]> = this.dionisio.collection<Todo>('todo').valueChanges();
  public search: string;

  constructor(
    private dionisio: DionisioService,
    private socket: Socket,
  ) {

  }

  onSubmit(data: any) {
    console.log(data);
  }

  setRandomPass() {
    this.form.patchData({password: Date.now()});
  }

  async getHello() {
    const hello = await this.dionisio.isDionisio();
    console.log(hello);
  }

  async getCollection() {
    const collection = this.dionisio.collection<Todo>('todo');
    const data = await collection.get();
    console.log(collection.path, data);
  }

  async getDoc() {
    const doc = this.dionisio.doc<Todo>('todo', 1);
    const data = await doc.get();
    console.log(doc.path, data);
  }

  async addDoc() {
    const added = await this.dionisio.collection<Todo>('todo').add({ text: `Todo Random: ${Date.now()}` });
    console.log(added);
  }

  async deleteDoc(id: number) {
    const deleted = await this.dionisio.doc('todo', id).delete();
    console.log(deleted);
  }

  async updateDoc(id: number) {
    const updated = await this.dionisio.doc('todo', id).update({ text: 'Nuevo Todo:' + Date.now() });
    console.log(updated);
  }

  async queryCollection() {
    const results = await this.dionisio.collection<Todo>('todo').query({ text: this.search });
    console.log(results);
  }

}


interface TestForm {
  email: string;
  password: string;
  password2: string;
  password3: string;
  archivo: string;
  archivo2: string;
  lawea?: string;
}

interface Todo {
  id: number;
  text: string;
}

interface Todo {
  id: number;
  text: string;
}
