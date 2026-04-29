// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseHTTPMethod extends APIResource {
  static override readonly _key: readonly ['radar', 'http', 'locations', 'httpMethod'] = Object.freeze([
    'radar',
    'http',
    'locations',
    'httpMethod',
  ] as const);
}
export class HTTPMethod extends BaseHTTPMethod {}
