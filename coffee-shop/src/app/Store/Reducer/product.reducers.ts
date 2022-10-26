import { Action, createReducer, on } from '@ngrx/store';
import { Products } from 'src/app/Models/products.model';
import { getProducts, getProductsSuccess } from '../Actions/product.action';


export interface ProductState {
  products:ReadonlyArray<Products>;
}

const initialState: ReadonlyArray<Products> =[];


export const productReducer = createReducer(
  initialState,
  on(getProductsSuccess, (state, {products}) =>[...products]),   
);
