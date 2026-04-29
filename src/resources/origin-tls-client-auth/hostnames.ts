// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseHostnames extends APIResource {
  static override readonly _key: readonly ['originTLSClientAuth', 'hostnames'] = Object.freeze([
    'originTLSClientAuth',
    'hostnames',
  ] as const);
}
export class Hostnames extends BaseHostnames {}
