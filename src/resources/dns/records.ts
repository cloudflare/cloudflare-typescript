// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Records extends APIResource {
  /**
   * List, search, sort, and filter a zones' DNS records.
   */
  list(
    params: RecordListParams,
    options?: RequestOptions,
  ): PagePromise<RecordListResponsesV4PagePaginationArray, RecordListResponse> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/dns_records`,
      V4PagePaginationArray<RecordListResponse>,
      { query, ...options },
    );
  }
}

export type RecordListResponsesV4PagePaginationArray = V4PagePaginationArray<RecordListResponse>;

export type RecordListResponse = unknown;

export interface RecordListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Query param
   */
  comment?: RecordListParams.Comment;

  /**
   * Query param
   */
  content?: RecordListParams.Content;

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
   * Query param
   */
  name?: RecordListParams.Name;

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
   * Query param
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

  export interface Content {
    /**
     * Substring of the DNS record content. Content filters are case-insensitive.
     */
    contains?: string;

    /**
     * Suffix of the DNS record content. Content filters are case-insensitive.
     */
    endswith?: string;

    /**
     * Exact value of the DNS record content. Content filters are case-insensitive.
     */
    exact?: string;

    /**
     * Prefix of the DNS record content. Content filters are case-insensitive.
     */
    startswith?: string;
  }

  export interface Name {
    /**
     * Substring of the DNS record name. Name filters are case-insensitive.
     */
    contains?: string;

    /**
     * Suffix of the DNS record name. Name filters are case-insensitive.
     */
    endswith?: string;

    /**
     * Exact value of the DNS record name. Name filters are case-insensitive.
     */
    exact?: string;

    /**
     * Prefix of the DNS record name. Name filters are case-insensitive.
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

export declare namespace Records {
  export {
    type RecordListResponse as RecordListResponse,
    type RecordListResponsesV4PagePaginationArray as RecordListResponsesV4PagePaginationArray,
    type RecordListParams as RecordListParams,
  };
}
