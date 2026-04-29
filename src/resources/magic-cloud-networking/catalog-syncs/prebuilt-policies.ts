// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BasePrebuiltPolicies extends APIResource {
  static override readonly _key: readonly ['magicCloudNetworking', 'catalogSyncs', 'prebuiltPolicies'] =
    Object.freeze(['magicCloudNetworking', 'catalogSyncs', 'prebuiltPolicies'] as const);
}
export class PrebuiltPolicies extends BasePrebuiltPolicies {}
