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
  create(params: RecordCreateParams, options?: Core.RequestOptions): Core.APIPromise<RecordCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/dns_records`, { body, ...options }) as Core.APIPromise<{
        result: RecordCreateResponse;
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
  ): Core.APIPromise<RecordUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/dns_records/${dnsRecordId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RecordUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List, search, sort, and filter a zones' DNS records.
   */
  list(
    params: RecordListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RecordListResponsesV4PagePaginationArray, RecordListResponse> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/dns_records`,
      RecordListResponsesV4PagePaginationArray,
      { query, ...options },
    );
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
  ): Core.APIPromise<RecordEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/dns_records/${dnsRecordId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RecordEditResponse }>
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
  ): Core.APIPromise<RecordGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/dns_records/${dnsRecordId}`, options) as Core.APIPromise<{
        result: RecordGetResponse;
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

export class RecordListResponsesV4PagePaginationArray extends V4PagePaginationArray<RecordListResponse> {}

export interface ARecord {
  /**
   * A valid IPv4 address.
   */
  content?: string;

  /**
   * Record type.
   */
  type?: 'A';
}

export interface AAAARecord {
  /**
   * A valid IPv6 address.
   */
  content?: string;

  /**
   * Record type.
   */
  type?: 'AAAA';
}

export interface CAARecord {
  /**
   * Formatted CAA content. See 'data' to set CAA properties.
   */
  content?: string;

  /**
   * Components of a CAA record.
   */
  data?: CAARecord.Data;

  /**
   * Record type.
   */
  type?: 'CAA';
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
   * Formatted CERT content. See 'data' to set CERT properties.
   */
  content?: string;

  /**
   * Components of a CERT record.
   */
  data?: CERTRecord.Data;

  /**
   * Record type.
   */
  type?: 'CERT';
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
  content?: string;

  /**
   * Record type.
   */
  type?: 'CNAME';
}

export interface DNSKEYRecord {
  /**
   * Formatted DNSKEY content. See 'data' to set DNSKEY properties.
   */
  content?: string;

  /**
   * Components of a DNSKEY record.
   */
  data?: DNSKEYRecord.Data;

  /**
   * Record type.
   */
  type?: 'DNSKEY';
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
   * Formatted DS content. See 'data' to set DS properties.
   */
  content?: string;

  /**
   * Components of a DS record.
   */
  data?: DSRecord.Data;

  /**
   * Record type.
   */
  type?: 'DS';
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
   * Formatted HTTPS content. See 'data' to set HTTPS properties.
   */
  content?: string;

  /**
   * Components of a HTTPS record.
   */
  data?: HTTPSRecord.Data;

  /**
   * Record type.
   */
  type?: 'HTTPS';
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
   * Formatted LOC content. See 'data' to set LOC properties.
   */
  content?: string;

  /**
   * Components of a LOC record.
   */
  data?: LOCRecord.Data;

  /**
   * Record type.
   */
  type?: 'LOC';
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
  content?: string;

  /**
   * Required for MX, SRV and URI records; unused by other record types. Records with
   * lower priorities are preferred.
   */
  priority?: number;

  /**
   * Record type.
   */
  type?: 'MX';
}

export interface NAPTRRecord {
  /**
   * Formatted NAPTR content. See 'data' to set NAPTR properties.
   */
  content?: string;

  /**
   * Components of a NAPTR record.
   */
  data?: NAPTRRecord.Data;

  /**
   * Record type.
   */
  type?: 'NAPTR';
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
  content?: string;

  /**
   * Record type.
   */
  type?: 'NS';
}

export interface PTRRecord {
  /**
   * Domain name pointing to the address.
   */
  content?: string;

  /**
   * Record type.
   */
  type?: 'PTR';
}

export interface Record {
  /**
   * Comments or notes about the DNS record. This field has no effect on DNS
   * responses.
   */
  comment?: string;

  /**
   * DNS record name (or @ for the zone apex) in Punycode.
   */
  name?: string;

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

export interface SMIMEARecord {
  /**
   * Formatted SMIMEA content. See 'data' to set SMIMEA properties.
   */
  content?: string;

  /**
   * Components of a SMIMEA record.
   */
  data?: SMIMEARecord.Data;

  /**
   * Record type.
   */
  type?: 'SMIMEA';
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
   * Priority, weight, port, and SRV target. See 'data' for setting the individual
   * component values.
   */
  content?: string;

  /**
   * Components of a SRV record.
   */
  data?: SRVRecord.Data;

  /**
   * Record type.
   */
  type?: 'SRV';
}

export namespace SRVRecord {
  /**
   * Components of a SRV record.
   */
  export interface Data {
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
   * Formatted SSHFP content. See 'data' to set SSHFP properties.
   */
  content?: string;

  /**
   * Components of a SSHFP record.
   */
  data?: SSHFPRecord.Data;

  /**
   * Record type.
   */
  type?: 'SSHFP';
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
   * Formatted SVCB content. See 'data' to set SVCB properties.
   */
  content?: string;

  /**
   * Components of a SVCB record.
   */
  data?: SVCBRecord.Data;

  /**
   * Record type.
   */
  type?: 'SVCB';
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
   * Formatted TLSA content. See 'data' to set TLSA properties.
   */
  content?: string;

  /**
   * Components of a TLSA record.
   */
  data?: TLSARecord.Data;

  /**
   * Record type.
   */
  type?: 'TLSA';
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

export interface TXTRecord {
  /**
   * Text content for the record.
   */
  content?: string;

  /**
   * Record type.
   */
  type?: 'TXT';
}

export interface URIRecord {
  /**
   * Formatted URI content. See 'data' to set URI properties.
   */
  content?: string;

  /**
   * Components of a URI record.
   */
  data?: URIRecord.Data;

  /**
   * Required for MX, SRV and URI records; unused by other record types. Records with
   * lower priorities are preferred.
   */
  priority?: number;

  /**
   * Record type.
   */
  type?: 'URI';
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

export interface RecordCreateResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Comments or notes about the DNS record. This field has no effect on DNS
   * responses.
   */
  comment: string;

  /**
   * When the record comment was last modified.
   */
  comment_modified_on: string;

  /**
   * When the record was created.
   */
  created_on: string;

  /**
   * Extra Cloudflare-specific information about the record.
   */
  meta: RecordCreateResponse.Meta;

  /**
   * When the record was last modified.
   */
  modified_on: string;

  /**
   * DNS record name (or @ for the zone apex) in Punycode.
   */
  name: string;

  /**
   * Whether the record can be proxied by Cloudflare or not.
   */
  proxiable: boolean;

  /**
   * Whether the record is receiving the performance and security benefits of
   * Cloudflare.
   */
  proxied: boolean;

  /**
   * Custom tags for the DNS record. This field has no effect on DNS responses.
   */
  tags: Array<RecordTags>;

  /**
   * When the record tags were last modified.
   */
  tags_modified_on: string;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl: TTL;
}

export namespace RecordCreateResponse {
  /**
   * Extra Cloudflare-specific information about the record.
   */
  export interface Meta {
    /**
     * Will exist if Cloudflare automatically added this DNS record during initial
     * setup.
     */
    auto_added?: boolean;
  }
}

export interface RecordUpdateResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Comments or notes about the DNS record. This field has no effect on DNS
   * responses.
   */
  comment: string;

  /**
   * When the record comment was last modified.
   */
  comment_modified_on: string;

  /**
   * When the record was created.
   */
  created_on: string;

  /**
   * Extra Cloudflare-specific information about the record.
   */
  meta: RecordUpdateResponse.Meta;

  /**
   * When the record was last modified.
   */
  modified_on: string;

  /**
   * DNS record name (or @ for the zone apex) in Punycode.
   */
  name: string;

  /**
   * Whether the record can be proxied by Cloudflare or not.
   */
  proxiable: boolean;

  /**
   * Whether the record is receiving the performance and security benefits of
   * Cloudflare.
   */
  proxied: boolean;

  /**
   * Custom tags for the DNS record. This field has no effect on DNS responses.
   */
  tags: Array<RecordTags>;

  /**
   * When the record tags were last modified.
   */
  tags_modified_on: string;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl: TTL;
}

export namespace RecordUpdateResponse {
  /**
   * Extra Cloudflare-specific information about the record.
   */
  export interface Meta {
    /**
     * Will exist if Cloudflare automatically added this DNS record during initial
     * setup.
     */
    auto_added?: boolean;
  }
}

export interface RecordListResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Comments or notes about the DNS record. This field has no effect on DNS
   * responses.
   */
  comment: string;

  /**
   * When the record comment was last modified.
   */
  comment_modified_on: string;

  /**
   * When the record was created.
   */
  created_on: string;

  /**
   * Extra Cloudflare-specific information about the record.
   */
  meta: RecordListResponse.Meta;

  /**
   * When the record was last modified.
   */
  modified_on: string;

  /**
   * DNS record name (or @ for the zone apex) in Punycode.
   */
  name: string;

  /**
   * Whether the record can be proxied by Cloudflare or not.
   */
  proxiable: boolean;

  /**
   * Whether the record is receiving the performance and security benefits of
   * Cloudflare.
   */
  proxied: boolean;

  /**
   * Custom tags for the DNS record. This field has no effect on DNS responses.
   */
  tags: Array<RecordTags>;

  /**
   * When the record tags were last modified.
   */
  tags_modified_on: string;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl: TTL;
}

export namespace RecordListResponse {
  /**
   * Extra Cloudflare-specific information about the record.
   */
  export interface Meta {
    /**
     * Will exist if Cloudflare automatically added this DNS record during initial
     * setup.
     */
    auto_added?: boolean;
  }
}

export interface RecordDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface RecordEditResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Comments or notes about the DNS record. This field has no effect on DNS
   * responses.
   */
  comment: string;

  /**
   * When the record comment was last modified.
   */
  comment_modified_on: string;

  /**
   * When the record was created.
   */
  created_on: string;

  /**
   * Extra Cloudflare-specific information about the record.
   */
  meta: RecordEditResponse.Meta;

  /**
   * When the record was last modified.
   */
  modified_on: string;

  /**
   * DNS record name (or @ for the zone apex) in Punycode.
   */
  name: string;

  /**
   * Whether the record can be proxied by Cloudflare or not.
   */
  proxiable: boolean;

  /**
   * Whether the record is receiving the performance and security benefits of
   * Cloudflare.
   */
  proxied: boolean;

  /**
   * Custom tags for the DNS record. This field has no effect on DNS responses.
   */
  tags: Array<RecordTags>;

  /**
   * When the record tags were last modified.
   */
  tags_modified_on: string;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl: TTL;
}

export namespace RecordEditResponse {
  /**
   * Extra Cloudflare-specific information about the record.
   */
  export interface Meta {
    /**
     * Will exist if Cloudflare automatically added this DNS record during initial
     * setup.
     */
    auto_added?: boolean;
  }
}

/**
 * Exported BIND zone file.
 */
export type RecordExportResponse = string;

export interface RecordGetResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Comments or notes about the DNS record. This field has no effect on DNS
   * responses.
   */
  comment: string;

  /**
   * When the record comment was last modified.
   */
  comment_modified_on: string;

  /**
   * When the record was created.
   */
  created_on: string;

  /**
   * Extra Cloudflare-specific information about the record.
   */
  meta: RecordGetResponse.Meta;

  /**
   * When the record was last modified.
   */
  modified_on: string;

  /**
   * DNS record name (or @ for the zone apex) in Punycode.
   */
  name: string;

  /**
   * Whether the record can be proxied by Cloudflare or not.
   */
  proxiable: boolean;

  /**
   * Whether the record is receiving the performance and security benefits of
   * Cloudflare.
   */
  proxied: boolean;

  /**
   * Custom tags for the DNS record. This field has no effect on DNS responses.
   */
  tags: Array<RecordTags>;

  /**
   * When the record tags were last modified.
   */
  tags_modified_on: string;

  /**
   * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'.
   * Value must be between 60 and 86400, with the minimum reduced to 30 for
   * Enterprise zones.
   */
  ttl: TTL;
}

export namespace RecordGetResponse {
  /**
   * Extra Cloudflare-specific information about the record.
   */
  export interface Meta {
    /**
     * Will exist if Cloudflare automatically added this DNS record during initial
     * setup.
     */
    auto_added?: boolean;
  }
}

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
  | RecordCreateParams.DNSRecordsOpenpgpkeyRecord
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
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'A';
  }

  export interface AAAARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A valid IPv6 address.
     */
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'AAAA';
  }

  export interface CAARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a CAA record.
     */
    data?: RecordCreateParams.CAARecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'CAA';
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
    data?: RecordCreateParams.CERTRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'CERT';
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
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'CNAME';
  }

  export interface DNSKEYRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a DNSKEY record.
     */
    data?: RecordCreateParams.DNSKEYRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'DNSKEY';
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
    data?: RecordCreateParams.DSRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'DS';
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
    data?: RecordCreateParams.HTTPSRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'HTTPS';
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
    data?: RecordCreateParams.LOCRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'LOC';
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
    content?: string;

    /**
     * Body param: Required for MX, SRV and URI records; unused by other record types.
     * Records with lower priorities are preferred.
     */
    priority?: number;

    /**
     * Body param: Record type.
     */
    type?: 'MX';
  }

  export interface NAPTRRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a NAPTR record.
     */
    data?: RecordCreateParams.NAPTRRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'NAPTR';
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
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'NS';
  }

  export interface DNSRecordsOpenpgpkeyRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A single Base64-encoded OpenPGP Transferable Public Key (RFC 4880
     * Section 11.1)
     */
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'OPENPGPKEY';
  }

  export interface PTRRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Domain name pointing to the address.
     */
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'PTR';
  }

  export interface SMIMEARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a SMIMEA record.
     */
    data?: RecordCreateParams.SMIMEARecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'SMIMEA';
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
    data?: RecordCreateParams.SRVRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'SRV';
  }

  export namespace SRVRecord {
    /**
     * Components of a SRV record.
     */
    export interface Data {
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
    data?: RecordCreateParams.SSHFPRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'SSHFP';
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
    data?: RecordCreateParams.SVCBRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'SVCB';
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
    data?: RecordCreateParams.TLSARecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'TLSA';
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
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'TXT';
  }

  export interface URIRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a URI record.
     */
    data?: RecordCreateParams.URIRecord.Data;

    /**
     * Body param: Required for MX, SRV and URI records; unused by other record types.
     * Records with lower priorities are preferred.
     */
    priority?: number;

    /**
     * Body param: Record type.
     */
    type?: 'URI';
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
  | RecordUpdateParams.DNSRecordsOpenpgpkeyRecord
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
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'A';
  }

  export interface AAAARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A valid IPv6 address.
     */
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'AAAA';
  }

  export interface CAARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a CAA record.
     */
    data?: RecordUpdateParams.CAARecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'CAA';
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
    data?: RecordUpdateParams.CERTRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'CERT';
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
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'CNAME';
  }

  export interface DNSKEYRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a DNSKEY record.
     */
    data?: RecordUpdateParams.DNSKEYRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'DNSKEY';
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
    data?: RecordUpdateParams.DSRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'DS';
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
    data?: RecordUpdateParams.HTTPSRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'HTTPS';
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
    data?: RecordUpdateParams.LOCRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'LOC';
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
    content?: string;

    /**
     * Body param: Required for MX, SRV and URI records; unused by other record types.
     * Records with lower priorities are preferred.
     */
    priority?: number;

    /**
     * Body param: Record type.
     */
    type?: 'MX';
  }

  export interface NAPTRRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a NAPTR record.
     */
    data?: RecordUpdateParams.NAPTRRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'NAPTR';
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
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'NS';
  }

  export interface DNSRecordsOpenpgpkeyRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A single Base64-encoded OpenPGP Transferable Public Key (RFC 4880
     * Section 11.1)
     */
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'OPENPGPKEY';
  }

  export interface PTRRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Domain name pointing to the address.
     */
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'PTR';
  }

  export interface SMIMEARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a SMIMEA record.
     */
    data?: RecordUpdateParams.SMIMEARecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'SMIMEA';
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
    data?: RecordUpdateParams.SRVRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'SRV';
  }

  export namespace SRVRecord {
    /**
     * Components of a SRV record.
     */
    export interface Data {
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
    data?: RecordUpdateParams.SSHFPRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'SSHFP';
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
    data?: RecordUpdateParams.SVCBRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'SVCB';
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
    data?: RecordUpdateParams.TLSARecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'TLSA';
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
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'TXT';
  }

  export interface URIRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a URI record.
     */
    data?: RecordUpdateParams.URIRecord.Data;

    /**
     * Body param: Required for MX, SRV and URI records; unused by other record types.
     * Records with lower priorities are preferred.
     */
    priority?: number;

    /**
     * Body param: Record type.
     */
    type?: 'URI';
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
    | 'OPENPGPKEY'
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
  | RecordEditParams.DNSRecordsOpenpgpkeyRecord
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
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'A';
  }

  export interface AAAARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A valid IPv6 address.
     */
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'AAAA';
  }

  export interface CAARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a CAA record.
     */
    data?: RecordEditParams.CAARecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'CAA';
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
    data?: RecordEditParams.CERTRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'CERT';
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
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'CNAME';
  }

  export interface DNSKEYRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a DNSKEY record.
     */
    data?: RecordEditParams.DNSKEYRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'DNSKEY';
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
    data?: RecordEditParams.DSRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'DS';
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
    data?: RecordEditParams.HTTPSRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'HTTPS';
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
    data?: RecordEditParams.LOCRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'LOC';
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
    content?: string;

    /**
     * Body param: Required for MX, SRV and URI records; unused by other record types.
     * Records with lower priorities are preferred.
     */
    priority?: number;

    /**
     * Body param: Record type.
     */
    type?: 'MX';
  }

  export interface NAPTRRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a NAPTR record.
     */
    data?: RecordEditParams.NAPTRRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'NAPTR';
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
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'NS';
  }

  export interface DNSRecordsOpenpgpkeyRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: A single Base64-encoded OpenPGP Transferable Public Key (RFC 4880
     * Section 11.1)
     */
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'OPENPGPKEY';
  }

  export interface PTRRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Domain name pointing to the address.
     */
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'PTR';
  }

  export interface SMIMEARecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a SMIMEA record.
     */
    data?: RecordEditParams.SMIMEARecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'SMIMEA';
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
    data?: RecordEditParams.SRVRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'SRV';
  }

  export namespace SRVRecord {
    /**
     * Components of a SRV record.
     */
    export interface Data {
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
    data?: RecordEditParams.SSHFPRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'SSHFP';
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
    data?: RecordEditParams.SVCBRecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'SVCB';
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
    data?: RecordEditParams.TLSARecord.Data;

    /**
     * Body param: Record type.
     */
    type?: 'TLSA';
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
    content?: string;

    /**
     * Body param: Record type.
     */
    type?: 'TXT';
  }

  export interface URIRecord {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Components of a URI record.
     */
    data?: RecordEditParams.URIRecord.Data;

    /**
     * Body param: Required for MX, SRV and URI records; unused by other record types.
     * Records with lower priorities are preferred.
     */
    priority?: number;

    /**
     * Body param: Record type.
     */
    type?: 'URI';
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
  export import RecordCreateResponse = RecordsAPI.RecordCreateResponse;
  export import RecordUpdateResponse = RecordsAPI.RecordUpdateResponse;
  export import RecordListResponse = RecordsAPI.RecordListResponse;
  export import RecordDeleteResponse = RecordsAPI.RecordDeleteResponse;
  export import RecordEditResponse = RecordsAPI.RecordEditResponse;
  export import RecordExportResponse = RecordsAPI.RecordExportResponse;
  export import RecordGetResponse = RecordsAPI.RecordGetResponse;
  export import RecordImportResponse = RecordsAPI.RecordImportResponse;
  export import RecordScanResponse = RecordsAPI.RecordScanResponse;
  export import RecordListResponsesV4PagePaginationArray = RecordsAPI.RecordListResponsesV4PagePaginationArray;
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
