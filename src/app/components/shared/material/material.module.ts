import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatListModule,
    MatToolbarModule,
  ],
  exports: [
    MatChipsModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
  ]
})
export class MaterialModule { }
