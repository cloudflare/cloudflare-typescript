// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseSeats extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'seats'] = Object.freeze([
    'zeroTrust',
    'seats',
  ] as const);
}
export class Seats extends BaseSeats {}
