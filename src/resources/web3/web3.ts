// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HostnamesAPI from './hostnames/hostnames';

export class Web3 extends APIResource {
  hostnames: HostnamesAPI.Hostnames = new HostnamesAPI.Hostnames(this._client);
}

export namespace Web3 {
  export import Hostnames = HostnamesAPI.Hostnames;
  export type Hostname = HostnamesAPI.Hostname;
  export type HostnameDeleteResponse = HostnamesAPI.HostnameDeleteResponse;
  export import HostnamesSinglePage = HostnamesAPI.HostnamesSinglePage;
  export type HostnameCreateParams = HostnamesAPI.HostnameCreateParams;
  export type HostnameListParams = HostnamesAPI.HostnameListParams;
  export type HostnameDeleteParams = HostnamesAPI.HostnameDeleteParams;
  export type HostnameEditParams = HostnamesAPI.HostnameEditParams;
  export type HostnameGetParams = HostnamesAPI.HostnameGetParams;
}
