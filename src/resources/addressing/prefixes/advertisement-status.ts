// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseAdvertisementStatus extends APIResource {
  static override readonly _key: readonly ['addressing', 'prefixes', 'advertisementStatus'] = Object.freeze([
    'addressing',
    'prefixes',
    'advertisementStatus',
  ] as const);
}
export class AdvertisementStatus extends BaseAdvertisementStatus {}
