// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HostnamesAPI from './hostnames/hostnames';

export class Web3 extends APIResource {
  hostnames: HostnamesAPI.Hostnames = new HostnamesAPI.Hostnames(this._client);
}

export namespace Web3 {
  export import Hostnames = HostnamesAPI.Hostnames;
  export import Hostname = HostnamesAPI.Hostname;
}
