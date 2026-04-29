// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WidgetsAPI from './widgets';
import { BaseWidgets, Widgets } from './widgets';

export class BaseTurnstile extends APIResource {
  static override readonly _key: readonly ['turnstile'] = Object.freeze(['turnstile'] as const);
}
export class Turnstile extends BaseTurnstile {
  widgets: WidgetsAPI.Widgets = new WidgetsAPI.Widgets(this._client);
}

Turnstile.Widgets = Widgets;
Turnstile.BaseWidgets = BaseWidgets;

export declare namespace Turnstile {
  export { Widgets as Widgets, BaseWidgets as BaseWidgets };
}
