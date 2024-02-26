// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ResponseBufferingAPI from 'cloudflare/resources/settings/response-buffering';

export class ResponseBuffering extends APIResource {
  /**
   * Enables or disables buffering of responses from the proxied server. Cloudflare
   * may buffer the whole payload to deliver it at once to the client versus allowing
   * it to be delivered in chunks. By default, the proxied server streams directly
   * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
   */
  edit(
    params: ResponseBufferingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResponseBufferingEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/response_buffering`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ResponseBufferingEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enables or disables buffering of responses from the proxied server. Cloudflare
   * may buffer the whole payload to deliver it at once to the client versus allowing
   * it to be delivered in chunks. By default, the proxied server streams directly
   * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
   */
  get(
    params: ResponseBufferingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ResponseBufferingGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/response_buffering`, options) as Core.APIPromise<{
        result: ResponseBufferingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Enables or disables buffering of responses from the proxied server. Cloudflare
 * may buffer the whole payload to deliver it at once to the client versus allowing
 * it to be delivered in chunks. By default, the proxied server streams directly
 * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
 */
export interface ResponseBufferingEditResponse {
  /**
   * ID of the zone setting.
   */
  id: 'response_buffering';

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
 * Enables or disables buffering of responses from the proxied server. Cloudflare
 * may buffer the whole payload to deliver it at once to the client versus allowing
 * it to be delivered in chunks. By default, the proxied server streams directly
 * and is not buffered by Cloudflare. This is limited to Enterprise Zones.
 */
export interface ResponseBufferingGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'response_buffering';

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

export interface ResponseBufferingEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface ResponseBufferingGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace ResponseBuffering {
  export import ResponseBufferingEditResponse = ResponseBufferingAPI.ResponseBufferingEditResponse;
  export import ResponseBufferingGetResponse = ResponseBufferingAPI.ResponseBufferingGetResponse;
  export import ResponseBufferingEditParams = ResponseBufferingAPI.ResponseBufferingEditParams;
  export import ResponseBufferingGetParams = ResponseBufferingAPI.ResponseBufferingGetParams;
}
