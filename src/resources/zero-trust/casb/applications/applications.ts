// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AuthMethodsAPI from './auth-methods';
import {
  AuthMethodListParams,
  AuthMethodListResponse,
  AuthMethodListResponsesSinglePage,
  AuthMethods,
  BaseAuthMethods,
} from './auth-methods';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseApplications extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb', 'applications'] = Object.freeze([
    'zeroTrust',
    'casb',
    'applications',
  ] as const);

  /**
   * Returns a list of available applications with use cases and permissions.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const applicationListResponse of client.zeroTrust.casb.applications.list(
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
      path`/accounts/${account_id}/one/applications`,
      SinglePage<ApplicationListResponse>,
      { query, ...options },
    );
  }

  /**
   * Returns full application details including auth methods, use cases, and
   * permissions.
   *
   * @example
   * ```ts
   * const application =
   *   await client.zeroTrust.casb.applications.get(
   *     'ANTHROPIC',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    applicationID:
      | 'ANTHROPIC'
      | 'AWS'
      | 'BITBUCKET'
      | 'BOX'
      | 'CONFLUENCE'
      | 'DROPBOX'
      | 'GITHUB'
      | 'GOOGLE_CLOUD_PLATFORM'
      | 'GOOGLE_WORKSPACE'
      | 'JIRA'
      | 'MICROSOFT_INTERNAL'
      | 'OPENAI'
      | 'SALESFORCE'
      | 'SERVICENOW'
      | 'SLACK',
    params: ApplicationGetParams,
    options?: RequestOptions,
  ): APIPromise<ApplicationGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/one/applications/${applicationID}`,
        options,
      ) as APIPromise<{ result: ApplicationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Applications extends BaseApplications {
  authMethods: AuthMethodsAPI.AuthMethods = new AuthMethodsAPI.AuthMethods(this._client);
}

export type ApplicationListResponsesSinglePage = SinglePage<ApplicationListResponse>;

/**
 * Application item in list response.
 */
export interface ApplicationListResponse {
  /**
   * Vendor identifier (e.g. microsoft_internal, google_workspace).
   *
   * - `ANTHROPIC` - ANTHROPIC
   * - `AWS` - AWS
   * - `BITBUCKET` - BITBUCKET
   * - `BOX` - BOX
   * - `CONFLUENCE` - CONFLUENCE
   * - `DROPBOX` - DROPBOX
   * - `GITHUB` - GITHUB
   * - `GOOGLE_CLOUD_PLATFORM` - GOOGLE_CLOUD_PLATFORM
   * - `GOOGLE_WORKSPACE` - GOOGLE_WORKSPACE
   * - `JIRA` - JIRA
   * - `MICROSOFT_INTERNAL` - MICROSOFT_INTERNAL
   * - `OPENAI` - OPENAI
   * - `SALESFORCE` - SALESFORCE
   * - `SERVICENOW` - SERVICENOW
   * - `SLACK` - SLACK
   */
  id:
    | 'ANTHROPIC'
    | 'AWS'
    | 'BITBUCKET'
    | 'BOX'
    | 'CONFLUENCE'
    | 'DROPBOX'
    | 'GITHUB'
    | 'GOOGLE_CLOUD_PLATFORM'
    | 'GOOGLE_WORKSPACE'
    | 'JIRA'
    | 'MICROSOFT_INTERNAL'
    | 'OPENAI'
    | 'SALESFORCE'
    | 'SERVICENOW'
    | 'SLACK';

  /**
   * Available auth methods.
   */
  auth_methods: Array<ApplicationListResponse.AuthMethod>;

  /**
   * Vendor category (e.g. Productivity, AI).
   */
  category: string;

  /**
   * Brief description of the integration.
   */
  description: string;

  /**
   * Human-readable vendor name.
   */
  display_name: string;

  /**
   * Whether DLP scanning is supported.
   */
  dlp_enabled: boolean;

  /**
   * Logo path.
   */
  logo: string | null;

  /**
   * All permissions with severity.
   */
  permissions: Array<ApplicationListResponse.Permission>;

  /**
   * Environments this vendor supports (standard, fedramp).
   */
  supported_environments: Array<string>;

  /**
   * Supported use cases.
   */
  use_cases: Array<ApplicationListResponse.UseCase>;
}

export namespace ApplicationListResponse {
  /**
   * Auth method summary for list endpoint.
   */
  export interface AuthMethod {
    /**
     * Auth method identifier.
     */
    id: string;

    /**
     * Human-readable auth method name.
     */
    display_name: string;
  }

  /**
   * Permission/scope with severity for display.
   */
  export interface Permission {
    /**
     * Human-readable permission name.
     */
    display_name: string;

    /**
     * Vendor-native scope identifier.
     */
    scope: string;

    /**
     * Permission sensitivity level.
     *
     * - `low` - low
     * - `medium` - medium
     * - `high` - high
     * - `critical` - critical
     */
    severity: 'low' | 'medium' | 'high' | 'critical';
  }

  /**
   * Lightweight use case for list endpoint.
   */
  export interface UseCase {
    /**
     * Use case identifier (e.g. casb, ces).
     */
    id: string;

    /**
     * Human-readable use case name.
     */
    display_name: string;
  }
}

/**
 * The requested item.
 */
export interface ApplicationGetResponse {
  /**
   * Vendor identifier.
   *
   * - `ANTHROPIC` - ANTHROPIC
   * - `AWS` - AWS
   * - `BITBUCKET` - BITBUCKET
   * - `BOX` - BOX
   * - `CONFLUENCE` - CONFLUENCE
   * - `DROPBOX` - DROPBOX
   * - `GITHUB` - GITHUB
   * - `GOOGLE_CLOUD_PLATFORM` - GOOGLE_CLOUD_PLATFORM
   * - `GOOGLE_WORKSPACE` - GOOGLE_WORKSPACE
   * - `JIRA` - JIRA
   * - `MICROSOFT_INTERNAL` - MICROSOFT_INTERNAL
   * - `OPENAI` - OPENAI
   * - `SALESFORCE` - SALESFORCE
   * - `SERVICENOW` - SERVICENOW
   * - `SLACK` - SLACK
   */
  id:
    | 'ANTHROPIC'
    | 'AWS'
    | 'BITBUCKET'
    | 'BOX'
    | 'CONFLUENCE'
    | 'DROPBOX'
    | 'GITHUB'
    | 'GOOGLE_CLOUD_PLATFORM'
    | 'GOOGLE_WORKSPACE'
    | 'JIRA'
    | 'MICROSOFT_INTERNAL'
    | 'OPENAI'
    | 'SALESFORCE'
    | 'SERVICENOW'
    | 'SLACK';

  /**
   * Available authentication methods.
   */
  auth_methods: Array<ApplicationGetResponse.AuthMethod>;

  /**
   * Vendor category.
   */
  category: string;

  /**
   * Brief description.
   */
  description: string;

  /**
   * Human-readable vendor name.
   */
  display_name: string;

  /**
   * Whether DLP scanning is supported.
   */
  dlp_enabled: boolean;

  /**
   * Setup instructions for the user.
   */
  instructions: string | null;

  /**
   * Logo path.
   */
  logo: string | null;

  /**
   * Use cases with full scope details.
   */
  use_cases: Array<ApplicationGetResponse.UseCase>;
}

export namespace ApplicationGetResponse {
  /**
   * Authentication method available for a vendor.
   */
  export interface AuthMethod {
    /**
     * Auth method identifier.
     */
    id: string;

    /**
     * Human-readable auth method name.
     */
    display_name: string;

    /**
     * Whether this is the default auth method.
     */
    is_default: boolean;

    /**
     * Environments this auth method supports.
     */
    supported_environments: Array<string>;
  }

  /**
   * Full use case with scopes and features for detail endpoint.
   */
  export interface UseCase {
    /**
     * Use case identifier.
     */
    id: string;

    /**
     * Scopes always required for this use case.
     */
    base_scopes: Array<UseCase.BaseScope>;

    /**
     * Use case description.
     */
    description: string;

    /**
     * Human-readable use case name.
     */
    display_name: string;

    /**
     * Optional features with extra scopes.
     */
    features: Array<UseCase.Feature>;
  }

  export namespace UseCase {
    /**
     * Permission/scope with severity for display.
     */
    export interface BaseScope {
      /**
       * Human-readable permission name.
       */
      display_name: string;

      /**
       * Vendor-native scope identifier.
       */
      scope: string;

      /**
       * Permission sensitivity level.
       *
       * - `low` - low
       * - `medium` - medium
       * - `high` - high
       * - `critical` - critical
       */
      severity: 'low' | 'medium' | 'high' | 'critical';
    }

    /**
     * A feature with its additional scopes.
     */
    export interface Feature {
      /**
       * Feature identifier.
       */
      id: string;

      /**
       * Feature description.
       */
      description: string;

      /**
       * Human-readable feature name.
       */
      display_name: string;

      /**
       * Additional scopes when feature is enabled.
       */
      scopes: Array<Feature.Scope>;
    }

    export namespace Feature {
      /**
       * Permission/scope with severity for display.
       */
      export interface Scope {
        /**
         * Human-readable permission name.
         */
        display_name: string;

        /**
         * Vendor-native scope identifier.
         */
        scope: string;

        /**
         * Permission sensitivity level.
         *
         * - `low` - low
         * - `medium` - medium
         * - `high` - high
         * - `critical` - critical
         */
        severity: 'low' | 'medium' | 'high' | 'critical';
      }
    }
  }
}

export interface ApplicationListParams {
  /**
   * Path param: Cloudflare account identifier.
   */
  account_id: string;

  /**
   * Query param: Filter by supported environment (standard, fedramp).
   */
  environment?: string;

  /**
   * Query param: A page number within the paginated result set.
   */
  page?: number;

  /**
   * Query param: Number of results to return per page.
   */
  page_size?: number;
}

export interface ApplicationGetParams {
  /**
   * Cloudflare account identifier.
   */
  account_id: string;
}

Applications.AuthMethods = AuthMethods;
Applications.BaseAuthMethods = BaseAuthMethods;

export declare namespace Applications {
  export {
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationGetResponse as ApplicationGetResponse,
    type ApplicationListResponsesSinglePage as ApplicationListResponsesSinglePage,
    type ApplicationListParams as ApplicationListParams,
    type ApplicationGetParams as ApplicationGetParams,
  };

  export {
    AuthMethods as AuthMethods,
    BaseAuthMethods as BaseAuthMethods,
    type AuthMethodListResponse as AuthMethodListResponse,
    type AuthMethodListResponsesSinglePage as AuthMethodListResponsesSinglePage,
    type AuthMethodListParams as AuthMethodListParams,
  };
}
