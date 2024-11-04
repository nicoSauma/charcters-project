import { Component, inject, OnInit } from '@angular/core';
import { CharctercardComponent } from '../charctercard/charctercard.component';
import { CharcterserviceService } from '../service/charcterservice.service';
import { Router } from '@angular/router';
import { Character } from '../../types/character';

@Component({
  selector: 'app-charcterlist',
  standalone: true,
  imports: [CharctercardComponent],
  templateUrl: './charcterlist.component.html',
  styleUrl: './charcterlist.component.css'
})
export class CharcterlistComponent implements OnInit {

  serviiceChr=inject(CharcterserviceService);
  router=inject(Router);
  characters:Array<Character>= [];

  ngOnInit(): void {
    this.serviiceChr.getCharacters().subscribe({
      next: (characters) => {
        this.characters = characters;
      },
      error: console.log
    })
  }
  onNavigate(id: String){
this.router.navigate([`characters/${id}`]);
  }

  onDelete (id:string){
    this.serviiceChr.deleteCharacter(id).subscribe({
      next:()=> { 
        console.log("Eliminado");
      },
      error: (e: Error)=>{
        console.log(e.message);
      }
    });
  }

  viajar()
  {
    this.router.navigate(['add-personaje']);
  }

}
