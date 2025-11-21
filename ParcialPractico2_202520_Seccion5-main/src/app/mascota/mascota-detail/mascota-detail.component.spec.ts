/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MascotaDetailComponent } from './mascota-detail.component';
import { faker } from '@faker-js/faker';
import { Mascota } from '../mascota';

describe('MascotaDetailComponent', () => {
  let component: MascotaDetailComponent;
  let fixture: ComponentFixture<MascotaDetailComponent>;
  let debug: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ MascotaDetailComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaDetailComponent);
    component = fixture.componentInstance;


    const mascotaDetail = new Mascota(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.image.url(),
      );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should have a p.h3.p-3 element with mascotaDetail.nombre', () => {
    const element: HTMLElement = debug.query(By.css('p.h3.p-3')).nativeElement;
    expect(element.textContent).toContain(component.mascotaDetail.nombre);
  });
  it('should have an img element with src= mascotaDetail.imagenUrl', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      component.mascotaDetail.imagen
    );
  });


  it('should have an img element with alt= mascotaDetail.nombre', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.mascotaDetail.nombre
    );
  });
  it('should have 4 <dd> elements', () => {
    expect(debug.queryAll(By.css('dd.caption'))).toHaveSize(4)
  });




});
