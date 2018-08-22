import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';

import {ProductoService} from '../services/producto.service';
import {Producto} from '../models/producto';

@Component({
		selector: 'productos-list',
		templateUrl: '../views/productos-list.html',
		providers: [ProductoService]
})

export class ProductosListComponent implements OnInit {
	public title: string;
	public loading: boolean;
	public productos: Producto[];
	public errorMessage;
	public confirmado;
	
	constructor(
		private _route: ActivatedRoute,
		private _productoService: ProductoService
	){
		this.title = 'Listado de Productos';
		this.loading = true;
	}

 ngOnInit(){
	console.log('ProductosListComponent cargado!!!');
	this.getProductos();
 }

 getProductos(){
	 this._route.params.forEach(
	 	(params: Params) => {
		 if (params['search']) {
			 var search = params['search'];

  	 	 this._productoService.searchProductos(search).subscribe(
    		result => {
    			this.productos = result.productos;

    			if (!this.productos) {
    				alert('Error en el servidor');
    			} else {
    				this.loading = false;
    			}
    		},
    		error  => {
    			this.errorMessage = <any>error;

    			if (this.errorMessage != null) {
    			    console.log(this.errorMessage);
    					alert('Error en la peticion');
    			}
    		});
		 } else {
			 var sort = params['sort'];
			 var stock = params['stock'];

		 	 this._productoService.getProductos(sort, stock).subscribe(
	  		result => {
	  			this.productos = result.productos;

	  			if (!this.productos) {
	  				alert('Error en el servidor');
	  			} else {
	  				this.loading = false;
	  			}
	  		},
	  		error  => {
	  			this.errorMessage = <any>error;

	  			if (this.errorMessage != null) {
	  			    console.log(this.errorMessage);
	  					alert('Error en la peticion');
	  			}
	  		});
		 }
		});
 }

 onBorrarConfirm(id){
	 this.confirmado = id;
 }

 onCancelarConfirm(id){
	 this.confirmado = null;
 }

 onBorrarProducto(id){
	 this._productoService.deleteProducto(id).subscribe(
		 result => {
 			if(!result.message){
				alert('Error en la petición');
			}
			this.getProductos();
 		},
 		error  => {
 			this.errorMessage = <any>error;

 			if (this.errorMessage != null) {
 			    console.log(this.errorMessage);
 					alert('Error en la peticion');
 			}
 		}
	 )
 }
}
