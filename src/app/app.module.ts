import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './componnet/navi/navi.component';
import { BrandComponent } from './componnet/brand/brand.component';
import { ColorComponent } from './componnet/color/color.component';
import { CustomerComponent } from './componnet/customer/customer.component';
import { RentAlComponent } from './componnet/rent-al/rent-al.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    RentAlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
