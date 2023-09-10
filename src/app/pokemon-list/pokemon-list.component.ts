import { Component } from '@angular/core';
import { Pokemon } from 'src/@types/pokemon';

import { Type } from 'src/@types/type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss', '../../colors.scss'],
})
export class PokemonListComponent {
  public pokemons: Pokemon[] = [
    {
      number: 1,
      name: 'Bulbasaur',
      types: [Type.Grass, Type.Poison],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      number: 2,
      name: 'Ivysaur',
      types: [Type.Grass, Type.Poison],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
    },
    {
      number: 3,
      name: 'Venusaur',
      types: [Type.Grass, Type.Poison],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
    },
    {
      number: 4,
      name: 'Chamander',
      types: [Type.Grass, Type.Poison],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    },
    {
      number: 5,
      name: 'Charmander',
      types: [Type.Grass, Type.Poison],
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
    },
  ];
}
