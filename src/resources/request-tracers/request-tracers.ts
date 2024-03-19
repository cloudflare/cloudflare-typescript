// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as TracesAPI from 'cloudflare/resources/request-tracers/traces';

export class RequestTracers extends APIResource {
  traces: TracesAPI.Traces = new TracesAPI.Traces(this._client);
}

export namespace RequestTracers {
  export import Traces = TracesAPI.Traces;
  export import RequestTracerTrace = TracesAPI.RequestTracerTrace;
  export import TraceCreateResponse = TracesAPI.TraceCreateResponse;
  export import TraceCreateParams = TracesAPI.TraceCreateParams;
}
