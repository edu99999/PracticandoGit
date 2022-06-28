import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  //VARIABLES
  persona: Persona = new Persona();
  listadoPersonas: Array<Persona> = new Array<Persona>();

  constructor(private personaService: PersonaService, private router: Router) {
    this.cargarPersonas();
  }

  ngOnInit(): void {}

  cargarPersonas() {
    this.listadoPersonas = new Array<Persona>();
    this.personaService.getPersonas().subscribe(
      (result) => {
        var unaPersona = new Persona();
        result.forEach((element: any) => {
          Object.assign(unaPersona, element);
          this.listadoPersonas.push(unaPersona);
          unaPersona = new Persona();
        });
        console.log(this.listadoPersonas.length);
      },
      (error) => {
        console.log(error);
        alert('No se pudo cargar las Personas');
      }
    );
  }

  agregarPersona() {
    this.router.navigate(['persona-form', 0]);
  }

  modificarPersona(item: Persona) {
    this.router.navigate(['persona-form', item._id]);
  }

  borrarPersona(persona: Persona) {
    this.personaService.deletePersona(persona._id).subscribe(
      (result) => {
        if (result.status == '1') {
          alert(result.msg);
          this.cargarPersonas();
        }
      },
      (error) => {
        if (error.status == '0') {
          alert(error.msg);
          console.log(error);
        }
      }
    );
  }

}
