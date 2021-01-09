import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionPageComponent } from './pages/subscription-page/subscription-page.component';


const routes: Routes = [
  {
    path: '',
    component: SubscriptionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
