import { Component, inject, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharcterserviceService } from '../service/charcterservice.service';
import { Character } from '../../types/character';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-charcterdetail',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './charcterdetail.component.html',
  styleUrl: './charcterdetail.component.css'
})
export class CharcterdetailComponent implements OnInit {
  ngOnInit(): void {
   this.route.paramMap.subscribe(params=>{
    this.id=params.get("id");
    this.serviceChr.getCharactersById(this.id).subscribe(character=>{
        this.character=character;
    });

   }) ;
  }

route=inject(ActivatedRoute);
id?: string|null; 
serviceChr=inject(CharcterserviceService);
character!:Character;
}