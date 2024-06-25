// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as OrangeToOrangeAPI from './orange-to-orange';

export class OrangeToOrangeResource extends APIResource {
  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  edit(params: OrangeToOrangeEditParams, options?: Core.RequestOptions): Core.APIPromise<OrangeToOrange> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/orange_to_orange`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OrangeToOrange }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
   * on Cloudflare.
   */
  get(params: OrangeToOrangeGetParams, options?: Core.RequestOptions): Core.APIPromise<OrangeToOrange> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/orange_to_orange`, options) as Core.APIPromise<{
        result: OrangeToOrange;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Orange to Orange (O2O) allows zones on Cloudflare to CNAME to other zones also
 * on Cloudflare.
 */
export interface OrangeToOrange {
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
export interface OrangeToOrangeParam {
  /**
   * ID of the zone setting.
   */
  id: 'orange_to_orange';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';
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
  value: OrangeToOrangeParam;
}

export interface OrangeToOrangeGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace OrangeToOrangeResource {
  export import OrangeToOrange = OrangeToOrangeAPI.OrangeToOrange;
  export import OrangeToOrangeEditParams = OrangeToOrangeAPI.OrangeToOrangeEditParams;
  export import OrangeToOrangeGetParams = OrangeToOrangeAPI.OrangeToOrangeGetParams;
}
