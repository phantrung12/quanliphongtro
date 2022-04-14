import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPhongtroComponent } from './components/add-phongtro/add-phongtro.component';
import { PhongtroListComponent } from './components/phongtro-list/phongtro-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdatePhongtroComponent } from './components/update-phongtro/update-phongtro.component';
import { ListKhachtroComponent } from './components/list-khachtro/list-khachtro.component';
import { AddKhachtroComponent } from './components/add-khachtro/add-khachtro.component';
import { UpdateKhachtroComponent } from './components/update-khachtro/update-khachtro.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AddPhongtroComponent,
    PhongtroListComponent,
    UpdatePhongtroComponent,
    ListKhachtroComponent,
    AddKhachtroComponent,
    UpdateKhachtroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
