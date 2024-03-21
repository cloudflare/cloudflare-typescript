// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/magic-network-monitoring/configs/configs';
import * as FullAPI from 'cloudflare/resources/magic-network-monitoring/configs/full';

export class Configs extends APIResource {
  full: FullAPI.Full = new FullAPI.Full(this._client);
}

export interface MagicVisibilityMNMConfig {
  /**
   * Fallback sampling rate of flow messages being sent in packets per second. This
   * should match the packet sampling rate configured on the router.
   */
  default_sampling: number;

  /**
   * The account name.
   */
  name: string;

  router_ips: Array<string>;
}

export namespace Configs {
  export import MagicVisibilityMNMConfig = ConfigsAPI.MagicVisibilityMNMConfig;
  export import Full = FullAPI.Full;
}
