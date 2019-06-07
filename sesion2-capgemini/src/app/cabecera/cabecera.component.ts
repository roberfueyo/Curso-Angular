import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input() presupuestoDisponible:number;
  @Input() ingresosTotal:number;
  @Input() egresosTotal:number;
  
  constructor() { }

  ngOnInit() {
  }

  calcularPorcentaje(){
    return -(this.egresosTotal/this.ingresosTotal);
  }

}
