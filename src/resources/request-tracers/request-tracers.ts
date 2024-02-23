// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as TracesAPI from 'cloudflare/resources/request-tracers/traces';

export class RequestTracers extends APIResource {
  traces: TracesAPI.Traces = new TracesAPI.Traces(this._client);
}

export namespace RequestTracers {
  export import Traces = TracesAPI.Traces;
  export import IT1w6UlbTrace = TracesAPI.IT1w6UlbTrace;
  export import TraceCreateResponse = TracesAPI.TraceCreateResponse;
  export import TraceCreateParams = TracesAPI.TraceCreateParams;
}
