// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as HostnamesAPI from 'cloudflare/resources/web3/hostnames/hostnames';

export class Web3 extends APIResource {
  hostnames: HostnamesAPI.Hostnames = new HostnamesAPI.Hostnames(this._client);
}

export namespace Web3 {
  export import Hostnames = HostnamesAPI.Hostnames;
  export import DistributedWebHostname = HostnamesAPI.DistributedWebHostname;
  export import HostnameDeleteResponse = HostnamesAPI.HostnameDeleteResponse;
  export import DistributedWebHostnamesSinglePage = HostnamesAPI.DistributedWebHostnamesSinglePage;
  export import HostnameCreateParams = HostnamesAPI.HostnameCreateParams;
  export import HostnameDeleteParams = HostnamesAPI.HostnameDeleteParams;
  export import HostnameEditParams = HostnamesAPI.HostnameEditParams;
}
