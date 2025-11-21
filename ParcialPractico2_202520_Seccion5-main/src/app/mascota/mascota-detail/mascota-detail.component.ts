import { Component, Input, OnInit } from '@angular/core';
import { Mascota } from '../mascota';

@Component({
  selector: 'app-mascota-detail',
  templateUrl: './mascota-detail.component.html',
  styleUrls: ['./mascota-detail.component.css'],
  standalone: false

})
export class MascotaDetailComponent implements OnInit {
  @Input() mascotaDetail!: Mascota;
  constructor() { }

  ngOnInit() {
  }

}
