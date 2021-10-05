import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { ElipsisPipe } from './compartidos/cadenas.pipe';
import { SizerComponent } from './compartidos/sizer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemosComponent,
    ElipsisPipe,
    SizerComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
