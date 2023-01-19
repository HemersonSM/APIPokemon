import {Component, OnInit} from '@angular/core';
import {PokedexService} from "../pokedex.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public pokemons: any;
  public pokes:any;
  public colors: any = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#F4E7DA",
    rock: "#D5D5D4",
    fairy: "#FCEAFF",
    poison: "#98D7a5",
    bug: "#F8D5A3",
    dragon: "#97B3e6",
    psychic: "#EAEDA1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
  }
  display:boolean = false;

  constructor(private pokedexService: PokedexService) {
  }

  ngOnInit() {
    this.pokedexService.getPokemonAll().subscribe(res => {
      this.pokemons = res.results
    })

  }

  public showDialog(id:any) {
   this.display=true;
    this.pokedexService.getOnePokemon(id).subscribe(res=>{
      this.pokes = res,
        console.log(res)
    })
  }

}
