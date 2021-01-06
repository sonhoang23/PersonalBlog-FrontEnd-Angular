import { TestGridComponent } from './test-grid/test-grid.component';
import { BlankpageComponent } from './blankpage/blankpage.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestAngularAllComponent } from './test-angular-all.component';

const routes: Routes = [
  { path: '', component: TestAngularAllComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponentComponent },
  { path: 'blankpage', component: BlankpageComponent },
  { path: 'grid', component: TestGridComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestAngularAllRoutingModule {}
