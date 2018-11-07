import { NgModule } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardmenuComponent } from '../cardmenu/cardmenu.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'cardmenu', component: CardmenuComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CardmenuComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
