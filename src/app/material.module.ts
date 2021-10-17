import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { OverlayModule } from '@angular/cdk/overlay';

const MaterialComponents = [
  MatButtonModule,
  MatListModule,
  MatGridListModule,
  MatDividerModule,
  MatMenuModule,
  ScrollingModule,
  OverlayModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
