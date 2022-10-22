import { Injectable } from "@angular/core";
import { Inventario } from "src/app/inventario/interface/inventario.interface";
import { ProductoService } from './producto.service';

@Injectable()
export class InventarioServece{
  inventario:Inventario[]=[];
  idSeleccionado: number = 0;

  constructor(private productoSercive: ProductoService) { }

  get inv(): Inventario[] {
    return [...this.inventario];
  }

  crearInventario(): number {
    let idNuevo = this.inventario.length;
    this.inventario.push({
      id: this.inventario.length,
      productos: this.productoSercive.producto.map(p => ({ cantidad: 0, producto: p }))
    });
    return idNuevo;
  }

  seleccionarId(id: number) {
    this.idSeleccionado = id;
  }
}

