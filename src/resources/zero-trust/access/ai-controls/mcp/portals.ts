// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';

export class BasePortals extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'aiControls', 'mcp', 'portals'] =
    Object.freeze(['zeroTrust', 'access', 'aiControls', 'mcp', 'portals'] as const);
}
export class Portals extends BasePortals {}
