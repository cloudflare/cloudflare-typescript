// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as HostnamesAPI from 'cloudflare/resources/web3/hostnames/hostnames';

export class Web3 extends APIResource {
  hostnames: HostnamesAPI.Hostnames = new HostnamesAPI.Hostnames(this._client);
}

export namespace Web3 {
  export import Hostnames = HostnamesAPI.Hostnames;
  export import Hostname = HostnamesAPI.Hostname;
  export import UnnamedSchemaRef2e420942fb77cd2cd2ba3ca7b5f32e1e = HostnamesAPI.UnnamedSchemaRef2e420942fb77cd2cd2ba3ca7b5f32e1e;
  export import HostnameDeleteResponse = HostnamesAPI.HostnameDeleteResponse;
  export import HostnamesSinglePage = HostnamesAPI.HostnamesSinglePage;
  export import HostnameCreateParams = HostnamesAPI.HostnameCreateParams;
  export import HostnameDeleteParams = HostnamesAPI.HostnameDeleteParams;
  export import HostnameEditParams = HostnamesAPI.HostnameEditParams;
}
