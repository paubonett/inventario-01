export interface Inventario {
  id: number;
  
  producto: Producto;
}

export interface Producto {
  nombre: string;
  logotipo: string;
}
