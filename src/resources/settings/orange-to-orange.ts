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
    zoneId: string,
    body: OrangeToOrangeEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrangeToOrangeEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/orange_to_orange`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OrangeToOrangeEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<OrangeToOrangeGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/orange_to_orange`, options) as Core.APIPromise<{
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
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
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

export namespace OrangeToOrange {
  export import OrangeToOrangeEditResponse = OrangeToOrangeAPI.OrangeToOrangeEditResponse;
  export import OrangeToOrangeGetResponse = OrangeToOrangeAPI.OrangeToOrangeGetResponse;
  export import OrangeToOrangeEditParams = OrangeToOrangeAPI.OrangeToOrangeEditParams;
}
