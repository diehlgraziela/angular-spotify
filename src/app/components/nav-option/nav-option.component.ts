import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-option',
  imports: [RouterLink],
  templateUrl: './nav-option.component.html',
  styleUrl: './nav-option.component.scss',
})
export class NavOptionComponent {
  name = input<string>('');
  icon = input<string>('');
  route = input<string>('');
  active = input<boolean>(false);
  class = input<string>('');
  action = output<void>();

  click() {
    this.action.emit();
  }
}
