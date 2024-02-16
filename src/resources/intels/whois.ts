// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as WhoisAPI from 'cloudflare/resources/intels/whois';

export class Whois extends APIResource {
  /**
   * Get WHOIS Record
   */
  whoisRecordGetWhoisRecord(
    accountId: string,
    query?: WhoisWhoisRecordGetWhoisRecordParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WhoisWhoisRecordGetWhoisRecordResponse>;
  whoisRecordGetWhoisRecord(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WhoisWhoisRecordGetWhoisRecordResponse>;
  whoisRecordGetWhoisRecord(
    accountId: string,
    query: WhoisWhoisRecordGetWhoisRecordParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<WhoisWhoisRecordGetWhoisRecordResponse> {
    if (isRequestOptions(query)) {
      return this.whoisRecordGetWhoisRecord(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/intel/whois`, { query, ...options }) as Core.APIPromise<{
        result: WhoisWhoisRecordGetWhoisRecordResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface WhoisWhoisRecordGetWhoisRecordResponse {
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

export interface WhoisWhoisRecordGetWhoisRecordParams {
  domain?: string;
}

export namespace Whois {
  export import WhoisWhoisRecordGetWhoisRecordResponse = WhoisAPI.WhoisWhoisRecordGetWhoisRecordResponse;
  export import WhoisWhoisRecordGetWhoisRecordParams = WhoisAPI.WhoisWhoisRecordGetWhoisRecordParams;
}
