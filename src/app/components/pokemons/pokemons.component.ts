import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonModel } from 'src/app/modeles/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})

export class PokemonsComponent implements OnInit {
  listTitle :string = "Les six premiers Pokémon :"
  pokedex :Pokemon[] =[];
  order :string = "ASC";
  selectedPokemon :string = "aucun";
  nameFilter :string = "";

  constructor(private pokemonService :PokemonsService) { }

  name = new FormControl('', [
    Validators.required,
    this.nameRegex
  ]);
  pokemonFilter = new FormGroup({
    name: this.name
  });


  nameRegex(field :FormControl){
    const regex = new RegExp('^[a-zA-Z \-\']+')

    if(field.value == null){
      return null;
    }

    if(field.value.includes("C3PO")){
      return null;
    }

    else {
      console.log(field.value, regex.test(field.value))
      if(regex.test(field.value)){
        return null;
      }
      else{
        return {mauvaisNom: true}
      }
    }
  }

  sendPokemonFilter(formData :PokemonModel){
    this.nameFilter = formData.name
    if(formData.name.includes("C3PO")){
      this.nameFilter = ''
      this.pokedex = [{
        id: 0,
        name: "C3PO",
        category: "Droid",
        types: ["Acier"],
        height: 1.8,
        weight: 100,
        image: "http://media.giphy.com/media/3o7bu1nVSxNQUWMAZa/source.gif"
      }]
    }
  }

  resetPokemonFilter(){
    this.pokemonService.getAllPokemon().subscribe(data => {
      this.pokedex = data;
    });
  }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe(data => {
      this.pokedex = data;
    });
  }

  receptionMessage(msgName :string) {
    this.selectedPokemon = msgName;
  }

  getColortype(pokemon :Pokemon) :object {
    let border :string = "";
    let background :string = "";

    if(pokemon.types.includes("Plante")){
      border = "green"
      background = "rgba(0, 128, 0, 0.30)"
    }

    if(pokemon.types.includes("Feu")){
      border = "red"
      background = "rgba(255, 0, 0, 0.30)"
    }

    return {'border': '1px solid '+border, 'background-color' : background};
  }

}
