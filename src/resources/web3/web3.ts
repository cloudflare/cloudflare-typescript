// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HostnamesAPI from './hostnames/hostnames';

export class Web3 extends APIResource {
  hostnames: HostnamesAPI.Hostnames = new HostnamesAPI.Hostnames(this._client);
}

export namespace Web3 {
  export import Hostnames = HostnamesAPI.Hostnames;
  export import Hostname = HostnamesAPI.Hostname;
  export import HostnameDeleteResponse = HostnamesAPI.HostnameDeleteResponse;
  export import HostnamesSinglePage = HostnamesAPI.HostnamesSinglePage;
  export import HostnameCreateParams = HostnamesAPI.HostnameCreateParams;
  export import HostnameListParams = HostnamesAPI.HostnameListParams;
  export import HostnameDeleteParams = HostnamesAPI.HostnameDeleteParams;
  export import HostnameEditParams = HostnamesAPI.HostnameEditParams;
  export import HostnameGetParams = HostnamesAPI.HostnameGetParams;
}
