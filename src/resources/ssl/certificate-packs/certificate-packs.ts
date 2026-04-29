// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as QuotaAPI from './quota';
import { Quota } from './quota';

export class CertificatePacks extends APIResource {
  quota: QuotaAPI.Quota = new QuotaAPI.Quota(this._client);
}

CertificatePacks.Quota = Quota;

export declare namespace CertificatePacks {
  export { Quota as Quota };
}
