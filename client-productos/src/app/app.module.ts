import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';
import { ProductosListComponent }  from './components/productos-list.components';
import { ProductoDetailComponent }  from './components/producto-detail.component';
import { ProductoAddComponent } from './components/producto-add.component';
import { ProductoEditComponent } from './components/producto-edit.component';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing
    ],
  declarations: [
      AppComponent,
      ProductosListComponent,
      ProductoDetailComponent,
      ProductoAddComponent,
      ProductoEditComponent
    ],
  providers: [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
