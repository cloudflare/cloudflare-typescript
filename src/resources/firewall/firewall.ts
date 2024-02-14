// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as WAFAPI from 'cloudflare/resources/firewall/waf/waf';

export class Firewall extends APIResource {
  waf: WAFAPI.WAF = new WAFAPI.WAF(this._client);
}

export namespace Firewall {
  export import WAF = WAFAPI.WAF;
}
