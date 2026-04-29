// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as QuotaAPI from './quota';
import { BaseQuota, Quota } from './quota';

export class BaseCertificatePacks extends APIResource {
  static override readonly _key: readonly ['ssl', 'certificatePacks'] = Object.freeze([
    'ssl',
    'certificatePacks',
  ] as const);
}
export class CertificatePacks extends BaseCertificatePacks {
  quota: QuotaAPI.Quota = new QuotaAPI.Quota(this._client);
}

CertificatePacks.Quota = Quota;
CertificatePacks.BaseQuota = BaseQuota;

export declare namespace CertificatePacks {
  export { Quota as Quota, BaseQuota as BaseQuota };
}
