// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as RecordsAPI from './records';
import * as Shared from '../shared';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

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
  create(params: RecordCreateParams, options?: Core.RequestOptions): Core.APIPromise<Record> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/dns_records`, { body, ...options }) as Core.APIPromise<{
        result: Record;
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
  ): Core.APIPromise<Record> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/dns_records/${dnsRecordId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Record }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List, search, sort, and filter a zones' DNS records.
   */
  list(
    params: RecordListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RecordsV4PagePaginationArray, Record> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(`/zones/${zone_id}/dns_records`, RecordsV4PagePaginationArray, {
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
  ): Core.APIPromise<Record> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/dns_records/${dnsRecordId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Record }>
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
  get(dnsRecordId: string, params: RecordGetParams, options?: Core.RequestOptions): Core.APIPromise<Record> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/dns_records/${dnsRecordId}`, options) as Core.APIPromise<{
        result: Record;
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
        Core.multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: RecordImportResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Scan for common DNS records on your domain and automatically add them to your
   * zone. Useful if you haven't updated your nameservers yet.
   */
  scan(params: RecordScanParams, options?: Core.RequestOptions): Core.APIPromise<RecordScanResponse> {
    const { zone_id, body } = params;
    return (
      this._client.post(`/zones/${zone_id}/dns_records/scan`, { body: body, ...options }) as Core.APIPromise<{
        result: RecordScanResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class RecordsV4PagePaginationArray extends V4PagePaginationArray<Record> {}

export interface ARecord {
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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export interface AAAARecord {
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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export interface CAARecord {
  /**
   * Components of a CAA record.
   */
  data: CAARecord.Data;

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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export namespace CAARecord {
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
}

export interface CERTRecord {
  /**
   * Components of a CERT record.
   */
  data: CERTRecord.Data;

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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export namespace CERTRecord {
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
}

export interface CNAMERecord {
  /**
   * A valid hostname. Must not match the record's name.
   */
  content: string;

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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export interface DNSKEYRecord {
  /**
   * Components of a DNSKEY record.
   */
  data: DNSKEYRecord.Data;

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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export namespace DNSKEYRecord {
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
}

export interface DSRecord {
  /**
   * Components of a DS record.
   */
  data: DSRecord.Data;

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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export namespace DSRecord {
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
}

export interface HTTPSRecord {
  /**
   * Components of a HTTPS record.
   */
  data: HTTPSRecord.Data;

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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export namespace HTTPSRecord {
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
}

export interface LOCRecord {
  /**
   * Components of a LOC record.
   */
  data: LOCRecord.Data;

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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export namespace LOCRecord {
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
}

export interface MXRecord {
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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export interface NAPTRRecord {
  /**
   * Components of a NAPTR record.
   */
  data: NAPTRRecord.Data;

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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export namespace NAPTRRecord {
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
}

export interface NSRecord {
  /**
   * A valid name server host name.
   */
  content: string;

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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export interface PTRRecord {
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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export type Record =
  | ARecord
  | AAAARecord
  | CAARecord
  | CERTRecord
  | CNAMERecord
  | DNSKEYRecord
  | DSRecord
  | HTTPSRecord
  | LOCRecord
  | MXRecord
  | NAPTRRecord
  | NSRecord
  | PTRRecord
  | SMIMEARecord
  | SRVRecord
  | SSHFPRecord
  | SVCBRecord
  | TLSARecord
  | TXTRecord
  | URIRecord;

/**
 * Extra Cloudflare-specific information about the record.
 */
export interface RecordMetadata {
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

export interface RecordProcessTiming {
  /**
   * When the file parsing ended.
   */
  end_time?: string;

  /**
   * Processing time of the file in seconds.
   */
  process_time?: number;

  /**
   * When the file parsing started.
   */
  start_time?: string;
}

/**
 * Individual tag of the form name:value (the name must consist of only letters,
 * numbers, underscores and hyphens)
 */
export type RecordTags = string;

/**
 * Individual tag of the form name:value (the name must consist of only letters,
 * numbers, underscores and hyphens)
 */
export type RecordTagsParam = string;

export interface SMIMEARecord {
  /**
   * Components of a SMIMEA record.
   */
  data: SMIMEARecord.Data;

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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export namespace SMIMEARecord {
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
}

export interface SRVRecord {
  /**
   * Components of a SRV record.
   */
  data: SRVRecord.Data;

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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export namespace SRVRecord {
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
}

export interface SSHFPRecord {
  /**
   * Components of a SSHFP record.
   */
  data: SSHFPRecord.Data;

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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export namespace SSHFPRecord {
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
}

export interface SVCBRecord {
  /**
   * Components of a SVCB record.
   */
  data: SVCBRecord.Data;

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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export namespace SVCBRecord {
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
}

export interface TLSARecord {
  /**
   * Components of a TLSA record.
   */
  data: TLSARecord.Data;

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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export namespace TLSARecord {
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
}

/**
 * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
 * Value must be between 60 and 86400, with the minimum reduced to 30 for
 * Enterprise zones.
 */
export type TTL = number | 1;

/**
 * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
 * Value must be between 60 and 86400, with the minimum reduced to 30 for
 * Enterprise zones.
 */
export type TTLParam = number | 1;

export interface TXTRecord {
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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export interface URIRecord {
  /**
   * Components of a URI record.
   */
  data: URIRecord.Data;

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
   * Extra Cloudflare-specific information about the record.
   */
  meta?: RecordMetadata;

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
  tags?: Array<RecordTags>;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl?: TTL;
}

export namespace URIRecord {
  /**
   * Components of a URI record.
   */
  export interface Data {
    /**
     * The record content.
     */
    target?: string;

    /**
     * The record weight.
     */
    weight?: number;
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

export type RecordCreateParams =
  | RecordCreateParams.ARecord
  | RecordCreateParams.AAAARecord
  | RecordCreateParams.CAARecord
  | RecordCreateParams.CERTRecord
  | RecordCreateParams.CNAMERecord
  | RecordCreateParams.DNSKEYRecord
  | RecordCreateParams.DSRecord
  | RecordCreateParams.HTTPSRecord
  | RecordCreateParams.LOCRecord
  | RecordCreateParams.MXRecord
  | RecordCreateParams.NAPTRRecord
  | RecordCreateParams.NSRecord
  | RecordCreateParams.PTRRecord
  | RecordCreateParams.SMIMEARecord
  | RecordCreateParams.SRVRecord
  | RecordCreateParams.SSHFPRecord
  | RecordCreateParams.SVCBRecord
  | RecordCreateParams.TLSARecord
  | RecordCreateParams.TXTRecord
  | RecordCreateParams.URIRecord;

export namespace RecordCreateParams {
  export interface ARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A valid IPv4 address.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'A';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Whether the record is receiving the performance and security
     * benefits of Cloudflare.
     */
    proxied?: boolean;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface AAAARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A valid IPv6 address.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'AAAA';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Whether the record is receiving the performance and security
     * benefits of Cloudflare.
     */
    proxied?: boolean;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface CAARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a CAA record.
     */
    data: RecordCreateParams.CAARecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'CAA';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace CAARecord {
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
  }

  export interface CERTRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a CERT record.
     */
    data: RecordCreateParams.CERTRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'CERT';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace CERTRecord {
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
  }

  export interface CNAMERecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A valid hostname. Must not match the record's name.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'CNAME';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Whether the record is receiving the performance and security
     * benefits of Cloudflare.
     */
    proxied?: boolean;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface DNSKEYRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a DNSKEY record.
     */
    data: RecordCreateParams.DNSKEYRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'DNSKEY';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace DNSKEYRecord {
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
  }

  export interface DSRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a DS record.
     */
    data: RecordCreateParams.DSRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'DS';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace DSRecord {
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
  }

  export interface HTTPSRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a HTTPS record.
     */
    data: RecordCreateParams.HTTPSRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'HTTPS';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace HTTPSRecord {
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
  }

  export interface LOCRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a LOC record.
     */
    data: RecordCreateParams.LOCRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'LOC';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace LOCRecord {
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
  }

  export interface MXRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A valid mail server hostname.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Required for MX, SRV and URI records; unused by other record types.
     * Records with lower priorities are preferred.
     */
    priority: number;

    /**
     * Body param: Record type.
     */
    type: 'MX';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface NAPTRRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a NAPTR record.
     */
    data: RecordCreateParams.NAPTRRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'NAPTR';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace NAPTRRecord {
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
  }

  export interface NSRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A valid name server host name.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'NS';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface PTRRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Domain name pointing to the address.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'PTR';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface SMIMEARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a SMIMEA record.
     */
    data: RecordCreateParams.SMIMEARecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'SMIMEA';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace SMIMEARecord {
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
  }

  export interface SRVRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a SRV record.
     */
    data: RecordCreateParams.SRVRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode. For SRV
     * records, the first label is normally a service and the second a protocol name,
     * each starting with an underscore.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'SRV';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace SRVRecord {
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
  }

  export interface SSHFPRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a SSHFP record.
     */
    data: RecordCreateParams.SSHFPRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'SSHFP';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace SSHFPRecord {
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
  }

  export interface SVCBRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a SVCB record.
     */
    data: RecordCreateParams.SVCBRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'SVCB';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace SVCBRecord {
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
  }

  export interface TLSARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a TLSA record.
     */
    data: RecordCreateParams.TLSARecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'TLSA';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace TLSARecord {
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
  }

  export interface TXTRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Text content for the record.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'TXT';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface URIRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a URI record.
     */
    data: RecordCreateParams.URIRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Required for MX, SRV and URI records; unused by other record types.
     * Records with lower priorities are preferred.
     */
    priority: number;

    /**
     * Body param: Record type.
     */
    type: 'URI';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace URIRecord {
    /**
     * Components of a URI record.
     */
    export interface Data {
      /**
       * The record content.
       */
      target?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }
  }
}

export type RecordUpdateParams =
  | RecordUpdateParams.ARecord
  | RecordUpdateParams.AAAARecord
  | RecordUpdateParams.CAARecord
  | RecordUpdateParams.CERTRecord
  | RecordUpdateParams.CNAMERecord
  | RecordUpdateParams.DNSKEYRecord
  | RecordUpdateParams.DSRecord
  | RecordUpdateParams.HTTPSRecord
  | RecordUpdateParams.LOCRecord
  | RecordUpdateParams.MXRecord
  | RecordUpdateParams.NAPTRRecord
  | RecordUpdateParams.NSRecord
  | RecordUpdateParams.PTRRecord
  | RecordUpdateParams.SMIMEARecord
  | RecordUpdateParams.SRVRecord
  | RecordUpdateParams.SSHFPRecord
  | RecordUpdateParams.SVCBRecord
  | RecordUpdateParams.TLSARecord
  | RecordUpdateParams.TXTRecord
  | RecordUpdateParams.URIRecord;

export namespace RecordUpdateParams {
  export interface ARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A valid IPv4 address.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'A';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Whether the record is receiving the performance and security
     * benefits of Cloudflare.
     */
    proxied?: boolean;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface AAAARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A valid IPv6 address.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'AAAA';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Whether the record is receiving the performance and security
     * benefits of Cloudflare.
     */
    proxied?: boolean;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface CAARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a CAA record.
     */
    data: RecordUpdateParams.CAARecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'CAA';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace CAARecord {
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
  }

  export interface CERTRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a CERT record.
     */
    data: RecordUpdateParams.CERTRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'CERT';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace CERTRecord {
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
  }

  export interface CNAMERecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A valid hostname. Must not match the record's name.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'CNAME';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Whether the record is receiving the performance and security
     * benefits of Cloudflare.
     */
    proxied?: boolean;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface DNSKEYRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a DNSKEY record.
     */
    data: RecordUpdateParams.DNSKEYRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'DNSKEY';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace DNSKEYRecord {
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
  }

  export interface DSRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a DS record.
     */
    data: RecordUpdateParams.DSRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'DS';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace DSRecord {
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
  }

  export interface HTTPSRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a HTTPS record.
     */
    data: RecordUpdateParams.HTTPSRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'HTTPS';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace HTTPSRecord {
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
  }

  export interface LOCRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a LOC record.
     */
    data: RecordUpdateParams.LOCRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'LOC';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace LOCRecord {
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
  }

  export interface MXRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A valid mail server hostname.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Required for MX, SRV and URI records; unused by other record types.
     * Records with lower priorities are preferred.
     */
    priority: number;

    /**
     * Body param: Record type.
     */
    type: 'MX';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface NAPTRRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a NAPTR record.
     */
    data: RecordUpdateParams.NAPTRRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'NAPTR';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace NAPTRRecord {
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
  }

  export interface NSRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A valid name server host name.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'NS';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface PTRRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Domain name pointing to the address.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'PTR';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface SMIMEARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a SMIMEA record.
     */
    data: RecordUpdateParams.SMIMEARecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'SMIMEA';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace SMIMEARecord {
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
  }

  export interface SRVRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a SRV record.
     */
    data: RecordUpdateParams.SRVRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode. For SRV
     * records, the first label is normally a service and the second a protocol name,
     * each starting with an underscore.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'SRV';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace SRVRecord {
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
  }

  export interface SSHFPRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a SSHFP record.
     */
    data: RecordUpdateParams.SSHFPRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'SSHFP';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace SSHFPRecord {
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
  }

  export interface SVCBRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a SVCB record.
     */
    data: RecordUpdateParams.SVCBRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'SVCB';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace SVCBRecord {
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
  }

  export interface TLSARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a TLSA record.
     */
    data: RecordUpdateParams.TLSARecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'TLSA';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace TLSARecord {
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
  }

  export interface TXTRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Text content for the record.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'TXT';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface URIRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a URI record.
     */
    data: RecordUpdateParams.URIRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Required for MX, SRV and URI records; unused by other record types.
     * Records with lower priorities are preferred.
     */
    priority: number;

    /**
     * Body param: Record type.
     */
    type: 'URI';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace URIRecord {
    /**
     * Components of a URI record.
     */
    export interface Data {
      /**
       * The record content.
       */
      target?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }
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
  direction?: Shared.SortDirectionParam;

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

export type RecordEditParams =
  | RecordEditParams.ARecord
  | RecordEditParams.AAAARecord
  | RecordEditParams.CAARecord
  | RecordEditParams.CERTRecord
  | RecordEditParams.CNAMERecord
  | RecordEditParams.DNSKEYRecord
  | RecordEditParams.DSRecord
  | RecordEditParams.HTTPSRecord
  | RecordEditParams.LOCRecord
  | RecordEditParams.MXRecord
  | RecordEditParams.NAPTRRecord
  | RecordEditParams.NSRecord
  | RecordEditParams.PTRRecord
  | RecordEditParams.SMIMEARecord
  | RecordEditParams.SRVRecord
  | RecordEditParams.SSHFPRecord
  | RecordEditParams.SVCBRecord
  | RecordEditParams.TLSARecord
  | RecordEditParams.TXTRecord
  | RecordEditParams.URIRecord;

export namespace RecordEditParams {
  export interface ARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A valid IPv4 address.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'A';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Whether the record is receiving the performance and security
     * benefits of Cloudflare.
     */
    proxied?: boolean;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface AAAARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A valid IPv6 address.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'AAAA';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Whether the record is receiving the performance and security
     * benefits of Cloudflare.
     */
    proxied?: boolean;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface CAARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a CAA record.
     */
    data: RecordEditParams.CAARecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'CAA';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace CAARecord {
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
  }

  export interface CERTRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a CERT record.
     */
    data: RecordEditParams.CERTRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'CERT';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace CERTRecord {
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
  }

  export interface CNAMERecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A valid hostname. Must not match the record's name.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'CNAME';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Whether the record is receiving the performance and security
     * benefits of Cloudflare.
     */
    proxied?: boolean;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface DNSKEYRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a DNSKEY record.
     */
    data: RecordEditParams.DNSKEYRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'DNSKEY';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace DNSKEYRecord {
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
  }

  export interface DSRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a DS record.
     */
    data: RecordEditParams.DSRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'DS';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace DSRecord {
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
  }

  export interface HTTPSRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a HTTPS record.
     */
    data: RecordEditParams.HTTPSRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'HTTPS';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace HTTPSRecord {
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
  }

  export interface LOCRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a LOC record.
     */
    data: RecordEditParams.LOCRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'LOC';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace LOCRecord {
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
  }

  export interface MXRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A valid mail server hostname.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Required for MX, SRV and URI records; unused by other record types.
     * Records with lower priorities are preferred.
     */
    priority: number;

    /**
     * Body param: Record type.
     */
    type: 'MX';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface NAPTRRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a NAPTR record.
     */
    data: RecordEditParams.NAPTRRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'NAPTR';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace NAPTRRecord {
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
  }

  export interface NSRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A valid name server host name.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'NS';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface PTRRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Domain name pointing to the address.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'PTR';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface SMIMEARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a SMIMEA record.
     */
    data: RecordEditParams.SMIMEARecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'SMIMEA';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace SMIMEARecord {
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
  }

  export interface SRVRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a SRV record.
     */
    data: RecordEditParams.SRVRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode. For SRV
     * records, the first label is normally a service and the second a protocol name,
     * each starting with an underscore.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'SRV';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace SRVRecord {
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
  }

  export interface SSHFPRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a SSHFP record.
     */
    data: RecordEditParams.SSHFPRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'SSHFP';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace SSHFPRecord {
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
  }

  export interface SVCBRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a SVCB record.
     */
    data: RecordEditParams.SVCBRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'SVCB';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace SVCBRecord {
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
  }

  export interface TLSARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a TLSA record.
     */
    data: RecordEditParams.TLSARecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'TLSA';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace TLSARecord {
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
  }

  export interface TXTRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Text content for the record.
     */
    content: string;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Record type.
     */
    type: 'TXT';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export interface URIRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a URI record.
     */
    data: RecordEditParams.URIRecord.Data;

    /**
     * Body param: DNS record name (or @ for the zone apex) in Punycode.
     */
    name: string;

    /**
     * Body param: Required for MX, SRV and URI records; unused by other record types.
     * Records with lower priorities are preferred.
     */
    priority: number;

    /**
     * Body param: Record type.
     */
    type: 'URI';

    /**
     * Body param: Identifier
     */
    id?: string;

    /**
     * Body param: Comments or notes about the DNS record. This field has no effect on
     * DNS responses.
     */
    comment?: string;

    /**
     * Body param: Custom tags for the DNS record. This field has no effect on DNS
     * responses.
     */
    tags?: Array<RecordTagsParam>;

    /**
     * Body param: Time To Live (TTL) of the DNS record in seconds. Setting to 1 means
     * 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30
     * for Enterprise zones.
     */
    ttl?: TTLParam;
  }

  export namespace URIRecord {
    /**
     * Components of a URI record.
     */
    export interface Data {
      /**
       * The record content.
       */
      target?: string;

      /**
       * The record weight.
       */
      weight?: number;
    }
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
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export namespace Records {
  export import ARecord = RecordsAPI.ARecord;
  export import AAAARecord = RecordsAPI.AAAARecord;
  export import CAARecord = RecordsAPI.CAARecord;
  export import CERTRecord = RecordsAPI.CERTRecord;
  export import CNAMERecord = RecordsAPI.CNAMERecord;
  export import DNSKEYRecord = RecordsAPI.DNSKEYRecord;
  export import DSRecord = RecordsAPI.DSRecord;
  export import HTTPSRecord = RecordsAPI.HTTPSRecord;
  export import LOCRecord = RecordsAPI.LOCRecord;
  export import MXRecord = RecordsAPI.MXRecord;
  export import NAPTRRecord = RecordsAPI.NAPTRRecord;
  export import NSRecord = RecordsAPI.NSRecord;
  export import PTRRecord = RecordsAPI.PTRRecord;
  export import Record = RecordsAPI.Record;
  export import RecordMetadata = RecordsAPI.RecordMetadata;
  export import RecordProcessTiming = RecordsAPI.RecordProcessTiming;
  export import RecordTags = RecordsAPI.RecordTags;
  export import SMIMEARecord = RecordsAPI.SMIMEARecord;
  export import SRVRecord = RecordsAPI.SRVRecord;
  export import SSHFPRecord = RecordsAPI.SSHFPRecord;
  export import SVCBRecord = RecordsAPI.SVCBRecord;
  export import TLSARecord = RecordsAPI.TLSARecord;
  export import TTL = RecordsAPI.TTL;
  export import TXTRecord = RecordsAPI.TXTRecord;
  export import URIRecord = RecordsAPI.URIRecord;
  export import RecordDeleteResponse = RecordsAPI.RecordDeleteResponse;
  export import RecordExportResponse = RecordsAPI.RecordExportResponse;
  export import RecordImportResponse = RecordsAPI.RecordImportResponse;
  export import RecordScanResponse = RecordsAPI.RecordScanResponse;
  export import RecordsV4PagePaginationArray = RecordsAPI.RecordsV4PagePaginationArray;
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
