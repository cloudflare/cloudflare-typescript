// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TracingAPI from './tracing/tracing';
import { BaseTracing, Tracing } from './tracing/tracing';

export class BaseObservability extends APIResource {
  static override readonly _key: readonly ['zones', 'observability'] = Object.freeze([
    'zones',
    'observability',
  ] as const);
}
export class Observability extends BaseObservability {
  tracing: TracingAPI.Tracing = new TracingAPI.Tracing(this._client);
}

Observability.Tracing = Tracing;
Observability.BaseTracing = BaseTracing;

export declare namespace Observability {
  export { Tracing as Tracing, BaseTracing as BaseTracing };
}
