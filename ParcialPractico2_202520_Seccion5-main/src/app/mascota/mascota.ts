export class Mascota {
  id: number;
  nombre: string;
  especie: string;
  edadMeses: number;
  descripcion: string;
  imagen: string;
  vacunas: string;

  constructor(
    id: number,
    nombre: string,
    especie: string,
    edadMeses: number,
    descripcion: string,
    imagen: string,
    vacunas: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.especie = especie;
    this.edadMeses = edadMeses;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.vacunas = vacunas;
  }
}
