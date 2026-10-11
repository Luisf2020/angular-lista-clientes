import { Injectable, signal } from '@angular/core';
import { Cliente } from './cliente.model';

@Injectable({ providedIn: 'root' })
export class ClientesService {
  private readonly _clientes = signal<Cliente[]>([
    { id: 1, nombre: 'Ana', activo: true },
    { id: 2, nombre: 'Bruno', activo: false },
  ]);

  readonly clientes = this._clientes.asReadonly();

  agregar(nombre: string): void {
    const limpio = nombre.trim();
    if (!limpio) return;
    const id = Math.max(0, ...this._clientes().map((c) => c.id)) + 1;
    this._clientes.update((lista) => [...lista, { id, nombre: limpio, activo: true }]);
  }

  alternar(id: number): void {
    this._clientes.update((lista) =>
      lista.map((c) => (c.id === id ? { ...c, activo: !c.activo } : c)),
    );
  }
}
