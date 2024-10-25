// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TraceroutesAPI from './traceroutes';

export class Diagnostics extends APIResource {
  traceroutes: TraceroutesAPI.Traceroutes = new TraceroutesAPI.Traceroutes(this._client);
}

export namespace Diagnostics {
  export import Traceroutes = TraceroutesAPI.Traceroutes;
  export import Traceroute = TraceroutesAPI.Traceroute;
  export import TracerouteCreateResponse = TraceroutesAPI.TracerouteCreateResponse;
  export import TracerouteCreateParams = TraceroutesAPI.TracerouteCreateParams;
}
