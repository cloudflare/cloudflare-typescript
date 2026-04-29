// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseRecords extends APIResource {
  static override readonly _key: readonly ['dns', 'records'] = Object.freeze(['dns', 'records'] as const);
}
export class Records extends BaseRecords {}

export type Record = unknown;

export declare namespace Records {
  export { type Record as Record };
}
