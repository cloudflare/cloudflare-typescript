// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SetupFlowsAPI from './setup-flows';
import { BaseSetupFlows, SetupFlows } from './setup-flows';
import { APIPromise } from '../../../../core/api-promise';
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
   * const applications =
   *   await client.zeroTrust.casb.applications.list({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  list(params: ApplicationListParams, options?: RequestOptions): APIPromise<ApplicationListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/one/applications`, { query, ...options });
  }
}
export class Applications extends BaseApplications {
  setupFlows: SetupFlowsAPI.SetupFlows = new SetupFlowsAPI.SetupFlows(this._client);
}

export type ApplicationListResponse = Array<ApplicationListResponse.ApplicationListResponseItem>;

export namespace ApplicationListResponse {
  /**
   * Application item in list response.
   */
  export interface ApplicationListResponseItem {
    /**
     * Vendor identifier (e.g. microsoft_internal, google_workspace).
     *
     * - `BITBUCKET` - BITBUCKET
     * - `BOX` - BOX
     * - `CONFLUENCE` - CONFLUENCE
     * - `DROPBOX` - DROPBOX
     * - `GITHUB` - GITHUB
     * - `GOOGLE_WORKSPACE` - GOOGLE_WORKSPACE
     * - `JIRA` - JIRA
     * - `MICROSOFT_INTERNAL` - MICROSOFT_INTERNAL
     * - `SALESFORCE` - SALESFORCE
     * - `SLACK` - SLACK
     */
    id:
      | 'BITBUCKET'
      | 'BOX'
      | 'CONFLUENCE'
      | 'DROPBOX'
      | 'GITHUB'
      | 'GOOGLE_WORKSPACE'
      | 'JIRA'
      | 'MICROSOFT_INTERNAL'
      | 'SALESFORCE'
      | 'SLACK';

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

Applications.SetupFlows = SetupFlows;
Applications.BaseSetupFlows = BaseSetupFlows;

export declare namespace Applications {
  export {
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationListParams as ApplicationListParams,
  };

  export { SetupFlows as SetupFlows, BaseSetupFlows as BaseSetupFlows };
}
