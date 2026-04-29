// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseWidgets extends APIResource {
  static override readonly _key: readonly ['turnstile', 'widgets'] = Object.freeze([
    'turnstile',
    'widgets',
  ] as const);
}
export class Widgets extends BaseWidgets {}
