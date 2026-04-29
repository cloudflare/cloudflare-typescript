// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as CloudflaredAPI from './cloudflared/cloudflared';
import { Cloudflared } from './cloudflared/cloudflared';
import * as WARPConnectorAPI from './warp-connector/warp-connector';
import { WARPConnector } from './warp-connector/warp-connector';

export class Tunnels extends APIResource {
  cloudflared: CloudflaredAPI.Cloudflared = new CloudflaredAPI.Cloudflared(this._client);
  warpConnector: WARPConnectorAPI.WARPConnector = new WARPConnectorAPI.WARPConnector(this._client);
}

Tunnels.Cloudflared = Cloudflared;
Tunnels.WARPConnector = WARPConnector;

export declare namespace Tunnels {
  export { Cloudflared as Cloudflared };

  export { WARPConnector as WARPConnector };
}
