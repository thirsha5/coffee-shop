import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Products } from '../Models/products.model';
import { ProductService } from '../Service/product.service';
import { getProducts } from '../Store/Actions/product.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    
  constructor() {}

  ngOnInit(): void {
      
  } 
}
