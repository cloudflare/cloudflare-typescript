// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as FallthroughAPI from './fallthrough';
import { Fallthrough } from './fallthrough';

export class ExpressionTemplate extends APIResource {
  fallthrough: FallthroughAPI.Fallthrough = new FallthroughAPI.Fallthrough(this._client);
}

ExpressionTemplate.Fallthrough = Fallthrough;

export declare namespace ExpressionTemplate {
  export { Fallthrough as Fallthrough };
}
