import { Component, OnInit } from '@angular/core';
import { HttpService } from '.././http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public authors: any;
  
  constructor(private _http: HttpService,
  	private _route: ActivatedRoute,
  	private _router: Router) { }

  ngOnInit() {
  	this.getAll()

  }

  getAll(){
  	let observable = this._http.getAuthors()
		observable.subscribe(data=> {
			
			this.authors = data;
			
  })
}
  delete(id: any){
	let observable = this._http.deleteAuthor(id)
	observable.subscribe(data=> {
		
		this.getAll()
	
		
	})
}
}
