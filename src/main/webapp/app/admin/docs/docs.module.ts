import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Provisionerevo2SharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [Provisionerevo2SharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent]
})
export class DocsModule {}
