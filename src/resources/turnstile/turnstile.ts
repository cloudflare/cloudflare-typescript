// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as WidgetsAPI from './widgets';
import { Widgets } from './widgets';

export class Turnstile extends APIResource {
  widgets: WidgetsAPI.Widgets = new WidgetsAPI.Widgets(this._client);
}

Turnstile.Widgets = Widgets;

export declare namespace Turnstile {
  export { Widgets as Widgets };
}
