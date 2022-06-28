import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
})
export class RolComponent implements OnInit {
  //VARIABLES
  rol: Rol = new Rol();
  roles : Array<Rol> = new Array<Rol>();
  buscarRolPorNombre: string = "";

  constructor(private rolService: RolService, private router: Router) {
    this.cargarRoles();
  }

  ngOnInit(): void {}

  cargarRoles() {
    this.roles = new Array<Rol>();
    this.rolService.getRoles().subscribe(
      (result) => {
        var unRol = new Rol();
        result.forEach((element: any) => {
          Object.assign(unRol, element);
          this.roles.push(unRol);
          unRol = new Rol();
        });
        console.log(this.roles.length);
      },
      (error) => {
        console.log(error);
        alert("No se pudo cargar Roles");
      }
    );
  }

  agregarRol() {
    this.router.navigate(['rol-form', 0]);
  }

  modificarRol(item: Rol) {
    this.router.navigate(['rol-form', item._id]);
  }

  borrarRol(rol: Rol) {
    this.rolService.deleteRol(rol._id).subscribe(
      (result) => {
        if (result.status == '1') {
          alert(result.msg);
          this.cargarRoles();
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

  filtrarRolPorNombre(filtro:any) {
    this.roles = new Array<Rol>();
    this.rolService.getRolPorNombre(filtro).subscribe(
      (result) => {
        var unRol = new Rol();
        result.forEach((element: any) => {
          Object.assign(unRol, element);
          this.roles.push(unRol);
          unRol = new Rol();
        });
        console.log('Roles: ' + this.roles.length);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
