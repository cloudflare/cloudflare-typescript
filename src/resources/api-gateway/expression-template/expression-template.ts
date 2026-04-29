// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FallthroughAPI from './fallthrough';
import { BaseFallthrough, Fallthrough } from './fallthrough';

export class BaseExpressionTemplate extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'expressionTemplate'] = Object.freeze([
    'apiGateway',
    'expressionTemplate',
  ] as const);
}
export class ExpressionTemplate extends BaseExpressionTemplate {
  fallthrough: FallthroughAPI.Fallthrough = new FallthroughAPI.Fallthrough(this._client);
}

ExpressionTemplate.Fallthrough = Fallthrough;
ExpressionTemplate.BaseFallthrough = BaseFallthrough;

export declare namespace ExpressionTemplate {
  export { Fallthrough as Fallthrough, BaseFallthrough as BaseFallthrough };
}
