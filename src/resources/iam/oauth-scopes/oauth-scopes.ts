// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class OAuthScopes extends APIResource {
  /**
   * List all available OAuth scopes. This endpoint requires authentication but has
   * no authorization role requirements.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const oauthScopeListResponse of client.iam.oauthScopes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<OAuthScopeListResponsesSinglePage, OAuthScopeListResponse> {
    return this._client.getAPIList('/oauth/scopes', OAuthScopeListResponsesSinglePage, options);
  }
}

export class OAuthScopeListResponsesSinglePage extends SinglePage<OAuthScopeListResponse> {}

/**
 * An available OAuth scope that can be assigned to an OAuth client.
 */
export interface OAuthScopeListResponse {
  /**
   * The scope label to use in the scopes array when creating or updating an OAuth
   * client.
   */
  id: string;

  /**
   * Human-readable name of the OAuth scope.
   */
  name: string;

  /**
   * Category for grouping scopes in the UI.
   */
  category?: string;

  /**
   * The underlying resource scopes (Bach scopes) that define which resources this
   * OAuth scope can act upon.
   */
  scopes?: Array<string>;
}

OAuthScopes.OAuthScopeListResponsesSinglePage = OAuthScopeListResponsesSinglePage;

export declare namespace OAuthScopes {
  export {
    type OAuthScopeListResponse as OAuthScopeListResponse,
    OAuthScopeListResponsesSinglePage as OAuthScopeListResponsesSinglePage,
  };
}
