// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseAuthMethods extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb', 'applications', 'authMethods'] =
    Object.freeze(['zeroTrust', 'casb', 'applications', 'authMethods'] as const);

  /**
   * Returns available auth methods for the specified vendor, including credential
   * schema, instructions, and example payloads. Use this to understand what
   * credentials are required before calling POST /v2/integrations.
   *
   * @example
   * ```ts
   * const authMethods =
   *   await client.zeroTrust.casb.applications.authMethods.list(
   *     'ANTHROPIC',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  list(
    applicationID:
      | 'ANTHROPIC'
      | 'AWS'
      | 'BITBUCKET'
      | 'BOX'
      | 'CONFLUENCE'
      | 'DROPBOX'
      | 'GITHUB'
      | 'GITLAB'
      | 'GOOGLE_CLOUD_PLATFORM'
      | 'GOOGLE_WORKSPACE'
      | 'JIRA'
      | 'MICROSOFT_INTERNAL'
      | 'OPENAI'
      | 'SALESFORCE'
      | 'SERVICENOW'
      | 'SLACK'
      | 'ZOOM',
    params: AuthMethodListParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/one/applications/${applicationID}/auth-methods`, {
      query,
      ...options,
    });
  }
}
export class AuthMethods extends BaseAuthMethods {}

export type AuthMethodListResponse = unknown;

export interface AuthMethodListParams {
  /**
   * Path param: Cloudflare account identifier.
   */
  account_id: string;

  /**
   * Query param: A page number within the paginated result set.
   */
  page?: number;

  /**
   * Query param: Number of results to return per page.
   */
  page_size?: number;
}

export declare namespace AuthMethods {
  export {
    type AuthMethodListResponse as AuthMethodListResponse,
    type AuthMethodListParams as AuthMethodListParams,
  };
}
