import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { productReducer } from './Store/Reducer/product.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './Store/Effects/product.effects';
import { HeaderComponent } from './header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularPaginatorModule } from 'angular-paginator';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    AngularPaginatorModule,
    HttpClientModule,
    StoreModule.forRoot({
      products: productReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ProductEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
