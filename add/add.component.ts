import { Component, OnInit } from '@angular/core';
import { HttpService } from '.././http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
	author: any;
	errs: any;
  constructor(private _http: HttpService,
  	private _route: ActivatedRoute,
  	private _router: Router) { }

  ngOnInit() {
  this.author = {name: ''}
  }
  onSubmit(){
  	let observable = this._http.addAuthor(this.author);
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
		  this._router.navigate(['/'])
    }
  })
}
};

