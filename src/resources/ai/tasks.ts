// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseTasks extends APIResource {
  static override readonly _key: readonly ['ai', 'tasks'] = Object.freeze(['ai', 'tasks'] as const);
}
export class Tasks extends BaseTasks {}
