import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestAntRoutingModule } from './test-ant-routing.module';
import { TestAntComponent } from './test-ant.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
@NgModule({
  declarations: [TestAntComponent],
  imports: [
    CommonModule,
    TestAntRoutingModule,
    NzLayoutModule
  ]
})
export class TestAntModule { }
