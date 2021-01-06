import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerHeaderComponent } from './CustomerComponent/customer-header/customer-header.component';
import { MaterialModule } from 'src/app/core/utils/material.module';

@NgModule({
  declarations: [CustomerComponent, CustomerHeaderComponent],
  imports: [CommonModule, CustomerRoutingModule, MaterialModule],
})
export class CustomerModule {}
