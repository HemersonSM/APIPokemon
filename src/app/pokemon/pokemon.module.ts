import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { IndexComponent } from './index/index.component';

import {ImageModule} from 'primeng/image';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    ImageModule
  ]
})
export class PokemonModule { }
