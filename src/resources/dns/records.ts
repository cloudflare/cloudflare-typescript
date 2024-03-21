// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RecordsAPI from 'cloudflare/resources/dns/records';
import { multipartFormRequestOptions } from 'cloudflare/core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Records extends APIResource {
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
  create(params: RecordCreateParams, options?: Core.RequestOptions): Core.APIPromise<DNSRecord> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/dns_records`, { body, ...options }) as Core.APIPromise<{
        result: DNSRecord;
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
    dnsRecordId: string,
    params: RecordUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSRecord> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/dns_records/${dnsRecordId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DNSRecord }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List, search, sort, and filter a zones' DNS records.
   */
  list(
    params: RecordListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DNSRecordsV4PagePaginationArray, DNSRecord> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(`/zones/${zone_id}/dns_records`, DNSRecordsV4PagePaginationArray, {
      query,
      ...options,
    });
  }

  /**
   * Delete DNS Record
   */
  delete(
    dnsRecordId: string,
    params: RecordDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecordDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(`/zones/${zone_id}/dns_records/${dnsRecordId}`, options) as Core.APIPromise<{
        result: RecordDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing DNS record. Notes:
   *
   * - A/AAAA records cannot exist on the same name as CNAME records.
   * - NS records cannot exist on the same name as any other record type.
   * - Domain names are always represented in Punycode, even if Unicode characters
   *   were used when creating the record.
   */
  edit(
    dnsRecordId: string,
    params: RecordEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSRecord> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/dns_records/${dnsRecordId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DNSRecord }>
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
  export(params: RecordExportParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const { zone_id } = params;
    return this._client.get(`/zones/${zone_id}/dns_records/export`, {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * DNS Record Details
   */
  get(
    dnsRecordId: string,
    params: RecordGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSRecord> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/dns_records/${dnsRecordId}`, options) as Core.APIPromise<{
        result: DNSRecord;
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
  import(params: RecordImportParams, options?: Core.RequestOptions): Core.APIPromise<RecordImportResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(
        `/zones/${zone_id}/dns_records/import`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: RecordImportResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Scan for common DNS records on your domain and automatically add them to your
   * zone. Useful if you haven't updated your nameservers yet.
   */
  scan(params: RecordScanParams, options?: Core.RequestOptions): Core.APIPromise<RecordScanResponse> {
    const { zone_id } = params;
    return (
      this._client.post(`/zones/${zone_id}/dns_records/scan`, options) as Core.APIPromise<{
        result: RecordScanResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DNSRecordsV4PagePaginationArray extends V4PagePaginationArray<DNSRecord> {}

export type DNSRecord =
  | DNSRecord.A
  | DNSRecord.AAAA
  | DNSRecord.CAA
  | DNSRecord.CERT
  | DNSRecord.CNAME
  | DNSRecord.DNSKEY
  | DNSRecord.DS
  | DNSRecord.HTTPS
  | DNSRecord.LOC
  | DNSRecord.MX
  | DNSRecord.NAPTR
  | DNSRecord.NS
  | DNSRecord.PTR
  | DNSRecord.SMIMEA
  | DNSRecord.SRV
  | DNSRecord.SSHFP
  | DNSRecord.SVCB
  | DNSRecord.TLSA
  | DNSRecord.TXT
  | DNSRecord.URI;

export namespace DNSRecord {
  export interface A {
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
    meta?: A.Meta;

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

  export namespace A {
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

  export interface AAAA {
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
    meta?: AAAA.Meta;

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

  export namespace AAAA {
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

  export interface CAA {
    /**
     * Components of a CAA record.
     */
    data: CAA.Data;

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
    meta?: CAA.Meta;

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

  export namespace CAA {
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

  export interface CERT {
    /**
     * Components of a CERT record.
     */
    data: CERT.Data;

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
    meta?: CERT.Meta;

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

  export namespace CERT {
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

  export interface CNAME {
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
    meta?: CNAME.Meta;

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

  export namespace CNAME {
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

  export interface DNSKEY {
    /**
     * Components of a DNSKEY record.
     */
    data: DNSKEY.Data;

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
    meta?: DNSKEY.Meta;

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

  export namespace DNSKEY {
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

  export interface DS {
    /**
     * Components of a DS record.
     */
    data: DS.Data;

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
    meta?: DS.Meta;

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

  export namespace DS {
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

  export interface HTTPS {
    /**
     * Components of a HTTPS record.
     */
    data: HTTPS.Data;

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
    meta?: HTTPS.Meta;

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

  export namespace HTTPS {
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

  export interface LOC {
    /**
     * Components of a LOC record.
     */
    data: LOC.Data;

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
    meta?: LOC.Meta;

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

  export namespace LOC {
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

  export interface MX {
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
    meta?: MX.Meta;

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

  export namespace MX {
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

  export interface NAPTR {
    /**
     * Components of a NAPTR record.
     */
    data: NAPTR.Data;

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
    meta?: NAPTR.Meta;

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

  export namespace NAPTR {
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

  export interface NS {
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
    meta?: NS.Meta;

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

  export namespace NS {
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

  export interface PTR {
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
    meta?: PTR.Meta;

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

  export namespace PTR {
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

  export interface SMIMEA {
    /**
     * Components of a SMIMEA record.
     */
    data: SMIMEA.Data;

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
    meta?: SMIMEA.Meta;

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

  export namespace SMIMEA {
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

  export interface SRV {
    /**
     * Components of a SRV record.
     */
    data: SRV.Data;

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
    meta?: SRV.Meta;

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

  export namespace SRV {
    /**
     * Components of a SRV record.
     */
    export interface Data {
      /**
       * @deprecated: A valid hostname. Deprecated in favor of the regular 'name' outside
       * the data map. This data map field represents the remainder of the full 'name'
       * after the service and protocol.
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
       * @deprecated: A valid protocol, prefixed with an underscore. Deprecated in favor
       * of the regular 'name' outside the data map. This data map field normally
       * represents the second label of that 'name'.
       */
      proto?: string;

      /**
       * @deprecated: A service type, prefixed with an underscore. Deprecated in favor of
       * the regular 'name' outside the data map. This data map field normally represents
       * the first label of that 'name'.
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

  export interface SSHFP {
    /**
     * Components of a SSHFP record.
     */
    data: SSHFP.Data;

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
    meta?: SSHFP.Meta;

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

  export namespace SSHFP {
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

  export interface SVCB {
    /**
     * Components of a SVCB record.
     */
    data: SVCB.Data;

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
    meta?: SVCB.Meta;

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

  export namespace SVCB {
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

  export interface TLSA {
    /**
     * Components of a TLSA record.
     */
    data: TLSA.Data;

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
    meta?: TLSA.Meta;

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

  export namespace TLSA {
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

  export interface TXT {
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
    meta?: TXT.Meta;

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

  export namespace TXT {
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

  export interface URI {
    /**
     * Components of a URI record.
     */
    data: URI.Data;

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
    meta?: URI.Meta;

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

  export namespace URI {
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

export interface RecordDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

/**
 * Exported BIND zone file.
 */
export type RecordExportResponse = string;

export interface RecordImportResponse {
  /**
   * Number of DNS records added.
   */
  recs_added?: number;

  /**
   * Total number of DNS records parsed.
   */
  total_records_parsed?: number;
}

export interface RecordScanResponse {
  /**
   * Number of DNS records added.
   */
  recs_added?: number;

  /**
   * Total number of DNS records parsed.
   */
  total_records_parsed?: number;
}

export interface RecordCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: DNS record name (or @ for the zone apex) in Punycode.
   */
  name: string;

  /**
   * Body param: Record type.
   */
  type:
    | 'URI'
    | 'TXT'
    | 'TLSA'
    | 'SVCB'
    | 'SSHFP'
    | 'SRV'
    | 'SMIMEA'
    | 'PTR'
    | 'NS'
    | 'NAPTR'
    | 'MX'
    | 'LOC'
    | 'HTTPS'
    | 'DS'
    | 'DNSKEY'
    | 'CNAME'
    | 'CERT'
    | 'CAA'
    | 'AAAA'
    | 'A';

  /**
   * Body param: Comments or notes about the DNS record. This field has no effect on
   * DNS responses.
   */
  comment?: string;

  /**
   * Body param: Formatted URI content. See 'data' to set URI properties.
   */
  content?: unknown;

  /**
   * Body param:
   */
  data?: RecordCreateParams.Data;

  /**
   * Body param:
   */
  meta?: RecordCreateParams.Meta;

  /**
   * Body param: Required for MX, SRV and URI records; unused by other record types.
   * Records with lower priorities are preferred.
   */
  priority?: number;

  /**
   * Body param: Whether the record is receiving the performance and security
   * benefits of Cloudflare.
   */
  proxied?: boolean;

  /**
   * Body param: Custom tags for the DNS record. This field has no effect on DNS
   * responses.
   */
  tags?: Array<string>;

  /**
   * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
   * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
   * for Enterprise zones.
   */
  ttl?: number | 1;
}

export namespace RecordCreateParams {
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
    flags?: unknown;

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
     * @deprecated: A valid hostname. Deprecated in favor of the regular 'name' outside
     * the data map. This data map field represents the remainder of the full 'name'
     * after the service and protocol.
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
     * @deprecated: A valid protocol, prefixed with an underscore. Deprecated in favor
     * of the regular 'name' outside the data map. This data map field normally
     * represents the second label of that 'name'.
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
     * @deprecated: A service type, prefixed with an underscore. Deprecated in favor of
     * the regular 'name' outside the data map. This data map field normally represents
     * the first label of that 'name'.
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

export interface RecordUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: DNS record name (or @ for the zone apex) in Punycode.
   */
  name: string;

  /**
   * Body param: Record type.
   */
  type:
    | 'URI'
    | 'TXT'
    | 'TLSA'
    | 'SVCB'
    | 'SSHFP'
    | 'SRV'
    | 'SMIMEA'
    | 'PTR'
    | 'NS'
    | 'NAPTR'
    | 'MX'
    | 'LOC'
    | 'HTTPS'
    | 'DS'
    | 'DNSKEY'
    | 'CNAME'
    | 'CERT'
    | 'CAA'
    | 'AAAA'
    | 'A';

  /**
   * Body param: Comments or notes about the DNS record. This field has no effect on
   * DNS responses.
   */
  comment?: string;

  /**
   * Body param: Formatted URI content. See 'data' to set URI properties.
   */
  content?: unknown;

  /**
   * Body param:
   */
  data?: RecordUpdateParams.Data;

  /**
   * Body param:
   */
  meta?: RecordUpdateParams.Meta;

  /**
   * Body param: Required for MX, SRV and URI records; unused by other record types.
   * Records with lower priorities are preferred.
   */
  priority?: number;

  /**
   * Body param: Whether the record is receiving the performance and security
   * benefits of Cloudflare.
   */
  proxied?: boolean;

  /**
   * Body param: Custom tags for the DNS record. This field has no effect on DNS
   * responses.
   */
  tags?: Array<string>;

  /**
   * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
   * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
   * for Enterprise zones.
   */
  ttl?: number | 1;
}

export namespace RecordUpdateParams {
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
    flags?: unknown;

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
     * @deprecated: A valid hostname. Deprecated in favor of the regular 'name' outside
     * the data map. This data map field represents the remainder of the full 'name'
     * after the service and protocol.
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
     * @deprecated: A valid protocol, prefixed with an underscore. Deprecated in favor
     * of the regular 'name' outside the data map. This data map field normally
     * represents the second label of that 'name'.
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
     * @deprecated: A service type, prefixed with an underscore. Deprecated in favor of
     * the regular 'name' outside the data map. This data map field normally represents
     * the first label of that 'name'.
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

export interface RecordListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param:
   */
  comment?: RecordListParams.Comment;

  /**
   * Query param: DNS record content.
   */
  content?: string;

  /**
   * Query param: Direction to order DNS records in.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Whether to match all search requirements or at least one (any). If
   * set to `all`, acts like a logical AND between filters. If set to `any`, acts
   * like a logical OR instead. Note that the interaction between tag filters is
   * controlled by the `tag-match` parameter instead.
   */
  match?: 'any' | 'all';

  /**
   * Query param: DNS record name (or @ for the zone apex) in Punycode.
   */
  name?: string;

  /**
   * Query param: Field to order DNS records by.
   */
  order?: 'type' | 'name' | 'content' | 'ttl' | 'proxied';

  /**
   * Query param: Whether the record is receiving the performance and security
   * benefits of Cloudflare.
   */
  proxied?: boolean;

  /**
   * Query param: Allows searching in multiple properties of a DNS record
   * simultaneously. This parameter is intended for human users, not automation. Its
   * exact behavior is intentionally left unspecified and is subject to change in the
   * future. This parameter works independently of the `match` setting. For automated
   * searches, please use the other available parameters.
   */
  search?: string;

  /**
   * Query param:
   */
  tag?: RecordListParams.Tag;

  /**
   * Query param: Whether to match all tag search requirements or at least one (any).
   * If set to `all`, acts like a logical AND between tag filters. If set to `any`,
   * acts like a logical OR instead. Note that the regular `match` parameter is still
   * used to combine the resulting condition with other filters that aren't related
   * to tags.
   */
  tag_match?: 'any' | 'all';

  /**
   * Query param: Record type.
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

export namespace RecordListParams {
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

export interface RecordDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface RecordEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: DNS record name (or @ for the zone apex) in Punycode.
   */
  name: string;

  /**
   * Body param: Record type.
   */
  type:
    | 'URI'
    | 'TXT'
    | 'TLSA'
    | 'SVCB'
    | 'SSHFP'
    | 'SRV'
    | 'SMIMEA'
    | 'PTR'
    | 'NS'
    | 'NAPTR'
    | 'MX'
    | 'LOC'
    | 'HTTPS'
    | 'DS'
    | 'DNSKEY'
    | 'CNAME'
    | 'CERT'
    | 'CAA'
    | 'AAAA'
    | 'A';

  /**
   * Body param: Comments or notes about the DNS record. This field has no effect on
   * DNS responses.
   */
  comment?: string;

  /**
   * Body param: Formatted URI content. See 'data' to set URI properties.
   */
  content?: unknown;

  /**
   * Body param:
   */
  data?: RecordEditParams.Data;

  /**
   * Body param:
   */
  meta?: RecordEditParams.Meta;

  /**
   * Body param: Required for MX, SRV and URI records; unused by other record types.
   * Records with lower priorities are preferred.
   */
  priority?: number;

  /**
   * Body param: Whether the record is receiving the performance and security
   * benefits of Cloudflare.
   */
  proxied?: boolean;

  /**
   * Body param: Custom tags for the DNS record. This field has no effect on DNS
   * responses.
   */
  tags?: Array<string>;

  /**
   * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
   * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
   * for Enterprise zones.
   */
  ttl?: number | 1;
}

export namespace RecordEditParams {
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
    flags?: unknown;

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
     * @deprecated: A valid hostname. Deprecated in favor of the regular 'name' outside
     * the data map. This data map field represents the remainder of the full 'name'
     * after the service and protocol.
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
     * @deprecated: A valid protocol, prefixed with an underscore. Deprecated in favor
     * of the regular 'name' outside the data map. This data map field normally
     * represents the second label of that 'name'.
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
     * @deprecated: A service type, prefixed with an underscore. Deprecated in favor of
     * the regular 'name' outside the data map. This data map field normally represents
     * the first label of that 'name'.
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

export interface RecordExportParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface RecordGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface RecordImportParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: BIND config to import.
   *
   * **Tip:** When using cURL, a file can be uploaded using
   * `--form 'file=@bind_config.txt'`.
   */
  file: string;

  /**
   * Body param: Whether or not proxiable records should receive the performance and
   * security benefits of Cloudflare.
   *
   * The value should be either `true` or `false`.
   */
  proxied?: string;
}

export interface RecordScanParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Records {
  export import DNSRecord = RecordsAPI.DNSRecord;
  export import RecordDeleteResponse = RecordsAPI.RecordDeleteResponse;
  export import RecordExportResponse = RecordsAPI.RecordExportResponse;
  export import RecordImportResponse = RecordsAPI.RecordImportResponse;
  export import RecordScanResponse = RecordsAPI.RecordScanResponse;
  export import DNSRecordsV4PagePaginationArray = RecordsAPI.DNSRecordsV4PagePaginationArray;
  export import RecordCreateParams = RecordsAPI.RecordCreateParams;
  export import RecordUpdateParams = RecordsAPI.RecordUpdateParams;
  export import RecordListParams = RecordsAPI.RecordListParams;
  export import RecordDeleteParams = RecordsAPI.RecordDeleteParams;
  export import RecordEditParams = RecordsAPI.RecordEditParams;
  export import RecordExportParams = RecordsAPI.RecordExportParams;
  export import RecordGetParams = RecordsAPI.RecordGetParams;
  export import RecordImportParams = RecordsAPI.RecordImportParams;
  export import RecordScanParams = RecordsAPI.RecordScanParams;
}
