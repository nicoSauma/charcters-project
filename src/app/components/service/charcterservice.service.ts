import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../types/character';

@Injectable({
  providedIn: 'root'
})
export class CharcterserviceService {

  private baseUrl='http://localhost:3000/characters';
 http= inject(HttpClient);

getCharacters(): Observable<Character[]>{
  return this.http.get<Character[]>(this.baseUrl);
}

getCharactersById(id:string|null): Observable<Character>{
  return this.http.get<Character>(`${this.baseUrl}/${id}`);
}

postCharacters(character:Character): Observable<Character>{
  return this.http.post<Character>(this.baseUrl,character);
}

putTarea(character:Character ,id:string): Observable<Character>{
  return this.http.put<Character>(`${this.baseUrl}/${id}`,character);
}
deleteCharacter(id:string): Observable<void>{
  return this.http.delete<void>(`${this.baseUrl}/${id}`);
}

}
