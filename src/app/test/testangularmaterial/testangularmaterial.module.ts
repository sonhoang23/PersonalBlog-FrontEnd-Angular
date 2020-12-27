import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestangularmaterialRoutingModule } from './testangularmaterial-routing.module';
import { TestangularmaterialComponent } from './testangularmaterial.component';
import { TestCardComponent } from './test-card/test-card.component';
/*angular material */
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [TestangularmaterialComponent, TestCardComponent],
  imports: [CommonModule, TestangularmaterialRoutingModule, MatCardModule],
})
export class TestangularmaterialModule {}
