import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeliosModule } from 'helios';
import { WeaService } from './wea.service';
import { NgxDionisioModule } from 'ngx-dionisio';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

// Prometheus
import { PrometheusModule, DionisioAdapter } from 'prometheus';
import { NestAdapter } from './nest.adapter';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    /* HeliosModule.forRoot({
      fileUploaderHandler: WeaService.fileUploader
    }),
    NgxDionisioModule.forRoot({
      base_url: 'http://localhost:3000'
    }), */
    PrometheusModule.forRoot({
      adapter: new DionisioAdapter({
        baseURL: 'https://localhost:3000'
      }),
    }),

    // SocketIoModule.forRoot(config),
  ],
  providers: [
    WeaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
