import {Component, Input} from '@angular/core';
import { ButtonColor } from './button.types';

@Component({
    selector: 'vtr-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  /**
   * Tipo do botão, apenas para mudar cor
   */
  @Input('color') color: ButtonColor = 'default';
}
