// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as BulksAPI from './bulks';
import { Bulks } from './bulks';

export class Domains extends APIResource {
  bulks: BulksAPI.Bulks = new BulksAPI.Bulks(this._client);
}

Domains.Bulks = Bulks;

export declare namespace Domains {
  export { Bulks as Bulks };
}
