// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as CloudflareSourceAPI from './cloudflare-source';
import { CloudflareSource } from './cloudflare-source';
import * as WARPAPI from './warp';
import { WARP } from './warp';

export class Subnets extends APIResource {
  warp: WARPAPI.WARP = new WARPAPI.WARP(this._client);
  cloudflareSource: CloudflareSourceAPI.CloudflareSource = new CloudflareSourceAPI.CloudflareSource(
    this._client,
  );
}

Subnets.WARP = WARP;
Subnets.CloudflareSource = CloudflareSource;

export declare namespace Subnets {
  export { WARP as WARP };

  export { CloudflareSource as CloudflareSource };
}
