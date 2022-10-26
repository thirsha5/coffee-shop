import { Injectable } from "@angular/core";
import { InjectSetupWrapper } from "@angular/core/testing";
import { createEffect,Actions, ofType } from "@ngrx/effects";
import { EmptyError, of } from "rxjs";
import { catchError, concatMap, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { Products } from "src/app/Models/products.model";
import { ProductService } from "src/app/Service/product.service";
import { getProducts, getProductsFailure, getProductsSuccess } from "../Actions/product.action";

@Injectable()
export class ProductEffects{
    loadProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(getProducts),
      mergeMap(() =>
        this.productsService.getProducts().pipe(
          map((products) => getProductsSuccess({products})),
          catchError(error =>
            of(getProductsFailure({error}))
          )
        )
      )
    )
  );

    constructor(private action$: Actions, private productsService: ProductService) {}
}