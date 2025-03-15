// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as SummaryAPI from './summary';
import {
  Summary,
  SummaryCacheHitParams,
  SummaryCacheHitResponse,
  SummaryDNSSECAwareParams,
  SummaryDNSSECAwareResponse,
  SummaryDNSSECE2EParams,
  SummaryDNSSECE2EResponse,
  SummaryDNSSECParams,
  SummaryDNSSECResponse,
  SummaryIPVersionParams,
  SummaryIPVersionResponse,
  SummaryMatchingAnswerParams,
  SummaryMatchingAnswerResponse,
  SummaryProtocolParams,
  SummaryProtocolResponse,
  SummaryQueryTypeParams,
  SummaryQueryTypeResponse,
  SummaryResponseCodeParams,
  SummaryResponseCodeResponse,
  SummaryResponseTTLParams,
  SummaryResponseTTLResponse,
} from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import {
  TimeseriesGroupCacheHitParams,
  TimeseriesGroupCacheHitResponse,
  TimeseriesGroupDNSSECAwareParams,
  TimeseriesGroupDNSSECAwareResponse,
  TimeseriesGroupDNSSECE2EParams,
  TimeseriesGroupDNSSECE2EResponse,
  TimeseriesGroupDNSSECParams,
  TimeseriesGroupDNSSECResponse,
  TimeseriesGroupIPVersionParams,
  TimeseriesGroupIPVersionResponse,
  TimeseriesGroupMatchingAnswerParams,
  TimeseriesGroupMatchingAnswerResponse,
  TimeseriesGroupProtocolParams,
  TimeseriesGroupProtocolResponse,
  TimeseriesGroupQueryTypeParams,
  TimeseriesGroupQueryTypeResponse,
  TimeseriesGroupResponseCodeParams,
  TimeseriesGroupResponseCodeResponse,
  TimeseriesGroupResponseTTLParams,
  TimeseriesGroupResponseTTLResponse,
  TimeseriesGroups,
} from './timeseries-groups';
import * as TopAPI from './top';
import { Top, TopAsesParams, TopAsesResponse, TopLocationsParams, TopLocationsResponse } from './top';

export class DNS extends APIResource {
  top: TopAPI.Top = new TopAPI.Top(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );

  /**
   * Retrieves normalized query volume to the 1.1.1.1 DNS resolver over time.
   */
  timeseries(
    query?: DNSTimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSTimeseriesResponse>;
  timeseries(options?: Core.RequestOptions): Core.APIPromise<DNSTimeseriesResponse>;
  timeseries(
    query: DNSTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSTimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.timeseries({}, query);
    }
    return (
      this._client.get('/radar/dns/timeseries', { query, ...options }) as Core.APIPromise<{
        result: DNSTimeseriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DNSTimeseriesResponse {
  meta: DNSTimeseriesResponse.Meta;

  serie_0: DNSTimeseriesResponse.Serie0;
}

export namespace DNSTimeseriesResponse {
  export interface Meta {
    aggInterval: string;

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

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }

  export interface Serie0 {
    timestamps: Array<string>;

    values: Array<string>;
  }
}

export interface DNSTimeseriesParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Comma-separated list of continents (alpha-2 continent codes). Prefix with `-` to
   * exclude continents from results. For example, `-EU,NA` excludes results from EU,
   * but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by the specified date range. For example, use `7d` and
   * `7dcontrol` to compare this week with the previous week. Use this parameter or
   * set specific start and end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Comma-separated list of locations (alpha-2 codes). Prefix with `-` to exclude
   * locations from results. For example, `-US,PT` excludes results from the US, but
   * includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Includes empty DNS responses (NODATA).
   */
  nodata?: boolean;

  /**
   * Filters results by DNS transport protocol.
   */
  protocol?: 'UDP' | 'TCP' | 'HTTPS' | 'TLS';

  /**
   * Filters results by DNS query type.
   */
  queryType?:
    | 'A'
    | 'AAAA'
    | 'A6'
    | 'AFSDB'
    | 'ANY'
    | 'APL'
    | 'ATMA'
    | 'AXFR'
    | 'CAA'
    | 'CDNSKEY'
    | 'CDS'
    | 'CERT'
    | 'CNAME'
    | 'CSYNC'
    | 'DHCID'
    | 'DLV'
    | 'DNAME'
    | 'DNSKEY'
    | 'DOA'
    | 'DS'
    | 'EID'
    | 'EUI48'
    | 'EUI64'
    | 'GPOS'
    | 'GID'
    | 'HINFO'
    | 'HIP'
    | 'HTTPS'
    | 'IPSECKEY'
    | 'ISDN'
    | 'IXFR'
    | 'KEY'
    | 'KX'
    | 'L32'
    | 'L64'
    | 'LOC'
    | 'LP'
    | 'MAILA'
    | 'MAILB'
    | 'MB'
    | 'MD'
    | 'MF'
    | 'MG'
    | 'MINFO'
    | 'MR'
    | 'MX'
    | 'NAPTR'
    | 'NB'
    | 'NBSTAT'
    | 'NID'
    | 'NIMLOC'
    | 'NINFO'
    | 'NS'
    | 'NSAP'
    | 'NSEC'
    | 'NSEC3'
    | 'NSEC3PARAM'
    | 'NULL'
    | 'NXT'
    | 'OPENPGPKEY'
    | 'OPT'
    | 'PTR'
    | 'PX'
    | 'RKEY'
    | 'RP'
    | 'RRSIG'
    | 'RT'
    | 'SIG'
    | 'SINK'
    | 'SMIMEA'
    | 'SOA'
    | 'SPF'
    | 'SRV'
    | 'SSHFP'
    | 'SVCB'
    | 'TA'
    | 'TALINK'
    | 'TKEY'
    | 'TLSA'
    | 'TSIG'
    | 'TXT'
    | 'UINFO'
    | 'UID'
    | 'UNSPEC'
    | 'URI'
    | 'WKS'
    | 'X25'
    | 'ZONEMD'
    | null;

  /**
   * Filters results by DNS response code.
   */
  responseCode?:
    | 'NOERROR'
    | 'FORMERR'
    | 'SERVFAIL'
    | 'NXDOMAIN'
    | 'NOTIMP'
    | 'REFUSED'
    | 'YXDOMAIN'
    | 'YXRRSET'
    | 'NXRRSET'
    | 'NOTAUTH'
    | 'NOTZONE'
    | 'BADSIG'
    | 'BADKEY'
    | 'BADTIME'
    | 'BADMODE'
    | 'BADNAME'
    | 'BADALG'
    | 'BADTRUNC'
    | 'BADCOOKIE';

  /**
   * Filters results by country code top-level domain (ccTLD).
   */
  tld?: Array<string>;
}

DNS.Top = Top;
DNS.Summary = Summary;
DNS.TimeseriesGroups = TimeseriesGroups;

export declare namespace DNS {
  export {
    type DNSTimeseriesResponse as DNSTimeseriesResponse,
    type DNSTimeseriesParams as DNSTimeseriesParams,
  };

  export {
    Top as Top,
    type TopAsesResponse as TopAsesResponse,
    type TopLocationsResponse as TopLocationsResponse,
    type TopAsesParams as TopAsesParams,
    type TopLocationsParams as TopLocationsParams,
  };

  export {
    Summary as Summary,
    type SummaryCacheHitResponse as SummaryCacheHitResponse,
    type SummaryDNSSECResponse as SummaryDNSSECResponse,
    type SummaryDNSSECAwareResponse as SummaryDNSSECAwareResponse,
    type SummaryDNSSECE2EResponse as SummaryDNSSECE2EResponse,
    type SummaryIPVersionResponse as SummaryIPVersionResponse,
    type SummaryMatchingAnswerResponse as SummaryMatchingAnswerResponse,
    type SummaryProtocolResponse as SummaryProtocolResponse,
    type SummaryQueryTypeResponse as SummaryQueryTypeResponse,
    type SummaryResponseCodeResponse as SummaryResponseCodeResponse,
    type SummaryResponseTTLResponse as SummaryResponseTTLResponse,
    type SummaryCacheHitParams as SummaryCacheHitParams,
    type SummaryDNSSECParams as SummaryDNSSECParams,
    type SummaryDNSSECAwareParams as SummaryDNSSECAwareParams,
    type SummaryDNSSECE2EParams as SummaryDNSSECE2EParams,
    type SummaryIPVersionParams as SummaryIPVersionParams,
    type SummaryMatchingAnswerParams as SummaryMatchingAnswerParams,
    type SummaryProtocolParams as SummaryProtocolParams,
    type SummaryQueryTypeParams as SummaryQueryTypeParams,
    type SummaryResponseCodeParams as SummaryResponseCodeParams,
    type SummaryResponseTTLParams as SummaryResponseTTLParams,
  };

  export {
    TimeseriesGroups as TimeseriesGroups,
    type TimeseriesGroupCacheHitResponse as TimeseriesGroupCacheHitResponse,
    type TimeseriesGroupDNSSECResponse as TimeseriesGroupDNSSECResponse,
    type TimeseriesGroupDNSSECAwareResponse as TimeseriesGroupDNSSECAwareResponse,
    type TimeseriesGroupDNSSECE2EResponse as TimeseriesGroupDNSSECE2EResponse,
    type TimeseriesGroupIPVersionResponse as TimeseriesGroupIPVersionResponse,
    type TimeseriesGroupMatchingAnswerResponse as TimeseriesGroupMatchingAnswerResponse,
    type TimeseriesGroupProtocolResponse as TimeseriesGroupProtocolResponse,
    type TimeseriesGroupQueryTypeResponse as TimeseriesGroupQueryTypeResponse,
    type TimeseriesGroupResponseCodeResponse as TimeseriesGroupResponseCodeResponse,
    type TimeseriesGroupResponseTTLResponse as TimeseriesGroupResponseTTLResponse,
    type TimeseriesGroupCacheHitParams as TimeseriesGroupCacheHitParams,
    type TimeseriesGroupDNSSECParams as TimeseriesGroupDNSSECParams,
    type TimeseriesGroupDNSSECAwareParams as TimeseriesGroupDNSSECAwareParams,
    type TimeseriesGroupDNSSECE2EParams as TimeseriesGroupDNSSECE2EParams,
    type TimeseriesGroupIPVersionParams as TimeseriesGroupIPVersionParams,
    type TimeseriesGroupMatchingAnswerParams as TimeseriesGroupMatchingAnswerParams,
    type TimeseriesGroupProtocolParams as TimeseriesGroupProtocolParams,
    type TimeseriesGroupQueryTypeParams as TimeseriesGroupQueryTypeParams,
    type TimeseriesGroupResponseCodeParams as TimeseriesGroupResponseCodeParams,
    type TimeseriesGroupResponseTTLParams as TimeseriesGroupResponseTTLParams,
  };
}
