// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseFallthrough extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'expressionTemplate', 'fallthrough'] = Object.freeze(
    ['apiGateway', 'expressionTemplate', 'fallthrough'] as const,
  );
}
export class Fallthrough extends BaseFallthrough {}
