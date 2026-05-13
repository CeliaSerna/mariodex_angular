import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Mario {
  nombre: string;
  tipo: string;
  nivel: string;

}

@Injectable({
  providedIn: 'root'
})
export class MarioService {
  // Estado reactivo con BehaviorSubject
  private pokemonsSubject = new BehaviorSubject<Mario[]>([
    { nombre: 'Mario', tipo: 'Héroe', nivel: '100'},
    { nombre: 'Luigi', tipo: 'Héroe', nivel: '90'}
  ]);

  // Observable público
  pokemons$ = this.pokemonsSubject.asObservable();

  // Obtener valor actual
  getPokemons(): Mario[] {
    return this.pokemonsSubject.getValue();
  }

  // Añadir 
  addPokemon(pokemon: Mario) {
    const current = this.getPokemons();
    this.pokemonsSubject.next([...current, pokemon]);
  }

  // Eliminar 
  removePokemon(nombre: string) {
    const current = this.getPokemons();
    this.pokemonsSubject.next(current.filter(p => p.nombre !== nombre));
  }
}