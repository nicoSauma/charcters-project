import { Component, EventEmitter, Input,output,Output } from '@angular/core';
import { Character } from '../../types/character';

@Component({
  selector: 'app-charctercard',
  standalone: true,
  imports: [],
  templateUrl: './charctercard.component.html',
  styleUrl: './charctercard.component.css'
})
export class CharctercardComponent {
  @Input ()character!: Character;
  @Output() navigateEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();

  onNavigate(){
    this.navigateEvent.emit(this.character.id);
  }

  onDelte(){
    this.deleteEvent.emit(this.character.id);
  }
}
