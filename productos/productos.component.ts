import { Component} from '@angular/core';
import { Inventario } from '../interface/inventario.interface';
import { InventarioServece } from '../servece/inventario.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent  {

  constructor(public InventarioServece: InventarioServece) {
    this.inventarios = this.InventarioServece.inv
  }

  inventarios: Inventario[] = [];


  
  

 

}
