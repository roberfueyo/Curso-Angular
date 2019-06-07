import { Component } from '@angular/core';
import { Formulario } from './formulario/formulario.model';
import { AccionesService } from './acciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sesion2-capgemini';

  ingresos:Formulario[] = [];
  egresos:Formulario[] = [];
  

  constructor(private accionesService: AccionesService){
    this.ingresos = accionesService.ingresos;
    this.egresos = accionesService.egresos;
  }


  calcularTotalIngresos(): number{
    let totalIngresos:number = 0;
    for(let i of this.ingresos){
      totalIngresos+=i.valor;
    }
    return totalIngresos;
  }

  calcularTotalEgresos(): number{
    let totalEgresos:number = 0;
    for(let i of this.egresos){
      totalEgresos+=i.valor;
    }
    return totalEgresos;
  }

  calcularPresupuestoDisponible():number{
    return this.calcularTotalIngresos() + this.calcularTotalEgresos();
  }
}
