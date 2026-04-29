// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseLabels extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'operations', 'labels'] = Object.freeze([
    'apiGateway',
    'operations',
    'labels',
  ] as const);
}
export class Labels extends BaseLabels {}
