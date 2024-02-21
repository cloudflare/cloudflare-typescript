// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DNSRecordsAPI from 'cloudflare/resources/dns-records';
import { multipartFormRequestOptions } from 'cloudflare/core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class DNSRecords extends APIResource {
  /**
   * Create a new DNS record for a zone.
   *
   * Notes:
   *
   * - A/AAAA records cannot exist on the same name as CNAME records.
   * - NS records cannot exist on the same name as any other record type.
   * - Domain names are always represented in Punycode, even if Unicode characters
   *   were used when creating the record.
   */
  create(
    zoneId: string,
    body: DNSRecordCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSRecordCreateResponse> {
    return (
      this._client.post(`/zones/${zoneId}/dns_records`, { body, ...options }) as Core.APIPromise<{
        result: DNSRecordCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Overwrite an existing DNS record. Notes:
   *
   * - A/AAAA records cannot exist on the same name as CNAME records.
   * - NS records cannot exist on the same name as any other record type.
   * - Domain names are always represented in Punycode, even if Unicode characters
   *   were used when creating the record.
   */
  update(
    zoneId: string,
    dnsRecordId: string,
    body: DNSRecordUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSRecordUpdateResponse> {
    return (
      this._client.put(`/zones/${zoneId}/dns_records/${dnsRecordId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DNSRecordUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List, search, sort, and filter a zones' DNS records.
   */
  list(
    zoneId: string,
    query?: DNSRecordListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DNSRecordListResponsesV4PagePaginationArray, DNSRecordListResponse>;
  list(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DNSRecordListResponsesV4PagePaginationArray, DNSRecordListResponse>;
  list(
    zoneId: string,
    query: DNSRecordListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DNSRecordListResponsesV4PagePaginationArray, DNSRecordListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zoneId, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneId}/dns_records`,
      DNSRecordListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete DNS Record
   */
  delete(
    zoneId: string,
    dnsRecordId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSRecordDeleteResponse> {
    return (
      this._client.delete(`/zones/${zoneId}/dns_records/${dnsRecordId}`, options) as Core.APIPromise<{
        result: DNSRecordDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * You can export your
   * [BIND config](https://en.wikipedia.org/wiki/Zone_file "Zone file") through this
   * endpoint.
   *
   * See
   * [the documentation](https://developers.cloudflare.com/dns/manage-dns-records/how-to/import-and-export/ "Import and export records")
   * for more information.
   */
  export(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/zones/${zoneId}/dns_records/export`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * DNS Record Details
   */
  get(
    zoneId: string,
    dnsRecordId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSRecordGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/dns_records/${dnsRecordId}`, options) as Core.APIPromise<{
        result: DNSRecordGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * You can upload your
   * [BIND config](https://en.wikipedia.org/wiki/Zone_file "Zone file") through this
   * endpoint. It assumes that cURL is called from a location with bind_config.txt
   * (valid BIND config) present.
   *
   * See
   * [the documentation](https://developers.cloudflare.com/dns/manage-dns-records/how-to/import-and-export/ "Import and export records")
   * for more information.
   */
  import(
    zoneId: string,
    body: DNSRecordImportParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSRecordImportResponse> {
    return (
      this._client.post(
        `/zones/${zoneId}/dns_records/import`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: DNSRecordImportResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Scan for common DNS records on your domain and automatically add them to your
   * zone. Useful if you haven't updated your nameservers yet.
   */
  scan(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<DNSRecordScanResponse> {
    return (
      this._client.post(`/zones/${zoneId}/dns_records/scan`, options) as Core.APIPromise<{
        result: DNSRecordScanResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DNSRecordListResponsesV4PagePaginationArray extends V4PagePaginationArray<DNSRecordListResponse> {}

export type DNSRecordCreateResponse =
  | DNSRecordCreateResponse.DNSRecordsARecord
  | DNSRecordCreateResponse.DNSRecordsAaaaRecord
  | DNSRecordCreateResponse.DNSRecordsCaaRecord
  | DNSRecordCreateResponse.DNSRecordsCertRecord
  | DNSRecordCreateResponse.DNSRecordsCnameRecord
  | DNSRecordCreateResponse.DNSRecordsDnskeyRecord
  | DNSRecordCreateResponse.DNSRecordsDsRecord
  | DNSRecordCreateResponse.DNSRecordsHTTPSRecord
  | DNSRecordCreateResponse.DNSRecordsLocRecord
  | DNSRecordCreateResponse.DNSRecordsMxRecord
  | DNSRecordCreateResponse.DNSRecordsNaptrRecord
  | DNSRecordCreateResponse.DNSRecordsNsRecord
  | DNSRecordCreateResponse.DNSRecordsPtrRecord
  | DNSRecordCreateResponse.DNSRecordsSmimeaRecord
  | DNSRecordCreateResponse.DNSRecordsSrvRecord
  | DNSRecordCreateResponse.DNSRecordsSshfpRecord
  | DNSRecordCreateResponse.DNSRecordsSvcbRecord
  | DNSRecordCreateResponse.DNSRecordsTlsaRecord
  | DNSRecordCreateResponse.DNSRecordsTxtRecord
  | DNSRecordCreateResponse.DNSRecordsUriRecord;

export namespace DNSRecordCreateResponse {
  export interface DNSRecordsARecord {
    /**
     * A valid IPv4 address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'A';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsARecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsARecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsAaaaRecord {
    /**
     * A valid IPv6 address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'AAAA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsAaaaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsAaaaRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsCaaRecord {
    /**
     * Components of a CAA record.
     */
    data: DNSRecordsCaaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CAA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted CAA content. See 'data' to set CAA properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsCaaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsCaaRecord {
    /**
     * Components of a CAA record.
     */
    export interface Data {
      /**
       * Flags for the CAA record.
       */
      flags?: number;

      /**
       * Name of the property controlled by this record (e.g.: issue, issuewild, iodef).
       */
      tag?: string;

      /**
       * Value of the record. This field's semantics depend on the chosen tag.
       */
      value?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsCertRecord {
    /**
     * Components of a CERT record.
     */
    data: DNSRecordsCertRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CERT';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted CERT content. See 'data' to set CERT properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsCertRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsCertRecord {
    /**
     * Components of a CERT record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Certificate.
       */
      certificate?: string;

      /**
       * Key Tag.
       */
      key_tag?: number;

      /**
       * Type.
       */
      type?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsCnameRecord {
    /**
     * A valid hostname. Must not match the record's name.
     */
    content: unknown;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CNAME';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsCnameRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsCnameRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsDnskeyRecord {
    /**
     * Components of a DNSKEY record.
     */
    data: DNSRecordsDnskeyRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'DNSKEY';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted DNSKEY content. See 'data' to set DNSKEY properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsDnskeyRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsDnskeyRecord {
    /**
     * Components of a DNSKEY record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Flags.
       */
      flags?: number;

      /**
       * Protocol.
       */
      protocol?: number;

      /**
       * Public Key.
       */
      public_key?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsDsRecord {
    /**
     * Components of a DS record.
     */
    data: DNSRecordsDsRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'DS';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted DS content. See 'data' to set DS properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsDsRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsDsRecord {
    /**
     * Components of a DS record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Digest.
       */
      digest?: string;

      /**
       * Digest Type.
       */
      digest_type?: number;

      /**
       * Key Tag.
       */
      key_tag?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsHTTPSRecord {
    /**
     * Components of a HTTPS record.
     */
    data: DNSRecordsHTTPSRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'HTTPS';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted HTTPS content. See 'data' to set HTTPS properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsHTTPSRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsHTTPSRecord {
    /**
     * Components of a HTTPS record.
     */
    export interface Data {
      /**
       * priority.
       */
      priority?: number;

      /**
       * target.
       */
      target?: string;

      /**
       * value.
       */
      value?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsLocRecord {
    /**
     * Components of a LOC record.
     */
    data: DNSRecordsLocRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'LOC';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted LOC content. See 'data' to set LOC properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsLocRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsLocRecord {
    /**
     * Components of a LOC record.
     */
    export interface Data {
      /**
       * Altitude of location in meters.
       */
      altitude?: number;

      /**
       * Degrees of latitude.
       */
      lat_degrees?: number;

      /**
       * Latitude direction.
       */
      lat_direction?: 'N' | 'S';

      /**
       * Minutes of latitude.
       */
      lat_minutes?: number;

      /**
       * Seconds of latitude.
       */
      lat_seconds?: number;

      /**
       * Degrees of longitude.
       */
      long_degrees?: number;

      /**
       * Longitude direction.
       */
      long_direction?: 'E' | 'W';

      /**
       * Minutes of longitude.
       */
      long_minutes?: number;

      /**
       * Seconds of longitude.
       */
      long_seconds?: number;

      /**
       * Horizontal precision of location.
       */
      precision_horz?: number;

      /**
       * Vertical precision of location.
       */
      precision_vert?: number;

      /**
       * Size of location in meters.
       */
      size?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsMxRecord {
    /**
     * A valid mail server hostname.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Required for MX, SRV and URI records; unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority: number;

    /**
     * Record type.
     */
    type: 'MX';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsMxRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsMxRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsNaptrRecord {
    /**
     * Components of a NAPTR record.
     */
    data: DNSRecordsNaptrRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'NAPTR';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted NAPTR content. See 'data' to set NAPTR properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsNaptrRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsNaptrRecord {
    /**
     * Components of a NAPTR record.
     */
    export interface Data {
      /**
       * Flags.
       */
      flags?: string;

      /**
       * Order.
       */
      order?: number;

      /**
       * Preference.
       */
      preference?: number;

      /**
       * Regex.
       */
      regex?: string;

      /**
       * Replacement.
       */
      replacement?: string;

      /**
       * Service.
       */
      service?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsNsRecord {
    /**
     * A valid name server host name.
     */
    content: unknown;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'NS';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsNsRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsNsRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsPtrRecord {
    /**
     * Domain name pointing to the address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'PTR';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsPtrRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsPtrRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsSmimeaRecord {
    /**
     * Components of a SMIMEA record.
     */
    data: DNSRecordsSmimeaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SMIMEA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted SMIMEA content. See 'data' to set SMIMEA properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsSmimeaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsSmimeaRecord {
    /**
     * Components of a SMIMEA record.
     */
    export interface Data {
      /**
       * Certificate.
       */
      certificate?: string;

      /**
       * Matching Type.
       */
      matching_type?: number;

      /**
       * Selector.
       */
      selector?: number;

      /**
       * Usage.
       */
      usage?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsSrvRecord {
    /**
     * Components of a SRV record.
     */
    data: DNSRecordsSrvRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode. For SRV records, the first
     * label is normally a service and the second a protocol name, each starting with
     * an underscore.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SRV';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Priority, weight, port, and SRV target. See 'data' for setting the individual
     * component values.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsSrvRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsSrvRecord {
    /**
     * Components of a SRV record.
     */
    export interface Data {
      /**
       * A valid hostname. Deprecated in favor of the regular 'name' outside the data
       * map. This data map field represents the remainder of the full 'name' after the
       * service and protocol.
       */
      name?: string;

      /**
       * The port of the service.
       */
      port?: number;

      /**
       * Required for MX, SRV and URI records; unused by other record types. Records with
       * lower priorities are preferred.
       */
      priority?: number;

      /**
       * A valid protocol, prefixed with an underscore. Deprecated in favor of the
       * regular 'name' outside the data map. This data map field normally represents the
       * second label of that 'name'.
       */
      proto?: string;

      /**
       * A service type, prefixed with an underscore. Deprecated in favor of the regular
       * 'name' outside the data map. This data map field normally represents the first
       * label of that 'name'.
       */
      service?: string;

      /**
       * A valid hostname.
       */
      target?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsSshfpRecord {
    /**
     * Components of a SSHFP record.
     */
    data: DNSRecordsSshfpRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SSHFP';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted SSHFP content. See 'data' to set SSHFP properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsSshfpRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsSshfpRecord {
    /**
     * Components of a SSHFP record.
     */
    export interface Data {
      /**
       * algorithm.
       */
      algorithm?: number;

      /**
       * fingerprint.
       */
      fingerprint?: string;

      /**
       * type.
       */
      type?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsSvcbRecord {
    /**
     * Components of a SVCB record.
     */
    data: DNSRecordsSvcbRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SVCB';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted SVCB content. See 'data' to set SVCB properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsSvcbRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsSvcbRecord {
    /**
     * Components of a SVCB record.
     */
    export interface Data {
      /**
       * priority.
       */
      priority?: number;

      /**
       * target.
       */
      target?: string;

      /**
       * value.
       */
      value?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsTlsaRecord {
    /**
     * Components of a TLSA record.
     */
    data: DNSRecordsTlsaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'TLSA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted TLSA content. See 'data' to set TLSA properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsTlsaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsTlsaRecord {
    /**
     * Components of a TLSA record.
     */
    export interface Data {
      /**
       * certificate.
       */
      certificate?: string;

      /**
       * Matching Type.
       */
      matching_type?: number;

      /**
       * Selector.
       */
      selector?: number;

      /**
       * Usage.
       */
      usage?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsTxtRecord {
    /**
     * Text content for the record.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'TXT';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsTxtRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsTxtRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsUriRecord {
    /**
     * Components of a URI record.
     */
    data: DNSRecordsUriRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Required for MX, SRV and URI records; unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority: number;

    /**
     * Record type.
     */
    type: 'URI';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted URI content. See 'data' to set URI properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsUriRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsUriRecord {
    /**
     * Components of a URI record.
     */
    export interface Data {
      /**
       * The record content.
       */
      content?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }
}

export type DNSRecordUpdateResponse =
  | DNSRecordUpdateResponse.DNSRecordsARecord
  | DNSRecordUpdateResponse.DNSRecordsAaaaRecord
  | DNSRecordUpdateResponse.DNSRecordsCaaRecord
  | DNSRecordUpdateResponse.DNSRecordsCertRecord
  | DNSRecordUpdateResponse.DNSRecordsCnameRecord
  | DNSRecordUpdateResponse.DNSRecordsDnskeyRecord
  | DNSRecordUpdateResponse.DNSRecordsDsRecord
  | DNSRecordUpdateResponse.DNSRecordsHTTPSRecord
  | DNSRecordUpdateResponse.DNSRecordsLocRecord
  | DNSRecordUpdateResponse.DNSRecordsMxRecord
  | DNSRecordUpdateResponse.DNSRecordsNaptrRecord
  | DNSRecordUpdateResponse.DNSRecordsNsRecord
  | DNSRecordUpdateResponse.DNSRecordsPtrRecord
  | DNSRecordUpdateResponse.DNSRecordsSmimeaRecord
  | DNSRecordUpdateResponse.DNSRecordsSrvRecord
  | DNSRecordUpdateResponse.DNSRecordsSshfpRecord
  | DNSRecordUpdateResponse.DNSRecordsSvcbRecord
  | DNSRecordUpdateResponse.DNSRecordsTlsaRecord
  | DNSRecordUpdateResponse.DNSRecordsTxtRecord
  | DNSRecordUpdateResponse.DNSRecordsUriRecord;

export namespace DNSRecordUpdateResponse {
  export interface DNSRecordsARecord {
    /**
     * A valid IPv4 address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'A';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsARecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsARecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsAaaaRecord {
    /**
     * A valid IPv6 address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'AAAA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsAaaaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsAaaaRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsCaaRecord {
    /**
     * Components of a CAA record.
     */
    data: DNSRecordsCaaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CAA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted CAA content. See 'data' to set CAA properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsCaaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsCaaRecord {
    /**
     * Components of a CAA record.
     */
    export interface Data {
      /**
       * Flags for the CAA record.
       */
      flags?: number;

      /**
       * Name of the property controlled by this record (e.g.: issue, issuewild, iodef).
       */
      tag?: string;

      /**
       * Value of the record. This field's semantics depend on the chosen tag.
       */
      value?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsCertRecord {
    /**
     * Components of a CERT record.
     */
    data: DNSRecordsCertRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CERT';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted CERT content. See 'data' to set CERT properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsCertRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsCertRecord {
    /**
     * Components of a CERT record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Certificate.
       */
      certificate?: string;

      /**
       * Key Tag.
       */
      key_tag?: number;

      /**
       * Type.
       */
      type?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsCnameRecord {
    /**
     * A valid hostname. Must not match the record's name.
     */
    content: unknown;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CNAME';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsCnameRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsCnameRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsDnskeyRecord {
    /**
     * Components of a DNSKEY record.
     */
    data: DNSRecordsDnskeyRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'DNSKEY';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted DNSKEY content. See 'data' to set DNSKEY properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsDnskeyRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsDnskeyRecord {
    /**
     * Components of a DNSKEY record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Flags.
       */
      flags?: number;

      /**
       * Protocol.
       */
      protocol?: number;

      /**
       * Public Key.
       */
      public_key?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsDsRecord {
    /**
     * Components of a DS record.
     */
    data: DNSRecordsDsRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'DS';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted DS content. See 'data' to set DS properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsDsRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsDsRecord {
    /**
     * Components of a DS record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Digest.
       */
      digest?: string;

      /**
       * Digest Type.
       */
      digest_type?: number;

      /**
       * Key Tag.
       */
      key_tag?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsHTTPSRecord {
    /**
     * Components of a HTTPS record.
     */
    data: DNSRecordsHTTPSRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'HTTPS';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted HTTPS content. See 'data' to set HTTPS properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsHTTPSRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsHTTPSRecord {
    /**
     * Components of a HTTPS record.
     */
    export interface Data {
      /**
       * priority.
       */
      priority?: number;

      /**
       * target.
       */
      target?: string;

      /**
       * value.
       */
      value?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsLocRecord {
    /**
     * Components of a LOC record.
     */
    data: DNSRecordsLocRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'LOC';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted LOC content. See 'data' to set LOC properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsLocRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsLocRecord {
    /**
     * Components of a LOC record.
     */
    export interface Data {
      /**
       * Altitude of location in meters.
       */
      altitude?: number;

      /**
       * Degrees of latitude.
       */
      lat_degrees?: number;

      /**
       * Latitude direction.
       */
      lat_direction?: 'N' | 'S';

      /**
       * Minutes of latitude.
       */
      lat_minutes?: number;

      /**
       * Seconds of latitude.
       */
      lat_seconds?: number;

      /**
       * Degrees of longitude.
       */
      long_degrees?: number;

      /**
       * Longitude direction.
       */
      long_direction?: 'E' | 'W';

      /**
       * Minutes of longitude.
       */
      long_minutes?: number;

      /**
       * Seconds of longitude.
       */
      long_seconds?: number;

      /**
       * Horizontal precision of location.
       */
      precision_horz?: number;

      /**
       * Vertical precision of location.
       */
      precision_vert?: number;

      /**
       * Size of location in meters.
       */
      size?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsMxRecord {
    /**
     * A valid mail server hostname.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Required for MX, SRV and URI records; unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority: number;

    /**
     * Record type.
     */
    type: 'MX';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsMxRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsMxRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsNaptrRecord {
    /**
     * Components of a NAPTR record.
     */
    data: DNSRecordsNaptrRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'NAPTR';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted NAPTR content. See 'data' to set NAPTR properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsNaptrRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsNaptrRecord {
    /**
     * Components of a NAPTR record.
     */
    export interface Data {
      /**
       * Flags.
       */
      flags?: string;

      /**
       * Order.
       */
      order?: number;

      /**
       * Preference.
       */
      preference?: number;

      /**
       * Regex.
       */
      regex?: string;

      /**
       * Replacement.
       */
      replacement?: string;

      /**
       * Service.
       */
      service?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsNsRecord {
    /**
     * A valid name server host name.
     */
    content: unknown;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'NS';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsNsRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsNsRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsPtrRecord {
    /**
     * Domain name pointing to the address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'PTR';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsPtrRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsPtrRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsSmimeaRecord {
    /**
     * Components of a SMIMEA record.
     */
    data: DNSRecordsSmimeaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SMIMEA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted SMIMEA content. See 'data' to set SMIMEA properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsSmimeaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsSmimeaRecord {
    /**
     * Components of a SMIMEA record.
     */
    export interface Data {
      /**
       * Certificate.
       */
      certificate?: string;

      /**
       * Matching Type.
       */
      matching_type?: number;

      /**
       * Selector.
       */
      selector?: number;

      /**
       * Usage.
       */
      usage?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsSrvRecord {
    /**
     * Components of a SRV record.
     */
    data: DNSRecordsSrvRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode. For SRV records, the first
     * label is normally a service and the second a protocol name, each starting with
     * an underscore.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SRV';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Priority, weight, port, and SRV target. See 'data' for setting the individual
     * component values.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsSrvRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsSrvRecord {
    /**
     * Components of a SRV record.
     */
    export interface Data {
      /**
       * A valid hostname. Deprecated in favor of the regular 'name' outside the data
       * map. This data map field represents the remainder of the full 'name' after the
       * service and protocol.
       */
      name?: string;

      /**
       * The port of the service.
       */
      port?: number;

      /**
       * Required for MX, SRV and URI records; unused by other record types. Records with
       * lower priorities are preferred.
       */
      priority?: number;

      /**
       * A valid protocol, prefixed with an underscore. Deprecated in favor of the
       * regular 'name' outside the data map. This data map field normally represents the
       * second label of that 'name'.
       */
      proto?: string;

      /**
       * A service type, prefixed with an underscore. Deprecated in favor of the regular
       * 'name' outside the data map. This data map field normally represents the first
       * label of that 'name'.
       */
      service?: string;

      /**
       * A valid hostname.
       */
      target?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsSshfpRecord {
    /**
     * Components of a SSHFP record.
     */
    data: DNSRecordsSshfpRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SSHFP';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted SSHFP content. See 'data' to set SSHFP properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsSshfpRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsSshfpRecord {
    /**
     * Components of a SSHFP record.
     */
    export interface Data {
      /**
       * algorithm.
       */
      algorithm?: number;

      /**
       * fingerprint.
       */
      fingerprint?: string;

      /**
       * type.
       */
      type?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsSvcbRecord {
    /**
     * Components of a SVCB record.
     */
    data: DNSRecordsSvcbRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SVCB';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted SVCB content. See 'data' to set SVCB properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsSvcbRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsSvcbRecord {
    /**
     * Components of a SVCB record.
     */
    export interface Data {
      /**
       * priority.
       */
      priority?: number;

      /**
       * target.
       */
      target?: string;

      /**
       * value.
       */
      value?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsTlsaRecord {
    /**
     * Components of a TLSA record.
     */
    data: DNSRecordsTlsaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'TLSA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted TLSA content. See 'data' to set TLSA properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsTlsaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsTlsaRecord {
    /**
     * Components of a TLSA record.
     */
    export interface Data {
      /**
       * certificate.
       */
      certificate?: string;

      /**
       * Matching Type.
       */
      matching_type?: number;

      /**
       * Selector.
       */
      selector?: number;

      /**
       * Usage.
       */
      usage?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsTxtRecord {
    /**
     * Text content for the record.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'TXT';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsTxtRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsTxtRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsUriRecord {
    /**
     * Components of a URI record.
     */
    data: DNSRecordsUriRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Required for MX, SRV and URI records; unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority: number;

    /**
     * Record type.
     */
    type: 'URI';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted URI content. See 'data' to set URI properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsUriRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsUriRecord {
    /**
     * Components of a URI record.
     */
    export interface Data {
      /**
       * The record content.
       */
      content?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }
}

export type DNSRecordListResponse =
  | DNSRecordListResponse.DNSRecordsARecord
  | DNSRecordListResponse.DNSRecordsAaaaRecord
  | DNSRecordListResponse.DNSRecordsCaaRecord
  | DNSRecordListResponse.DNSRecordsCertRecord
  | DNSRecordListResponse.DNSRecordsCnameRecord
  | DNSRecordListResponse.DNSRecordsDnskeyRecord
  | DNSRecordListResponse.DNSRecordsDsRecord
  | DNSRecordListResponse.DNSRecordsHTTPSRecord
  | DNSRecordListResponse.DNSRecordsLocRecord
  | DNSRecordListResponse.DNSRecordsMxRecord
  | DNSRecordListResponse.DNSRecordsNaptrRecord
  | DNSRecordListResponse.DNSRecordsNsRecord
  | DNSRecordListResponse.DNSRecordsPtrRecord
  | DNSRecordListResponse.DNSRecordsSmimeaRecord
  | DNSRecordListResponse.DNSRecordsSrvRecord
  | DNSRecordListResponse.DNSRecordsSshfpRecord
  | DNSRecordListResponse.DNSRecordsSvcbRecord
  | DNSRecordListResponse.DNSRecordsTlsaRecord
  | DNSRecordListResponse.DNSRecordsTxtRecord
  | DNSRecordListResponse.DNSRecordsUriRecord;

export namespace DNSRecordListResponse {
  export interface DNSRecordsARecord {
    /**
     * A valid IPv4 address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'A';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsARecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsARecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsAaaaRecord {
    /**
     * A valid IPv6 address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'AAAA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsAaaaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsAaaaRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsCaaRecord {
    /**
     * Components of a CAA record.
     */
    data: DNSRecordsCaaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CAA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted CAA content. See 'data' to set CAA properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsCaaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsCaaRecord {
    /**
     * Components of a CAA record.
     */
    export interface Data {
      /**
       * Flags for the CAA record.
       */
      flags?: number;

      /**
       * Name of the property controlled by this record (e.g.: issue, issuewild, iodef).
       */
      tag?: string;

      /**
       * Value of the record. This field's semantics depend on the chosen tag.
       */
      value?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsCertRecord {
    /**
     * Components of a CERT record.
     */
    data: DNSRecordsCertRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CERT';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted CERT content. See 'data' to set CERT properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsCertRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsCertRecord {
    /**
     * Components of a CERT record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Certificate.
       */
      certificate?: string;

      /**
       * Key Tag.
       */
      key_tag?: number;

      /**
       * Type.
       */
      type?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsCnameRecord {
    /**
     * A valid hostname. Must not match the record's name.
     */
    content: unknown;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CNAME';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsCnameRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsCnameRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsDnskeyRecord {
    /**
     * Components of a DNSKEY record.
     */
    data: DNSRecordsDnskeyRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'DNSKEY';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted DNSKEY content. See 'data' to set DNSKEY properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsDnskeyRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsDnskeyRecord {
    /**
     * Components of a DNSKEY record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Flags.
       */
      flags?: number;

      /**
       * Protocol.
       */
      protocol?: number;

      /**
       * Public Key.
       */
      public_key?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsDsRecord {
    /**
     * Components of a DS record.
     */
    data: DNSRecordsDsRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'DS';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted DS content. See 'data' to set DS properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsDsRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsDsRecord {
    /**
     * Components of a DS record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Digest.
       */
      digest?: string;

      /**
       * Digest Type.
       */
      digest_type?: number;

      /**
       * Key Tag.
       */
      key_tag?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsHTTPSRecord {
    /**
     * Components of a HTTPS record.
     */
    data: DNSRecordsHTTPSRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'HTTPS';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted HTTPS content. See 'data' to set HTTPS properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsHTTPSRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsHTTPSRecord {
    /**
     * Components of a HTTPS record.
     */
    export interface Data {
      /**
       * priority.
       */
      priority?: number;

      /**
       * target.
       */
      target?: string;

      /**
       * value.
       */
      value?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsLocRecord {
    /**
     * Components of a LOC record.
     */
    data: DNSRecordsLocRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'LOC';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted LOC content. See 'data' to set LOC properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsLocRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsLocRecord {
    /**
     * Components of a LOC record.
     */
    export interface Data {
      /**
       * Altitude of location in meters.
       */
      altitude?: number;

      /**
       * Degrees of latitude.
       */
      lat_degrees?: number;

      /**
       * Latitude direction.
       */
      lat_direction?: 'N' | 'S';

      /**
       * Minutes of latitude.
       */
      lat_minutes?: number;

      /**
       * Seconds of latitude.
       */
      lat_seconds?: number;

      /**
       * Degrees of longitude.
       */
      long_degrees?: number;

      /**
       * Longitude direction.
       */
      long_direction?: 'E' | 'W';

      /**
       * Minutes of longitude.
       */
      long_minutes?: number;

      /**
       * Seconds of longitude.
       */
      long_seconds?: number;

      /**
       * Horizontal precision of location.
       */
      precision_horz?: number;

      /**
       * Vertical precision of location.
       */
      precision_vert?: number;

      /**
       * Size of location in meters.
       */
      size?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsMxRecord {
    /**
     * A valid mail server hostname.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Required for MX, SRV and URI records; unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority: number;

    /**
     * Record type.
     */
    type: 'MX';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsMxRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsMxRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsNaptrRecord {
    /**
     * Components of a NAPTR record.
     */
    data: DNSRecordsNaptrRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'NAPTR';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted NAPTR content. See 'data' to set NAPTR properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsNaptrRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsNaptrRecord {
    /**
     * Components of a NAPTR record.
     */
    export interface Data {
      /**
       * Flags.
       */
      flags?: string;

      /**
       * Order.
       */
      order?: number;

      /**
       * Preference.
       */
      preference?: number;

      /**
       * Regex.
       */
      regex?: string;

      /**
       * Replacement.
       */
      replacement?: string;

      /**
       * Service.
       */
      service?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsNsRecord {
    /**
     * A valid name server host name.
     */
    content: unknown;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'NS';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsNsRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsNsRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsPtrRecord {
    /**
     * Domain name pointing to the address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'PTR';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsPtrRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsPtrRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsSmimeaRecord {
    /**
     * Components of a SMIMEA record.
     */
    data: DNSRecordsSmimeaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SMIMEA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted SMIMEA content. See 'data' to set SMIMEA properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsSmimeaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsSmimeaRecord {
    /**
     * Components of a SMIMEA record.
     */
    export interface Data {
      /**
       * Certificate.
       */
      certificate?: string;

      /**
       * Matching Type.
       */
      matching_type?: number;

      /**
       * Selector.
       */
      selector?: number;

      /**
       * Usage.
       */
      usage?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsSrvRecord {
    /**
     * Components of a SRV record.
     */
    data: DNSRecordsSrvRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode. For SRV records, the first
     * label is normally a service and the second a protocol name, each starting with
     * an underscore.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SRV';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Priority, weight, port, and SRV target. See 'data' for setting the individual
     * component values.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsSrvRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsSrvRecord {
    /**
     * Components of a SRV record.
     */
    export interface Data {
      /**
       * A valid hostname. Deprecated in favor of the regular 'name' outside the data
       * map. This data map field represents the remainder of the full 'name' after the
       * service and protocol.
       */
      name?: string;

      /**
       * The port of the service.
       */
      port?: number;

      /**
       * Required for MX, SRV and URI records; unused by other record types. Records with
       * lower priorities are preferred.
       */
      priority?: number;

      /**
       * A valid protocol, prefixed with an underscore. Deprecated in favor of the
       * regular 'name' outside the data map. This data map field normally represents the
       * second label of that 'name'.
       */
      proto?: string;

      /**
       * A service type, prefixed with an underscore. Deprecated in favor of the regular
       * 'name' outside the data map. This data map field normally represents the first
       * label of that 'name'.
       */
      service?: string;

      /**
       * A valid hostname.
       */
      target?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsSshfpRecord {
    /**
     * Components of a SSHFP record.
     */
    data: DNSRecordsSshfpRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SSHFP';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted SSHFP content. See 'data' to set SSHFP properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsSshfpRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsSshfpRecord {
    /**
     * Components of a SSHFP record.
     */
    export interface Data {
      /**
       * algorithm.
       */
      algorithm?: number;

      /**
       * fingerprint.
       */
      fingerprint?: string;

      /**
       * type.
       */
      type?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsSvcbRecord {
    /**
     * Components of a SVCB record.
     */
    data: DNSRecordsSvcbRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SVCB';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted SVCB content. See 'data' to set SVCB properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsSvcbRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsSvcbRecord {
    /**
     * Components of a SVCB record.
     */
    export interface Data {
      /**
       * priority.
       */
      priority?: number;

      /**
       * target.
       */
      target?: string;

      /**
       * value.
       */
      value?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsTlsaRecord {
    /**
     * Components of a TLSA record.
     */
    data: DNSRecordsTlsaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'TLSA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted TLSA content. See 'data' to set TLSA properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsTlsaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsTlsaRecord {
    /**
     * Components of a TLSA record.
     */
    export interface Data {
      /**
       * certificate.
       */
      certificate?: string;

      /**
       * Matching Type.
       */
      matching_type?: number;

      /**
       * Selector.
       */
      selector?: number;

      /**
       * Usage.
       */
      usage?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsTxtRecord {
    /**
     * Text content for the record.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'TXT';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsTxtRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsTxtRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsUriRecord {
    /**
     * Components of a URI record.
     */
    data: DNSRecordsUriRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Required for MX, SRV and URI records; unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority: number;

    /**
     * Record type.
     */
    type: 'URI';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted URI content. See 'data' to set URI properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsUriRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsUriRecord {
    /**
     * Components of a URI record.
     */
    export interface Data {
      /**
       * The record content.
       */
      content?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }
}

export interface DNSRecordDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

/**
 * Exported BIND zone file.
 */
export type DNSRecordExportResponse = string;

export type DNSRecordGetResponse =
  | DNSRecordGetResponse.DNSRecordsARecord
  | DNSRecordGetResponse.DNSRecordsAaaaRecord
  | DNSRecordGetResponse.DNSRecordsCaaRecord
  | DNSRecordGetResponse.DNSRecordsCertRecord
  | DNSRecordGetResponse.DNSRecordsCnameRecord
  | DNSRecordGetResponse.DNSRecordsDnskeyRecord
  | DNSRecordGetResponse.DNSRecordsDsRecord
  | DNSRecordGetResponse.DNSRecordsHTTPSRecord
  | DNSRecordGetResponse.DNSRecordsLocRecord
  | DNSRecordGetResponse.DNSRecordsMxRecord
  | DNSRecordGetResponse.DNSRecordsNaptrRecord
  | DNSRecordGetResponse.DNSRecordsNsRecord
  | DNSRecordGetResponse.DNSRecordsPtrRecord
  | DNSRecordGetResponse.DNSRecordsSmimeaRecord
  | DNSRecordGetResponse.DNSRecordsSrvRecord
  | DNSRecordGetResponse.DNSRecordsSshfpRecord
  | DNSRecordGetResponse.DNSRecordsSvcbRecord
  | DNSRecordGetResponse.DNSRecordsTlsaRecord
  | DNSRecordGetResponse.DNSRecordsTxtRecord
  | DNSRecordGetResponse.DNSRecordsUriRecord;

export namespace DNSRecordGetResponse {
  export interface DNSRecordsARecord {
    /**
     * A valid IPv4 address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'A';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsARecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsARecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsAaaaRecord {
    /**
     * A valid IPv6 address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'AAAA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsAaaaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsAaaaRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsCaaRecord {
    /**
     * Components of a CAA record.
     */
    data: DNSRecordsCaaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CAA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted CAA content. See 'data' to set CAA properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsCaaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsCaaRecord {
    /**
     * Components of a CAA record.
     */
    export interface Data {
      /**
       * Flags for the CAA record.
       */
      flags?: number;

      /**
       * Name of the property controlled by this record (e.g.: issue, issuewild, iodef).
       */
      tag?: string;

      /**
       * Value of the record. This field's semantics depend on the chosen tag.
       */
      value?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsCertRecord {
    /**
     * Components of a CERT record.
     */
    data: DNSRecordsCertRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CERT';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted CERT content. See 'data' to set CERT properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsCertRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsCertRecord {
    /**
     * Components of a CERT record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Certificate.
       */
      certificate?: string;

      /**
       * Key Tag.
       */
      key_tag?: number;

      /**
       * Type.
       */
      type?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsCnameRecord {
    /**
     * A valid hostname. Must not match the record's name.
     */
    content: unknown;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'CNAME';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsCnameRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Whether the record is receiving the performance and security benefits of
     * Cloudflare.
     */
    proxied?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsCnameRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsDnskeyRecord {
    /**
     * Components of a DNSKEY record.
     */
    data: DNSRecordsDnskeyRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'DNSKEY';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted DNSKEY content. See 'data' to set DNSKEY properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsDnskeyRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsDnskeyRecord {
    /**
     * Components of a DNSKEY record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Flags.
       */
      flags?: number;

      /**
       * Protocol.
       */
      protocol?: number;

      /**
       * Public Key.
       */
      public_key?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsDsRecord {
    /**
     * Components of a DS record.
     */
    data: DNSRecordsDsRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'DS';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted DS content. See 'data' to set DS properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsDsRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsDsRecord {
    /**
     * Components of a DS record.
     */
    export interface Data {
      /**
       * Algorithm.
       */
      algorithm?: number;

      /**
       * Digest.
       */
      digest?: string;

      /**
       * Digest Type.
       */
      digest_type?: number;

      /**
       * Key Tag.
       */
      key_tag?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsHTTPSRecord {
    /**
     * Components of a HTTPS record.
     */
    data: DNSRecordsHTTPSRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'HTTPS';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted HTTPS content. See 'data' to set HTTPS properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsHTTPSRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsHTTPSRecord {
    /**
     * Components of a HTTPS record.
     */
    export interface Data {
      /**
       * priority.
       */
      priority?: number;

      /**
       * target.
       */
      target?: string;

      /**
       * value.
       */
      value?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsLocRecord {
    /**
     * Components of a LOC record.
     */
    data: DNSRecordsLocRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'LOC';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted LOC content. See 'data' to set LOC properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsLocRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsLocRecord {
    /**
     * Components of a LOC record.
     */
    export interface Data {
      /**
       * Altitude of location in meters.
       */
      altitude?: number;

      /**
       * Degrees of latitude.
       */
      lat_degrees?: number;

      /**
       * Latitude direction.
       */
      lat_direction?: 'N' | 'S';

      /**
       * Minutes of latitude.
       */
      lat_minutes?: number;

      /**
       * Seconds of latitude.
       */
      lat_seconds?: number;

      /**
       * Degrees of longitude.
       */
      long_degrees?: number;

      /**
       * Longitude direction.
       */
      long_direction?: 'E' | 'W';

      /**
       * Minutes of longitude.
       */
      long_minutes?: number;

      /**
       * Seconds of longitude.
       */
      long_seconds?: number;

      /**
       * Horizontal precision of location.
       */
      precision_horz?: number;

      /**
       * Vertical precision of location.
       */
      precision_vert?: number;

      /**
       * Size of location in meters.
       */
      size?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsMxRecord {
    /**
     * A valid mail server hostname.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Required for MX, SRV and URI records; unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority: number;

    /**
     * Record type.
     */
    type: 'MX';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsMxRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsMxRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsNaptrRecord {
    /**
     * Components of a NAPTR record.
     */
    data: DNSRecordsNaptrRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'NAPTR';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted NAPTR content. See 'data' to set NAPTR properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsNaptrRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsNaptrRecord {
    /**
     * Components of a NAPTR record.
     */
    export interface Data {
      /**
       * Flags.
       */
      flags?: string;

      /**
       * Order.
       */
      order?: number;

      /**
       * Preference.
       */
      preference?: number;

      /**
       * Regex.
       */
      regex?: string;

      /**
       * Replacement.
       */
      replacement?: string;

      /**
       * Service.
       */
      service?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsNsRecord {
    /**
     * A valid name server host name.
     */
    content: unknown;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'NS';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsNsRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsNsRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsPtrRecord {
    /**
     * Domain name pointing to the address.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'PTR';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsPtrRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsPtrRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsSmimeaRecord {
    /**
     * Components of a SMIMEA record.
     */
    data: DNSRecordsSmimeaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SMIMEA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted SMIMEA content. See 'data' to set SMIMEA properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsSmimeaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsSmimeaRecord {
    /**
     * Components of a SMIMEA record.
     */
    export interface Data {
      /**
       * Certificate.
       */
      certificate?: string;

      /**
       * Matching Type.
       */
      matching_type?: number;

      /**
       * Selector.
       */
      selector?: number;

      /**
       * Usage.
       */
      usage?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsSrvRecord {
    /**
     * Components of a SRV record.
     */
    data: DNSRecordsSrvRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode. For SRV records, the first
     * label is normally a service and the second a protocol name, each starting with
     * an underscore.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SRV';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Priority, weight, port, and SRV target. See 'data' for setting the individual
     * component values.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsSrvRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsSrvRecord {
    /**
     * Components of a SRV record.
     */
    export interface Data {
      /**
       * A valid hostname. Deprecated in favor of the regular 'name' outside the data
       * map. This data map field represents the remainder of the full 'name' after the
       * service and protocol.
       */
      name?: string;

      /**
       * The port of the service.
       */
      port?: number;

      /**
       * Required for MX, SRV and URI records; unused by other record types. Records with
       * lower priorities are preferred.
       */
      priority?: number;

      /**
       * A valid protocol, prefixed with an underscore. Deprecated in favor of the
       * regular 'name' outside the data map. This data map field normally represents the
       * second label of that 'name'.
       */
      proto?: string;

      /**
       * A service type, prefixed with an underscore. Deprecated in favor of the regular
       * 'name' outside the data map. This data map field normally represents the first
       * label of that 'name'.
       */
      service?: string;

      /**
       * A valid hostname.
       */
      target?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsSshfpRecord {
    /**
     * Components of a SSHFP record.
     */
    data: DNSRecordsSshfpRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SSHFP';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted SSHFP content. See 'data' to set SSHFP properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsSshfpRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsSshfpRecord {
    /**
     * Components of a SSHFP record.
     */
    export interface Data {
      /**
       * algorithm.
       */
      algorithm?: number;

      /**
       * fingerprint.
       */
      fingerprint?: string;

      /**
       * type.
       */
      type?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsSvcbRecord {
    /**
     * Components of a SVCB record.
     */
    data: DNSRecordsSvcbRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'SVCB';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted SVCB content. See 'data' to set SVCB properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsSvcbRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsSvcbRecord {
    /**
     * Components of a SVCB record.
     */
    export interface Data {
      /**
       * priority.
       */
      priority?: number;

      /**
       * target.
       */
      target?: string;

      /**
       * value.
       */
      value?: string;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsTlsaRecord {
    /**
     * Components of a TLSA record.
     */
    data: DNSRecordsTlsaRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'TLSA';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted TLSA content. See 'data' to set TLSA properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsTlsaRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsTlsaRecord {
    /**
     * Components of a TLSA record.
     */
    export interface Data {
      /**
       * certificate.
       */
      certificate?: string;

      /**
       * Matching Type.
       */
      matching_type?: number;

      /**
       * Selector.
       */
      selector?: number;

      /**
       * Usage.
       */
      usage?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsTxtRecord {
    /**
     * Text content for the record.
     */
    content: string;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Record type.
     */
    type: 'TXT';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsTxtRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsTxtRecord {
    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }

  export interface DNSRecordsUriRecord {
    /**
     * Components of a URI record.
     */
    data: DNSRecordsUriRecord.Data;

    /**
     * DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Required for MX, SRV and URI records; unused by other record types. Records with
     * lower priorities are preferred.
     */
    priority: number;

    /**
     * Record type.
     */
    type: 'URI';

    /**
     * Identifier
     */
    id?: string;

    /**
     * Comments or notes about the DNS record. This field has no effect on DNS
     * responses.
     */
    comment?: string;

    /**
     * Formatted URI content. See 'data' to set URI properties.
     */
    content?: string;

    /**
     * When the record was created.
     */
    created_on?: string;

    /**
     * Whether this record can be modified/deleted (true means it's managed by
     * Cloudflare).
     */
    locked?: boolean;

    /**
     * Extra Cloudflare-specific information about the record.
     */
    meta?: DNSRecordsUriRecord.Meta;

    /**
     * When the record was last modified.
     */
    modified_on?: string;

    /**
     * Whether the record can be proxied by Cloudflare or not.
     */
    proxiable?: boolean;

    /**
     * Custom tags for the DNS record. This field has no effect on DNS responses.
     */
    tags?: Array<string>;

    /**
     * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
     * Value must be between 60 and 86400, with the minimum reduced to 30 for
     * Enterprise zones.
     */
    ttl?: number | 1;

    /**
     * Identifier
     */
    zone_id?: string;

    /**
     * The domain of the record.
     */
    zone_name?: string;
  }

  export namespace DNSRecordsUriRecord {
    /**
     * Components of a URI record.
     */
    export interface Data {
      /**
       * The record content.
       */
      content?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }

    /**
     * Extra Cloudflare-specific information about the record.
     */
    export interface Meta {
      /**
       * Will exist if Cloudflare automatically added this DNS record during initial
       * setup.
       */
      auto_added?: boolean;

      /**
       * Where the record originated from.
       */
      source?: string;
    }
  }
}

export interface DNSRecordImportResponse {
  /**
   * Number of DNS records added.
   */
  recs_added?: number;

  /**
   * Total number of DNS records parsed.
   */
  total_records_parsed?: number;
}

export interface DNSRecordScanResponse {
  /**
   * Number of DNS records added.
   */
  recs_added?: number;

  /**
   * Total number of DNS records parsed.
   */
  total_records_parsed?: number;
}

export interface DNSRecordCreateParams {
  /**
   * DNS record name (or @ for the zone apex) in Punycode.
   */
  name: string;

  /**
   * Record type.
   */
  type: 'URI';

  /**
   * Comments or notes about the DNS record. This field has no effect on DNS
   * responses.
   */
  comment?: string;

  data?: DNSRecordCreateParams.Data;

  meta?: DNSRecordCreateParams.Meta;

  /**
   * Required for MX, SRV and URI records; unused by other record types. Records with
   * lower priorities are preferred.
   */
  priority?: number;

  /**
   * Whether the record is receiving the performance and security benefits of
   * Cloudflare.
   */
  proxied?: boolean;

  /**
   * Custom tags for the DNS record. This field has no effect on DNS responses.
   */
  tags?: Array<string>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: number | 1;
}

export namespace DNSRecordCreateParams {
  export interface Data {
    /**
     * algorithm.
     */
    algorithm?: number;

    /**
     * Altitude of location in meters.
     */
    altitude?: number;

    /**
     * certificate.
     */
    certificate?: string;

    /**
     * The record content.
     */
    content?: string;

    /**
     * Digest.
     */
    digest?: string;

    /**
     * Digest Type.
     */
    digest_type?: number;

    /**
     * fingerprint.
     */
    fingerprint?: string;

    /**
     * Flags.
     */
    flags?: string;

    /**
     * Key Tag.
     */
    key_tag?: number;

    /**
     * Degrees of latitude.
     */
    lat_degrees?: number;

    /**
     * Latitude direction.
     */
    lat_direction?: 'N' | 'S';

    /**
     * Minutes of latitude.
     */
    lat_minutes?: number;

    /**
     * Seconds of latitude.
     */
    lat_seconds?: number;

    /**
     * Degrees of longitude.
     */
    long_degrees?: number;

    /**
     * Longitude direction.
     */
    long_direction?: 'E' | 'W';

    /**
     * Minutes of longitude.
     */
    long_minutes?: number;

    /**
     * Seconds of longitude.
     */
    long_seconds?: number;

    /**
     * Matching Type.
     */
    matching_type?: number;

    /**
     * A valid hostname. Deprecated in favor of the regular 'name' outside the data
     * map. This data map field represents the remainder of the full 'name' after the
     * service and protocol.
     */
    name?: string;

    /**
     * Order.
     */
    order?: number;

    /**
     * The port of the service.
     */
    port?: number;

    /**
     * Horizontal precision of location.
     */
    precision_horz?: number;

    /**
     * Vertical precision of location.
     */
    precision_vert?: number;

    /**
     * Preference.
     */
    preference?: number;

    /**
     * priority.
     */
    priority?: number;

    /**
     * A valid protocol, prefixed with an underscore. Deprecated in favor of the
     * regular 'name' outside the data map. This data map field normally represents the
     * second label of that 'name'.
     */
    proto?: string;

    /**
     * Protocol.
     */
    protocol?: number;

    /**
     * Public Key.
     */
    public_key?: string;

    /**
     * Regex.
     */
    regex?: string;

    /**
     * Replacement.
     */
    replacement?: string;

    /**
     * Selector.
     */
    selector?: number;

    /**
     * A service type, prefixed with an underscore. Deprecated in favor of the regular
     * 'name' outside the data map. This data map field normally represents the first
     * label of that 'name'.
     */
    service?: string;

    /**
     * Size of location in meters.
     */
    size?: number;

    /**
     * Name of the property controlled by this record (e.g.: issue, issuewild, iodef).
     */
    tag?: string;

    /**
     * target.
     */
    target?: string;

    /**
     * type.
     */
    type?: number;

    /**
     * Usage.
     */
    usage?: number;

    /**
     * value.
     */
    value?: string;

    /**
     * The record weight.
     */
    weight?: number;
  }

  export interface Meta {
    /**
     * Will exist if Cloudflare automatically added this DNS record during initial
     * setup.
     */
    auto_added?: boolean;

    /**
     * Where the record originated from.
     */
    source?: string;
  }
}

export interface DNSRecordUpdateParams {
  /**
   * DNS record name (or @ for the zone apex) in Punycode.
   */
  name: string;

  /**
   * Record type.
   */
  type: 'URI';

  /**
   * Comments or notes about the DNS record. This field has no effect on DNS
   * responses.
   */
  comment?: string;

  data?: DNSRecordUpdateParams.Data;

  meta?: DNSRecordUpdateParams.Meta;

  /**
   * Required for MX, SRV and URI records; unused by other record types. Records with
   * lower priorities are preferred.
   */
  priority?: number;

  /**
   * Whether the record is receiving the performance and security benefits of
   * Cloudflare.
   */
  proxied?: boolean;

  /**
   * Custom tags for the DNS record. This field has no effect on DNS responses.
   */
  tags?: Array<string>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: number | 1;
}

export namespace DNSRecordUpdateParams {
  export interface Data {
    /**
     * algorithm.
     */
    algorithm?: number;

    /**
     * Altitude of location in meters.
     */
    altitude?: number;

    /**
     * certificate.
     */
    certificate?: string;

    /**
     * The record content.
     */
    content?: string;

    /**
     * Digest.
     */
    digest?: string;

    /**
     * Digest Type.
     */
    digest_type?: number;

    /**
     * fingerprint.
     */
    fingerprint?: string;

    /**
     * Flags.
     */
    flags?: string;

    /**
     * Key Tag.
     */
    key_tag?: number;

    /**
     * Degrees of latitude.
     */
    lat_degrees?: number;

    /**
     * Latitude direction.
     */
    lat_direction?: 'N' | 'S';

    /**
     * Minutes of latitude.
     */
    lat_minutes?: number;

    /**
     * Seconds of latitude.
     */
    lat_seconds?: number;

    /**
     * Degrees of longitude.
     */
    long_degrees?: number;

    /**
     * Longitude direction.
     */
    long_direction?: 'E' | 'W';

    /**
     * Minutes of longitude.
     */
    long_minutes?: number;

    /**
     * Seconds of longitude.
     */
    long_seconds?: number;

    /**
     * Matching Type.
     */
    matching_type?: number;

    /**
     * A valid hostname. Deprecated in favor of the regular 'name' outside the data
     * map. This data map field represents the remainder of the full 'name' after the
     * service and protocol.
     */
    name?: string;

    /**
     * Order.
     */
    order?: number;

    /**
     * The port of the service.
     */
    port?: number;

    /**
     * Horizontal precision of location.
     */
    precision_horz?: number;

    /**
     * Vertical precision of location.
     */
    precision_vert?: number;

    /**
     * Preference.
     */
    preference?: number;

    /**
     * priority.
     */
    priority?: number;

    /**
     * A valid protocol, prefixed with an underscore. Deprecated in favor of the
     * regular 'name' outside the data map. This data map field normally represents the
     * second label of that 'name'.
     */
    proto?: string;

    /**
     * Protocol.
     */
    protocol?: number;

    /**
     * Public Key.
     */
    public_key?: string;

    /**
     * Regex.
     */
    regex?: string;

    /**
     * Replacement.
     */
    replacement?: string;

    /**
     * Selector.
     */
    selector?: number;

    /**
     * A service type, prefixed with an underscore. Deprecated in favor of the regular
     * 'name' outside the data map. This data map field normally represents the first
     * label of that 'name'.
     */
    service?: string;

    /**
     * Size of location in meters.
     */
    size?: number;

    /**
     * Name of the property controlled by this record (e.g.: issue, issuewild, iodef).
     */
    tag?: string;

    /**
     * target.
     */
    target?: string;

    /**
     * type.
     */
    type?: number;

    /**
     * Usage.
     */
    usage?: number;

    /**
     * value.
     */
    value?: string;

    /**
     * The record weight.
     */
    weight?: number;
  }

  export interface Meta {
    /**
     * Will exist if Cloudflare automatically added this DNS record during initial
     * setup.
     */
    auto_added?: boolean;

    /**
     * Where the record originated from.
     */
    source?: string;
  }
}

export interface DNSRecordListParams extends V4PagePaginationArrayParams {
  comment?: DNSRecordListParams.Comment;

  /**
   * DNS record content.
   */
  content?: string;

  /**
   * Direction to order DNS records in.
   */
  direction?: 'asc' | 'desc';

  /**
   * Whether to match all search requirements or at least one (any). If set to `all`,
   * acts like a logical AND between filters. If set to `any`, acts like a logical OR
   * instead. Note that the interaction between tag filters is controlled by the
   * `tag-match` parameter instead.
   */
  match?: 'any' | 'all';

  /**
   * DNS record name (or @ for the zone apex) in Punycode.
   */
  name?: string;

  /**
   * Field to order DNS records by.
   */
  order?: 'type' | 'name' | 'content' | 'ttl' | 'proxied';

  /**
   * Whether the record is receiving the performance and security benefits of
   * Cloudflare.
   */
  proxied?: boolean;

  /**
   * Allows searching in multiple properties of a DNS record simultaneously. This
   * parameter is intended for human users, not automation. Its exact behavior is
   * intentionally left unspecified and is subject to change in the future. This
   * parameter works independently of the `match` setting. For automated searches,
   * please use the other available parameters.
   */
  search?: string;

  tag?: DNSRecordListParams.Tag;

  /**
   * Whether to match all tag search requirements or at least one (any). If set to
   * `all`, acts like a logical AND between tag filters. If set to `any`, acts like a
   * logical OR instead. Note that the regular `match` parameter is still used to
   * combine the resulting condition with other filters that aren't related to tags.
   */
  tag_match?: 'any' | 'all';

  /**
   * Record type.
   */
  type?:
    | 'A'
    | 'AAAA'
    | 'CAA'
    | 'CERT'
    | 'CNAME'
    | 'DNSKEY'
    | 'DS'
    | 'HTTPS'
    | 'LOC'
    | 'MX'
    | 'NAPTR'
    | 'NS'
    | 'PTR'
    | 'SMIMEA'
    | 'SRV'
    | 'SSHFP'
    | 'SVCB'
    | 'TLSA'
    | 'TXT'
    | 'URI';
}

export namespace DNSRecordListParams {
  export interface Comment {
    /**
     * If this parameter is present, only records _without_ a comment are returned.
     */
    absent?: string;

    /**
     * Substring of the DNS record comment. Comment filters are case-insensitive.
     */
    contains?: string;

    /**
     * Suffix of the DNS record comment. Comment filters are case-insensitive.
     */
    endswith?: string;

    /**
     * Exact value of the DNS record comment. Comment filters are case-insensitive.
     */
    exact?: string;

    /**
     * If this parameter is present, only records _with_ a comment are returned.
     */
    present?: string;

    /**
     * Prefix of the DNS record comment. Comment filters are case-insensitive.
     */
    startswith?: string;
  }

  export interface Tag {
    /**
     * Name of a tag which must _not_ be present on the DNS record. Tag filters are
     * case-insensitive.
     */
    absent?: string;

    /**
     * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return
     * DNS records that have a tag named `<tag-name>` whose value contains
     * `<tag-value>`. Tag filters are case-insensitive.
     */
    contains?: string;

    /**
     * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return
     * DNS records that have a tag named `<tag-name>` whose value ends with
     * `<tag-value>`. Tag filters are case-insensitive.
     */
    endswith?: string;

    /**
     * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return
     * DNS records that have a tag named `<tag-name>` whose value is `<tag-value>`. Tag
     * filters are case-insensitive.
     */
    exact?: string;

    /**
     * Name of a tag which must be present on the DNS record. Tag filters are
     * case-insensitive.
     */
    present?: string;

    /**
     * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return
     * DNS records that have a tag named `<tag-name>` whose value starts with
     * `<tag-value>`. Tag filters are case-insensitive.
     */
    startswith?: string;
  }
}

export interface DNSRecordImportParams {
  /**
   * BIND config to import.
   *
   * **Tip:** When using cURL, a file can be uploaded using
   * `--form 'file=@bind_config.txt'`.
   */
  file: string;

  /**
   * Whether or not proxiable records should receive the performance and security
   * benefits of Cloudflare.
   *
   * The value should be either `true` or `false`.
   */
  proxied?: string;
}

export namespace DNSRecords {
  export import DNSRecordCreateResponse = DNSRecordsAPI.DNSRecordCreateResponse;
  export import DNSRecordUpdateResponse = DNSRecordsAPI.DNSRecordUpdateResponse;
  export import DNSRecordListResponse = DNSRecordsAPI.DNSRecordListResponse;
  export import DNSRecordDeleteResponse = DNSRecordsAPI.DNSRecordDeleteResponse;
  export import DNSRecordExportResponse = DNSRecordsAPI.DNSRecordExportResponse;
  export import DNSRecordGetResponse = DNSRecordsAPI.DNSRecordGetResponse;
  export import DNSRecordImportResponse = DNSRecordsAPI.DNSRecordImportResponse;
  export import DNSRecordScanResponse = DNSRecordsAPI.DNSRecordScanResponse;
  export import DNSRecordListResponsesV4PagePaginationArray = DNSRecordsAPI.DNSRecordListResponsesV4PagePaginationArray;
  export import DNSRecordCreateParams = DNSRecordsAPI.DNSRecordCreateParams;
  export import DNSRecordUpdateParams = DNSRecordsAPI.DNSRecordUpdateParams;
  export import DNSRecordListParams = DNSRecordsAPI.DNSRecordListParams;
  export import DNSRecordImportParams = DNSRecordsAPI.DNSRecordImportParams;
}
