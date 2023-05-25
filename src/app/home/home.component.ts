// home.component.ts
import { Component, OnInit } from '@angular/core';
import { Brand } from '../model/brand.model';
import { Model } from '../model/model.model';
import { Type } from '../model/type.model';
import { DataService } from '../services/data.service';
import { Items } from '../model/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  brands: Brand[] = [];
  models: Model[] = [];
  types: Type[] = [];
  items: Items[]=[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getBrands();
    this.getModels();
    this.getTypes();
  }

  getBrands() {
    this.dataService.getBrands().subscribe((data: Brand[]) => {
      this.brands = data;
    });
  }

  getModels() {
      this.dataService.getModels().subscribe((data: Model[]) => {
        this.dataService.getBrands().subscribe((data2: Brand[]) => {
          this.models = data;
          this.brands = data2;

          
          console.log(this.items);
          console.log(this.models)
        });
      });
    
  }
  

  getTypes() {
    this.dataService.getTypes().subscribe((data: Type[]) => {
      this.types = data;
    });
  }
  


  
}
