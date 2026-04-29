// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseSearch extends APIResource {
  static override readonly _key: readonly ['radar', 'search'] = Object.freeze(['radar', 'search'] as const);
}
export class Search extends BaseSearch {}
