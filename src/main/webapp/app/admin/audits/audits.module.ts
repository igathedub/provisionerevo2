import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Provisionerevo2SharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [Provisionerevo2SharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent]
})
export class AuditsModule {}
