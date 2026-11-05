// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  CursorPaginationAfter,
  type CursorPaginationAfterParams,
  PagePromise,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseApplications extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'resourceLibrary', 'applications'] = Object.freeze([
    'zeroTrust',
    'resourceLibrary',
    'applications',
  ] as const);

  /**
   * Create a custom application for an account from a name, category, and optional
   * network matchers.
   *
   * @example
   * ```ts
   * const application =
   *   await client.zeroTrust.resourceLibrary.applications.create(
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       hostnames: ['example.com', 'foo.com'],
   *     },
   *   );
   * ```
   */
  create(params: ApplicationCreateParams, options?: RequestOptions): APIPromise<ApplicationCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/resource-library/applications`, {
        body,
        ...options,
      }) as APIPromise<{ result: ApplicationCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replace the supplied network matchers for a custom application and create a new
   * version. Omitted matcher lists remain unchanged; send an empty list to clear a
   * matcher type.
   *
   * @example
   * ```ts
   * const application =
   *   await client.zeroTrust.resourceLibrary.applications.update(
   *     498,
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  update(
    id: number,
    params: ApplicationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ApplicationUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/resource-library/applications/${id}`, {
        body,
        ...options,
      }) as APIPromise<{ result: ApplicationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List the applications available to an account, both the applications Cloudflare
   * curates and the custom applications the account has defined.
   *
   * Results are paginated. Page with `cursor` so that applications added or removed
   * between requests do not make other results repeat or go missing; `offset` paging
   * can repeat or miss results when the list changes between requests. Use `filter`
   * and `search` to narrow the list, `order_by` to sort it, and `fields` to reduce
   * each result to only the properties you need. Use `lookup` to find complete
   * application names mentioned in a rule sentence, ignoring case. Lookup does not
   * correct misspellings. It ranks matches by relevance and uses the same filters,
   * fields, and pagination as listing. `lookup` cannot be combined with `search`.
   *
   * Invalid UTF-8 or a NUL character (U+0000) in any query parameter name or value
   * returns `400`.
   *
   * The authenticated principal must have access to the account identified by
   * `account_id`.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const applicationListResponse of client.zeroTrust.resourceLibrary.applications.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ApplicationListParams,
    options?: RequestOptions,
  ): PagePromise<ApplicationListResponsesCursorPaginationAfter, ApplicationListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/resource-library/applications`,
      CursorPaginationAfter<ApplicationListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a custom application and all of its versions. Deletion is rejected when
   * other resources reference the application.
   *
   * @example
   * ```ts
   * const application =
   *   await client.zeroTrust.resourceLibrary.applications.delete(
   *     498,
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    id: number,
    params: ApplicationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ApplicationDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/resource-library/applications/${id}`,
        options,
      ) as APIPromise<{ result: ApplicationDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve an application available to the account by its numeric application ID.
   *
   * @example
   * ```ts
   * const application =
   *   await client.zeroTrust.resourceLibrary.applications.get(
   *     498,
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    id: number,
    params: ApplicationGetParams,
    options?: RequestOptions,
  ): APIPromise<ApplicationGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/resource-library/applications/${id}`,
        options,
      ) as APIPromise<{ result: ApplicationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Applications extends BaseApplications {}

export type ApplicationListResponsesCursorPaginationAfter = CursorPaginationAfter<ApplicationListResponse>;

export interface ApplicationCreateResponse {
  /**
   * Numeric identifier for the application.
   */
  id: number;

  /**
   * Confidence score for the application. Returns -1 when no score is available.
   */
  application_confidence_score: number;

  /**
   * Returns the application source.
   */
  application_source: string;

  /**
   * Returns the application type.
   */
  application_type: string;

  /**
   * Returns the application type description.
   */
  application_type_description: string;

  /**
   * Numeric identifier for an application category.
   */
  category_id: number;

  /**
   * Returns the application creation time.
   */
  created_at: string;

  /**
   * GenAI score for the application. Returns -1 when no score is available.
   */
  gen_ai_score: number;

  /**
   * Hostnames matched by the application.
   */
  hostnames: Array<string>;

  /**
   * Human-readable identifier for the application.
   */
  human_id: string;

  /**
   * IP subnets for this application. Custom application create and update requests
   * accept IPv4 prefix lengths /8 through /32 and IPv6 prefix lengths /32 through
   * /128.
   */
  ip_subnets: Array<string>;

  /**
   * Application name.
   */
  name: string;

  /**
   * Ports matched by the application, in `protocol/port` or inclusive
   * `protocol/start-end` format (for example, `tcp/443` or `udp/10000-20000`). TCP
   * and UDP ports must be between 0 and 65535.
   */
  port_protocols: Array<string>;

  /**
   * Support domains matched by the application.
   */
  support_domains: Array<string>;

  /**
   * Cloudflare products that support this application.
   */
  supported: Array<'GATEWAY' | 'ACCESS' | 'CASB'>;

  /**
   * Returns the application update time.
   */
  updated_at: string;

  /**
   * Returns the application version.
   */
  version: string;

  /**
   * Returns the score composition breakdown for the application.
   */
  application_score_composition?: unknown | null;
}

export interface ApplicationUpdateResponse {
  /**
   * Numeric identifier for the application.
   */
  id: number;

  /**
   * Confidence score for the application. Returns -1 when no score is available.
   */
  application_confidence_score: number;

  /**
   * Returns the application source.
   */
  application_source: string;

  /**
   * Returns the application type.
   */
  application_type: string;

  /**
   * Returns the application type description.
   */
  application_type_description: string;

  /**
   * Numeric identifier for an application category.
   */
  category_id: number;

  /**
   * Returns the application creation time.
   */
  created_at: string;

  /**
   * GenAI score for the application. Returns -1 when no score is available.
   */
  gen_ai_score: number;

  /**
   * Hostnames matched by the application.
   */
  hostnames: Array<string>;

  /**
   * Human-readable identifier for the application.
   */
  human_id: string;

  /**
   * IP subnets for this application. Custom application create and update requests
   * accept IPv4 prefix lengths /8 through /32 and IPv6 prefix lengths /32 through
   * /128.
   */
  ip_subnets: Array<string>;

  /**
   * Application name.
   */
  name: string;

  /**
   * Ports matched by the application, in `protocol/port` or inclusive
   * `protocol/start-end` format (for example, `tcp/443` or `udp/10000-20000`). TCP
   * and UDP ports must be between 0 and 65535.
   */
  port_protocols: Array<string>;

  /**
   * Support domains matched by the application.
   */
  support_domains: Array<string>;

  /**
   * Cloudflare products that support this application.
   */
  supported: Array<'GATEWAY' | 'ACCESS' | 'CASB'>;

  /**
   * Returns the application update time.
   */
  updated_at: string;

  /**
   * Returns the application version.
   */
  version: string;

  /**
   * Returns the score composition breakdown for the application.
   */
  application_score_composition?: unknown | null;
}

/**
 * Describes one application in a list response. The response returns every
 * property below unless `fields` narrows it. Treat all properties except `id` as
 * optional.
 */
export interface ApplicationListResponse {
  /**
   * Numeric identifier for the application.
   */
  id: number;

  /**
   * Confidence score for the application. Returns -1 when no score is available.
   */
  application_confidence_score?: number;

  /**
   * Returns the score composition breakdown for the application.
   */
  application_score_composition?: unknown | null;

  /**
   * Returns the application source.
   */
  application_source?: string;

  /**
   * Returns the application type.
   */
  application_type?: string;

  /**
   * Returns the application type description.
   */
  application_type_description?: string;

  /**
   * Numeric identifier for an application category.
   */
  category_id?: number;

  /**
   * Returns the application creation time.
   */
  created_at?: string;

  /**
   * GenAI score for the application. Returns -1 when no score is available.
   */
  gen_ai_score?: number;

  /**
   * Hostnames matched by the application.
   */
  hostnames?: Array<string>;

  /**
   * Human-readable identifier for the application.
   */
  human_id?: string;

  /**
   * IP subnets for this application. Custom application create and update requests
   * accept IPv4 prefix lengths /8 through /32 and IPv6 prefix lengths /32 through
   * /128.
   */
  ip_subnets?: Array<string>;

  /**
   * Application name.
   */
  name?: string;

  /**
   * Ports matched by the application, in `protocol/port` or inclusive
   * `protocol/start-end` format (for example, `tcp/443` or `udp/10000-20000`). TCP
   * and UDP ports must be between 0 and 65535.
   */
  port_protocols?: Array<string>;

  /**
   * The account-specific Gateway review status. Applications with no assigned review
   * status are returned as `unreviewed`.
   */
  review_status?: 'approved' | 'unapproved' | 'in_review' | 'unreviewed';

  /**
   * Support domains matched by the application.
   */
  support_domains?: Array<string>;

  /**
   * Cloudflare products that support this application.
   */
  supported?: Array<'GATEWAY' | 'ACCESS' | 'CASB'>;

  /**
   * Returns the application update time.
   */
  updated_at?: string;

  /**
   * Returns the application version.
   */
  version?: string;
}

export type ApplicationDeleteResponse = unknown;

export interface ApplicationGetResponse {
  /**
   * Numeric identifier for the application.
   */
  id: number;

  /**
   * Confidence score for the application. Returns -1 when no score is available.
   */
  application_confidence_score: number;

  /**
   * Returns the application source.
   */
  application_source: string;

  /**
   * Returns the application type.
   */
  application_type: string;

  /**
   * Returns the application type description.
   */
  application_type_description: string;

  /**
   * Numeric identifier for an application category.
   */
  category_id: number;

  /**
   * Returns the application creation time.
   */
  created_at: string;

  /**
   * GenAI score for the application. Returns -1 when no score is available.
   */
  gen_ai_score: number;

  /**
   * Hostnames matched by the application.
   */
  hostnames: Array<string>;

  /**
   * Human-readable identifier for the application.
   */
  human_id: string;

  /**
   * IP subnets for this application. Custom application create and update requests
   * accept IPv4 prefix lengths /8 through /32 and IPv6 prefix lengths /32 through
   * /128.
   */
  ip_subnets: Array<string>;

  /**
   * Application name.
   */
  name: string;

  /**
   * Ports matched by the application, in `protocol/port` or inclusive
   * `protocol/start-end` format (for example, `tcp/443` or `udp/10000-20000`). TCP
   * and UDP ports must be between 0 and 65535.
   */
  port_protocols: Array<string>;

  /**
   * Support domains matched by the application.
   */
  support_domains: Array<string>;

  /**
   * Cloudflare products that support this application.
   */
  supported: Array<'GATEWAY' | 'ACCESS' | 'CASB'>;

  /**
   * Returns the application update time.
   */
  updated_at: string;

  /**
   * Returns the application version.
   */
  version: string;

  /**
   * Returns the score composition breakdown for the application.
   */
  application_score_composition?: unknown | null;
}

export type ApplicationCreateParams = ApplicationCreateParams.Variant0 | ApplicationCreateParams.Variant1;

export declare namespace ApplicationCreateParams {
  export interface Variant0 {
    /**
     * Path param: Account ID.
     */
    account_id: string;

    /**
     * Body param: Hostnames matched by the application.
     */
    hostnames: Array<string>;

    /**
     * Body param: Numeric identifier for an application category.
     */
    category_id?: number;

    /**
     * Body param: Human-readable identifier for the application.
     */
    human_id?: string;

    /**
     * Body param: IP subnets for this application. Custom application create and
     * update requests accept IPv4 prefix lengths /8 through /32 and IPv6 prefix
     * lengths /32 through /128.
     */
    ip_subnets?: Array<string>;

    /**
     * Body param: Application name.
     */
    name?: string;

    /**
     * Body param: Ports matched by the application, in `protocol/port` or inclusive
     * `protocol/start-end` format (for example, `tcp/443` or `udp/10000-20000`). TCP
     * and UDP ports must be between 0 and 65535.
     */
    port_protocols?: Array<string>;

    /**
     * Body param: Support domains matched by the application.
     */
    support_domains?: Array<string>;
  }

  export interface Variant1 {
    /**
     * Path param: Account ID.
     */
    account_id: string;

    /**
     * Body param: IP subnets for this application. Custom application create and
     * update requests accept IPv4 prefix lengths /8 through /32 and IPv6 prefix
     * lengths /32 through /128.
     */
    ip_subnets: Array<string>;

    /**
     * Body param: Numeric identifier for an application category.
     */
    category_id?: number;

    /**
     * Body param: Hostnames matched by the application.
     */
    hostnames?: Array<string>;

    /**
     * Body param: Human-readable identifier for the application.
     */
    human_id?: string;

    /**
     * Body param: Application name.
     */
    name?: string;

    /**
     * Body param: Ports matched by the application, in `protocol/port` or inclusive
     * `protocol/start-end` format (for example, `tcp/443` or `udp/10000-20000`). TCP
     * and UDP ports must be between 0 and 65535.
     */
    port_protocols?: Array<string>;

    /**
     * Body param: Support domains matched by the application.
     */
    support_domains?: Array<string>;
  }
}

export interface ApplicationUpdateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Body param: Hostnames matched by the application.
   */
  hostnames?: Array<string>;

  /**
   * Body param: IP subnets for this application. Custom application create and
   * update requests accept IPv4 prefix lengths /8 through /32 and IPv6 prefix
   * lengths /32 through /128.
   */
  ip_subnets?: Array<string>;

  /**
   * Body param: Ports matched by the application, in `protocol/port` or inclusive
   * `protocol/start-end` format (for example, `tcp/443` or `udp/10000-20000`). TCP
   * and UDP ports must be between 0 and 65535.
   */
  port_protocols?: Array<string>;

  /**
   * Body param: Support domains matched by the application.
   */
  support_domains?: Array<string>;
}

export interface ApplicationListParams extends CursorPaginationAfterParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Return only the listed properties on each application, as a
   * comma-separated list. Use this to keep responses small when you only need part
   * of each application, for example populating a picker with `fields=id,name`
   * instead of downloading every hostname and IP subnet.
   *
   * Omit this parameter to receive the full application object, including when
   * lookup is used.
   *
   * `id` is always returned.
   *
   * Selectable properties: `id`, `name`, `human_id`, `version`, `hostnames`,
   * `support_domains`, `ip_subnets`, `port_protocols`, `supported`, `gen_ai_score`,
   * `application_confidence_score`, `created_at`, `updated_at`, `review_status`.
   *
   * Unknown or empty property names return `400`.
   */
  fields?: string;

  /**
   * Query param: Filter applications using `key:value` format. Supported filter
   * keys:
   *
   * - `name`: application name (for example, `name:HR`).
   * - `id`: application ID (for example, `id:498`).
   * - `human_id`: human-readable ID (for example, `human_id:HR`).
   * - `hostname`: hostname or support domain (for example,
   *   `hostname:portal.example.com`).
   * - `source`: application source name (for example, `source:cloudflare`).
   * - `ip_subnet`: CIDR containment; returns applications where a stored subnet
   *   contains the search value (for example, `ip_subnet:10.0.1.5/32` matches
   *   `10.0.0.0/16`).
   * - `category_id`: category ID (for example, `category_id:12`).
   * - `category_name`: category name (for example, `category_name:HR`).
   * - `supported`: supported Cloudflare product. Values: `GATEWAY`, `ACCESS`,
   *   `CASB`.
   * - `review_status`: account-specific Gateway review status. Values: `approved`,
   *   `unapproved`, `in_review`, `unreviewed`.
   */
  filter?: string;

  /**
   * Query param: Number of results to return. Defaults to 25; values are clamped to
   * 1–250.
   */
  limit?: number;

  /**
   * Query param: Find complete, case-insensitive application name mentions in a
   * phrase or rule sentence. Misspelled names do not match. Returns matching
   * applications ranked by relevance. Must be between 2 and 1000 characters, with no
   * control characters other than tab and line breaks. Uses the same filters,
   * fields, and pagination as listing. `search` cannot be combined with lookup.
   * Results are ranked by relevance, so `order_by` is ignored. To keep the text out
   * of URLs, send it to `POST .../applications/lookup` instead.
   */
  lookup?: string;

  /**
   * Query param: Number of results to skip. Defaults to 0; negative values are
   * clamped to 0. Ignored when `cursor` is provided.
   */
  offset?: number;

  /**
   * Query param: Order results using field:direction format. Supported fields are
   * name, id, human_id, category_id, application_type, application_confidence_score,
   * and gen_ai_score. Supported directions are asc and desc. Ignored when search is
   * provided; results are ranked by relevance instead. Also ignored when lookup is
   * provided.
   */
  order_by?: string;

  /**
   * Query param: Fuzzy search across application name and hostnames. Results are
   * ranked by relevance. Must be between 2 and 200 characters. Can be combined with
   * filter parameters.
   */
  search?: string;
}

export interface ApplicationDeleteParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface ApplicationGetParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export declare namespace Applications {
  export {
    type ApplicationCreateResponse as ApplicationCreateResponse,
    type ApplicationUpdateResponse as ApplicationUpdateResponse,
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationDeleteResponse as ApplicationDeleteResponse,
    type ApplicationGetResponse as ApplicationGetResponse,
    type ApplicationListResponsesCursorPaginationAfter as ApplicationListResponsesCursorPaginationAfter,
    type ApplicationCreateParams as ApplicationCreateParams,
    type ApplicationUpdateParams as ApplicationUpdateParams,
    type ApplicationListParams as ApplicationListParams,
    type ApplicationDeleteParams as ApplicationDeleteParams,
    type ApplicationGetParams as ApplicationGetParams,
  };
}
