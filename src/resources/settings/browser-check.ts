// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BrowserCheckAPI from 'cloudflare/resources/settings/browser-check';

export class BrowserCheck extends APIResource {
  /**
   * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP
   * headers abused most commonly by spammers and denies access to your page. It will
   * also challenge visitors that do not have a user agent or a non standard user
   * agent (also commonly used by abuse bots, crawlers or visitors).
   * (https://support.cloudflare.com/hc/en-us/articles/200170086).
   */
  edit(
    params: BrowserCheckEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserCheckEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/browser_check`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: BrowserCheckEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP
   * headers abused most commonly by spammers and denies access to your page. It will
   * also challenge visitors that do not have a user agent or a non standard user
   * agent (also commonly used by abuse bots, crawlers or visitors).
   * (https://support.cloudflare.com/hc/en-us/articles/200170086).
   */
  get(
    params: BrowserCheckGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrowserCheckGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/browser_check`, options) as Core.APIPromise<{
        result: BrowserCheckGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP
 * headers abused most commonly by spammers and denies access to your page. It will
 * also challenge visitors that do not have a user agent or a non standard user
 * agent (also commonly used by abuse bots, crawlers or visitors).
 * (https://support.cloudflare.com/hc/en-us/articles/200170086).
 */
export interface BrowserCheckEditResponse {
  /**
   * ID of the zone setting.
   */
  id: 'browser_check';

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
 * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP
 * headers abused most commonly by spammers and denies access to your page. It will
 * also challenge visitors that do not have a user agent or a non standard user
 * agent (also commonly used by abuse bots, crawlers or visitors).
 * (https://support.cloudflare.com/hc/en-us/articles/200170086).
 */
export interface BrowserCheckGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'browser_check';

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

export interface BrowserCheckEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface BrowserCheckGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace BrowserCheck {
  export import BrowserCheckEditResponse = BrowserCheckAPI.BrowserCheckEditResponse;
  export import BrowserCheckGetResponse = BrowserCheckAPI.BrowserCheckGetResponse;
  export import BrowserCheckEditParams = BrowserCheckAPI.BrowserCheckEditParams;
  export import BrowserCheckGetParams = BrowserCheckAPI.BrowserCheckGetParams;
}
