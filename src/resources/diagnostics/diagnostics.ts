// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EndpointHealthchecksAPI from './endpoint-healthchecks';
import { EndpointHealthchecks } from './endpoint-healthchecks';
import * as TraceroutesAPI from './traceroutes';
import { Traceroutes } from './traceroutes';

export class Diagnostics extends APIResource {
  traceroutes: TraceroutesAPI.Traceroutes = new TraceroutesAPI.Traceroutes(this._client);
  endpointHealthchecks: EndpointHealthchecksAPI.EndpointHealthchecks =
    new EndpointHealthchecksAPI.EndpointHealthchecks(this._client);
}

Diagnostics.Traceroutes = Traceroutes;
Diagnostics.EndpointHealthchecks = EndpointHealthchecks;

export declare namespace Diagnostics {
  export { Traceroutes as Traceroutes };

  export { EndpointHealthchecks as EndpointHealthchecks };
}
