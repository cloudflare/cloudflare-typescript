// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as HostnamesAPI from 'cloudflare/resources/web3s/hostnames/hostnames';

export class Web3s extends APIResource {
  hostnames: HostnamesAPI.Hostnames = new HostnamesAPI.Hostnames(this._client);
}

export namespace Web3s {
  export import Hostnames = HostnamesAPI.Hostnames;
  export import HostnameUpdateResponse = HostnamesAPI.HostnameUpdateResponse;
  export import HostnameDeleteResponse = HostnamesAPI.HostnameDeleteResponse;
  export import HostnameGetResponse = HostnamesAPI.HostnameGetResponse;
  export import HostnameWeb3HostnameCreateWeb3HostnameResponse = HostnamesAPI.HostnameWeb3HostnameCreateWeb3HostnameResponse;
  export import HostnameWeb3HostnameListWeb3HostnamesResponse = HostnamesAPI.HostnameWeb3HostnameListWeb3HostnamesResponse;
  export import HostnameUpdateParams = HostnamesAPI.HostnameUpdateParams;
  export import HostnameWeb3HostnameCreateWeb3HostnameParams = HostnamesAPI.HostnameWeb3HostnameCreateWeb3HostnameParams;
}
