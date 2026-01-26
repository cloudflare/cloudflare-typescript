// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';

export class IPLists extends APIResource {}

export interface IPList {
  id?: number;

  description?: string;

  name?: string;
}

export declare namespace IPLists {
  export { type IPList as IPList };
}
