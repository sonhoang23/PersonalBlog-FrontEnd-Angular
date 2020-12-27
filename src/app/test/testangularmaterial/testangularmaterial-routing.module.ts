import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestCardComponent } from './test-card/test-card.component';

import { TestangularmaterialComponent } from './testangularmaterial.component';

const routes: Routes = [
  { path: '', component: TestangularmaterialComponent },
  { path: 'testcard', component: TestCardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestangularmaterialRoutingModule {}
