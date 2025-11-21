import { Component, Input, OnInit } from '@angular/core';
import { Mascota } from '../mascota';
import { ActivatedRoute, Router} from '@angular/router';
import { MascotaService} from '../mascota.service';

@Component({
  selector: 'app-mascota-detail',
  templateUrl: './mascota-detail.component.html',
  styleUrls: ['./mascota-detail.component.css'],
  standalone: false

})
export class MascotaDetailComponent implements OnInit {
  @Input() mascotaDetail!: Mascota;
  mascotaId!: number;
  mascota!: Mascota;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mascotaService: MascotaService
  ) { }

  ngOnInit():void {
  this.mascotaId = Number(this.route.snapshot.paramMap.get('id'));
  this.mascotaService.cargarmascotaconid(this.mascotaId).subscribe(mascota => {
  this.mascota = mascota;
  });
  }

    goBack(): void {
    this.router.navigate(['/mascotas']);
  }
}
