/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { MascotaService } from './mascota.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Mascota', () => {
 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [MascotaService]
   });
 });

 it('should ...', inject([MascotaService], (service: MascotaService) => {
   expect(service).toBeTruthy();
 }));
});
