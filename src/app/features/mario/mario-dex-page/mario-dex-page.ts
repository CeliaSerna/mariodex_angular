import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarioService, Mario } from '../../../core/mario.service';
import { NgModule } from '@angular/core'; 
import { NuevoPersonaje } from '../nuevo-personaje/nuevo-personaje';


@Component({
  selector: 'app-mario-dex-page',
  standalone: true,
  templateUrl: './mario-dex-page.html',
  styleUrls: ['./mario-dex-page.css'],
  imports: [NuevoPersonaje, CommonModule],

})
export class MarioDexPage {
  personajes : Mario[] = [];
  modalAbierto = false;

  constructor(private MarioService: MarioService) {
    // Suscribirse al estado
    this.MarioService.pokemons$.subscribe(p => this.personajes = p);
  }

  abrirModal() {
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

  eliminarPokemon(nombre: any) {
    this.MarioService.removePokemon(nombre);
  }
}