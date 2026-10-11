import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2>Clientes</h2>
    <ul>
      <li *ngFor="let c of clientes()">
        {{ c.nombre }}
        <button (click)="service.alternar(c.id)">{{ c.activo ? 'activo' : 'inactivo' }}</button>
      </li>
    </ul>
  `,
})
export class ClientesComponent {
  protected readonly service = inject(ClientesService);
  protected readonly clientes = this.service.clientes;
}
