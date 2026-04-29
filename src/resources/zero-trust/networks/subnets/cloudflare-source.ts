// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseCloudflareSource extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'networks', 'subnets', 'cloudflareSource'] =
    Object.freeze(['zeroTrust', 'networks', 'subnets', 'cloudflareSource'] as const);
}
export class CloudflareSource extends BaseCloudflareSource {}
