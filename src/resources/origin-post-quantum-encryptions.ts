// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OriginPostQuantumEncryptionsAPI from 'cloudflare/resources/origin-post-quantum-encryptions';

export class OriginPostQuantumEncryptions extends APIResource {
  /**
   * Instructs Cloudflare to use Post-Quantum (PQ) key agreement algorithms when
   * connecting to your origin. Preferred instructs Cloudflare to opportunistically
   * send a Post-Quantum keyshare in the first message to the origin (for fastest
   * connections when the origin supports and prefers PQ), supported means that PQ
   * algorithms are advertised but only used when requested by the origin, and off
   * means that PQ algorithms are not advertised
   */
  retrieve(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginPostQuantumEncryptionRetrieveResponse> {
    return (
      this._client.get(`/zones/${zoneId}/cache/origin_post_quantum_encryption`, options) as Core.APIPromise<{
        result: OriginPostQuantumEncryptionRetrieveResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Instructs Cloudflare to use Post-Quantum (PQ) key agreement algorithms when
   * connecting to your origin. Preferred instructs Cloudflare to opportunistically
   * send a Post-Quantum keyshare in the first message to the origin (for fastest
   * connections when the origin supports and prefers PQ), supported means that PQ
   * algorithms are advertised but only used when requested by the origin, and off
   * means that PQ algorithms are not advertised
   */
  update(
    zoneId: string,
    body: OriginPostQuantumEncryptionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginPostQuantumEncryptionUpdateResponse> {
    return (
      this._client.put(`/zones/${zoneId}/cache/origin_post_quantum_encryption`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OriginPostQuantumEncryptionUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type OriginPostQuantumEncryptionRetrieveResponse = unknown | string | null;

export type OriginPostQuantumEncryptionUpdateResponse = unknown | string | null;

export interface OriginPostQuantumEncryptionUpdateParams {
  /**
   * Value of the Origin Post Quantum Encryption Setting.
   */
  value: 'preferred' | 'supported' | 'off';
}

export namespace OriginPostQuantumEncryptions {
  export import OriginPostQuantumEncryptionRetrieveResponse = OriginPostQuantumEncryptionsAPI.OriginPostQuantumEncryptionRetrieveResponse;
  export import OriginPostQuantumEncryptionUpdateResponse = OriginPostQuantumEncryptionsAPI.OriginPostQuantumEncryptionUpdateResponse;
  export import OriginPostQuantumEncryptionUpdateParams = OriginPostQuantumEncryptionsAPI.OriginPostQuantumEncryptionUpdateParams;
}
