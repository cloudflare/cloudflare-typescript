// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseHTTPMethod extends APIResource {
  static override readonly _key: readonly ['radar', 'http', 'ases', 'httpMethod'] = Object.freeze([
    'radar',
    'http',
    'ases',
    'httpMethod',
  ] as const);
}
export class HTTPMethod extends BaseHTTPMethod {}
