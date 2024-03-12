// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OpportunisticOnionAPI from 'cloudflare/resources/zones/settings/opportunistic-onion';

export class OpportunisticOnion extends APIResource {
  /**
   * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
   * connection to use our onion services instead of exit nodes.
   */
  edit(
    params: OpportunisticOnionEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZonesOpportunisticOnion> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/opportunistic_onion`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZonesOpportunisticOnion }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
   * connection to use our onion services instead of exit nodes.
   */
  get(
    params: OpportunisticOnionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZonesOpportunisticOnion> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/opportunistic_onion`, options) as Core.APIPromise<{
        result: ZonesOpportunisticOnion;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Add an Alt-Svc header to all legitimate requests from Tor, allowing the
 * connection to use our onion services instead of exit nodes.
 */
export interface ZonesOpportunisticOnion {
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

export interface OpportunisticOnionEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting. Notes: Default value depends on the
   * zone's plan level.
   */
  value: 'on' | 'off';
}

export interface OpportunisticOnionGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace OpportunisticOnion {
  export import ZonesOpportunisticOnion = OpportunisticOnionAPI.ZonesOpportunisticOnion;
  export import OpportunisticOnionEditParams = OpportunisticOnionAPI.OpportunisticOnionEditParams;
  export import OpportunisticOnionGetParams = OpportunisticOnionAPI.OpportunisticOnionGetParams;
}
