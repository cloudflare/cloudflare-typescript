// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as LocationsAPI from 'cloudflare/resources/radar/email/security/top/locations/locations';
import * as ARCAPI from 'cloudflare/resources/radar/email/security/top/locations/arc';
import * as DKIMAPI from 'cloudflare/resources/radar/email/security/top/locations/dkim';
import * as DMARCAPI from 'cloudflare/resources/radar/email/security/top/locations/dmarc';
import * as MaliciousAPI from 'cloudflare/resources/radar/email/security/top/locations/malicious';
import * as SpamAPI from 'cloudflare/resources/radar/email/security/top/locations/spam';
import * as SPFAPI from 'cloudflare/resources/radar/email/security/top/locations/spf';

export class Locations extends APIResource {
  arc: ARCAPI.ARC = new ARCAPI.ARC(this._client);
  dkim: DKIMAPI.DKIM = new DKIMAPI.DKIM(this._client);
  dmarc: DMARCAPI.DMARC = new DMARCAPI.DMARC(this._client);
  malicious: MaliciousAPI.Malicious = new MaliciousAPI.Malicious(this._client);
  spam: SpamAPI.Spam = new SpamAPI.Spam(this._client);
  spf: SPFAPI.SPF = new SPFAPI.SPF(this._client);

  /**
   * Get the top locations by email messages. Values are a percentage out of the
   * total emails.
   */
  get(query?: LocationGetParams, options?: Core.RequestOptions): Core.APIPromise<LocationGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<LocationGetResponse>;
  get(
    query: LocationGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocationGetResponse> {
    if (isRequestOptions(query)) {
      return this.get({}, query);
    }
    return (
      this._client.get('/radar/email/security/top/locations', { query, ...options }) as Core.APIPromise<{
        result: LocationGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LocationGetResponse {
  meta: LocationGetResponse.Meta;

  top_0: Array<LocationGetResponse.Top0>;
}

export namespace LocationGetResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }

    export interface ConfidenceInfo {
      annotations?: Array<ConfidenceInfo.Annotation>;

      level?: number;
    }

    export namespace ConfidenceInfo {
      export interface Annotation {
        dataSource: string;

        description: string;

        eventType: string;

        isInstantaneous: unknown;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }

  export interface Top0 {
    clientCountryAlpha2: string;

    clientCountryName: string;

    value: string;
  }
}

export interface LocationGetParams {
  /**
   * Filter for arc (Authenticated Received Chain).
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl'
  >;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Filter for dkim.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filter for dmarc.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for spf.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;
}

export namespace Locations {
  export import LocationGetResponse = LocationsAPI.LocationGetResponse;
  export import LocationGetParams = LocationsAPI.LocationGetParams;
  export import ARC = ARCAPI.ARC;
  export import ARCGetResponse = ARCAPI.ARCGetResponse;
  export import ARCGetParams = ARCAPI.ARCGetParams;
  export import DKIM = DKIMAPI.DKIM;
  export import DKIMGetResponse = DKIMAPI.DKIMGetResponse;
  export import DKIMGetParams = DKIMAPI.DKIMGetParams;
  export import DMARC = DMARCAPI.DMARC;
  export import DMARCGetResponse = DMARCAPI.DMARCGetResponse;
  export import DMARCGetParams = DMARCAPI.DMARCGetParams;
  export import Malicious = MaliciousAPI.Malicious;
  export import MaliciousGetResponse = MaliciousAPI.MaliciousGetResponse;
  export import MaliciousGetParams = MaliciousAPI.MaliciousGetParams;
  export import Spam = SpamAPI.Spam;
  export import SpamGetResponse = SpamAPI.SpamGetResponse;
  export import SpamGetParams = SpamAPI.SpamGetParams;
  export import SPF = SPFAPI.SPF;
  export import SPFGetResponse = SPFAPI.SPFGetResponse;
  export import SPFGetParams = SPFAPI.SPFGetParams;
}
