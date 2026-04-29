// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseAdvertisements extends APIResource {
  static override readonly _key: readonly ['magicNetworkMonitoring', 'rules', 'advertisements'] =
    Object.freeze(['magicNetworkMonitoring', 'rules', 'advertisements'] as const);
}
export class Advertisements extends BaseAdvertisements {}
