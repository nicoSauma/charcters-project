import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CharcterserviceService } from '../service/charcterservice.service';
import { Character } from '../../types/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charcterform',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './charcterform.component.html',
  styleUrl: './charcterform.component.css'
})
export class CharcterformComponent {

  serviceChr=inject(CharcterserviceService);
  fb=inject(FormBuilder);
  router =inject(Router);

  formulario=this.fb.nonNullable.group({
    id:["", Validators.required],
    name:["",Validators.required],
    alias:["",Validators.required],
    powers:["",Validators.required],
    descripcion:["",Validators.required]
  });
  

  addCharacter(){
    if(this.formulario.invalid) return;
    const character = this.formulario.getRawValue();
    this.serviceChr.postCharacters(character).subscribe({
      next:()=>{  
          this.router.navigate(['characters']);
      },
      error:(e:Error)=>{
        console.log(e.message);
      }
    });
  }

}
