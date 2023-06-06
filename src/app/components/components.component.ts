import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent {
  testService = inject(TestService);

  constructor() {
    this.testService.test();
  }
}
