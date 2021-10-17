import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownTriggerForDirective } from './dropdown/dropdown-trigger-for.directive';
import { SaveQueryPanelComponent } from './save-query-panel/save-query-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownTriggerForDirective,
    DropdownComponent,
    SaveQueryPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
