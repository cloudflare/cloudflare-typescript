// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseIntegrations extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb', 'integrations'] = Object.freeze([
    'zeroTrust',
    'casb',
    'integrations',
  ] as const);
}
export class Integrations extends BaseIntegrations {}
