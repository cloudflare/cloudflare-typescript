// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseResources extends APIResource {
  static override readonly _key: readonly ['resourceSharing', 'resources'] = Object.freeze([
    'resourceSharing',
    'resources',
  ] as const);
}
export class Resources extends BaseResources {}
