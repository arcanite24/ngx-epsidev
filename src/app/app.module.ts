import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeliosModule } from "helios";
import { WeaService } from './wea.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeliosModule.forRoot({
      fileUploaderHandler: WeaService.fileUploader
    })
  ],
  providers: [
    WeaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
