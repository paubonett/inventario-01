import { Component } from "@angular/core";
import { Inventario } from "../interface/inventario.interface";
import { InventarioServece } from "../servece/inventario.service";

@Component({
  selector: "app-productos",
  templateUrl: "./productos.component.html",

})
export class ProductosComponent {
  constructor(public inventarioServece: InventarioServece) {
  }

  inventarios: Inventario[] = [];
  nu: Inventario[] = [];
  valor: number = 1;
  i: number = 1;

  cambiarCantidad(indiceProducto: number, esSuma: boolean) {
    this.inventarioServece.inventario[this.inventarioServece.idSeleccionado].productos[indiceProducto].cantidad += (esSuma) ? 1 : -1;
  }
  
}
