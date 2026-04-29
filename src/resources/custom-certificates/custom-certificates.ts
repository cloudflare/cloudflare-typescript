// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as PrioritizeAPI from './prioritize';
import { Prioritize } from './prioritize';

export class CustomCertificates extends APIResource {
  prioritize: PrioritizeAPI.Prioritize = new PrioritizeAPI.Prioritize(this._client);
}

CustomCertificates.Prioritize = Prioritize;

export declare namespace CustomCertificates {
  export { Prioritize as Prioritize };
}
