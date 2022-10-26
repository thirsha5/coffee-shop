import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Products } from '../Models/products.model';
import { ProductService } from '../Service/product.service';
import { getProducts } from '../Store/Actions/product.action';
import { ProductState } from '../Store/Reducer/product.reducers';
import { productSelector } from '../Store/Selector/product.selector';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {  
  page = 1;
  count = 10;

products$:any;

  constructor(
    private productService: ProductService,
    private store: Store<ProductState>) { }

  ngOnInit(): void {
    this.getAllProducts();     
  }

  getAllProducts() {
    this.store.dispatch(getProducts())
    this.store.select(productSelector).subscribe(product => {    
      this.products$ = product;     
    })
  }

}
