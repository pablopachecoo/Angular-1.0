import { Component, OnInit } from '@angular/core';
import { ConfigServiceService } from '../../config/config-service.service';


@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.css']
})
export class PokecardComponent implements OnInit {

  teste:boolean = true;
  

  objeto: Object;
  nome = 'Pokemon'
  tipo = 'Type'
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



  onSave(nome){
    console.log("iniciando o get https://pokeapi.co/api/v2/pokemon/lugia")
    const teste = this.service.getConfig()
    .subscribe((data) => {
      this.objeto = data;
      console.log(this.objeto)
      let parsedJSON = JSON.parse(JSON.stringify(this.objeto))
      this.nome=parsedJSON["species"].name.charAt(0).toUpperCase()+ parsedJSON["species"].name.slice(1);
      const tipoTemp = parsedJSON["types"]
      var tipo = Array();

      // tipo.forEach(element => console.log(element));
      this.description
      tipoTemp.forEach(function (value) {
        tipo.push(value["type"].name.charAt(0).toUpperCase() + value["type"].name.slice(1))
        // console.log(value["type"].name)

        
      });
      this.tipo = tipo.join(" / ")
      this.imgUrl=parsedJSON["sprites"].front_default
      // this.description=parsedJSON["sprites"].front_default https://pokeapi.co/api/v2/pokemon-species/132/ 
      
  });

  const teste2 = this.service.getConfig()
    .subscribe((data) => {})
    //species.name
    //console.log(this.response)
    // console.log(parsedJSON["nbf"]) // 156412888
    // console.log(this.nome)
    
    // console.log(teste)
  }
  
}
