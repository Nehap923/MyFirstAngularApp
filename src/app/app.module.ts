import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderpartComponent } from './headerpart/headerpart.component';
import { FooterComponent } from './footer/footer.component';
import { BlogsModule } from './blogs/blogs.module';
import { ProductModule } from './product/product.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from "@angular/material/icon"; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatTooltipModule } from '@angular/material/tooltip'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderpartComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogsModule,
    ProductModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
