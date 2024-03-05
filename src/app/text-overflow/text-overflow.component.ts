import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-overflow',
  templateUrl: './text-overflow.component.html',
  styleUrls: ['./text-overflow.component.css']
})
export class TextOverflowComponent {
  @Input() clip: boolean = false;
  @Input() texto = "";
  @Input() titulo = "";
}
