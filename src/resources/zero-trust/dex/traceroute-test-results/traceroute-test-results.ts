// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as NetworkPathAPI from './network-path';
import { BaseNetworkPath, NetworkPath } from './network-path';

export class BaseTracerouteTestResults extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dex', 'tracerouteTestResults'] = Object.freeze([
    'zeroTrust',
    'dex',
    'tracerouteTestResults',
  ] as const);
}
export class TracerouteTestResults extends BaseTracerouteTestResults {
  networkPath: NetworkPathAPI.NetworkPath = new NetworkPathAPI.NetworkPath(this._client);
}

TracerouteTestResults.NetworkPath = NetworkPath;
TracerouteTestResults.BaseNetworkPath = BaseNetworkPath;

export declare namespace TracerouteTestResults {
  export { NetworkPath as NetworkPath, BaseNetworkPath as BaseNetworkPath };
}
