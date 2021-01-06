import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestAntComponent } from './test-ant.component';

const routes: Routes = [{ path: '', component: TestAntComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestAntRoutingModule { }
