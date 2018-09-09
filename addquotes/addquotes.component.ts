import { Component, OnInit } from '@angular/core';
import { HttpService } from '.././http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-addquotes',
  templateUrl: './addquotes.component.html',
  styleUrls: ['./addquotes.component.css']
})
export class AddquotesComponent implements OnInit {
	quotes: any;
	errs: any;
  cur: any;
  author_id: any;
  constructor(private _http: HttpService,
  	private _route: ActivatedRoute,
  	private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.author_id = params['id']);
    this.quotes = {quote: ''}
    this.getOne(this.author_id)
  }
  getOne(id: any){
      let observable = this._http.getAnAuthor(id)
      observable.subscribe(data=> {
        this.cur = data
        console.log(data)
      })
    }
  onSubmit(id: any){
  	let observable = this._http.addAQuote(id, this.quotes);
	observable.subscribe(data=> {
		// this.author = {name: ""} 
		console.log(data)
    if(data['errors']){
      this.errs=[]
    
      for(let key in data['errors']){
				this.errs.push(data['errors'][key].message)

      }
    }
    else{
      console.log(this.author_id)
		  this._router.navigate(['/quotes/'+this.author_id])
    }
  })
}
}


