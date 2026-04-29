// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';

export class BaseServers extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'aiControls', 'mcp', 'servers'] =
    Object.freeze(['zeroTrust', 'access', 'aiControls', 'mcp', 'servers'] as const);
}
export class Servers extends BaseServers {}
