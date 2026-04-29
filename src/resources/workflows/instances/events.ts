// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseEvents extends APIResource {
  static override readonly _key: readonly ['workflows', 'instances', 'events'] = Object.freeze([
    'workflows',
    'instances',
    'events',
  ] as const);
}
export class Events extends BaseEvents {}
