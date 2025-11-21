import { Component, OnInit } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaService } from '../mascota.service';
import { Router } from '@angular/router';

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

  constructor(private mascotaService: MascotaService, private router: Router) { }

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

  calculartotalmascotas(): number {
    return this.mascotas.length;
  }

  calcularedadpromedio(): number {
    if (this.mascotas.length === 0) {
      return 0;
    }
    const totalEdad = this.mascotas.reduce((sum, mascota) => sum + mascota.edadMeses, 0);
    return totalEdad / this.mascotas.length;
    }

    navi(id:number):void{ 
      this.router.navigate(['/mascotas', id]);
  }


}
