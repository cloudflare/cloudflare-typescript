// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as MitigationsAPI from './mitigations';
import { Mitigations } from './mitigations';

export class AbuseReports extends APIResource {
  mitigations: MitigationsAPI.Mitigations = new MitigationsAPI.Mitigations(this._client);
}

AbuseReports.Mitigations = Mitigations;

export declare namespace AbuseReports {
  export { Mitigations as Mitigations };
}
