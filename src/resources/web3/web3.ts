// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HostnamesAPI from './hostnames/hostnames';
import { Hostnames } from './hostnames/hostnames';

export class Web3 extends APIResource {
  hostnames: HostnamesAPI.Hostnames = new HostnamesAPI.Hostnames(this._client);
}

Web3.Hostnames = Hostnames;

export declare namespace Web3 {
  export { Hostnames as Hostnames };
}
