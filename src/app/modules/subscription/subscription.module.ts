import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionPageComponent } from './pages/subscription-page/subscription-page.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';


@NgModule({
  declarations: [SubscriptionPageComponent, SubscriptionFormComponent],
  imports: [
    CommonModule,
    SubscriptionRoutingModule
  ]
})
export class SubscriptionModule { }
