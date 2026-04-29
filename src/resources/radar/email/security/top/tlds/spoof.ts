// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';

export class BaseSpoof extends APIResource {
  static override readonly _key: readonly ['radar', 'email', 'security', 'top', 'tlds', 'spoof'] =
    Object.freeze(['radar', 'email', 'security', 'top', 'tlds', 'spoof'] as const);
}
export class Spoof extends BaseSpoof {}
