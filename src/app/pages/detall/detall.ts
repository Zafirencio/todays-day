import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detall',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './detall.html',
  styleUrl: './detall.scss',
})
export class Detall implements OnInit{
  private route = inject(ActivatedRoute);

  idElement: string | null = null;

  ngOnInit(): void {
    this.idElement = this.route.snapshot.paramMap.get('id');
    console.log("Carregant detalls per l'ID:", this.idElement);
  }
}
