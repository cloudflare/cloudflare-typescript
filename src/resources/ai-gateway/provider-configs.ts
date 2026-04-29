// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseProviderConfigs extends APIResource {
  static override readonly _key: readonly ['aiGateway', 'providerConfigs'] = Object.freeze([
    'aiGateway',
    'providerConfigs',
  ] as const);
}
export class ProviderConfigs extends BaseProviderConfigs {}
