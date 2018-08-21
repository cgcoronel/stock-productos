import {Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
    selector: 'producto-add',
    templateUrl: '../views/producto-add.html',
    providers: [ProductoService]
})

export class ProductoAddComponent implements OnInit {
    public titleSection: string;
    public producto: Producto;
    public errorMessage: any;

    constructor(
      private _productoService: ProductoService,
      private _route: ActivatedRoute,
      private _router: Router

    ){
      this.titleSection = 'Crear Producto';
    }

    ngOnInit(){
        this.producto = new Producto('','','','');
    }

    public onSubmit(){
      this._productoService.addProducto(this.producto).subscribe(
        response => {
          if (!response.producto){
              alert('error en el servidor');
          }else{
              this.producto = response.producto;
              this._router.navigate(['/producto', this.producto._id]);
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
    }
}
