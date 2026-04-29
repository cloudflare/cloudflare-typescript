// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseDatasets extends APIResource {
  static override readonly _key: readonly ['aiGateway', 'datasets'] = Object.freeze([
    'aiGateway',
    'datasets',
  ] as const);
}
export class Datasets extends BaseDatasets {}
