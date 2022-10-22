import { Injectable } from "@angular/core";
import { Producto } from "../interface/inventario.interface";

@Injectable({
  providedIn: "root",
})
export class ProductoService {
  producto: Producto[] = [
    { nombre: "grapadora", logotipo: "./assets/grapadora.png" },
    { nombre: "cuaderno", logotipo: "./assets/notebook-png.webp" },
    { nombre: "lapiz", logotipo: "./assets/lapiz.png" },
    { nombre: "borrador", logotipo: "./assets/borrador.png" },
    { nombre: "sacapunta", logotipo: "./assets/sacapunta.png" },

  ];

  constructor() {}
}
