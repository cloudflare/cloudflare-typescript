// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseConnectors extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'tunnels', 'warpConnector', 'connectors'] =
    Object.freeze(['zeroTrust', 'tunnels', 'warpConnector', 'connectors'] as const);
}
export class Connectors extends BaseConnectors {}
