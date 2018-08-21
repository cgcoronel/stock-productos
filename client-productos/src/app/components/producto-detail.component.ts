import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
    selector: 'producto-detail',
    templateUrl: '../views/producto-detail.html',
		providers: [ProductoService]
})

export class ProductoDetailComponent implements OnInit {
		public producto: Producto;
		public errorMessage;

    constructor(private _productoService: ProductoService,
								private _route: ActivatedRoute,
								private _router: Router
		){
    }

		ngOnInit(){
						this.getProducto();
		}

		getProducto(){
					this._route.params.forEach((params: Params) => {
						let id = params['id'];

						this._productoService.getProducto(id).subscribe(
							response => {
								this.producto = response.producto;

								if(!this.producto){
									this._router.navigate(['/']);
								}
							},
							error => {
								this.errorMessage = <any>error;

								if (this.errorMessage != null) {
								    console.log(this.errorMessage);
										alert('Error en la peticion');
										this._router.navigate(['/']);
								}
							}
						);
					});
		}
}
