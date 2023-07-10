
import { Component, OnInit,Input } from '@angular/core';
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

  cardList: any[] = []; // Kart verilerini tutacak dizi
  currentPage: number = 1; // Şu anki sayfa numarası
  cardsPerPage: number = 5; // Sayfa başına kart sayısı
  totalPages: number = 0; // Toplam sayfa sayısı



  constructor(private dataService: DataService,private router: Router) {}
  
  onPageChange(event: any) {
    const pageNumber = parseInt(event.target.value, 10);
    this.currentPage = pageNumber;
  }
  

  getPaginatedCards(): any[] {
    const startIndex = (this.currentPage - 1) * this.cardsPerPage;
    const endIndex = startIndex + this.cardsPerPage;
    return this.cardList.slice(startIndex, endIndex);
  }

  

  ngOnInit(): void {
    this.getBrands();
 
   
  }
 

  getBrands() {
    this.dataService.getBrands().subscribe((data: Brand) => {
      this.brands = data.brands;
      console.log(this.brands); 
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
