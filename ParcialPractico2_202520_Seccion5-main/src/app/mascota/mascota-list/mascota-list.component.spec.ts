/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { MascotaListComponent } from './mascota-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MascotaService } from '../mascota.service';
import { Mascota } from '../mascota';


describe('MascotaListComponent', () => {
  let component: MascotaListComponent;
  let fixture: ComponentFixture<MascotaListComponent>;
  let debug: DebugElement;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MascotaListComponent ],
      providers: [ MascotaService ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 10; i++) {
      const mascota = new Mascota(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.image.url(),
      );
      component.mascotas.push(mascota);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have 10 <div.col.mb-2> elements', () => {
    expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(10)
  });


  it('should have 10 <card.p-2> elements', () => {
    expect(debug.queryAll(By.css('div.card.p-2'))).toHaveSize(10)
  });


  it('should have 10 <img> elements', () => {
    expect(debug.queryAll(By.css('img'))).toHaveSize(10)
  });


  it('should have 10 <div.card-body> elements', () => {
    expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
  });


  it('should have the corresponding src to the mascota imagenUrl and alt to the mascota nombre', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.mascotas[i].imagen)


      expect(img.attributes['alt']).toEqual(
        component.mascotas[i].nombre)
    })
  });


  it('should have h5 tag with the mascota.nombre', () => {
    debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
      expect(h5.nativeElement.textContent).toContain(component.mascotas[i].nombre)
    });
  });



  it('should have 9 <div.col.mb-2> elements and the deleted mascota should not exist', () => {
    const mascota = component.mascotas.pop()!;
    fixture.detectChanges();
    expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(9)


    debug.queryAll(By.css('div.col.mb-2')).forEach((selector, i)=>{
      expect(selector.nativeElement.textContent).not.toContain(mascota.nombre);
    });
  });


});
