// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WebsocketAPI from 'cloudflare/resources/zones/settings/websocket';

export class Websocket extends APIResource {
  /**
   * Changes Websockets setting. For more information about Websockets, please refer
   * to
   * [Using Cloudflare with WebSockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Using-Cloudflare-with-WebSockets).
   */
  edit(params: WebsocketEditParams, options?: Core.RequestOptions): Core.APIPromise<ZonesWebsockets> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/websockets`, { body, ...options }) as Core.APIPromise<{
        result: ZonesWebsockets;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets Websockets setting. For more information about Websockets, please refer to
   * [Using Cloudflare with WebSockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Using-Cloudflare-with-WebSockets).
   */
  get(params: WebsocketGetParams, options?: Core.RequestOptions): Core.APIPromise<ZonesWebsockets> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/websockets`, options) as Core.APIPromise<{
        result: ZonesWebsockets;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * WebSockets are open connections sustained between the client and the origin
 * server. Inside a WebSockets connection, the client and the origin can pass data
 * back and forth without having to reestablish sessions. This makes exchanging
 * data within a WebSockets connection fast. WebSockets are often used for
 * real-time applications such as live chat and gaming. For more information refer
 * to
 * [Can I use Cloudflare with Websockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Can-I-use-Cloudflare-with-WebSockets-).
 */
export interface ZonesWebsockets {
  /**
   * ID of the zone setting.
   */
  id: 'websockets';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'on';

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

export interface WebsocketEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'off' | 'on';
}

export interface WebsocketGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Websocket {
  export import ZonesWebsockets = WebsocketAPI.ZonesWebsockets;
  export import WebsocketEditParams = WebsocketAPI.WebsocketEditParams;
  export import WebsocketGetParams = WebsocketAPI.WebsocketGetParams;
}
