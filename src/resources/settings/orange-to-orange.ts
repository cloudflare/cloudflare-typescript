// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OrangeToOrangeAPI from 'cloudflare/resources/settings/orange-to-orange';

export class OrangeToOrange extends APIResource {
  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  edit(
    params: OrangeToOrangeEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrangeToOrangeEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/orange_to_orange`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OrangeToOrangeEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  get(
    params: OrangeToOrangeGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrangeToOrangeGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/orange_to_orange`, options) as Core.APIPromise<{
        result: OrangeToOrangeGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
 * on Cloudflare.
 */
export interface OrangeToOrangeEditResponse {
  /**
   * ID of the zone setting.
   */
  id: 'orange_to_orange';

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
 * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
 * on Cloudflare.
 */
export interface OrangeToOrangeGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'orange_to_orange';

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

export interface OrangeToOrangeEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other
   * zones also on Cloudflare.
   */
  value: OrangeToOrangeEditParams.Value;
}

export namespace OrangeToOrangeEditParams {
  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  export interface Value {
    /**
     * ID of the zone setting.
     */
    id: 'orange_to_orange';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }
}

export interface OrangeToOrangeGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace OrangeToOrange {
  export import OrangeToOrangeEditResponse = OrangeToOrangeAPI.OrangeToOrangeEditResponse;
  export import OrangeToOrangeGetResponse = OrangeToOrangeAPI.OrangeToOrangeGetResponse;
  export import OrangeToOrangeEditParams = OrangeToOrangeAPI.OrangeToOrangeEditParams;
  export import OrangeToOrangeGetParams = OrangeToOrangeAPI.OrangeToOrangeGetParams;
}
