// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PskGeneratesAPI from 'cloudflare/resources/magics/ipsec-tunnels/psk-generates';

export class PskGenerates extends APIResource {
  /**
   * Generates a Pre Shared Key for a specific IPsec tunnel used in the IKE session.
   * Use `?validate_only=true` as an optional query parameter to only run validation
   * without persisting changes. After a PSK is generated, the PSK is immediately
   * persisted to Cloudflare's edge and cannot be retrieved later. Note the PSK in a
   * safe place.
   */
  create(
    accountIdentifier: string,
    tunnelIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PskGenerateCreateResponse> {
    return (
      this._client.post(
        `/accounts/${accountIdentifier}/magic/ipsec_tunnels/${tunnelIdentifier}/psk_generate`,
        options,
      ) as Core.APIPromise<{ result: PskGenerateCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PskGenerateCreateResponse {
  /**
   * Identifier
   */
  ipsec_tunnel_id?: string;

  /**
   * A randomly generated or provided string for use in the IPsec tunnel.
   */
  psk?: string;

  /**
   * The PSK metadata that includes when the PSK was generated.
   */
  psk_metadata?: PskGenerateCreateResponse.PskMetadata;
}

export namespace PskGenerateCreateResponse {
  /**
   * The PSK metadata that includes when the PSK was generated.
   */
  export interface PskMetadata {
    /**
     * The date and time the tunnel was last modified.
     */
    last_generated_on?: string;
  }
}

export namespace PskGenerates {
  export import PskGenerateCreateResponse = PskGeneratesAPI.PskGenerateCreateResponse;
}
