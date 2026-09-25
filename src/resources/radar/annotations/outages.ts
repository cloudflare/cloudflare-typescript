// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseOutages extends APIResource {
  static override readonly _key: readonly ['radar', 'annotations', 'outages'] = Object.freeze([
    'radar',
    'annotations',
    'outages',
  ] as const);

  /**
   * Retrieves the latest Internet outages and anomalies.
   *
   * @example
   * ```ts
   * const outage = await client.radar.annotations.outages.get();
   * ```
   */
  get(
    query: OutageGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OutageGetResponse> {
    return (
      this._client.get('/radar/annotations/outages', { query, ...options }) as APIPromise<{
        result: OutageGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the number of outages by location.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.annotations.outages.locations();
   * ```
   */
  locations(
    query: OutageLocationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OutageLocationsResponse> {
    return (
      this._client.get('/radar/annotations/outages/locations', { query, ...options }) as APIPromise<{
        result: OutageLocationsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Outages extends BaseOutages {}

export interface OutageGetResponse {
  annotations: Array<OutageGetResponse.Annotation>;
}

export namespace OutageGetResponse {
  export interface Annotation {
    id: string;

    asns: Array<number>;

    asnsDetails: Array<Annotation.ASNsDetail>;

    dataSource: string;

    description: string | null;

    endDate: string | null;

    entities: Array<Annotation.Entity>;

    eventType: string;

    geoIds: Array<string>;

    linkedUrl: string | null;

    locations: Array<string>;

    locationsDetails: Array<Annotation.LocationsDetail | null>;

    origins: Array<string>;

    originsDetails: Array<Annotation.OriginsDetail>;

    outage: Annotation.Outage | null;

    scope: string | null;

    startDate: string;

    tags: Array<string>;
  }

  export namespace Annotation {
    export interface ASNsDetail {
      asn: string;

      location: ASNsDetail.Location | null;

      name: string | null;
    }

    export namespace ASNsDetail {
      export interface Location {
        code: string;

        name: string;
      }
    }

    export interface Entity {
      entityName: string | null;

      entityType: string;

      entityValue: string;
    }

    export interface LocationsDetail {
      code: string;

      name: string;
    }

    export interface OriginsDetail {
      name: string | null;

      origin: string;
    }

    export interface Outage {
      outageCause: string;

      outageType: string;
    }
  }
}

export interface OutageLocationsResponse {
  annotations: Array<OutageLocationsResponse.Annotation>;
}

export namespace OutageLocationsResponse {
  export interface Annotation {
    clientCountryAlpha2: string;

    clientCountryName: string;

    /**
     * A numeric string.
     */
    value: string;
  }
}

export interface OutageGetParams {
  /**
   * Filters results by Autonomous System. Specify a single Autonomous System Number
   * (ASN) as integer.
   */
  asn?: number;

  /**
   * Filters results by bot.
   */
  bot?: string;

  /**
   * Filters results by certificate authority.
   */
  ca?: string;

  /**
   * Filters results by data source.
   */
  dataSource?:
    | 'ALL'
    | 'AI_BOTS'
    | 'AI_GATEWAY'
    | 'BGP'
    | 'BOTS'
    | 'CONNECTION_ANOMALY'
    | 'CT'
    | 'DNS'
    | 'DNS_MAGNITUDE'
    | 'DNS_AS112'
    | 'DOS'
    | 'EMAIL_ROUTING'
    | 'EMAIL_SECURITY'
    | 'FW'
    | 'FW_PG'
    | 'HTTP'
    | 'HTTP_CONTROL'
    | 'HTTP_CRAWLER_REFERER'
    | 'HTTP_ORIGINS'
    | 'IQI'
    | 'LEAKED_CREDENTIALS'
    | 'NET'
    | 'ROBOTS_TXT'
    | 'SPEED'
    | 'WORKERS_AI';

  /**
   * End of the date range (inclusive). Alternative to `dateRange`; provide together
   * with `dateStart`.
   */
  dateEnd?: string;

  /**
   * Filters results by a relative date range ending at the current time. Use `<n>d`
   * for days (up to `364d`) or `<n>w` for weeks (up to `52w`), e.g. `7d`. Append
   * `control` to request the equivalent previous period for comparison: the
   * comparison window is shifted back by the current window's length rounded up to a
   * whole number of weeks, so it keeps the same weekday alignment and does not
   * overlap the current window (e.g. `3dcontrol` covers days -10 to -7, `7dcontrol`
   * covers days -14 to -7, `28dcontrol` covers days -56 to -28, and `10dcontrol`
   * covers days -24 to -14). Mutually exclusive with `dateStart`/`dateEnd`.
   */
  dateRange?: string;

  /**
   * Start of the date range (inclusive). Alternative to `dateRange`; provide
   * together with `dateEnd`.
   */
  dateStart?: string;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by geolocation. Refer to
   * [GeoNames](https://download.geonames.org/export/dump/readme.txt).
   */
  geoId?: string;

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Filters results by location. Specify an alpha-2 location code.
   */
  location?: string;

  /**
   * Filters results by certificate log.
   */
  log?: string;

  /**
   * Skips the specified number of objects before fetching the results.
   */
  offset?: number;

  /**
   * Filters results by origin.
   */
  origin?: string;

  /**
   * Filters results by outage cause.
   */
  outageCause?:
    | 'BLOCKING'
    | 'CABLE_CUT'
    | 'CYBERATTACK'
    | 'DNS'
    | 'FIRE'
    | 'GOVERNMENT_DIRECTED'
    | 'MAINTENANCE'
    | 'MECHANICAL'
    | 'MILITARY_ACTION'
    | 'MISCONFIGURATION'
    | 'NATURAL_DISASTER'
    | 'NETWORK_PROBLEM'
    | 'POWER_OUTAGE'
    | 'SOFTWARE'
    | 'TECHNICAL_PROBLEM'
    | 'UNKNOWN'
    | 'WEATHER';

  /**
   * Filters results by outage type.
   */
  outageType?: 'NATIONWIDE' | 'REGIONAL' | 'NETWORK' | 'PLATFORM';

  /**
   * Filters results by a free-text match on the annotation description, id, or
   * linked entities (location, ASN, origin).
   */
  query?: string;

  /**
   * Filters results by annotation tag. Matches annotations carrying at least one of
   * the given tags.
   */
  tags?: Array<
    | 'ADM1'
    | 'ADM2'
    | 'API_TRAFFIC'
    | 'ARC'
    | 'AS'
    | 'ASN'
    | 'ATTACKS'
    | 'AUTHOR'
    | 'BANDWIDTH'
    | 'BITRATE'
    | 'BOT'
    | 'BOT_CATEGORY'
    | 'BOT_CLASS'
    | 'BOT_KIND'
    | 'BOT_OPERATOR'
    | 'BROWSER'
    | 'BROWSER_FAMILY'
    | 'BYTES'
    | 'CA'
    | 'CACHE_HIT'
    | 'CA_OWNER'
    | 'CHECK_RESULT'
    | 'CLIENT_TYPE'
    | 'COMPROMISED'
    | 'CONTENT_TYPE'
    | 'CRAWL_PURPOSE'
    | 'CRAWL_REFER_RATIO'
    | 'DEVICE_TYPE'
    | 'DKIM'
    | 'DMARC'
    | 'DNS'
    | 'DNSSEC'
    | 'DNSSEC_AWARE'
    | 'DNSSEC_E2E'
    | 'DOMAIN_CATEGORY'
    | 'DURATION'
    | 'EDNS'
    | 'ENCRYPTED'
    | 'ENTRY_TYPE'
    | 'EXPIRATION_STATUS'
    | 'HAS_IPS'
    | 'HAS_MATCHING_ANSWER'
    | 'HAS_WILDCARDS'
    | 'HTTP_METHOD'
    | 'HTTP_PROTOCOL'
    | 'HTTP_VERSION'
    | 'INDUSTRY'
    | 'IP_VERSION'
    | 'JITTER'
    | 'KEY_AGREEMENT'
    | 'LATENCY'
    | 'LOCATION'
    | 'LOCATION_LATENCY'
    | 'LOG'
    | 'LOG_API'
    | 'LOG_OPERATOR'
    | 'MALICIOUS'
    | 'MANAGED_RULES'
    | 'MITIGATION_PRODUCT'
    | 'MODEL'
    | 'NAMESERVER_LATENCY'
    | 'ORIGIN'
    | 'ORIGIN_AS'
    | 'ORIGIN_LOCATION'
    | 'ORIGIN_TARGET_LOCATION_PAIR'
    | 'OS'
    | 'PERCENTILE'
    | 'POST_QUANTUM'
    | 'PREFIX'
    | 'PRODUCT'
    | 'PROTOCOL'
    | 'PROVIDER'
    | 'PUBLIC_KEY_ALGORITHM'
    | 'QUERY_TYPE'
    | 'REFERER'
    | 'REGION'
    | 'RESPONSE_CODE'
    | 'RESPONSE_STATUS'
    | 'RESPONSE_STATUS_CATEGORY'
    | 'RESPONSE_TTL'
    | 'SIGNATURE_ALGORITHM'
    | 'SPAM'
    | 'SPF'
    | 'SPOOF'
    | 'SUCCESS_RATE'
    | 'TARGET_LOCATION'
    | 'TASK'
    | 'THREAT_CATEGORY'
    | 'TLD'
    | 'TLD_DNS_MAGNITUDE'
    | 'TLS_VERSION'
    | 'UPDATE_TYPE'
    | 'USER_AGENT'
    | 'VALIDATION_LEVEL'
    | 'VECTOR'
    | 'VERTICAL'
  >;

  /**
   * Filters results by top-level domain.
   */
  tld?: string;
}

export interface OutageLocationsParams {
  /**
   * End of the date range (inclusive). Alternative to `dateRange`; provide together
   * with `dateStart`.
   */
  dateEnd?: string;

  /**
   * Filters results by a relative date range ending at the current time. Use `<n>d`
   * for days (up to `364d`) or `<n>w` for weeks (up to `52w`), e.g. `7d`. Append
   * `control` to request the equivalent previous period for comparison: the
   * comparison window is shifted back by the current window's length rounded up to a
   * whole number of weeks, so it keeps the same weekday alignment and does not
   * overlap the current window (e.g. `3dcontrol` covers days -10 to -7, `7dcontrol`
   * covers days -14 to -7, `28dcontrol` covers days -56 to -28, and `10dcontrol`
   * covers days -24 to -14). Mutually exclusive with `dateStart`/`dateEnd`.
   */
  dateRange?: string;

  /**
   * Start of the date range (inclusive). Alternative to `dateRange`; provide
   * together with `dateEnd`.
   */
  dateStart?: string;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;
}

export declare namespace Outages {
  export {
    type OutageGetResponse as OutageGetResponse,
    type OutageLocationsResponse as OutageLocationsResponse,
    type OutageGetParams as OutageGetParams,
    type OutageLocationsParams as OutageLocationsParams,
  };
}
