import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Mascota } from './mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private apiUrl: string = environment.baseUrl+"mascotas.json";

  constructor(private http: HttpClient) { }

  getMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(this.apiUrl);
  }

 }

