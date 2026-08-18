// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseRobots extends APIResource {
  static override readonly _key: readonly ['aiAudit', 'robots'] = Object.freeze([
    'aiAudit',
    'robots',
  ] as const);
}
export class Robots extends BaseRobots {}
