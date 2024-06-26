// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as WebsocketAPI from './websocket';

export class WebsocketResource extends APIResource {}

/**
 * WebSockets are open connections sustained between the client and the origin
 * server. Inside a WebSockets connection, the client and the origin can pass data
 * back and forth without having to reestablish sessions. This makes exchanging
 * data within a WebSockets connection fast. WebSockets are often used for
 * real-time applications such as live chat and gaming. For more information refer
 * to
 * [Can I use Cloudflare with Websockets](https://support.cloudflare.com/hc/en-us/articles/200169466-Can-I-use-Cloudflare-with-WebSockets-).
 */
export interface Websocket {
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

export namespace WebsocketResource {
  export import Websocket = WebsocketAPI.Websocket;
}
