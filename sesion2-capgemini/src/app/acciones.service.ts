import { Formulario } from './formulario/formulario.model';

export class AccionesService{
    ingresos:Formulario[] = [];
    egresos:Formulario[] = [];

    constructor(){
        this.ingresos = [new Formulario ("Salario", 1200), new Formulario("Venta coche", 5000)];
        this.egresos = [new Formulario ("Renta local", -2000), new Formulario("Ropa", -145)];
    }
    addIngreso(descripcion:string, valor:number){
        let form = new Formulario(descripcion,valor);
        this.ingresos.push(form);
    }
    addEgreso(descripcion:string, valor:number){
        let form = new Formulario(descripcion, valor);
        this.egresos.push(form);
    }
    eliminarEgreso(egreso:Formulario){
        const indice:number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1); //Eliminamos 1 registro (parametro 2) a partir del indice que estamos indicando
    }
    eliminarIngreso(ingreso: Formulario){
        const indice = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }
}