// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as NetworkPathAPI from './network-path';
import { NetworkPath } from './network-path';

export class TracerouteTestResults extends APIResource {
  networkPath: NetworkPathAPI.NetworkPath = new NetworkPathAPI.NetworkPath(this._client);
}

TracerouteTestResults.NetworkPath = NetworkPath;

export declare namespace TracerouteTestResults {
  export { NetworkPath as NetworkPath };
}
