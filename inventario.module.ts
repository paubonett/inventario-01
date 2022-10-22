import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosComponent } from './productos/productos.component';
import { InventarioServece } from './servece/inventario.service';
import { InventarioComponent } from './inventario/inventario.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductosComponent,
    InventarioComponent
  ],
  exports:[
    InventarioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[
    InventarioServece
  ]
})
export class InventarioModule { }
