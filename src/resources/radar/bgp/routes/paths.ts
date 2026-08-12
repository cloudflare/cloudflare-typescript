// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BasePaths extends APIResource {
  static override readonly _key: readonly ['radar', 'bgp', 'routes', 'paths'] = Object.freeze([
    'radar',
    'bgp',
    'routes',
    'paths',
  ] as const);

  /**
   * Retrieves the paths an AS uses to reach the tier-1 clique, derived from
   * RouteViews RIB snapshots. Each entry is an ordered AS-path segment (from the
   * queried AS toward a tier-1) with the number of observed paths and peers, and the
   * collectors that observed it. By default segments are merged across all active
   * collectors; pass "collector" to scope to one. The response also includes an
   * "asnInfo" map (keyed by ASN) with the name and country for every ASN in the
   * returned segments plus the queried ASN (best-effort; null when unavailable).
   *
   * @example
   * ```ts
   * const paths = await client.radar.bgp.routes.paths.list(174);
   * ```
   */
  list(
    asn: number,
    query: PathListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PathListResponse> {
    return (
      this._client.get(path`/radar/bgp/routes/paths/${asn}`, { query, ...options }) as APIPromise<{
        result: PathListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Paths extends BasePaths {}

export interface PathListResponse {
  asnInfo: { [key: string]: PathListResponse.ASNInfo } | null;

  collectors: Array<string>;

  meta: PathListResponse.Meta;

  paths: Array<PathListResponse.Path>;
}

export namespace PathListResponse {
  export interface ASNInfo {
    /**
     * ASN number.
     */
    asn: number;

    /**
     * Alpha-2 country code.
     */
    country: string | null;

    /**
     * AS name.
     */
    name: string | null;
  }

  export interface Meta {
    /**
     * Timestamp of the underlying RIB data.
     */
    dataTime: string | null;

    effectiveCollector: string | null;

    /**
     * Timestamp when the query was executed.
     */
    queryTime: string | null;

    stale: boolean;
  }

  export interface Path {
    collectors: Array<string>;

    pathsCount: number;

    peersCount: number;

    segment: Array<number>;
  }
}

export interface PathListParams {
  /**
   * Scope to a single RouteViews collector (e.g. "route-views3"). Omit to merge
   * across all active collectors (identical path segments are deduplicated,
   * observation counts summed, and every contributing collector listed).
   */
  collector?: string;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Address family of the observed paths. Defaults to IPv4.
   */
  ipVersion?: 'IPv4' | 'IPv6';
}

export declare namespace Paths {
  export { type PathListResponse as PathListResponse, type PathListParams as PathListParams };
}
