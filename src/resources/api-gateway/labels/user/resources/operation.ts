// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';

export class BaseOperation extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'labels', 'user', 'resources', 'operation'] =
    Object.freeze(['apiGateway', 'labels', 'user', 'resources', 'operation'] as const);
}
export class Operation extends BaseOperation {}
