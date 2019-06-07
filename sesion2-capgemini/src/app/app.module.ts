import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { LoggerService } from './logger.service';
import { AccionesService } from './acciones.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FormularioComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [LoggerService, AccionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
