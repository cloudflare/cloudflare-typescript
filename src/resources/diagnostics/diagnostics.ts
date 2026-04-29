// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EndpointHealthchecksAPI from './endpoint-healthchecks';
import { BaseEndpointHealthchecks, EndpointHealthchecks } from './endpoint-healthchecks';
import * as TraceroutesAPI from './traceroutes';
import { BaseTraceroutes, Traceroutes } from './traceroutes';

export class BaseDiagnostics extends APIResource {
  static override readonly _key: readonly ['diagnostics'] = Object.freeze(['diagnostics'] as const);
}
export class Diagnostics extends BaseDiagnostics {
  traceroutes: TraceroutesAPI.Traceroutes = new TraceroutesAPI.Traceroutes(this._client);
  endpointHealthchecks: EndpointHealthchecksAPI.EndpointHealthchecks =
    new EndpointHealthchecksAPI.EndpointHealthchecks(this._client);
}

Diagnostics.Traceroutes = Traceroutes;
Diagnostics.BaseTraceroutes = BaseTraceroutes;
Diagnostics.EndpointHealthchecks = EndpointHealthchecks;
Diagnostics.BaseEndpointHealthchecks = BaseEndpointHealthchecks;

export declare namespace Diagnostics {
  export { Traceroutes as Traceroutes, BaseTraceroutes as BaseTraceroutes };

  export {
    EndpointHealthchecks as EndpointHealthchecks,
    BaseEndpointHealthchecks as BaseEndpointHealthchecks,
  };
}
