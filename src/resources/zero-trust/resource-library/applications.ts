// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseApplications extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'resourceLibrary', 'applications'] = Object.freeze([
    'zeroTrust',
    'resourceLibrary',
    'applications',
  ] as const);

  /**
   * Create a custom application for an account.
   *
   * @example
   * ```ts
   * const application =
   *   await client.zeroTrust.resourceLibrary.applications.create(
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       category_id: 12,
   *       human_id: 'HR',
   *       name: 'HR',
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
   * Replace the network matchers for a custom application and create a new version.
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
   * List applications with different filters.
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
  ): PagePromise<ApplicationListResponsesSinglePage, ApplicationListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/resource-library/applications`,
      SinglePage<ApplicationListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a custom application and all of its versions.
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
   * Get application by ID.
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

export type ApplicationListResponsesSinglePage = SinglePage<ApplicationListResponse>;

export interface ApplicationCreateResponse {
  /**
   * Returns the application ID.
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
   * Returns the category ID.
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
   * Returns the human readable ID.
   */
  human_id: string;

  /**
   * IP subnets matched by the application.
   */
  ip_subnets: Array<string>;

  /**
   * Returns the application name.
   */
  name: string;

  /**
   * Port and protocol pairs matched by the application.
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
   * Returns the application ID.
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
   * Returns the category ID.
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
   * Returns the human readable ID.
   */
  human_id: string;

  /**
   * IP subnets matched by the application.
   */
  ip_subnets: Array<string>;

  /**
   * Returns the application name.
   */
  name: string;

  /**
   * Port and protocol pairs matched by the application.
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

export interface ApplicationListResponse {
  /**
   * Returns the application ID.
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
   * Returns the category ID.
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
   * Returns the human readable ID.
   */
  human_id: string;

  /**
   * IP subnets matched by the application.
   */
  ip_subnets: Array<string>;

  /**
   * Returns the application name.
   */
  name: string;

  /**
   * Port and protocol pairs matched by the application.
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

export type ApplicationDeleteResponse = unknown;

export interface ApplicationGetResponse {
  /**
   * Returns the application ID.
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
   * Returns the category ID.
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
   * Returns the human readable ID.
   */
  human_id: string;

  /**
   * IP subnets matched by the application.
   */
  ip_subnets: Array<string>;

  /**
   * Returns the application name.
   */
  name: string;

  /**
   * Port and protocol pairs matched by the application.
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

export interface ApplicationCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Body param: Returns the category ID.
   */
  category_id: number;

  /**
   * Body param: Returns the human readable ID.
   */
  human_id: string;

  /**
   * Body param: Returns the application name.
   */
  name: string;

  /**
   * Body param: Hostnames matched by the application.
   */
  hostnames?: Array<string>;

  /**
   * Body param: IP subnets matched by the application.
   */
  ip_subnets?: Array<string>;

  /**
   * Body param: Port and protocol pairs matched by the application.
   */
  port_protocols?: Array<string>;

  /**
   * Body param: Support domains matched by the application.
   */
  support_domains?: Array<string>;
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
   * Body param: IP subnets matched by the application.
   */
  ip_subnets?: Array<string>;

  /**
   * Body param: Port and protocol pairs matched by the application.
   */
  port_protocols?: Array<string>;

  /**
   * Body param: Support domains matched by the application.
   */
  support_domains?: Array<string>;
}

export interface ApplicationListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Filter applications using key:value format. Supported filter keys:
   *
   * - name: Filter by application name (e.g., name:HR)
   * - id: Filter by application ID (e.g., id:498)
   * - human_id: Filter by human-readable ID (e.g., human_id:HR)
   * - hostname: Filter by hostname or support domain (e.g.,
   *   hostname:portal.example.com)
   * - source: Filter by application source name (e.g., source:cloudflare)
   * - ip_subnet: Filter by IP subnet using CIDR containment — returns applications
   *   where any stored subnet contains the search value (e.g., ip_subnet:10.0.1.5/32
   *   matches apps with 10.0.0.0/16)
   * - category_id: Filter by category ID (e.g., category_id:12).
   * - category_name: Filter by category name (e.g., category_name:HR).
   * - supported: Filter by supported Cloudflare product (e.g., supported:ACCESS).
   *   Values: GATEWAY, ACCESS, CASB. .
   */
  filter?: string;

  /**
   * Query param: Limit of number of results to return (max 250).
   */
  limit?: number;

  /**
   * Query param: Offset of results to return.
   */
  offset?: number;

  /**
   * Query param: Order results by field name and direction (e.g., name:asc). Ignored
   * when search is provided; results are ranked by relevance instead.
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
    type ApplicationListResponsesSinglePage as ApplicationListResponsesSinglePage,
    type ApplicationCreateParams as ApplicationCreateParams,
    type ApplicationUpdateParams as ApplicationUpdateParams,
    type ApplicationListParams as ApplicationListParams,
    type ApplicationDeleteParams as ApplicationDeleteParams,
    type ApplicationGetParams as ApplicationGetParams,
  };
}
