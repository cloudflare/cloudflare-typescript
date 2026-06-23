// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as TokensAPI from './tokens';
import { TokenRotateParams, TokenRotateResponse, Tokens } from './tokens';
import { SinglePage } from '../../../pagination';

export class Relays extends APIResource {
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);

  /**
   * Provisions a new MoQ relay instance. Auto-creates a publish+subscribe token and
   * a subscribe-only token. Token values are included in the response (shown once).
   * Config is set to defaults (lingering subscribe enabled, 30s ceiling, origin
   * fallback off). Use PUT to modify.
   *
   * @example
   * ```ts
   * const relay = await client.moq.relays.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   name: 'Production Live Stream',
   * });
   * ```
   */
  create(params: RelayCreateParams, options?: Core.RequestOptions): Core.APIPromise<RelayCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/moq/relays`, { body, ...options }) as Core.APIPromise<{
        result: RelayCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a relay's name and/or configuration. Partial updates: omitted fields are
   * preserved. Config sub-objects replace as whole objects when present.
   * origin_fallback and lingering_subscribe are mutually exclusive.
   *
   * @example
   * ```ts
   * const relay = await client.moq.relays.update(
   *   'a1b2c3d4e5f67890a1b2c3d4e5f67890',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  update(
    relayId: string,
    params: RelayUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RelayUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/moq/relays/${relayId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RelayUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all MoQ relays for the account. Returns only metadata. Config, status, and
   * tokens are omitted.
   *
   * Results are cursor-paginated (keyset on the `created` timestamp). Use
   * `created_before` / `created_after` with the `created` value of the first/last
   * item in a page to fetch the adjacent page. `result_info` reports the page
   * `count` and the `total` matching the cursor filters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const relayListResponse of client.moq.relays.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RelayListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RelayListResponsesSinglePage, RelayListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/moq/relays`, RelayListResponsesSinglePage, {
      query,
      ...options,
    });
  }

  /**
   * Soft-deletes a MoQ relay.
   *
   * @example
   * ```ts
   * const relay = await client.moq.relays.delete(
   *   'a1b2c3d4e5f67890a1b2c3d4e5f67890',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    relayId: string,
    params: RelayDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RelayDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/moq/relays/${relayId}`, options) as Core.APIPromise<{
        result: RelayDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves a single MoQ relay including config and status. Tokens are NOT
   * included.
   *
   * @example
   * ```ts
   * const relay = await client.moq.relays.get(
   *   'a1b2c3d4e5f67890a1b2c3d4e5f67890',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    relayId: string,
    params: RelayGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RelayGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/moq/relays/${relayId}`, options) as Core.APIPromise<{
        result: RelayGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class RelayListResponsesSinglePage extends SinglePage<RelayListResponse> {}

/**
 * Relay with auto-generated tokens (shown once).
 */
export interface RelayCreateResponse {
  /**
   * origin_fallback and lingering_subscribe are mutually exclusive.
   */
  config: RelayCreateResponse.Config;

  created: string;

  modified: string;

  name: string;

  /**
   * Full access token (publish + subscribe). Treat as sensitive.
   */
  token_publish_subscribe: string;

  /**
   * Subscribe-only token. Treat as sensitive.
   */
  token_subscribe: string;

  /**
   * Server-generated unique identifier (32 hex chars).
   */
  uid: string;
}

export namespace RelayCreateResponse {
  /**
   * origin_fallback and lingering_subscribe are mutually exclusive.
   */
  export interface Config {
    lingering_subscribe?: Config.LingeringSubscribe;

    origin_fallback?: Config.OriginFallback;
  }

  export namespace Config {
    export interface LingeringSubscribe {
      enabled?: boolean;

      /**
       * Relay-level ceiling on lingering subscribe timeout (ms). Default 30000.
       */
      max_timeout_ms?: number;
    }

    export interface OriginFallback {
      enabled?: boolean;

      /**
       * Ordered list of upstream origin relays. Each entry is an object (not a bare
       * string) so per-origin configuration can be added in the future without another
       * breaking change.
       */
      origins?: Array<OriginFallback.Origin>;
    }

    export namespace OriginFallback {
      /**
       * A single upstream origin relay.
       */
      export interface Origin {
        /**
         * Upstream origin relay URL.
         */
        url?: string;
      }
    }
  }
}

/**
 * Full relay details (no tokens).
 */
export interface RelayUpdateResponse {
  /**
   * origin_fallback and lingering_subscribe are mutually exclusive.
   */
  config: RelayUpdateResponse.Config;

  created: string;

  modified: string;

  name: string;

  uid: string;

  /**
   * "connected" when active, omitted otherwise.
   */
  status?: 'connected';
}

export namespace RelayUpdateResponse {
  /**
   * origin_fallback and lingering_subscribe are mutually exclusive.
   */
  export interface Config {
    lingering_subscribe?: Config.LingeringSubscribe;

    origin_fallback?: Config.OriginFallback;
  }

  export namespace Config {
    export interface LingeringSubscribe {
      enabled?: boolean;

      /**
       * Relay-level ceiling on lingering subscribe timeout (ms). Default 30000.
       */
      max_timeout_ms?: number;
    }

    export interface OriginFallback {
      enabled?: boolean;

      /**
       * Ordered list of upstream origin relays. Each entry is an object (not a bare
       * string) so per-origin configuration can be added in the future without another
       * breaking change.
       */
      origins?: Array<OriginFallback.Origin>;
    }

    export namespace OriginFallback {
      /**
       * A single upstream origin relay.
       */
      export interface Origin {
        /**
         * Upstream origin relay URL.
         */
        url?: string;
      }
    }
  }
}

/**
 * Abbreviated relay for list responses.
 */
export interface RelayListResponse {
  created: string;

  modified: string;

  name: string;

  uid: string;
}

export type RelayDeleteResponse = unknown;

/**
 * Full relay details (no tokens).
 */
export interface RelayGetResponse {
  /**
   * origin_fallback and lingering_subscribe are mutually exclusive.
   */
  config: RelayGetResponse.Config;

  created: string;

  modified: string;

  name: string;

  uid: string;

  /**
   * "connected" when active, omitted otherwise.
   */
  status?: 'connected';
}

export namespace RelayGetResponse {
  /**
   * origin_fallback and lingering_subscribe are mutually exclusive.
   */
  export interface Config {
    lingering_subscribe?: Config.LingeringSubscribe;

    origin_fallback?: Config.OriginFallback;
  }

  export namespace Config {
    export interface LingeringSubscribe {
      enabled?: boolean;

      /**
       * Relay-level ceiling on lingering subscribe timeout (ms). Default 30000.
       */
      max_timeout_ms?: number;
    }

    export interface OriginFallback {
      enabled?: boolean;

      /**
       * Ordered list of upstream origin relays. Each entry is an object (not a bare
       * string) so per-origin configuration can be added in the future without another
       * breaking change.
       */
      origins?: Array<OriginFallback.Origin>;
    }

    export namespace OriginFallback {
      /**
       * A single upstream origin relay.
       */
      export interface Origin {
        /**
         * Upstream origin relay URL.
         */
        url?: string;
      }
    }
  }
}

export interface RelayCreateParams {
  /**
   * Path param: Cloudflare account identifier.
   */
  account_id: string;

  /**
   * Body param: Human-readable name for the relay.
   */
  name: string;
}

export interface RelayUpdateParams {
  /**
   * Path param: Cloudflare account identifier.
   */
  account_id: string;

  /**
   * Body param: origin_fallback and lingering_subscribe are mutually exclusive.
   */
  config?: RelayUpdateParams.Config;

  /**
   * Body param
   */
  name?: string;
}

export namespace RelayUpdateParams {
  /**
   * origin_fallback and lingering_subscribe are mutually exclusive.
   */
  export interface Config {
    lingering_subscribe?: Config.LingeringSubscribe;

    origin_fallback?: Config.OriginFallback;
  }

  export namespace Config {
    export interface LingeringSubscribe {
      enabled?: boolean;

      /**
       * Relay-level ceiling on lingering subscribe timeout (ms). Default 30000.
       */
      max_timeout_ms?: number;
    }

    export interface OriginFallback {
      enabled?: boolean;

      /**
       * Ordered list of upstream origin relays. Each entry is an object (not a bare
       * string) so per-origin configuration can be added in the future without another
       * breaking change.
       */
      origins?: Array<OriginFallback.Origin>;
    }

    export namespace OriginFallback {
      /**
       * A single upstream origin relay.
       */
      export interface Origin {
        /**
         * Upstream origin relay URL.
         */
        url?: string;
      }
    }
  }
}

export interface RelayListParams {
  /**
   * Path param: Cloudflare account identifier.
   */
  account_id: string;

  /**
   * Query param: Sort order by `created`. When true, results are returned
   * oldest-first (ascending); otherwise newest-first (descending, the default).
   */
  asc?: boolean;

  /**
   * Query param: Cursor for pagination. Returns relays created strictly after this
   * RFC 3339 timestamp (typically the `created` value of the last item on the
   * current page, to fetch the next page).
   */
  created_after?: string;

  /**
   * Query param: Cursor for pagination. Returns relays created strictly before this
   * RFC 3339 timestamp (typically the `created` value of the first item on the
   * current page, to fetch the previous page).
   */
  created_before?: string;

  /**
   * Query param: Maximum number of relays to return per page.
   */
  per_page?: number;
}

export interface RelayDeleteParams {
  /**
   * Cloudflare account identifier.
   */
  account_id: string;
}

export interface RelayGetParams {
  /**
   * Cloudflare account identifier.
   */
  account_id: string;
}

Relays.RelayListResponsesSinglePage = RelayListResponsesSinglePage;
Relays.Tokens = Tokens;

export declare namespace Relays {
  export {
    type RelayCreateResponse as RelayCreateResponse,
    type RelayUpdateResponse as RelayUpdateResponse,
    type RelayListResponse as RelayListResponse,
    type RelayDeleteResponse as RelayDeleteResponse,
    type RelayGetResponse as RelayGetResponse,
    RelayListResponsesSinglePage as RelayListResponsesSinglePage,
    type RelayCreateParams as RelayCreateParams,
    type RelayUpdateParams as RelayUpdateParams,
    type RelayListParams as RelayListParams,
    type RelayDeleteParams as RelayDeleteParams,
    type RelayGetParams as RelayGetParams,
  };

  export {
    Tokens as Tokens,
    type TokenRotateResponse as TokenRotateResponse,
    type TokenRotateParams as TokenRotateParams,
  };
}
