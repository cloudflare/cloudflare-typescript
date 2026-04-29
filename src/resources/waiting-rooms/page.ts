// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BasePage extends APIResource {
  static override readonly _key: readonly ['waitingRooms', 'page'] = Object.freeze([
    'waitingRooms',
    'page',
  ] as const);
}
export class Page extends BasePage {}
