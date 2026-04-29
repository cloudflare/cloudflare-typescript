// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PrioritizeAPI from './prioritize';
import { BasePrioritize, Prioritize } from './prioritize';

export class BaseCustomCertificates extends APIResource {
  static override readonly _key: readonly ['customCertificates'] = Object.freeze([
    'customCertificates',
  ] as const);
}
export class CustomCertificates extends BaseCustomCertificates {
  prioritize: PrioritizeAPI.Prioritize = new PrioritizeAPI.Prioritize(this._client);
}

CustomCertificates.Prioritize = Prioritize;
CustomCertificates.BasePrioritize = BasePrioritize;

export declare namespace CustomCertificates {
  export { Prioritize as Prioritize, BasePrioritize as BasePrioritize };
}
