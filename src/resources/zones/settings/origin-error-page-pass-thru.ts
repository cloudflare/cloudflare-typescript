// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OriginErrorPagePassThruAPI from 'cloudflare/resources/zones/settings/origin-error-page-pass-thru';

export class OriginErrorPagePassThruResource extends APIResource {
  /**
   * Cloudflare will proxy customer error pages on any 502,504 errors on origin
   * server instead of showing a default Cloudflare error page. This does not apply
   * to 522 errors and is limited to Enterprise Zones.
   */
  edit(
    params: OriginErrorPagePassThruEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginErrorPagePassThru> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/origin_error_page_pass_thru`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OriginErrorPagePassThru }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Cloudflare will proxy customer error pages on any 502,504 errors on origin
   * server instead of showing a default Cloudflare error page. This does not apply
   * to 522 errors and is limited to Enterprise Zones.
   */
  get(
    params: OriginErrorPagePassThruGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginErrorPagePassThru> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/origin_error_page_pass_thru`, options) as Core.APIPromise<{
        result: OriginErrorPagePassThru;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Cloudflare will proxy customer error pages on any 502,504 errors on origin
 * server instead of showing a default Cloudflare error page. This does not apply
 * to 522 errors and is limited to Enterprise Zones.
 */
export interface OriginErrorPagePassThru {
  /**
   * ID of the zone setting.
   */
  id: 'origin_error_page_pass_thru';

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

export interface OriginErrorPagePassThruEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface OriginErrorPagePassThruGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace OriginErrorPagePassThruResource {
  export import OriginErrorPagePassThru = OriginErrorPagePassThruAPI.OriginErrorPagePassThru;
  export import OriginErrorPagePassThruEditParams = OriginErrorPagePassThruAPI.OriginErrorPagePassThruEditParams;
  export import OriginErrorPagePassThruGetParams = OriginErrorPagePassThruAPI.OriginErrorPagePassThruGetParams;
}
