import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ParqueaderoComponent } from '../app/components/Parqueadero/index.component';
import { NewParqueaderoComponent } from '../app/components/Parqueadero/new.component';
import { DeleteParqueaderoComponent } from '../app/components/Parqueadero/delete.component';
import { EditParqueaderoComponent } from '../app/components/Parqueadero/edit.component';
import { IndexComponent } from '../app/components/Index/index.component';
import { BahiaComponent } from '../app/components/Bahia/index.component';
import { DeleteBahiaComponent } from '../app/components/Bahia/delete.component';
import { NewBahiaComponent } from '../app/components/Bahia/new.component';
import { EditBahiaComponent } from '../app/components/Bahia/edit.component';
import { VehiculoComponent } from '../app/components/Vehiculo/index.component';
import { NewVehiculoComponent } from '../app/components/Vehiculo/new.component';
import { DeleteVehiculoComponent } from '../app/components/Vehiculo/delete.component';
import { EditVehiculoComponent } from '../app/components/Vehiculo/edit.component';

import { AuthorComponent } from '../app/components/Author/index.component';
import { NewAuthorComponent } from '../app/components/Author/new.component';
import { DeleteAuthorComponent } from '../app/components/Author/delete.component';
import { EditAuthorComponent } from '../app/components/Author/edit.component';

import { routing, appRouterProviders } from './app.routes';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, ParqueaderoComponent,
                  IndexComponent, BahiaComponent,
                  NewParqueaderoComponent, DeleteParqueaderoComponent,
                  EditParqueaderoComponent, NewBahiaComponent,
                  DeleteBahiaComponent, EditBahiaComponent,
                  VehiculoComponent, NewVehiculoComponent,
                  DeleteVehiculoComponent, EditVehiculoComponent,
                  
                  
                  AuthorComponent, NewAuthorComponent, DeleteAuthorComponent,
                  EditAuthorComponent ],
  providers: [appRouterProviders],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
