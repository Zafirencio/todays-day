import { Component, inject, OnInit, effect } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { PreferitsService } from '../../services/preferits.service';
import { ElementCalendar } from '../../models/elementCalendar.model';

@Component({
  selector: 'app-preferits-panel',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './preferits-panel.html',
  styleUrl: './preferits-panel.scss'
})
export class PreferitsPanel implements OnInit
{
    private fb = inject(FormBuilder);
    public preferitsService = inject(PreferitsService)

    forms: { [key: string]: FormGroup } = {};

    constructor() 
    {
        effect(() => {
            const llistaPreferits = this.preferitsService.preferits();
            llistaPreferits.forEach(fav => {
                if (!this.forms[fav.id]) {
                    this.crearFormulari(fav);
                }
            })
        })
    }

    ngOnInit(): void 
    {
        this.preferitsService.preferits().forEach(fav => {
            this.crearFormulari(fav);
        });
    }

    crearFormulari(element: ElementCalendar)
    {
        const notesArray = this.fb.array(
            (element.notes || []).map(nota => this.fb.control(nota, [Validators.required, Validators.minLength(3)]))
        );
        this.forms[element.id] = this.fb.group({
            notes: notesArray
        });
        this.forms[element.id].valueChanges.subscribe(val => {
            if (this.forms[element.id].valid) {
                this.actualitzarNotes(element.id, val.notes);
            }
        });
    }

    getNotes(id: string) 
    {
        return this.forms[id].get('notes') as FormArray;
    }

    afegirNota(id: string) 
    {
        this.getNotes(id).push(this.fb.control('', [Validators.required, Validators.minLength(3)]))
    }
    eliminarNota(id: string, index: number)
    {
        this.getNotes(id).removeAt(index);
    }
    actualitzarNotes(id: string, notes: string[])
    {
        this.preferitsService.actualitzarNotes(id, notes);
    }
}