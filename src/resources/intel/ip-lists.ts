// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseIPLists extends APIResource {
  static override readonly _key: readonly ['intel', 'ipLists'] = Object.freeze(['intel', 'ipLists'] as const);
}
export class IPLists extends BaseIPLists {}

export interface IPList {
  id?: number;

  description?: string;

  name?: string;
}

export declare namespace IPLists {
  export { type IPList as IPList };
}
