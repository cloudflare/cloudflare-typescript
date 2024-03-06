// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as NetworkPathAPI from 'cloudflare/resources/zero-trust/dex/traceroute-test-results/network-path';

export class TracerouteTestResults extends APIResource {
  networkPath: NetworkPathAPI.NetworkPath = new NetworkPathAPI.NetworkPath(this._client);
}

export namespace TracerouteTestResults {
  export import NetworkPath = NetworkPathAPI.NetworkPath;
  export import NetworkPathListResponse = NetworkPathAPI.NetworkPathListResponse;
  export import NetworkPathListParams = NetworkPathAPI.NetworkPathListParams;
}
