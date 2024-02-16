// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OriginErrorPagePassThruAPI from 'cloudflare/resources/settings/origin-error-page-pass-thru';

export class OriginErrorPagePassThru extends APIResource {
  /**
   * Cloudflare will proxy customer error pages on any 502,504 errors on origin
   * server instead of showing a default Cloudflare error page. This does not apply
   * to 522 errors and is limited to Enterprise Zones.
   */
  update(
    zoneId: string,
    body: OriginErrorPagePassThruUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OriginErrorPagePassThruUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/origin_error_page_pass_thru`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OriginErrorPagePassThruUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Cloudflare will proxy customer error pages on any 502,504 errors on origin
   * server instead of showing a default Cloudflare error page. This does not apply
   * to 522 errors and is limited to Enterprise Zones.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<OriginErrorPagePassThruGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/origin_error_page_pass_thru`, options) as Core.APIPromise<{
        result: OriginErrorPagePassThruGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Cloudflare will proxy customer error pages on any 502,504 errors on origin
 * server instead of showing a default Cloudflare error page. This does not apply
 * to 522 errors and is limited to Enterprise Zones.
 */
export interface OriginErrorPagePassThruUpdateResponse {
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

/**
 * Cloudflare will proxy customer error pages on any 502,504 errors on origin
 * server instead of showing a default Cloudflare error page. This does not apply
 * to 522 errors and is limited to Enterprise Zones.
 */
export interface OriginErrorPagePassThruGetResponse {
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

export interface OriginErrorPagePassThruUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace OriginErrorPagePassThru {
  export import OriginErrorPagePassThruUpdateResponse = OriginErrorPagePassThruAPI.OriginErrorPagePassThruUpdateResponse;
  export import OriginErrorPagePassThruGetResponse = OriginErrorPagePassThruAPI.OriginErrorPagePassThruGetResponse;
  export import OriginErrorPagePassThruUpdateParams = OriginErrorPagePassThruAPI.OriginErrorPagePassThruUpdateParams;
}
