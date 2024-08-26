// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import { NetworkPath } from './network-path';
import * as NetworkPathAPI from './network-path';

export class TracerouteTestResults extends APIResource {
  networkPath: NetworkPathAPI.NetworkPath = new NetworkPathAPI.NetworkPath(this._client);
}

export namespace TracerouteTestResults {
  export import NetworkPath = NetworkPathAPI.NetworkPath;
  export import NetworkPathGetResponse = NetworkPathAPI.NetworkPathGetResponse;
  export import NetworkPathGetParams = NetworkPathAPI.NetworkPathGetParams;
}
