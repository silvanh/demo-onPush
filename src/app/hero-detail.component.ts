import { Component, DoCheck, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Hero } from './hero';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  imports: [FormsModule]
})
export class HeroDetailComponent implements DoCheck{
  @Input() hero!: Hero;

  ngDoCheck(): void {
    console.count('details component update');
  }
}
