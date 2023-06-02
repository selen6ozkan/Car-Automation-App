
import { Component, OnInit } from '@angular/core';
import { Brand, BrandItem } from 'src/app/model/brand.model';
import { Model } from 'src/app/model/model.model';
import { Type } from 'src/app/model/type.model';
import { DataService } from 'src/app/services/data.service';
import { Items } from 'src/app/model/item.model';
import { forkJoin } from 'rxjs';
import { combineLatest } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  brands: BrandItem[] = [];
  models: Model[] = [];
  types: Type[] = [];
  items: Items[]=[];


  constructor(private dataService: DataService,private router: Router) {}

  ngOnInit(): void {
    this.getBrands();
    this.getModels();
    this.getTypes();
   
  }
 

  getBrands() {
    this.dataService.getBrands().subscribe((data: Brand) => {
      this.brands = data.brands;
    });
  }

  getModels() {
    combineLatest([
      this.dataService.getBrands(),
      this.dataService.getModels(),
      this.dataService.getTypes()
    ]).subscribe((data: [Brand, Model[], Type[]]) => {
      this.brands = data[0].brands;
      this.models = data[1];
      this.types = data[2];
    });
  }
  
  getTypes() {
    this.dataService.getTypes().subscribe((data: Type[]) => {
      this.types = data;
    });
  }

  onLoginSuccess(): void {
    console.log('Login Success');
    this.router.navigate(['/home']);
  }
}
