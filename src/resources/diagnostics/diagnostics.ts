// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as TraceroutesAPI from 'cloudflare/resources/diagnostics/traceroutes';

export class Diagnostics extends APIResource {
  traceroutes: TraceroutesAPI.Traceroutes = new TraceroutesAPI.Traceroutes(this._client);
}

export namespace Diagnostics {
  export import Traceroutes = TraceroutesAPI.Traceroutes;
  export import TracerouteCreateResponse = TraceroutesAPI.TracerouteCreateResponse;
  export import TracerouteCreateParams = TraceroutesAPI.TracerouteCreateParams;
}
