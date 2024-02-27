// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PSKGeneratesAPI from 'cloudflare/resources/magic-transit/ipsec-tunnels/psk-generates';

export class PSKGenerates extends APIResource {
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
  ): Core.APIPromise<PSKGenerateCreateResponse> {
    return (
      this._client.post(
        `/accounts/${accountIdentifier}/magic/ipsec_tunnels/${tunnelIdentifier}/psk_generate`,
        options,
      ) as Core.APIPromise<{ result: PSKGenerateCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PSKGenerateCreateResponse {
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
  psk_metadata?: PSKGenerateCreateResponse.PSKMetadata;
}

export namespace PSKGenerateCreateResponse {
  /**
   * The PSK metadata that includes when the PSK was generated.
   */
  export interface PSKMetadata {
    /**
     * The date and time the tunnel was last modified.
     */
    last_generated_on?: string;
  }
}

export namespace PSKGenerates {
  export import PSKGenerateCreateResponse = PSKGeneratesAPI.PSKGenerateCreateResponse;
}
