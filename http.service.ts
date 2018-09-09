import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
		// this.getTasks();
		// this.getATasks("5b228dc9b37cb6125b1d01bb");
	}
	getAuthors(){
		// let tempObservable = this._http.get('/tasks');

		// tempObservable.subscribe(data=> console.log('This is magic!', data));
		return this._http.get('/api/authors')
	}
	getAnAuthor(id){
	 	// let tempObservable = this._http.get('/api/authors/'+id)

	 	// tempObservable.subscribe(data=> console.log('More magic!', data));
		return this._http.get('/api/authors/'+id)
	}
	
	addAuthor(newAuthor){
		return this._http.post('/api/authors', newAuthor)
	}
	deleteAuthor(id){
		return this._http.delete('/api/authors/'+id)
	}
	editAuthor(id, editAnAuthor){
	
		return this._http.put('/api/authors/'+id, editAnAuthor)
	}
	addAQuote(id, quoteStuff){
		return this._http.post('/api/authors/'+id, quoteStuff)
	}
	deleteQuote(id){
		return this._http.get('/api/authors/'+id)
	}
}
