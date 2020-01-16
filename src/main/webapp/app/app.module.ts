import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Provisionerevo2SharedModule } from 'app/shared/shared.module';
import { Provisionerevo2CoreModule } from 'app/core/core.module';
import { Provisionerevo2AppRoutingModule } from './app-routing.module';
import { Provisionerevo2HomeModule } from './home/home.module';
import { Provisionerevo2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Provisionerevo2SharedModule,
    Provisionerevo2CoreModule,
    Provisionerevo2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Provisionerevo2EntityModule,
    Provisionerevo2AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class Provisionerevo2AppModule {}
