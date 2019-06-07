import { Component, OnInit, Input } from '@angular/core';
import { AccionesService } from '../acciones.service';
import { Formulario } from '../formulario/formulario.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  ingresos:Formulario[] = [];
  egresos:Formulario[] =  [];

  @Input() ingresoTotal: number;

  constructor(private accionesService:AccionesService) { }

  ngOnInit() {
    this.ingresos = this.accionesService.ingresos;
    this.egresos = this.accionesService.egresos;
  }

  eliminarEgreso(egreso: Formulario){
    this.accionesService.eliminarEgreso(egreso);
  }
  eliminarIngreso(ingreso: Formulario){
    this.accionesService.eliminarIngreso(ingreso);
  }

  calcularPorcentaje(egreso:Formulario){
    return -(egreso.valor/this.ingresoTotal);
  }


}
