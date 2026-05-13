import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

export interface Mario {
  nombre: string;
  tipo: string;
  nivel: string;
  mundo: string;
}

@Injectable({
  providedIn: 'root'
})
export class MarioService {
  private url = 'http://localhost:8000/personajes'; // la ruta de laravel
  // Estado reactivo con BehaviorSubject
  private pokemonsSubject = new BehaviorSubject<Mario[]>([]);

  // Observable público
  pokemons$ = this.pokemonsSubject.asObservable();

  constructor(private http: HttpClient) {} // Inyectamos el cliente

  // Obtener valor actual
  getPokemons(): void {
    this.http.get<Mario[]>(this.url).subscribe(res => {
      this.pokemonsSubject.next(res);
  });
}

  // Añadir 
  addPokemon(pokemon: Mario) {
    const current = this.pokemonsSubject.getValue();
    this.pokemonsSubject.next([...current, pokemon]);
  }

  // Eliminar 
  removePokemon(nombre: string) {
    const current = this.pokemonsSubject.getValue();
    this.pokemonsSubject.next(current.filter(p => p.nombre !== nombre));
  }
}