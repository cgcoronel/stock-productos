
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosListComponent } from './components/productos-list.components';
import { ProductoDetailComponent } from './components/producto-detail.component';
import { ProductoAddComponent } from './components/producto-add.component';
import { ProductoEditComponent } from './components/producto-edit.component';

const appRoutes: Routes = [
	{ path: '', component: ProductosListComponent },
	{ path: 'productos/:sort/:stock', component: ProductosListComponent },
	{ path: 'productos-search/:search', component: ProductosListComponent },
	{ path: 'producto/:id', component: ProductoDetailComponent },
	{ path: 'crear-producto', component: ProductoAddComponent},
	{ path: 'editar-producto/:id', component: ProductoEditComponent},
	{ path: '**', component: ProductosListComponent },
];




export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
