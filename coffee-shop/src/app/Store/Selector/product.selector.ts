import { createSelector } from "@ngrx/store";
import { Products } from "src/app/Models/products.model";
import { ProductState } from "../Reducer/product.reducers";

export const productSelector = createSelector(
    (state: ProductState) => state.products,
    (products: ReadonlyArray<Products>) => products    
);