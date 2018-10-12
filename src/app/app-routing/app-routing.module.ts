import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { CardmenuComponent } from '../cardmenu/cardmenu.component';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full'},
  { path: 'form', component: FormComponent},
  { path: 'cardmenu', component: CardmenuComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
