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
      | 'SLACK',
    params: AuthMethodListParams,
    options?: RequestOptions,
  ): APIPromise<AuthMethodListResponse> {
    const { account_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/one/applications/${applicationID}/auth-methods`,
      options,
    );
  }
}
export class AuthMethods extends BaseAuthMethods {}

export type AuthMethodListResponse = Array<AuthMethodListResponse.AuthMethodListResponseItem>;

export namespace AuthMethodListResponse {
  /**
   * Detailed auth method info including credentials schema and instructions.
   */
  export interface AuthMethodListResponseItem {
    /**
     * Auth method identifier.
     */
    id: string;

    /**
     * Human-readable auth method name.
     */
    display_name: string;

    /**
     * Whether setup requires human interaction or integration can be created purely
     * using API (e.g., For OAuth can not be created without user interaction).
     */
    human_interaction_required: boolean;

    /**
     * Step-by-step instructions for obtaining credentials.
     */
    instructions: AuthMethodListResponseItem.Instructions;

    /**
     * Example credentials payload with placeholder values.
     */
    payload_example: { [key: string]: unknown } | null;

    /**
     * JSON Schema for the credentials object in POST /v2/integrations request.
     */
    payload_schema: { [key: string]: unknown } | null;

    /**
     * OAuth redirect URL for vendors requiring human interaction.
     */
    redirect_url: string | null;
  }

  export namespace AuthMethodListResponseItem {
    /**
     * Step-by-step instructions for obtaining credentials.
     */
    export interface Instructions {
      /**
       * Detailed instructions in markdown format.
       */
      markdown: string;
    }
  }
}

export interface AuthMethodListParams {
  /**
   * Cloudflare account identifier.
   */
  account_id: string;
}

export declare namespace AuthMethods {
  export {
    type AuthMethodListResponse as AuthMethodListResponse,
    type AuthMethodListParams as AuthMethodListParams,
  };
}
