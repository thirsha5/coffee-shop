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

function mockMovies(): Products[] {
    const movie = new Products(
      1,
      'test',    
    );
    movie.id = 1;
  
    const movie1 = new Products(
        2,
        'test'
    );
    movie1.id = 2;
  
    const movie2 = new Products(
        3,
        'test'
    );
    movie2.id = 3;
  
    const movies = [movie, movie1, movie2];
    return movies;
  }