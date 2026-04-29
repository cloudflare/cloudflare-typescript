// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseTelemetry extends APIResource {
  static override readonly _key: readonly ['workers', 'observability', 'telemetry'] = Object.freeze([
    'workers',
    'observability',
    'telemetry',
  ] as const);
}
export class Telemetry extends BaseTelemetry {}
