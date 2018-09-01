import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'views/home.html'
})
export class AppComponent {
  public title: string;
  public description: string;
  public sort: string;
  public search: string;
  public stock: string;


  constructor(
    private _route: ActivatedRoute,
		private _router: Router
  ){
    this.title = 'Catalogo de Productos';
    this.description = 'Control de stock';
    this.sort = 'asc';
    this.stock = '1';
    this.search = null;
  }

  onChangeSearch(search){
    this.search = search;
    this.getProductos();
  }

  setSort(sort:string){
    this.sort = sort;
    this.getProductos();
  }

  setStock(stock:string){
    this.stock = stock;
    this.getProductos();
  }

  getProductos(){
    var params = this.sort + '/' + this.stock;

    if (this.search != null && this.search!='') {
        params +=  '/' + this.search;
    }

    this._router.navigate(['productos/' + params]);
  }
}
