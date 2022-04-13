import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})


export class PokemonComponent implements OnInit {

  @Input()
  parametre: Pokemon = 
  {    
    id: 0,
    name: '',
    category: '',
    types: [],
    height: 0,
    weight: 0,
    image: ''
  };

  @Output()
  unEvenement = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendNameToFather(name :string): void{
    this.unEvenement.emit(name)
  }
}
