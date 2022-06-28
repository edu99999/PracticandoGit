import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-rol-form',
  templateUrl: './rol-form.component.html',
  styleUrls: ['./rol-form.component.css'],
})
export class RolFormComponent implements OnInit {
  //VARIBALES
  accion = '';
  //rol!: Rol;
  roles!: Array<Rol>;
  rol = new Rol();
  rolValido: Boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private rolService: RolService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    //recuperacion de parametros
    this.activatedRoute.params.subscribe((params) => {
      if (params['id'] == 0) {
        this.accion = 'new';
        this.iniciarRol();
      } else {
        this.accion = 'update';
        this.recuperarRol(params['id']);
      }
    });
  }

  iniciarRol() {
    this.rol = new Rol();
  }

  recuperarRol(id: string) {
    this.rol = new Rol();
    this.rolService.getRol(id).subscribe(
      (result) => {
        console.log(result);
        Object.assign(this.rol, result);
        console.log(this.rol);
      },
      (error) => {}
    );
  }

  guardarRol() {
    this.rolService.createRol(this.rol).subscribe(
      (result) => {
        if (result.status == '1') {
          alert(result.msg);
          this.router.navigate(['rol']);
        }
      },
      (error) => {
        if (error.status == '0') {
          alert(error.msg);
        }
      }
    );
  }

  actualizarRol() {
    this.rolService.updateRol(this.rol).subscribe(
      (result) => {
        if (result.status == '1') {
          alert(result.msg);
          this.router.navigate(['rol']);
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
    this.router.navigate(['rol']);
  }

  validarNombreRol(input: NgModel): void {
    if (this.rol.nombreRol != '' && this.rol.nombreRol != null) {
      this.rolService.validarRol(this.rol.nombreRol).subscribe(
        (result) => {
          if (result != null) {
            this.rolValido = false;
            alert('El nombre de Rol ya existe');
            this.rol.nombreRol = '';
            input.reset();
          } else {
            this.rolValido = true;
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

}
