// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as HostnamesAPI from 'cloudflare/resources/web3/hostnames/hostnames';

export class Web3 extends APIResource {
  hostnames: HostnamesAPI.Hostnames = new HostnamesAPI.Hostnames(this._client);
}

export namespace Web3 {
  export import Hostnames = HostnamesAPI.Hostnames;
  export import DwebConfigWeb3Hostname = HostnamesAPI.DwebConfigWeb3Hostname;
  export import HostnameListResponse = HostnamesAPI.HostnameListResponse;
  export import HostnameDeleteResponse = HostnamesAPI.HostnameDeleteResponse;
  export import HostnameCreateParams = HostnamesAPI.HostnameCreateParams;
  export import HostnameEditParams = HostnamesAPI.HostnameEditParams;
}
