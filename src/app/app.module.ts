import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { SelectProjectComponentComponent } from './shared/components/select-project-component/select-project-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SelectProjectComponentComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
