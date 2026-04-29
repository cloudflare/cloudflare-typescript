// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseConnectivityPrecheck extends APIResource {
  static override readonly _key: readonly ['r2', 'superSlurper', 'connectivityPrecheck'] = Object.freeze([
    'r2',
    'superSlurper',
    'connectivityPrecheck',
  ] as const);
}
export class ConnectivityPrecheck extends BaseConnectivityPrecheck {}
