// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as WhoisAPI from 'cloudflare/resources/intel/whois';

export class Whois extends APIResource {
  /**
   * Get WHOIS Record
   */
  get(
    accountId: string,
    query?: WhoisGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WhoisGetResponse>;
  get(accountId: string, options?: Core.RequestOptions): Core.APIPromise<WhoisGetResponse>;
  get(
    accountId: string,
    query: WhoisGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<WhoisGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/intel/whois`, { query, ...options }) as Core.APIPromise<{
        result: WhoisGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface WhoisGetResponse {
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
  domain?: string;
}

export namespace Whois {
  export import WhoisGetResponse = WhoisAPI.WhoisGetResponse;
  export import WhoisGetParams = WhoisAPI.WhoisGetParams;
}
