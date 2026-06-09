// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseConfigurations extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'tunnels', 'warpConnector', 'configurations'] =
    Object.freeze(['zeroTrust', 'tunnels', 'warpConnector', 'configurations'] as const);
}
export class Configurations extends BaseConfigurations {}
