import { Component, OnInit } from '@angular/core';

interface IUsuarioForm {
  nombre: string;
  passwd: string;
  repitePasswd: string;
  correo: string;
  ofertas: boolean;
  paises: string[];
  ciudad: string;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formulario: IUsuarioForm = {
    nombre: "",
    passwd: "",
    repitePasswd: "",
    correo: "",
    ofertas: false,
    paises: [],
    ciudad: ""
  }

  enviar() {

  }

}
