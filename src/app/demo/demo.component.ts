import { Component, ViewEncapsulation } from '@angular/core';
import { SampleDirective } from '../Directives/sample.directive';
import { CommonModule } from '@angular/common';
import { CheckService } from '../Services/checkService.service';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [SampleDirective,CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  providers:[CheckService],
})
export class DemoComponent {
  active:boolean=false;
   constructor(private object:CheckService){

  }
  btn1clicked(){
    this.object.butonClicked(1);
  }
  products = [
    { id: 1, name: 'Luxury Leather Sofa', price: 1299, rating: 4.8, sale: true, img: 'assets/products/sofa1.jpg' },
    { id: 2, name: 'Modern Coffee Table', price: 349, rating: 4.5, sale: false, img: 'assets/products/table1.jpg' },
    { id: 3, name: 'Velvet Accent Chair', price: 499, rating: 4.9, sale: true, img: 'assets/products/chair1.jpg' },
    { id: 4, name: 'King Size Bed Frame', price: 899, rating: 4.7, sale: false, img: 'assets/products/bed1.jpg' },
    { id: 5, name: 'Minimalist Bookshelf', price: 279, rating: 4.6, sale: false, img: 'assets/products/shelf1.jpg' },
    { id: 6, name: 'Dining Table Set (6 Chairs)', price: 1599, rating: 5.0, sale: true, img: 'assets/products/dining1.jpg' },
    { id: 7, name: 'Recliner Armchair', price: 699, rating: 4.8, sale: false, img: 'assets/products/recliner.jpg' },
    { id: 8, name: 'Marble Top Side Table', price: 189, rating: 4.4, sale: true, img: 'assets/products/side-table.jpg' },
    { id: 9, name: 'L-Shaped Sectional Sofa', price: 1899, rating: 4.9, sale: false, img: 'assets/products/l-sofa.jpg' },
    { id: 10, name: 'Wooden TV Stand', price: 449, rating: 4.6, sale: false, img: 'assets/products/tv-stand.jpg' },
    { id: 11, name: 'Queen Storage Bed', price: 1099, rating: 4.7, sale: true, img: 'assets/products/bed2.jpg' },
    { id: 12, name: 'Fabric Ottoman', price: 149, rating: 4.5, sale: false, img: 'assets/products/ottoman.jpg' },
    { id: 13, name: 'Glass Dining Table', price: 799, rating: 4.8, sale: false, img: 'assets/products/glass-table.jpg' },
    { id: 14, name: 'Wingback Chair', price: 579, rating: 4.9, sale: true, img: 'assets/products/wing-chair.jpg' },
    { id: 15, name: 'Rustic Console Table', price: 399, rating: 4.6, sale: false, img: 'assets/products/console.jpg' },
    { id: 16, name: 'Chaise Lounge', price: 949, rating: 4.8, sale: true, img: 'assets/products/chaise.jpg' },
    { id: 17, name: 'Kids Bunk Bed', price: 699, rating: 4.7, sale: false, img: 'assets/products/bunk-bed.jpg' },
    { id: 18, name: 'Bar Stool Set (4)', price: 399, rating: 4.5, sale: true, img: 'assets/products/bar-stool.jpg' },
    { id: 19, name: 'Office Desk + Chair', price: 749, rating: 4.8, sale: false, img: 'assets/products/office-set.jpg' },
    { id: 20, name: 'Outdoor Patio Set', price: 1399, rating: 4.9, sale: true, img: 'assets/products/patio.jpg' }
  ];
}
