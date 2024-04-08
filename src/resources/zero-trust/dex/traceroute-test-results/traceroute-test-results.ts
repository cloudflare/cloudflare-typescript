// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as NetworkPathAPI from 'cloudflare/resources/zero-trust/dex/traceroute-test-results/network-path';

export class TracerouteTestResults extends APIResource {
  networkPath: NetworkPathAPI.NetworkPathResource = new NetworkPathAPI.NetworkPathResource(this._client);
}

export namespace TracerouteTestResults {
  export import NetworkPathResource = NetworkPathAPI.NetworkPathResource;
  export import NetworkPath = NetworkPathAPI.NetworkPath;
  export import NetworkPathGetParams = NetworkPathAPI.NetworkPathGetParams;
}
