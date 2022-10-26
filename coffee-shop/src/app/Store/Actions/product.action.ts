import { createAction, props } from "@ngrx/store";
import { Products } from "src/app/Models/products.model";


export const getProducts = createAction('[Product] Get Products');
export const getProductsSuccess = createAction(
'[Product] Get Products Success',
props<{ products: ReadonlyArray<Products>}>()
);

export const getProductsFailure = createAction(
    '[Product] Get Products Failure',
    props<{ error: any }>()
  );
