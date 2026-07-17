// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseTokens extends APIResource {
  static override readonly _key: readonly ['moq', 'relays', 'tokens'] = Object.freeze([
    'moq',
    'relays',
    'tokens',
  ] as const);

  /**
   * Mints a new relay-scoped token and adds it to the relay's accepted-auth
   * registry. The token value (secret) is shown once in the response. A relay may
   * hold up to 10 tokens; creating an 11th is rejected.
   *
   * @example
   * ```ts
   * const token = await client.moq.relays.tokens.create(
   *   'a1b2c3d4e5f67890a1b2c3d4e5f67890',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     operations: ['publish', 'subscribe'],
   *   },
   * );
   * ```
   */
  create(
    relayID: string,
    params: TokenCreateParams,
    options?: RequestOptions,
  ): APIPromise<TokenCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/moq/relays/${relayID}/tokens`, {
        body,
        ...options,
      }) as APIPromise<{ result: TokenCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns metadata for every token in the relay's registry. Secrets are never
   * returned. The dashboard derives an `expired` flag by comparing each token's
   * `expires` to the current time.
   *
   * @example
   * ```ts
   * const tokens = await client.moq.relays.tokens.list(
   *   'a1b2c3d4e5f67890a1b2c3d4e5f67890',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  list(relayID: string, params: TokenListParams, options?: RequestOptions): APIPromise<TokenListResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/moq/relays/${relayID}/tokens`, options) as APIPromise<{
        result: TokenListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Revokes a token by removing it from the relay's registry. crique rejects the
   * token within the cache TTL. Idempotent — revoking an unknown token succeeds.
   *
   * @example
   * ```ts
   * const token = await client.moq.relays.tokens.delete(
   *   'f3a1b2c3d4e5f67890a1b2c3d4e5f678',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     relay_id: 'a1b2c3d4e5f67890a1b2c3d4e5f67890',
   *   },
   * );
   * ```
   */
  delete(jti: string, params: TokenDeleteParams, options?: RequestOptions): APIPromise<TokenDeleteResponse> {
    const { account_id, relay_id } = params;
    return this._client.delete(path`/accounts/${account_id}/moq/relays/${relay_id}/tokens/${jti}`, options);
  }
}
export class Tokens extends BaseTokens {}

/**
 * A relay's token collection, keyed on issuer `type` (a discriminated union). V1
 * ships exactly one arm (`cloudflare_jwt`). Clients iterate `issuers`, switch on
 * `type`, and ignore unknown types — that contract is what makes adding or
 * removing an arm non-breaking.
 */
export interface TokenCreateResponse {
  issuers: Array<TokenCreateResponse.Issuer>;
}

export namespace TokenCreateResponse {
  /**
   * One arm of the discriminated-union token collection.
   */
  export interface Issuer {
    /**
     * Always present ([] when empty).
     */
    cloudflare_tokens: Array<Issuer.CloudflareToken>;

    issuer: 'cloudflare';

    type: 'cloudflare_jwt';
  }

  export namespace Issuer {
    export interface CloudflareToken {
      created: string;

      /**
       * Mandatory; no more than 1 year after `created`.
       */
      expires: string;

      /**
       * Token identity and registry key (32 hex chars).
       */
      jti: string;

      /**
       * Signed allowlist of what the token may do. V1 coarse roles; the array form
       * extends to fine-grained MoQT message names later without a breaking change.
       */
      operations: Array<'publish' | 'subscribe'>;

      /**
       * Optional, customer-set.
       */
      label?: string;

      /**
       * The signed JWT. Present ONLY in create / auto-create responses (shown once);
       * never returned by list, never stored.
       */
      secret?: string;
    }
  }
}

/**
 * A relay's token collection, keyed on issuer `type` (a discriminated union). V1
 * ships exactly one arm (`cloudflare_jwt`). Clients iterate `issuers`, switch on
 * `type`, and ignore unknown types — that contract is what makes adding or
 * removing an arm non-breaking.
 */
export interface TokenListResponse {
  issuers: Array<TokenListResponse.Issuer>;
}

export namespace TokenListResponse {
  /**
   * One arm of the discriminated-union token collection.
   */
  export interface Issuer {
    /**
     * Always present ([] when empty).
     */
    cloudflare_tokens: Array<Issuer.CloudflareToken>;

    issuer: 'cloudflare';

    type: 'cloudflare_jwt';
  }

  export namespace Issuer {
    export interface CloudflareToken {
      created: string;

      /**
       * Mandatory; no more than 1 year after `created`.
       */
      expires: string;

      /**
       * Token identity and registry key (32 hex chars).
       */
      jti: string;

      /**
       * Signed allowlist of what the token may do. V1 coarse roles; the array form
       * extends to fine-grained MoQT message names later without a breaking change.
       */
      operations: Array<'publish' | 'subscribe'>;

      /**
       * Optional, customer-set.
       */
      label?: string;

      /**
       * The signed JWT. Present ONLY in create / auto-create responses (shown once);
       * never returned by list, never stored.
       */
      secret?: string;
    }
  }
}

export interface TokenDeleteResponse {
  errors: Array<TokenDeleteResponse.Error>;

  messages: Array<TokenDeleteResponse.Message>;

  success: boolean;
}

export namespace TokenDeleteResponse {
  export interface Error {
    code?: number;

    message?: string;
  }

  export interface Message {
    code?: number;

    message?: string;
  }
}

export interface TokenCreateParams {
  /**
   * Path param: Cloudflare account identifier.
   */
  account_id: string;

  /**
   * Body param: Non-empty subset of the V1 roles the token is allowed to perform.
   * Signed into the token.
   */
  operations: Array<'publish' | 'subscribe'>;

  /**
   * Body param: Optional expiry (RFC 3339). Defaults to 1 year from creation;
   * rejected if more than 1 year in the future.
   */
  expires?: string;

  /**
   * Body param: Optional, customer-set label.
   */
  label?: string;
}

export interface TokenListParams {
  /**
   * Cloudflare account identifier.
   */
  account_id: string;
}

export interface TokenDeleteParams {
  /**
   * Cloudflare account identifier.
   */
  account_id: string;

  /**
   * Relay unique identifier (32 hex characters).
   */
  relay_id: string;
}

export declare namespace Tokens {
  export {
    type TokenCreateResponse as TokenCreateResponse,
    type TokenListResponse as TokenListResponse,
    type TokenDeleteResponse as TokenDeleteResponse,
    type TokenCreateParams as TokenCreateParams,
    type TokenListParams as TokenListParams,
    type TokenDeleteParams as TokenDeleteParams,
  };
}
