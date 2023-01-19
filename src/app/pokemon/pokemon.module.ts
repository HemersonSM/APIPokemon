import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { IndexComponent } from './index/index.component';

import {ImageModule} from 'primeng/image';
import {DialogModule} from 'primeng/dialog';
import {ChipModule} from "primeng/chip";

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    ImageModule,
    DialogModule,

  ]
})
export class PokemonModule { }
