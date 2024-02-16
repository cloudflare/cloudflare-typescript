// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OrangeToOrangeAPI from 'cloudflare/resources/settings/orange-to-orange';

export class OrangeToOrange extends APIResource {
  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  update(
    zoneId: string,
    body: OrangeToOrangeUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrangeToOrangeUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/orange_to_orange`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OrangeToOrangeUpdateResponse }>
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
export interface OrangeToOrangeUpdateResponse {
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

export interface OrangeToOrangeUpdateParams {
  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  value: OrangeToOrangeUpdateParams.Value;
}

export namespace OrangeToOrangeUpdateParams {
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
  export import OrangeToOrangeUpdateResponse = OrangeToOrangeAPI.OrangeToOrangeUpdateResponse;
  export import OrangeToOrangeGetResponse = OrangeToOrangeAPI.OrangeToOrangeGetResponse;
  export import OrangeToOrangeUpdateParams = OrangeToOrangeAPI.OrangeToOrangeUpdateParams;
}
