import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Inventario } from "../interface/inventario.interface";
import { InventarioServece } from "../servece/inventario.service";

@Component({
  selector: "app-inventario",
  templateUrl: "./inventario.component.html",
})
export class InventarioComponent {
  i: number = 3;
  myForm: FormGroup;

  constructor(public inventarioServece: InventarioServece) {
    this.myForm = new FormGroup({
      inventario: new FormControl(""),
    });
    this.myForm.controls["inventario"].valueChanges.subscribe((event) => {
      console.log(event);
      this.inventarioServece.seleccionarId(event);
    });
    this.agregrarInventario();
  }

  agregrarInventario() {
    const idnuevo = this.inventarioServece.crearInventario();
    this.myForm.controls['inventario'].setValue(idnuevo);
  }

  opc(event: Event) {
    console.log(event);
  }
  cambiarInventario(event: any) {
    console.log(event);
  }

  almacenar() {
    // localStorage.setItem(`${this.nuevo.id}`, JSON.stringify(this.inventarios));
  }
}
