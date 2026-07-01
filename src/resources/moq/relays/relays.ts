// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TokensAPI from './tokens';
import { BaseTokens, TokenRotateParams, TokenRotateResponse, Tokens } from './tokens';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseRelays extends APIResource {
  static override readonly _key: readonly ['moq', 'relays'] = Object.freeze(['moq', 'relays'] as const);

  /**
   * Provisions a new MoQ relay instance. Auto-creates a publish+subscribe token and
   * a subscribe-only token. Token values are included in the response (shown once).
   * Config is set to defaults (lingering subscribe enabled, 30s ceiling, upstreams
   * off). Use PUT to modify.
   *
   * @example
   * ```ts
   * const relay = await client.moq.relays.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   name: 'Production Live Stream',
   * });
   * ```
   */
  create(params: RelayCreateParams, options?: RequestOptions): APIPromise<RelayCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/moq/relays`, { body, ...options }) as APIPromise<{
        result: RelayCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a relay's name and/or configuration. Partial updates: omitted fields are
   * preserved. Config sub-objects replace as whole objects when present. upstreams
   * and lingering_subscribe are mutually exclusive.
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
    relayID: string,
    params: RelayUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RelayUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/moq/relays/${relayID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: RelayUpdateResponse }>
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
    options?: RequestOptions,
  ): PagePromise<RelayListResponsesSinglePage, RelayListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(path`/accounts/${account_id}/moq/relays`, SinglePage<RelayListResponse>, {
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
    relayID: string,
    params: RelayDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RelayDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/moq/relays/${relayID}`, options) as APIPromise<{
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
  get(relayID: string, params: RelayGetParams, options?: RequestOptions): APIPromise<RelayGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/moq/relays/${relayID}`, options) as APIPromise<{
        result: RelayGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Relays extends BaseRelays {
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
}

export type RelayListResponsesSinglePage = SinglePage<RelayListResponse>;

/**
 * Relay with auto-generated tokens (shown once).
 */
export interface RelayCreateResponse {
  /**
   * upstreams and lingering_subscribe are mutually exclusive.
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
   * upstreams and lingering_subscribe are mutually exclusive.
   */
  export interface Config {
    lingering_subscribe?: Config.LingeringSubscribe;

    /**
     * Upstreams are external MOQT server publishers that a relay falls back to when it
     * has no local publisher for a requested namespace/track.
     */
    upstreams?: Config.Upstreams;
  }

  export namespace Config {
    export interface LingeringSubscribe {
      enabled?: boolean;

      /**
       * Relay-level ceiling on lingering subscribe timeout (ms). Default 30000.
       */
      max_timeout_ms?: number;
    }

    /**
     * Upstreams are external MOQT server publishers that a relay falls back to when it
     * has no local publisher for a requested namespace/track.
     */
    export interface Upstreams {
      enabled?: boolean;

      /**
       * Ordered list of upstream MOQT server publishers. Each entry is an object (not a
       * bare string) so per-upstream configuration can be added in the future without
       * another breaking change.
       */
      upstreams?: Array<Upstreams.Upstream>;
    }

    export namespace Upstreams {
      /**
       * A single upstream MOQT server publisher.
       */
      export interface Upstream {
        /**
         * Upstream MOQT server publisher URL.
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
   * upstreams and lingering_subscribe are mutually exclusive.
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
   * upstreams and lingering_subscribe are mutually exclusive.
   */
  export interface Config {
    lingering_subscribe?: Config.LingeringSubscribe;

    /**
     * Upstreams are external MOQT server publishers that a relay falls back to when it
     * has no local publisher for a requested namespace/track.
     */
    upstreams?: Config.Upstreams;
  }

  export namespace Config {
    export interface LingeringSubscribe {
      enabled?: boolean;

      /**
       * Relay-level ceiling on lingering subscribe timeout (ms). Default 30000.
       */
      max_timeout_ms?: number;
    }

    /**
     * Upstreams are external MOQT server publishers that a relay falls back to when it
     * has no local publisher for a requested namespace/track.
     */
    export interface Upstreams {
      enabled?: boolean;

      /**
       * Ordered list of upstream MOQT server publishers. Each entry is an object (not a
       * bare string) so per-upstream configuration can be added in the future without
       * another breaking change.
       */
      upstreams?: Array<Upstreams.Upstream>;
    }

    export namespace Upstreams {
      /**
       * A single upstream MOQT server publisher.
       */
      export interface Upstream {
        /**
         * Upstream MOQT server publisher URL.
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
   * upstreams and lingering_subscribe are mutually exclusive.
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
   * upstreams and lingering_subscribe are mutually exclusive.
   */
  export interface Config {
    lingering_subscribe?: Config.LingeringSubscribe;

    /**
     * Upstreams are external MOQT server publishers that a relay falls back to when it
     * has no local publisher for a requested namespace/track.
     */
    upstreams?: Config.Upstreams;
  }

  export namespace Config {
    export interface LingeringSubscribe {
      enabled?: boolean;

      /**
       * Relay-level ceiling on lingering subscribe timeout (ms). Default 30000.
       */
      max_timeout_ms?: number;
    }

    /**
     * Upstreams are external MOQT server publishers that a relay falls back to when it
     * has no local publisher for a requested namespace/track.
     */
    export interface Upstreams {
      enabled?: boolean;

      /**
       * Ordered list of upstream MOQT server publishers. Each entry is an object (not a
       * bare string) so per-upstream configuration can be added in the future without
       * another breaking change.
       */
      upstreams?: Array<Upstreams.Upstream>;
    }

    export namespace Upstreams {
      /**
       * A single upstream MOQT server publisher.
       */
      export interface Upstream {
        /**
         * Upstream MOQT server publisher URL.
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
   * Body param: upstreams and lingering_subscribe are mutually exclusive.
   */
  config?: RelayUpdateParams.Config;

  /**
   * Body param
   */
  name?: string;
}

export namespace RelayUpdateParams {
  /**
   * upstreams and lingering_subscribe are mutually exclusive.
   */
  export interface Config {
    lingering_subscribe?: Config.LingeringSubscribe;

    /**
     * Upstreams are external MOQT server publishers that a relay falls back to when it
     * has no local publisher for a requested namespace/track.
     */
    upstreams?: Config.Upstreams;
  }

  export namespace Config {
    export interface LingeringSubscribe {
      enabled?: boolean;

      /**
       * Relay-level ceiling on lingering subscribe timeout (ms). Default 30000.
       */
      max_timeout_ms?: number;
    }

    /**
     * Upstreams are external MOQT server publishers that a relay falls back to when it
     * has no local publisher for a requested namespace/track.
     */
    export interface Upstreams {
      enabled?: boolean;

      /**
       * Ordered list of upstream MOQT server publishers. Each entry is an object (not a
       * bare string) so per-upstream configuration can be added in the future without
       * another breaking change.
       */
      upstreams?: Array<Upstreams.Upstream>;
    }

    export namespace Upstreams {
      /**
       * A single upstream MOQT server publisher.
       */
      export interface Upstream {
        /**
         * Upstream MOQT server publisher URL.
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

Relays.Tokens = Tokens;
Relays.BaseTokens = BaseTokens;

export declare namespace Relays {
  export {
    type RelayCreateResponse as RelayCreateResponse,
    type RelayUpdateResponse as RelayUpdateResponse,
    type RelayListResponse as RelayListResponse,
    type RelayDeleteResponse as RelayDeleteResponse,
    type RelayGetResponse as RelayGetResponse,
    type RelayListResponsesSinglePage as RelayListResponsesSinglePage,
    type RelayCreateParams as RelayCreateParams,
    type RelayUpdateParams as RelayUpdateParams,
    type RelayListParams as RelayListParams,
    type RelayDeleteParams as RelayDeleteParams,
    type RelayGetParams as RelayGetParams,
  };

  export {
    Tokens as Tokens,
    BaseTokens as BaseTokens,
    type TokenRotateResponse as TokenRotateResponse,
    type TokenRotateParams as TokenRotateParams,
  };
}
