// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WhoisAPI from 'cloudflare/resources/intel/whois';

export class Whois extends APIResource {
  /**
   * Get WHOIS Record
   */
  get(params: WhoisGetParams, options?: Core.RequestOptions): Core.APIPromise<IntelWhois> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/intel/whois`, { query, ...options }) as Core.APIPromise<{
        result: IntelWhois;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface IntelWhois {
  created_date?: string;

  domain?: string;

  nameservers?: Array<string>;

  registrant?: string;

  registrant_country?: string;

  registrant_email?: string;

  registrant_org?: string;

  registrar?: string;

  updated_date?: string;
}

export interface WhoisGetParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param:
   */
  domain?: string;
}

export namespace Whois {
  export import IntelWhois = WhoisAPI.IntelWhois;
  export import WhoisGetParams = WhoisAPI.WhoisGetParams;
}
