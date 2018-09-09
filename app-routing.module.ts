import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AddquotesComponent } from './addquotes/addquotes.component';

const routes: Routes = [
	{path: "create", component: AddComponent},
	{path: "edit/:id", component: EditComponent},
	{path: "quotes/:id", component: QuotesComponent},
	{path: "addquotes/:id", component: AddquotesComponent},
	{path: "", component: HomeComponent},
	{path: "**", component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
