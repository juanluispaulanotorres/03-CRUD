import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formulario = new FormGroup(
      {
        nombre: new FormControl("", Validators.required),
        passwd: new FormControl("", Validators.required),
        repitePasswd: new FormControl("", [Validators.required]),
        correo: new FormControl("", [Validators.required, Validators.email]),
        ofertas: new FormControl(false),
        paises: new FormControl(["Spain", "USA"]),
        ciudad: new FormControl("", Validators.required)
      }
    );
  }

  mustMatch(passwd: string, repitePasswd: string) {
    if (passwd == repitePasswd)
      return true;
    else
      return false;
  }

  enviar() {
    
  }

}
