// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CloudflareSourceAPI from './cloudflare-source';
import { BaseCloudflareSource, CloudflareSource } from './cloudflare-source';
import * as WARPAPI from './warp';
import { BaseWARP, WARP } from './warp';

export class BaseSubnets extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'networks', 'subnets'] = Object.freeze([
    'zeroTrust',
    'networks',
    'subnets',
  ] as const);
}
export class Subnets extends BaseSubnets {
  warp: WARPAPI.WARP = new WARPAPI.WARP(this._client);
  cloudflareSource: CloudflareSourceAPI.CloudflareSource = new CloudflareSourceAPI.CloudflareSource(
    this._client,
  );
}

Subnets.WARP = WARP;
Subnets.BaseWARP = BaseWARP;
Subnets.CloudflareSource = CloudflareSource;
Subnets.BaseCloudflareSource = BaseCloudflareSource;

export declare namespace Subnets {
  export { WARP as WARP, BaseWARP as BaseWARP };

  export { CloudflareSource as CloudflareSource, BaseCloudflareSource as BaseCloudflareSource };
}
