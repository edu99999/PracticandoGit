import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from 'src/app/models/area';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css'],
})
export class PersonaFormComponent implements OnInit {
  //VARIBALES
  accion = '';
  persona!: Persona;
  listadoPersonas!: Array<Persona>;
  //rol = new Rol();

  constructor(
    private activatedRoute: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id'] == 0) {
        this.accion = 'new';
        this.iniciarPersona();
      } else {
        this.accion = 'update';
        this.recuperarRol(params['id']);
      }
    });
  }

  iniciarPersona() {
    this.persona = new Persona();
  }

  recuperarRol(id: string) {
    this.persona = new Persona();
    this.personaService.getPersonaUnica(id).subscribe(
      (result) => {
        //console.log(result);
        Object.assign(this.persona, result);
        //console.log(this.persona);
      },
      (error) => {}
    );
  }

  guardarPersona() {
    this.persona.areas = new Area();
    this.persona.roles = [];
    this.personaService.createPersona(this.persona).subscribe(
      (result) => {
        if (result.status == '1') {
          alert(result.msg);
          this.router.navigate(['persona']);
        }
      },
      (error) => {
        if (error.status == '0') {
          alert(error.msg);
        }
      }
    );
  }

  actualizarPersona() {
    this.personaService.updatePersona(this.persona).subscribe(
      (result) => {
        if (result.status == '1') {
          alert(result.msg);
          this.router.navigate(['persona']);
        }
      },
      (error) => {
        if (error.status == '0') {
          alert(error.msg);
        }
      }
    );
  }

  cerrar() {
    this.router.navigate(['persona']);
  }
}
