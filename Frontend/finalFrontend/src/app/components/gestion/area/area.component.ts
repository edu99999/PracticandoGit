import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Area } from 'src/app/models/area';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
})
export class AreaComponent implements OnInit {
  //VARIABLES
  area: Area = new Area();
  listadoAreas: Array<Area> = new Array<Area>();

  constructor(private areaService: AreaService, private router: Router) {
    this.cargarAreas();
  }

  ngOnInit(): void {}

  cargarAreas() {
    this.listadoAreas = new Array<Area>();
    this.areaService.getAreas().subscribe(
      (result) => {
        var unArea = new Area();
        result.forEach((element: any) => {
          Object.assign(unArea, element);
          this.listadoAreas.push(unArea);
          unArea = new Area();
        });
        console.log(this.listadoAreas.length);
      },
      (error) => {
        console.log(error);
        alert('No se pudo cargar Areas');
      }
    );
  }

  agregarArea() {
    this.router.navigate(['area-form', 0]);
  }

  modificarArea(item: Area) {
    this.router.navigate(['area-form', item._id]);
  }

  borrarArea(area: Area) {
    this.areaService.deleteArea(area._id).subscribe(
      (result) => {
        if (result.status == '1') {
          alert(result.msg);
          this.cargarAreas();
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
