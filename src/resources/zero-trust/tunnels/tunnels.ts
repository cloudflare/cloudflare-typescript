// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CloudflaredAPI from './cloudflared/cloudflared';
import { BaseCloudflared, Cloudflared } from './cloudflared/cloudflared';
import * as WARPConnectorAPI from './warp-connector/warp-connector';
import { BaseWARPConnector, WARPConnector } from './warp-connector/warp-connector';

export class BaseTunnels extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'tunnels'] = Object.freeze([
    'zeroTrust',
    'tunnels',
  ] as const);
}
export class Tunnels extends BaseTunnels {
  cloudflared: CloudflaredAPI.Cloudflared = new CloudflaredAPI.Cloudflared(this._client);
  warpConnector: WARPConnectorAPI.WARPConnector = new WARPConnectorAPI.WARPConnector(this._client);
}

Tunnels.Cloudflared = Cloudflared;
Tunnels.BaseCloudflared = BaseCloudflared;
Tunnels.WARPConnector = WARPConnector;
Tunnels.BaseWARPConnector = BaseWARPConnector;

export declare namespace Tunnels {
  export { Cloudflared as Cloudflared, BaseCloudflared as BaseCloudflared };

  export { WARPConnector as WARPConnector, BaseWARPConnector as BaseWARPConnector };
}
