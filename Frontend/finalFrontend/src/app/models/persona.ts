import { Area } from './area';
import { Rol } from './rol';

export class Persona {
  _id!: string;
  apellido!: string;
  nombre!: string;
  legajo!: string;
  dni!: string;
  email!: string;
  areas!: Area;
  roles!: Array<Rol>;
}
