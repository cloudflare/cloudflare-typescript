// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseResourceGroups extends APIResource {
  static override readonly _key: readonly ['iam', 'resourceGroups'] = Object.freeze([
    'iam',
    'resourceGroups',
  ] as const);
}
export class ResourceGroups extends BaseResourceGroups {}
