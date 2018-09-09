import { Component, OnInit } from '@angular/core';
import { HttpService } from '.././http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	update: any;
	author_id: any;
	cur: any;
	errs: any;
  constructor(private _http: HttpService,
  	private _route: ActivatedRoute,
  	private _router: Router) { }

  ngOnInit() {
  	this.update = {name: ''}
  	this._route.params.subscribe((params: Params) => this.author_id = params['id']);
  	this.getOne(this.author_id);

  }
  	getOne(id: any){
  		let observable = this._http.getAnAuthor(id)
  		observable.subscribe(data=> {
  			this.cur = data
  			console.log(this.cur)
  		})
  	}
 
 	edit(id: any){
		
		let observable = this._http.editAuthor(id, this.update);
		
		observable.subscribe(data=> {
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
  }

