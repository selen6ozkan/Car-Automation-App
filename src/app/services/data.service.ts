// data.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../model/brand.model';
import { Model } from '../model/model.model';
import { Type } from '../model/type.model';

@Injectable()
export class DataService {
  private baseUrl = "http://localhost:3000";
  private brandsApi = `${this.baseUrl}/brands`;
  private modelsApi = `${this.baseUrl}/models`;
  private typesApi = `${this.baseUrl}/types`;

  constructor(private http: HttpClient) {}

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.brandsApi);
  }

  getModels(): Observable<Model[]> {
    return this.http.get<Model[]>(this.modelsApi);
  }

  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.typesApi);
  }
}
