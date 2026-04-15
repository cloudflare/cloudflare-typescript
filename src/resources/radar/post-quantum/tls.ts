// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseTLS extends APIResource {
  static override readonly _key: readonly ['radar', 'postQuantum', 'tls'] = Object.freeze([
    'radar',
    'postQuantum',
    'tls',
  ] as const);

  /**
   * Tests whether a hostname or IP address supports Post-Quantum (PQ) TLS key
   * exchange. Returns information about the negotiated key exchange algorithm and
   * whether it uses PQ cryptography.
   *
   * @example
   * ```ts
   * const response = await client.radar.postQuantum.tls.support(
   *   { host: 'cloudflare.com' },
   * );
   * ```
   */
  support(query: TLSSupportParams, options?: RequestOptions): APIPromise<TLSSupportResponse> {
    return (
      this._client.get('/radar/post_quantum/tls/support', { query, ...options }) as APIPromise<{
        result: TLSSupportResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class TLS extends BaseTLS {}

export interface TLSSupportResponse {
  /**
   * The host that was tested
   */
  host: string;

  /**
   * TLS CurveID of the negotiated key exchange
   */
  kex: number;

  /**
   * Human-readable name of the key exchange algorithm
   */
  kexName: string;

  /**
   * Whether the negotiated key exchange uses Post-Quantum cryptography
   */
  pq: boolean;
}

export interface TLSSupportParams {
  /**
   * Hostname or IP address to test for Post-Quantum TLS support, optionally with
   * port (defaults to 443).
   */
  host: string;
}

export declare namespace TLS {
  export { type TLSSupportResponse as TLSSupportResponse, type TLSSupportParams as TLSSupportParams };
}
