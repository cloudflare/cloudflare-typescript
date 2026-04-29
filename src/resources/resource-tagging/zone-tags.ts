// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseZoneTags extends APIResource {
  static override readonly _key: readonly ['resourceTagging', 'zoneTags'] = Object.freeze([
    'resourceTagging',
    'zoneTags',
  ] as const);
}
export class ZoneTags extends BaseZoneTags {}
