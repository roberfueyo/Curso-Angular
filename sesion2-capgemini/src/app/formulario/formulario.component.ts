import { Component, OnInit } from '@angular/core';
import { Formulario } from './formulario.model';
import { LoggerService } from '../logger.service';
import { AccionesService } from '../acciones.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  ingresos:Formulario[] = [];
  tipoAccion:string ="ingresoAccion";

  inputDescripcion:string;
  inputValor:number;

  constructor(private loggerService:LoggerService, private accionesService:AccionesService) {
   }

  ngOnInit() {
  }

  setTipoAccion(evento){
    this.tipoAccion = evento.target.value;
  }

  anadirAcciones(){
    this.loggerService.enviarMensajeAConsola("Descripción: " + this.inputDescripcion +
    " Valor: " + this.inputValor);
    if(this.tipoAccion == 'egresoAccion'){
      this.accionesService.addEgreso(this.inputDescripcion,-this.inputValor);
    } else {
      this.accionesService.addIngreso(this.inputDescripcion,this.inputValor);
    }
    
  }
  
  
}
