// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WAFAPI from 'cloudflare/resources/settings/waf';

export class WAF extends APIResource {
  /**
   * The WAF examines HTTP requests to your website. It inspects both GET and POST
   * requests and applies rules to help filter out illegitimate traffic from
   * legitimate website visitors. The Cloudflare WAF inspects website addresses or
   * URLs to detect anything out of the ordinary. If the Cloudflare WAF determines
   * suspicious user behavior, then the WAF will 'challenge' the web visitor with a
   * page that asks them to submit a CAPTCHA successfully to continue their action.
   * If the challenge is failed, the action will be stopped. What this means is that
   * Cloudflare's WAF will block any traffic identified as illegitimate before it
   * reaches your origin web server.
   * (https://support.cloudflare.com/hc/en-us/articles/200172016).
   */
  update(
    zoneId: string,
    body: WAFUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WAFUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/waf`, { body, ...options }) as Core.APIPromise<{
        result: WAFUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * The WAF examines HTTP requests to your website. It inspects both GET and POST
   * requests and applies rules to help filter out illegitimate traffic from
   * legitimate website visitors. The Cloudflare WAF inspects website addresses or
   * URLs to detect anything out of the ordinary. If the Cloudflare WAF determines
   * suspicious user behavior, then the WAF will 'challenge' the web visitor with a
   * page that asks them to submit a CAPTCHA successfully to continue their action.
   * If the challenge is failed, the action will be stopped. What this means is that
   * Cloudflare's WAF will block any traffic identified as illegitimate before it
   * reaches your origin web server.
   * (https://support.cloudflare.com/hc/en-us/articles/200172016).
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<WAFGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/waf`, options) as Core.APIPromise<{
        result: WAFGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The WAF examines HTTP requests to your website. It inspects both GET and POST
 * requests and applies rules to help filter out illegitimate traffic from
 * legitimate website visitors. The Cloudflare WAF inspects website addresses or
 * URLs to detect anything out of the ordinary. If the Cloudflare WAF determines
 * suspicious user behavior, then the WAF will 'challenge' the web visitor with a
 * page that asks them to submit a CAPTCHA successfully to continue their action.
 * If the challenge is failed, the action will be stopped. What this means is that
 * Cloudflare's WAF will block any traffic identified as illegitimate before it
 * reaches your origin web server.
 * (https://support.cloudflare.com/hc/en-us/articles/200172016).
 */
export interface WAFUpdateResponse {
  /**
   * ID of the zone setting.
   */
  id: 'waf';

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
 * The WAF examines HTTP requests to your website. It inspects both GET and POST
 * requests and applies rules to help filter out illegitimate traffic from
 * legitimate website visitors. The Cloudflare WAF inspects website addresses or
 * URLs to detect anything out of the ordinary. If the Cloudflare WAF determines
 * suspicious user behavior, then the WAF will 'challenge' the web visitor with a
 * page that asks them to submit a CAPTCHA successfully to continue their action.
 * If the challenge is failed, the action will be stopped. What this means is that
 * Cloudflare's WAF will block any traffic identified as illegitimate before it
 * reaches your origin web server.
 * (https://support.cloudflare.com/hc/en-us/articles/200172016).
 */
export interface WAFGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'waf';

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

export interface WAFUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace WAF {
  export import WAFUpdateResponse = WAFAPI.WAFUpdateResponse;
  export import WAFGetResponse = WAFAPI.WAFGetResponse;
  export import WAFUpdateParams = WAFAPI.WAFUpdateParams;
}
