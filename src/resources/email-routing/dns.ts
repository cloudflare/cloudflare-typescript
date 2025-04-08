// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DNSAPI from './dns';
import * as EmailRoutingAPI from './email-routing';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DNS extends APIResource {
  /**
   * Enable you Email Routing zone. Add and lock the necessary MX and SPF records.
   */
  create(params: DNSCreateParams, options?: RequestOptions): APIPromise<EmailRoutingAPI.Settings> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/email/routing/dns`, { body, ...options }) as APIPromise<{
        result: EmailRoutingAPI.Settings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Disable your Email Routing zone. Also removes additional MX records previously
   * required for Email Routing to work.
   */
  delete(params: DNSDeleteParams, options?: RequestOptions): PagePromise<DNSRecordsSinglePage, DNSRecord> {
    const { zone_id } = params;
    return this._client.getAPIList(path`/zones/${zone_id}/email/routing/dns`, SinglePage<DNSRecord>, {
      method: 'delete',
      ...options,
    });
  }

  /**
   * Unlock MX Records previously locked by Email Routing.
   */
  edit(params: DNSEditParams, options?: RequestOptions): APIPromise<EmailRoutingAPI.Settings> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/email/routing/dns`, { body, ...options }) as APIPromise<{
        result: EmailRoutingAPI.Settings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Show the DNS records needed to configure your Email Routing zone.
   */
  get(params: DNSGetParams, options?: RequestOptions): APIPromise<DNSGetResponse> {
    const { zone_id, ...query } = params;
    return this._client.get(path`/zones/${zone_id}/email/routing/dns`, { query, ...options });
  }
}

export type DNSRecordsSinglePage = SinglePage<DNSRecord>;

/**
 * List of records needed to enable an Email Routing zone.
 */
export interface DNSRecord {
  /**
   * DNS record content.
   */
  content?: string;

  /**
   * DNS record name (or @ for the zone apex).
   */
  name?: string;

  /**
   * Required for MX, SRV and URI records. Unused by other record types. Records with
   * lower priorities are preferred.
   */
  priority?: number;

  /**
   * Time to live, in seconds, of the DNS record. Must be between 60 and 86400, or 1
   * for 'automatic'.
   */
  ttl?: number | 1;

  /**
   * DNS record type.
   */
  type?:
    | 'A'
    | 'AAAA'
    | 'CNAME'
    | 'HTTPS'
    | 'TXT'
    | 'SRV'
    | 'LOC'
    | 'MX'
    | 'NS'
    | 'CERT'
    | 'DNSKEY'
    | 'DS'
    | 'NAPTR'
    | 'SMIMEA'
    | 'SSHFP'
    | 'SVCB'
    | 'TLSA'
    | 'URI';
}

export type DNSGetResponse =
  | DNSGetResponse.EmailEmailRoutingDNSQueryResponse
  | DNSGetResponse.EmailDNSSettingsResponseCollection;

export namespace DNSGetResponse {
  export interface EmailEmailRoutingDNSQueryResponse {
    errors: Array<EmailEmailRoutingDNSQueryResponse.Error>;

    messages: Array<EmailEmailRoutingDNSQueryResponse.Message>;

    /**
     * Whether the API call was successful
     */
    success: true;

    result?: EmailEmailRoutingDNSQueryResponse.Result;

    result_info?: EmailEmailRoutingDNSQueryResponse.ResultInfo;
  }

  export namespace EmailEmailRoutingDNSQueryResponse {
    export interface Error {
      code: number;

      message: string;
    }

    export interface Message {
      code: number;

      message: string;
    }

    export interface Result {
      errors?: Array<Result.Error>;

      record?: Array<DNSAPI.DNSRecord>;
    }

    export namespace Result {
      export interface Error {
        code?: string;

        /**
         * List of records needed to enable an Email Routing zone.
         */
        missing?: DNSAPI.DNSRecord;
      }
    }

    export interface ResultInfo {
      /**
       * Total number of results for the requested service
       */
      count?: number;

      /**
       * Current page within paginated list of results
       */
      page?: number;

      /**
       * Number of results per page of results
       */
      per_page?: number;

      /**
       * Total results available without any search parameters
       */
      total_count?: number;
    }
  }

  export interface EmailDNSSettingsResponseCollection {
    errors: Array<EmailDNSSettingsResponseCollection.Error>;

    messages: Array<EmailDNSSettingsResponseCollection.Message>;

    /**
     * Whether the API call was successful
     */
    success: true;

    result?: Array<DNSAPI.DNSRecord>;

    result_info?: EmailDNSSettingsResponseCollection.ResultInfo;
  }

  export namespace EmailDNSSettingsResponseCollection {
    export interface Error {
      code: number;

      message: string;
    }

    export interface Message {
      code: number;

      message: string;
    }

    export interface ResultInfo {
      /**
       * Total number of results for the requested service
       */
      count?: number;

      /**
       * Current page within paginated list of results
       */
      page?: number;

      /**
       * Number of results per page of results
       */
      per_page?: number;

      /**
       * Total results available without any search parameters
       */
      total_count?: number;
    }
  }
}

export interface DNSCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Domain of your zone.
   */
  name: string;
}

export interface DNSDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface DNSEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Domain of your zone.
   */
  name: string;
}

export interface DNSGetParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: Domain of your zone.
   */
  subdomain?: string;
}

export declare namespace DNS {
  export {
    type DNSRecord as DNSRecord,
    type DNSGetResponse as DNSGetResponse,
    type DNSRecordsSinglePage as DNSRecordsSinglePage,
    type DNSCreateParams as DNSCreateParams,
    type DNSDeleteParams as DNSDeleteParams,
    type DNSEditParams as DNSEditParams,
    type DNSGetParams as DNSGetParams,
  };
}
