import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

interface generation {
  gen: string;
  name: string;
  year: number;
  image: string;
}

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  listTitle :string = "Liste des générations"
  generations :generation[] = [];

  constructor(private route:Router){};

  ngOnInit(): void {
    console.log("AppComponent => ngOnInit")
    this.generations = [
      {
        gen:"I",
        name:"Rouge/Vert/Bleu/Jaune",
        year:1996,
        image:"https://lesgicques.fr/wp-content/uploads/2016/02/pokemonbrj-lesgicques.jpg"
      },
      {
        gen:"II",
        name:"Or/Argent",
        year:1999,
        image:"https://www.pokebip.com/pages/jeuxvideo/bannieres/or-argent.png"
      },
      {
        gen:"III",
        name:"Rubis/Saphir/Émeraude",
        year:2002,
        image:"https://www.pokebip.com/pages/jeuxvideo/bannieres/rubis-saphir.png"
      },
      {
        gen:"IV",
        name:"Diamant/Perle/Platine",
        year:2006,
        image:"https://www.pokebip.com/pages/jeuxvideo/bannieres/diamant-perle-2.png"
      },
      {
        gen:"V",
        name:"Noir/Blanc",
        year:2010,
        image:"https://www.pokebip.com/pages/jeuxvideo/bannieres/noire-blanche.png"
      },
      {
        gen:"VI",
        name:"X/Y",
        year:2013,
        image:"https://www.pokebip.com/pages/jeuxvideo/bannieres/x-y-2.png"
      },
      {
        gen:"VII",
        name:"Soleil/Lune",
        year:2016,
        image:"https://www.pokebip.com/pages/jeuxvideo/bannieres/soleil-lune.png"
      },
      {
        gen:"VIII",
        name:"Epée/Bouclier",
        year:2019,
        image:"https://www.pokebip.com/pages/jeuxvideo/bannieres/epee-bouclier-2.png"
      }
    ]
  }

  goToPokemons(): void{
    this.route.navigate(["pokedex"]);
  }

}
