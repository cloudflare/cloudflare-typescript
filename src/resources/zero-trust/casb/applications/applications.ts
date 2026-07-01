// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as SetupFlowsAPI from './setup-flows';
import { SetupFlowListParams, SetupFlowListResponse, SetupFlows } from './setup-flows';

export class Applications extends APIResource {
  setupFlows: SetupFlowsAPI.SetupFlows = new SetupFlowsAPI.SetupFlows(this._client);

  /**
   * Returns a list of available applications with use cases and permissions.
   *
   * @example
   * ```ts
   * const applications =
   *   await client.zeroTrust.casb.applications.list({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  list(
    params: ApplicationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/one/applications`, { query, ...options });
  }

  /**
   * Returns full application details including auth methods, use cases, and
   * permissions.
   *
   * @example
   * ```ts
   * const application =
   *   await client.zeroTrust.casb.applications.get('GITHUB', {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(
    slug: 'GITHUB' | 'GOOGLE_WORKSPACE' | 'MICROSOFT_INTERNAL' | 'SALESFORCE' | 'SLACK',
    params: ApplicationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationGetResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/one/applications/${slug}`, options);
  }
}

export type ApplicationListResponse = Array<ApplicationListResponse.ApplicationListResponseItem>;

export namespace ApplicationListResponse {
  /**
   * Application item in list response.
   */
  export interface ApplicationListResponseItem {
    /**
     * Available auth methods.
     */
    auth_methods: Array<ApplicationListResponseItem.AuthMethod>;

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
    permissions: Array<ApplicationListResponseItem.Permission>;

    /**
     * Vendor identifier (e.g. microsoft_internal, google_workspace).
     *
     * - `GITHUB` - GITHUB
     * - `GOOGLE_WORKSPACE` - GOOGLE_WORKSPACE
     * - `MICROSOFT_INTERNAL` - MICROSOFT_INTERNAL
     * - `SALESFORCE` - SALESFORCE
     * - `SLACK` - SLACK
     */
    slug: 'GITHUB' | 'GOOGLE_WORKSPACE' | 'MICROSOFT_INTERNAL' | 'SALESFORCE' | 'SLACK';

    /**
     * Environments this vendor supports (standard, fedramp).
     */
    supported_environments: Array<string>;

    /**
     * Supported use cases.
     */
    use_cases: Array<ApplicationListResponseItem.UseCase>;
  }

  export namespace ApplicationListResponseItem {
    /**
     * Auth method summary for list endpoint.
     */
    export interface AuthMethod {
      /**
       * Human-readable auth method name.
       */
      display_name: string;

      /**
       * Auth method identifier.
       */
      slug: string;
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
       * Human-readable use case name.
       */
      display_name: string;

      /**
       * Use case identifier (e.g. casb, ces).
       */
      slug: string;
    }
  }
}

/**
 * Full application detail for onboarding UI.
 */
export interface ApplicationGetResponse {
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
   * Vendor identifier.
   *
   * - `GITHUB` - GITHUB
   * - `GOOGLE_WORKSPACE` - GOOGLE_WORKSPACE
   * - `MICROSOFT_INTERNAL` - MICROSOFT_INTERNAL
   * - `SALESFORCE` - SALESFORCE
   * - `SLACK` - SLACK
   */
  slug: 'GITHUB' | 'GOOGLE_WORKSPACE' | 'MICROSOFT_INTERNAL' | 'SALESFORCE' | 'SLACK';

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
     * Human-readable auth method name.
     */
    display_name: string;

    /**
     * Whether this is the default auth method.
     */
    is_default: boolean;

    /**
     * Auth method identifier.
     */
    slug: string;

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

    /**
     * Use case identifier.
     */
    slug: string;
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

      /**
       * Feature identifier.
       */
      slug: string;
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
}

export interface ApplicationGetParams {
  /**
   * Cloudflare account identifier.
   */
  account_id: string;
}

Applications.SetupFlows = SetupFlows;

export declare namespace Applications {
  export {
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationGetResponse as ApplicationGetResponse,
    type ApplicationListParams as ApplicationListParams,
    type ApplicationGetParams as ApplicationGetParams,
  };

  export {
    SetupFlows as SetupFlows,
    type SetupFlowListResponse as SetupFlowListResponse,
    type SetupFlowListParams as SetupFlowListParams,
  };
}
