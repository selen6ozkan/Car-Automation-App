import { Component,Input } from '@angular/core';
import { Brand, BrandItem } from 'src/app/model/brand.model'; 
import { Model } from '../model/model.model';
import { Type } from '../model/type.model';
import { Items } from '../model/item.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  brands: BrandItem[] = [];
  models: Model[] = [];
  types: Type[] = [];
  items: Items[]=[];
  @Input() cardData: any;



  getBrands() {
    this.dataService.getBrands().subscribe((data: Brand) => {
      this.brands = data.brands;
      console.log(this.brands); 
    });
  }

  
  showDetails(card: any) {
    // Detayları işle
    console.log(card);
  }
  constructor(private dataService: DataService) {}
  
  ngOnInit(): void {
    this.getBrands();

   
  }
}
