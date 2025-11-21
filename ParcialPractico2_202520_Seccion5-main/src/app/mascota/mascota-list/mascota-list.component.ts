import { Component, OnInit } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaService } from '../mascota.service';

@Component({
    selector: 'app-mascota-list',
    templateUrl: './mascota-list.component.html',
    styleUrls: ['./mascota-list.component.css'],
    standalone: false
})
export class MascotaListComponent implements OnInit {

  mascotas: Array<Mascota> = [];
  selected: Boolean = false;
  selectedMascota!: Mascota;

  constructor(private mascotaService: MascotaService) { }

  ngOnInit() {
    this.getMascotas();
  }

  getMascotas(): void {
    this.mascotaService.getMascotas().subscribe((mascotas) => {
      this.mascotas = mascotas;
    });
  }

  onSelected(mascota: Mascota): void {
    this.selected = true;
    this.selectedMascota = mascota;
  }



}
