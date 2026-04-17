import { Component, EventEmitter, Output, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Observable, timer, of } from 'rxjs';
import { map, switchMap, catchError, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { environment } from '../../environments/environment';

// VALIDADOR ASÍNCRON. 
export function codiDisponibleValidator(http: HttpClient): AsyncValidatorFn
{
  return(control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value || control.value.length < 2) {
      return of(null);
    }
    return timer(500).pipe(
      switchMap(() => http.get<any[]>(`${environment.apiUrl}?title_like=${control.value}`)),
      map(res => res.length === 0 ? {sensResultats: true } : null),
      catchError(() => of(null))
    );
  };
}
@Component({
  selector: 'app-barra-cerca',
  imports: [ReactiveFormsModule],
  templateUrl: './barra-cerca.html',
  styleUrl: './barra-cerca.scss',
})
export class BarraCerca implements OnInit{
  @Output() searchTerm = new EventEmitter<string>();
  private http = inject(HttpClient);

  termeCerca = new FormControl('', {
    validators: [
      Validators.minLength(2),
      Validators.maxLength(50)
    ],
    asyncValidators: [codiDisponibleValidator(this.http)]
  });
  
  ngOnInit(): void {
    this.termeCerca.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(value => {
      if (this.termeCerca.valid || value === '') {
        this.searchTerm.emit(value || '');
      }
    });
  }

  netejar() {
    this.termeCerca.setValue('');
    this.termeCerca.markAsUntouched();
    this.searchTerm.emit('');
  }
/*
  onSearchTermChange() 
  {
    this.searchTerm.emit(this.searchText);
  }
  onSearchTermErased(value: string) {
    if (!value)
      this.searchTerm.emit('');
  }*/
}
