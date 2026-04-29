// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseEndpointHealthchecks extends APIResource {
  static override readonly _key: readonly ['diagnostics', 'endpointHealthchecks'] = Object.freeze([
    'diagnostics',
    'endpointHealthchecks',
  ] as const);
}
export class EndpointHealthchecks extends BaseEndpointHealthchecks {}
