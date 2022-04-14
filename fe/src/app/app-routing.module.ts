import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhongtroListComponent} from './components/phongtro-list/phongtro-list.component';
import {AddPhongtroComponent} from './components/add-phongtro/add-phongtro.component';
import { UpdatePhongtroComponent } from './components/update-phongtro/update-phongtro.component';
import { ListKhachtroComponent } from './components/list-khachtro/list-khachtro.component';
import { UpdateKhachtroComponent } from './components/update-khachtro/update-khachtro.component';
import { AddKhachtroComponent } from './components/add-khachtro/add-khachtro.component';

const routes: Routes = [
  {path: '', redirectTo: 'phongtro', pathMatch: 'full'},
  {path: 'phongtro', component: PhongtroListComponent},
  {path: 'add-phongtro', component: AddPhongtroComponent},
  {path: 'update-phongtro/:soPhong', component: UpdatePhongtroComponent},
  {path: 'khachtro', component: ListKhachtroComponent},
  {path: 'update-khachtro/:id', component: UpdateKhachtroComponent},
  {path: 'add-khachtro', component: AddKhachtroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
