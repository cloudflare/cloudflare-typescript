// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseManagement extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'tunnels', 'cloudflared', 'management'] =
    Object.freeze(['zeroTrust', 'tunnels', 'cloudflared', 'management'] as const);
}
export class Management extends BaseManagement {}
