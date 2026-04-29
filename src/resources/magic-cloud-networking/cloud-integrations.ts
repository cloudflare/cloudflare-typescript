// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseCloudIntegrations extends APIResource {
  static override readonly _key: readonly ['magicCloudNetworking', 'cloudIntegrations'] = Object.freeze([
    'magicCloudNetworking',
    'cloudIntegrations',
  ] as const);
}
export class CloudIntegrations extends BaseCloudIntegrations {}
