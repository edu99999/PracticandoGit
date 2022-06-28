import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from 'src/app/models/area';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-area-form',
  templateUrl: './area-form.component.html',
  styleUrls: ['./area-form.component.css']
})
export class AreaFormComponent implements OnInit {

  //VARIBALES
  accion = '';
  listadoAreas!: Array<Area>;
  area = new Area();
  

  constructor(private activatedRoute: ActivatedRoute,
    private areaService: AreaService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id'] == 0) {
        this.accion = 'new';
        this.iniciarArea();
      } else {
        this.accion = 'update';
        this.recuperarArea(params['id']);
      }
    });
  }

  iniciarArea() {
    this.area = new Area();
  }

  recuperarArea(id: string) {
    this.area = new Area();
    this.areaService.getAreaUnica(id).subscribe(
      (result) => {
        console.log(result);
        Object.assign(this.area, result);
        console.log(this.area);
      },
      (error) => {}
    );
  }

  guardarArea() {
    this.areaService.createArea(this.area).subscribe(
      (result) => {
        if (result.status == '1') {
          alert(result.msg);
          this.router.navigate(['area']);
        }
      },
      (error) => {
        if (error.status == '0') {
          alert(error.msg);
        }
      }
    );
  }

  actualizarArea() {
    this.areaService.updateArea(this.area).subscribe(
      (result) => {
        if (result.status == '1') {
          alert(result.msg);
          this.router.navigate(['area']);
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
    this.router.navigate(['area']);
  }

}
