import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { IntroComponent } from './intro/intro.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    IntroComponent,
    BenefitsComponent,
    AboutUsComponent,
    PeoplesComponent,
    SubscribeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
