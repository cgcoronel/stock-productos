import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../models/producto';

@Injectable()
export class ProductoService{
	public url: string;
	constructor(private _http: Http){
		this.url = 'http://localhost:3678/api/';
	}

	getProductos(sort: string, stock: string, search: string){
			return this._http.get(this.url+'productos/' + sort + '/' + stock + '/' + search)
											 .map(res => res.json());
	}

	getProducto(id: string){
		return this._http.get(this.url+'producto/' + id)
		                  .map(res => res.json());
	}

	deleteProducto(id: string){
		return this._http.delete(this.url+'producto/' + id)
		                  .map(res => res.json());
	}

	addProducto(producto: Producto){
		let params = JSON.stringify(producto);
		let headers = new Headers({'Content-Type': 'application/json'});

		return this._http.post(this.url+'producto', params, {headers: headers})
										 .map(res => res.json());
	}

	editProducto(id: string, producto: Producto){
		let params = JSON.stringify(producto);
		let headers = new Headers({'Content-Type': 'application/json'});

		return this._http.put(this.url+'producto/' + id, params, {headers: headers})
										 .map(res => res.json());
	}
}
