import { Component, OnInit } from '@angular/core';
import { HttpService } from '.././http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
public quotes: any;
  cur: any;
  author_id: any;
  constructor(private _http: HttpService,
  	private _route: ActivatedRoute,
  	private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.author_id = params['id']);
  	this.getOne(this.author_id)

  }

  getOne(id: any){
      let observable = this._http.getAnAuthor(id)
      observable.subscribe(data=> {
        this.cur = data
        console.log(this.cur)
      })
    }

  delete(id: any){
	let observable = this._http.deleteQuote(id)
	observable.subscribe(data=> {
		
		this.getOne(this.author_id)
	
		
	})
}
}

 
