import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaListComponent } from './mascota-list/mascota-list.component';
import { MascotaDetailComponent } from './mascota-detail/mascota-detail.component';

@NgModule({
 imports: [
   CommonModule
 ],
 exports: [MascotaListComponent],
 declarations: [MascotaListComponent,MascotaDetailComponent]
})
export class MascotaModule { }
