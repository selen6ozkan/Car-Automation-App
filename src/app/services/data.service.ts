// data.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../model/brand.model';
import { Model } from '../model/model.model';
import { Type } from '../model/type.model';

@Injectable()
export class DataService {
  private brandsApi = `assets/fake-backend/brands.json`;
  private modelsApi = `assets/fake-backend/models.json`;
  private typesApi = `assets/fake-backend/types.json`;
  private cardsApi = `assets/fake-backend/cards.json`;


  constructor(private http: HttpClient) {}

  getBrands(): Observable<Brand> {
    return this.http.get<Brand>(this.brandsApi);
  }

  getModels(): Observable<Model[]> {
    return this.http.get<Model[]>(this.modelsApi);
  }

  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.typesApi);
  }
  getCards(): Observable<any[]> {
    return this.http.get<any[]>(this.cardsApi);
  }

}
