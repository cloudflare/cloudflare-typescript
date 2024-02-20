// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ChallengeTTLAPI from 'cloudflare/resources/settings/challenge-ttl';

export class ChallengeTTL extends APIResource {
  /**
   * Specify how long a visitor is allowed access to your site after successfully
   * completing a challenge (such as a CAPTCHA). After the TTL has expired the
   * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
   * setting and will attempt to honor any setting above 45 minutes.
   * (https://support.cloudflare.com/hc/en-us/articles/200170136).
   */
  edit(
    zoneId: string,
    body: ChallengeTTLEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChallengeTTLEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/challenge_ttl`, { body, ...options }) as Core.APIPromise<{
        result: ChallengeTTLEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Specify how long a visitor is allowed access to your site after successfully
   * completing a challenge (such as a CAPTCHA). After the TTL has expired the
   * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
   * setting and will attempt to honor any setting above 45 minutes.
   * (https://support.cloudflare.com/hc/en-us/articles/200170136).
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<ChallengeTTLGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/challenge_ttl`, options) as Core.APIPromise<{
        result: ChallengeTTLGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Specify how long a visitor is allowed access to your site after successfully
 * completing a challenge (such as a CAPTCHA). After the TTL has expired the
 * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
 * setting and will attempt to honor any setting above 45 minutes.
 * (https://support.cloudflare.com/hc/en-us/articles/200170136).
 */
export interface ChallengeTTLEditResponse {
  /**
   * ID of the zone setting.
   */
  id: 'challenge_ttl';

  /**
   * Current value of the zone setting.
   */
  value:
    | 300
    | 900
    | 1800
    | 2700
    | 3600
    | 7200
    | 10800
    | 14400
    | 28800
    | 57600
    | 86400
    | 604800
    | 2592000
    | 31536000;

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
 * Specify how long a visitor is allowed access to your site after successfully
 * completing a challenge (such as a CAPTCHA). After the TTL has expired the
 * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
 * setting and will attempt to honor any setting above 45 minutes.
 * (https://support.cloudflare.com/hc/en-us/articles/200170136).
 */
export interface ChallengeTTLGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'challenge_ttl';

  /**
   * Current value of the zone setting.
   */
  value:
    | 300
    | 900
    | 1800
    | 2700
    | 3600
    | 7200
    | 10800
    | 14400
    | 28800
    | 57600
    | 86400
    | 604800
    | 2592000
    | 31536000;

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

export interface ChallengeTTLEditParams {
  /**
   * Value of the zone setting.
   */
  value:
    | 300
    | 900
    | 1800
    | 2700
    | 3600
    | 7200
    | 10800
    | 14400
    | 28800
    | 57600
    | 86400
    | 604800
    | 2592000
    | 31536000;
}

export namespace ChallengeTTL {
  export import ChallengeTTLEditResponse = ChallengeTTLAPI.ChallengeTTLEditResponse;
  export import ChallengeTTLGetResponse = ChallengeTTLAPI.ChallengeTTLGetResponse;
  export import ChallengeTTLEditParams = ChallengeTTLAPI.ChallengeTTLEditParams;
}
