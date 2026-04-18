// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as PrefixBindingsAPI from './prefix-bindings';
import { PrefixBindings } from './prefix-bindings';

export class RegionalServices extends APIResource {
  prefixBindings: PrefixBindingsAPI.PrefixBindings = new PrefixBindingsAPI.PrefixBindings(this._client);
}

RegionalServices.PrefixBindings = PrefixBindings;

export declare namespace RegionalServices {
  export { PrefixBindings as PrefixBindings };
}
