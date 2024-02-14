// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as PackagesAPI from 'cloudflare/resources/firewall/waf/packages/packages';

export class WAF extends APIResource {
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
}

export namespace WAF {
  export import Packages = PackagesAPI.Packages;
}
