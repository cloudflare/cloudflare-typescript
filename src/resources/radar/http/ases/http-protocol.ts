// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseHTTPProtocol extends APIResource {
  static override readonly _key: readonly ['radar', 'http', 'ases', 'httpProtocol'] = Object.freeze([
    'radar',
    'http',
    'ases',
    'httpProtocol',
  ] as const);
}
export class HTTPProtocol extends BaseHTTPProtocol {}
