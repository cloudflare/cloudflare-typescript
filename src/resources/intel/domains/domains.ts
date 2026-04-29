// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BulksAPI from './bulks';
import { BaseBulks, Bulks } from './bulks';

export class BaseDomains extends APIResource {
  static override readonly _key: readonly ['intel', 'domains'] = Object.freeze(['intel', 'domains'] as const);
}
export class Domains extends BaseDomains {
  bulks: BulksAPI.Bulks = new BulksAPI.Bulks(this._client);
}

Domains.Bulks = Bulks;
Domains.BaseBulks = BaseBulks;

export declare namespace Domains {
  export { Bulks as Bulks, BaseBulks as BaseBulks };
}
