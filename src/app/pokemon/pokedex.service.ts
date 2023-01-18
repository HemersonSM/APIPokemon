import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  public APIURL = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20";
  constructor(private httpClient:HttpClient) { }

  public getPokemonAll():Observable<any>{
    return this.httpClient.get<any>(this.APIURL).pipe(
      tap(res=>res),
      tap(res=>{
        res.results.map((pokemon:any)=>{
          this.httpClient.get<any>(pokemon.url).pipe(map(res=>res)).subscribe(res=>pokemon.status = res)
        })
      })
    );
  }
}
