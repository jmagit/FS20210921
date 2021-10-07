import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

export interface Persona {
  id: number | null;
  nombre: string;
  apellidos: string;
  correo: string | null;
  edad: number | null;
  dni: string | null;
}

@Injectable({providedIn: 'root'})
export class ClientesViewModel {
  constructor() { }

}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(public vm: ClientesViewModel) { }

  ngOnInit(): void {
  }

}
