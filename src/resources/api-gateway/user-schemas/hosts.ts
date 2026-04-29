// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseHosts extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'userSchemas', 'hosts'] = Object.freeze([
    'apiGateway',
    'userSchemas',
    'hosts',
  ] as const);
}
export class Hosts extends BaseHosts {}
