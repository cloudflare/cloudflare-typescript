// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HostnamesAPI from './hostnames/hostnames';
import {
  BaseHostnames,
  Hostname,
  HostnameCreateParams,
  HostnameDeleteParams,
  HostnameDeleteResponse,
  HostnameEditParams,
  HostnameGetParams,
  HostnameListParams,
  Hostnames,
  HostnamesSinglePage,
} from './hostnames/hostnames';

export class BaseWeb3 extends APIResource {
  static override readonly _key: readonly ['web3'] = Object.freeze(['web3'] as const);
}
export class Web3 extends BaseWeb3 {
  hostnames: HostnamesAPI.Hostnames = new HostnamesAPI.Hostnames(this._client);
}

Web3.Hostnames = Hostnames;
Web3.BaseHostnames = BaseHostnames;

export declare namespace Web3 {
  export {
    Hostnames as Hostnames,
    BaseHostnames as BaseHostnames,
    type Hostname as Hostname,
    type HostnameDeleteResponse as HostnameDeleteResponse,
    type HostnamesSinglePage as HostnamesSinglePage,
    type HostnameCreateParams as HostnameCreateParams,
    type HostnameListParams as HostnameListParams,
    type HostnameDeleteParams as HostnameDeleteParams,
    type HostnameEditParams as HostnameEditParams,
    type HostnameGetParams as HostnameGetParams,
  };
}
