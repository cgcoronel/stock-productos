import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'views/home.html'
})
export class AppComponent {
  public title: string;
  public description: string;
  //public search: string;

  constructor(
    private _route: ActivatedRoute,
		private _router: Router
  ){
    this.title = 'Catalogo de Productos';
    this.description = 'Control de stock';
  }

  onChangeSearch(search){    
    this._router.navigate(['productos-search/' + search]);
  }


}
