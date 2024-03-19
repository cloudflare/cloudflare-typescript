// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AutomaticHTTPSRewritesAPI from 'cloudflare/resources/zones/settings/automatic-https-rewrites';

export class AutomaticHTTPSRewrites extends APIResource {
  /**
   * Enable the Automatic HTTPS Rewrites feature for this zone.
   */
  edit(
    params: AutomaticHTTPSRewriteEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZonesAutomaticHTTPSRewrites> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/automatic_https_rewrites`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZonesAutomaticHTTPSRewrites }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable the Automatic HTTPS Rewrites feature for this zone.
   */
  get(
    params: AutomaticHTTPSRewriteGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZonesAutomaticHTTPSRewrites> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/automatic_https_rewrites`, options) as Core.APIPromise<{
        result: ZonesAutomaticHTTPSRewrites;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Enable the Automatic HTTPS Rewrites feature for this zone.
 */
export interface ZonesAutomaticHTTPSRewrites {
  /**
   * ID of the zone setting.
   */
  id: 'automatic_https_rewrites';

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

export interface AutomaticHTTPSRewriteEditParams {
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

export interface AutomaticHTTPSRewriteGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace AutomaticHTTPSRewrites {
  export import ZonesAutomaticHTTPSRewrites = AutomaticHTTPSRewritesAPI.ZonesAutomaticHTTPSRewrites;
  export import AutomaticHTTPSRewriteEditParams = AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewriteEditParams;
  export import AutomaticHTTPSRewriteGetParams = AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewriteGetParams;
}
