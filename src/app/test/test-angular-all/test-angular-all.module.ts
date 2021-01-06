import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestAngularAllRoutingModule } from './test-angular-all-routing.module';
import { TestAngularAllComponent } from './test-angular-all.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { BoldDirective } from 'src/app/shared/directives/bold.directive';
import { BlankpageComponent } from './blankpage/blankpage.component';
import { TestGridComponent } from './test-grid/test-grid.component';
@NgModule({
  declarations: [
    TestAngularAllComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponentComponent,
    BoldDirective,
    BlankpageComponent,
    TestGridComponent
  ],
  imports: [CommonModule, TestAngularAllRoutingModule, FormsModule],
})
export class TestAngularAllModule {}
