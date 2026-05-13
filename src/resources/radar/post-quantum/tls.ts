// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class TLS extends APIResource {
  /**
   * Tests whether a hostname or IP address supports Post-Quantum (PQ) TLS key
   * exchange. Returns information about the negotiated key exchange algorithm,
   * whether it uses PQ cryptography, and any detected TLS implementation bugs (Split
   * ClientHello, HRR failure, etc.).
   *
   * @example
   * ```ts
   * const response = await client.radar.postQuantum.tls.support(
   *   { host: 'cloudflare.com' },
   * );
   * ```
   */
  support(query: TLSSupportParams, options?: Core.RequestOptions): Core.APIPromise<TLSSupportResponse> {
    return (
      this._client.get('/radar/post_quantum/tls/support', { query, ...options }) as Core.APIPromise<{
        result: TLSSupportResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TLSSupportResponse {
  bugs: TLSSupportResponse.Bugs;

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
   * Whether the negotiated key exchange uses Post-Quantum cryptography (specifically
   * X25519MLKEM768)
   */
  pq: boolean;
}

export namespace TLSSupportResponse {
  export interface Bugs {
    /**
     * Server sends a HelloRetryRequest but fails to complete the handshake after the
     * client sends the second ClientHello. Often caused by non-compliant TLS 1.3
     * implementations on shared hosting providers.
     */
    hrrFailure: boolean;

    /**
     * Server rejects fragmented ClientHello caused by large PQ keyshare, but accepts
     * classical (non-PQ) handshakes. Typically caused by middleboxes or firewalls that
     * cannot reassemble split TLS ClientHello messages.
     */
    splitClientHello: boolean;

    /**
     * Server cannot handle an unknown key exchange algorithm in the ClientHello
     * keyshare extension. Compliant servers should respond with HelloRetryRequest for
     * a supported algorithm.
     */
    unknownKeyshare: boolean;
  }
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
