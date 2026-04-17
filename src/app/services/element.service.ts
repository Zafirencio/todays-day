import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ElementCalendar, ElementApiResponse } from '../models/elementCalendar.model';
import { adaptarElementsApi } from '../adaptadors/element.adaptador';

@Injectable({
    providedIn: 'root'
})
export class ElementService 
{
    private http = inject(HttpClient);
    private apiUrl = environment.apiUrl;

    private _elements = signal<ElementCalendar[]>([]);
    private _carregant = signal<boolean>(false);
    private _error = signal<string | null>(null);

    public elements = this._elements.asReadonly();
    public carregant = this._carregant.asReadonly();
    public error = this._error.asReadonly();

    obtenirPopulars(): void
    {
        this._carregant.set(true);
        this._error.set(null);

        this.http.get<ElementApiResponse[]>(`${environment.apiUrl}?popular=true`).subscribe({
            next: (data) => {
                const translatedData = adaptarElementsApi(data);
                this._elements.set(translatedData);
                this._carregant.set(false);
            },
            error: () => {
                this._error.set("No s'han pogut obtenir els esdeveniments del calendari");
                this._carregant.set(false);
            }
        });
    }
    cercar(terme: string): void
    {
        this._carregant.set(true);
        this._error.set(null);

        this.http.get<ElementApiResponse[]>(`${this.apiUrl}?name_like=${terme}`).subscribe({
            next: (data) => {
                const translatedData = adaptarElementsApi(data)
                this._elements.set(translatedData);
                this._carregant.set(false);
            },
            error: () => {
                this._error.set('Error en cercar els esdeveniments.');
                this._carregant.set(false);
            }
        });
    }
}