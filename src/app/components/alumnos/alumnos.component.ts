import { Component, OnInit } from '@angular/core';

interface Alumno {
  nombre: string;
  grado: number;
  grupo: string;
  aprobado: boolean;
  estatus: number;
  calificacion: number;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnos: Alumno[] = [
    {
      nombre: 'Josue Olmos',
      grado: 2,
      grupo: 'a',
      aprobado: false,
      estatus: 1,
      calificacion: 5.5,
    },
    {
      nombre: 'Julieta REYES',
      grado: 1,
      grupo: 'a',
      aprobado: true,
      estatus: 2,
      calificacion: 10,
    },
    {
      nombre: 'TADEO HernÁndez',
      grado: 3,
      grupo: 'b',
      aprobado: true,
      estatus: 2,
      calificacion: 9.5,
    },
    {
      nombre: 'Elliot GoNZález',
      grado: 5,
      grupo: 'b',
      aprobado: true,
      estatus: 3,
      calificacion: 9,
    },
    {
      nombre: 'ismael rodríguez',
      grado: 4,
      grupo: 'a',
      aprobado: true,
      estatus: 4,
      calificacion: 7.0,
    },
    {
      nombre: 'SilviA BarrientoS',
      grado: 6,
      grupo: 'b',
      aprobado: false,
      estatus: 2,
      calificacion: 6.0,
    },
    {
      nombre: 'GabRiel garcía',
      grado: 1,
      grupo: 'a',
      aprobado: true,
      estatus: 1,
      calificacion: 8.2,
    },
    {
      nombre: 'AnahÍ RiVeRa',
      grado: 3,
      grupo: 'b',
      aprobado: true,
      estatus: 1,
      calificacion: 9.0,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
