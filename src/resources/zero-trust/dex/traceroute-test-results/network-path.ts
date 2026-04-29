// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseNetworkPath extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dex', 'tracerouteTestResults', 'networkPath'] =
    Object.freeze(['zeroTrust', 'dex', 'tracerouteTestResults', 'networkPath'] as const);
}
export class NetworkPath extends BaseNetworkPath {}
