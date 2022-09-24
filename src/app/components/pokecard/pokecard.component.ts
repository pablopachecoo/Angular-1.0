import { Component, OnInit } from '@angular/core';
import { ConfigServiceService } from '../../config/config-service.service';


@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.css']
})
export class PokecardComponent implements OnInit {

  objeto: Object;
  nome = ''
  imgUrl=''
  response=''
  constructor(private service: ConfigServiceService ) { }

  ngOnInit(): void {
  }


  onImgError(event) { 
    event.target.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png';
  }
  //descricao : species{https://pokeapi.co/api/v2/pokemon-species/132/} flavor_text 
  description = "A Transform Pokémon. It is able to rearrange the cells of its body and assume any form. Its only attack is Transform."



  onSave(){
    console.log("iniciando o get https://pokeapi.co/api/v2/pokemon/lugia")
    const teste = this.service.getConfig()
    .subscribe((data) => {
      this.objeto = data;
      console.log(this.objeto)
      let parsedJSON = JSON.parse(JSON.stringify(this.objeto))
      this.nome=parsedJSON["species"].name
      this.imgUrl=parsedJSON["sprites"].front_default
      // this.description=parsedJSON["sprites"].front_default https://pokeapi.co/api/v2/pokemon-species/132/ 
      
  });
    //species.name
    //console.log(this.response)
    // console.log(parsedJSON["nbf"]) // 156412888
    // console.log(this.nome)
    
    // console.log(teste)
  }
  
}
