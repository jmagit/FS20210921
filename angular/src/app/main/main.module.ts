import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { CommonServicesModule } from '../common-services';
import { NotificationModalComponent } from './notification-modal/notification-modal.component';
import { AjaxWaitComponent } from './ajax-wait';


@NgModule({
  declarations: [
    HomeComponent,
    NotificationComponent,
    NotificationModalComponent,
    AjaxWaitComponent,
  ],
  exports: [
    HomeComponent,
    NotificationComponent,
    NotificationModalComponent,
    AjaxWaitComponent,
  ],
  imports: [
    CommonModule, CommonServicesModule,
  ]
})
export class MainModule {
  constructor( @Optional() @SkipSelf() parentModule: MainModule) {
    if (parentModule) {
      const msg = `MainModule has already been loaded.
        Import MainModule once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}
