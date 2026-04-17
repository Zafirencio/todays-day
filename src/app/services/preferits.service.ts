import { Injectable, signal, computed } from '@angular/core'
import { ElementCalendar as ElementCataleg } from '../models/elementCalendar.model';

@Injectable({
    providedIn: 'root'
})
export class PreferitsService 
{
    private readonly STORAGE_KEY = 'preferits-cataleg';
    private _preferits = signal<ElementCataleg[]>(this.loadLocalStorage());
    public preferits = this._preferits.asReadonly();
    public totalPreferits = computed(() => this._preferits().length)

    private loadLocalStorage(): ElementCataleg[]
    {
        try {
            const dades = localStorage.getItem(this.STORAGE_KEY)
            return dades ? JSON.parse(dades) : [];
        } catch (error) {
            console.error('Error carregant preferits:', error);
            return [];
        }
    }

    esPreferit(id: string): boolean
    {
        return this._preferits().some(item => item.id === id);
    }

    afegirPreferit(element: ElementCataleg): void
    {
        try {
            const actuals = this._preferits();
            if (!this.esPreferit(element.id)) {
                const nous = [...actuals, element];
                this._preferits.set(nous);
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(nous));
            }
        } catch (error) {
            console.error('Error afegint preferit:', error);
        }
    }
    eliminarPreferit(id: string): void
    {
        try {
            const nous = this._preferits().filter(item => item.id !== id);
            this._preferits.set(nous);
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(nous));
        } catch (error) {
            console.error('Error eliminant preferit:', error)
        }
    }
    actualitzarNotes(id: string, notes: string[]): void
    {
        try {
            const actuals = this._preferits();
            const nous= actuals.map(item =>
                item.id === id ? { ...item, notes: notes } : item
            );
            this._preferits.set(nous)
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(nous));
        } catch (error) {
            console.error('Error actualitzant notes:', error);
        }
    }
}