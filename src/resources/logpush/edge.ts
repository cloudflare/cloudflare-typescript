// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseEdge extends APIResource {
  static override readonly _key: readonly ['logpush', 'edge'] = Object.freeze(['logpush', 'edge'] as const);
}
export class Edge extends BaseEdge {}
