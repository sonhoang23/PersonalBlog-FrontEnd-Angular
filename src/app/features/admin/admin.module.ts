import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './AdminComponent/admin-header/admin-header.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/utils/material.module';
import { AdminBodyComponent } from './AdminComponent/admin-body/admin-body.component';
import { IndexComponent } from './AdminComponent/admin-body/index/index.component';
import { DrawContainerComponent } from './AdminComponent/draw-container/draw-container.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminBodyComponent,
    IndexComponent,
    DrawContainerComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, MaterialModule],
})
export class AdminModule {}
