import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  public APIURL = "https://pokeapi.co/api/v2/pokemon/";
  constructor(private httpClient:HttpClient) { }

  public getPokemonAll():Observable<any>{
    return this.httpClient.get<any>(`${this.APIURL}?limit=50&offset=0`).pipe(
      tap(res=>res),
      tap(res=>{
        res.results.map((pokemon:any)=>{
          this.httpClient.get<any>(pokemon.url).pipe(map(res=>res)).subscribe(res=>pokemon.status = res)
        })
      })
    );
  }

  public getOnePokemon(id:any):Observable<any>{
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(res=>res)
  }
}
