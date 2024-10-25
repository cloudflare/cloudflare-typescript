// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as NetworkPathAPI from './network-path';

export class TracerouteTestResults extends APIResource {
  networkPath: NetworkPathAPI.NetworkPath = new NetworkPathAPI.NetworkPath(this._client);
}

export namespace TracerouteTestResults {
  export import NetworkPath = NetworkPathAPI.NetworkPath;
  export type NetworkPathGetResponse = NetworkPathAPI.NetworkPathGetResponse;
  export type NetworkPathGetParams = NetworkPathAPI.NetworkPathGetParams;
}
