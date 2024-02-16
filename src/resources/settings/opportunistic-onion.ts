// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OpportunisticOnionAPI from 'cloudflare/resources/settings/opportunistic-onion';

export class OpportunisticOnion extends APIResource {
  /**
   * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
   * connection to use our onion services instead of exit nodes.
   */
  update(
    zoneId: string,
    body: OpportunisticOnionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OpportunisticOnionUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/opportunistic_onion`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OpportunisticOnionUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
   * connection to use our onion services instead of exit nodes.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<OpportunisticOnionGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/opportunistic_onion`, options) as Core.APIPromise<{
        result: OpportunisticOnionGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
 * connection to use our onion services instead of exit nodes.
 */
export interface OpportunisticOnionUpdateResponse {
  /**
   * ID of the zone setting.
   */
  id: 'opportunistic_onion';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

/**
 * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
 * connection to use our onion services instead of exit nodes.
 */
export interface OpportunisticOnionGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'opportunistic_onion';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface OpportunisticOnionUpdateParams {
  /**
   * Value of the zone setting. Notes: Default value depends on the zone's plan
   * level.
   */
  value: 'on' | 'off';
}

export namespace OpportunisticOnion {
  export import OpportunisticOnionUpdateResponse = OpportunisticOnionAPI.OpportunisticOnionUpdateResponse;
  export import OpportunisticOnionGetResponse = OpportunisticOnionAPI.OpportunisticOnionGetResponse;
  export import OpportunisticOnionUpdateParams = OpportunisticOnionAPI.OpportunisticOnionUpdateParams;
}
