import { Component, EventEmitter} from '@angular/core';
import { Inventario } from '../interface/inventario.interface';
import { InventarioServece } from '../servece/inventario.service';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',

})


export class InventarioComponent {

  i: number = 3;

  constructor(public InventarioServece: InventarioServece) {
    this.inventarios = this.InventarioServece.inv
  }
  nu: Inventario[]=[]
  inventarios: Inventario[] = []

  nuevo: Inventario = {
    id: 0,
    producto: {
      nombre: '',
      logotipo: ''
    }
  }

  Agregrani() {

    let result = {
      id: this.i++,
      producto: {
        nombre: 'lapiz',
        logotipo: './assets/pencil-png.webp'
      }
    }

    this.nuevo = result;

    this.inventarios.push(this.nuevo)
    console.log(this.inventarios)
    this.almacenar()
  }

  opc(event:Event){
    console.log(event)
    // this.nu = this.inventarios.filter((item)=>{
    //   return item.id == inventario.id
    // })
  }

  almacenar() {
    localStorage.setItem(`${this.nuevo.id}`, JSON.stringify(this.inventarios))
  }
}

