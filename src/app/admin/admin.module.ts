import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { UniversitysComponent } from './universitys/universitys.component';
import { EditUniversitysComponent } from './universitys/edit-universitys/edit-universitys.component';
import { NewUniversitysComponent } from './universitys/new-universitys/new-universitys.component';
import { ListUniversitysComponent } from './universitys/list-universitys/list-universitys.component';
import { CarreraComponent } from './carrera/carrera.component';
import { NewCarreraComponent } from './carrera/new-carrera/new-carrera.component';
import { EditCarreraComponent } from './carrera/edit-carrera/edit-carrera.component';
import { ListCarreraComponent } from './carrera/list-carrera/list-carrera.component';
import { DeleteCarreraComponent } from './carrera/delete-carrera/delete-carrera.component';
import { DeleteUniversitysComponent } from './universitys/delete-universitys/delete-universitys.component';
import { MaterialModule } from '../material/material.module';
import { SugerenciasUniversityComponent } from './sugerencias-university/sugerencias-university.component';
import { TestListComponent } from './tests/test-list/test-list.component';
import { NewTestComponent } from './tests/new-test/new-test.component';


@NgModule({
  declarations: [
    LayoutComponent,
    UniversitysComponent,
    EditUniversitysComponent,
    NewUniversitysComponent,
    ListUniversitysComponent,
    CarreraComponent,
    NewCarreraComponent,
    EditCarreraComponent,
    ListCarreraComponent,
    DeleteCarreraComponent,
    DeleteUniversitysComponent,
    SugerenciasUniversityComponent,
    TestListComponent,
    NewTestComponent,
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
