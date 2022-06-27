import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { View } from "../view";

@customElement('dashboard-view')
export class DashboardView extends View {
  connectedCallback(): void {
      super.connectedCallback();
      this.classList.add('flex', 'flex-col','items-center','pt-xl');
  }

  render() {
    return html`<h1>Dashboard View</h1>`
  }
}