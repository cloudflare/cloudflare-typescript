// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MitigationsAPI from './mitigations';
import { BaseMitigations, Mitigations } from './mitigations';

export class BaseAbuseReports extends APIResource {
  static override readonly _key: readonly ['abuseReports'] = Object.freeze(['abuseReports'] as const);
}
export class AbuseReports extends BaseAbuseReports {
  mitigations: MitigationsAPI.Mitigations = new MitigationsAPI.Mitigations(this._client);
}

AbuseReports.Mitigations = Mitigations;
AbuseReports.BaseMitigations = BaseMitigations;

export declare namespace AbuseReports {
  export { Mitigations as Mitigations, BaseMitigations as BaseMitigations };
}
