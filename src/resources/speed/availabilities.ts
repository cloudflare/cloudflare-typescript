// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseAvailabilities extends APIResource {
  static override readonly _key: readonly ['speed', 'availabilities'] = Object.freeze([
    'speed',
    'availabilities',
  ] as const);
}
export class Availabilities extends BaseAvailabilities {}
