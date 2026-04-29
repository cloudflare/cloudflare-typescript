// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseHostnameRoutes extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'networks', 'hostnameRoutes'] = Object.freeze([
    'zeroTrust',
    'networks',
    'hostnameRoutes',
  ] as const);
}
export class HostnameRoutes extends BaseHostnameRoutes {}
