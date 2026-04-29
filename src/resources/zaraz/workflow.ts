// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseWorkflow extends APIResource {
  static override readonly _key: readonly ['zaraz', 'workflow'] = Object.freeze([
    'zaraz',
    'workflow',
  ] as const);
}
export class Workflow extends BaseWorkflow {}
