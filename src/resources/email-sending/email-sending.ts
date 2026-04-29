// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubdomainsAPI from './subdomains/subdomains';
import { BaseSubdomains, Subdomains } from './subdomains/subdomains';

export class BaseEmailSending extends APIResource {
  static override readonly _key: readonly ['emailSending'] = Object.freeze(['emailSending'] as const);
}
export class EmailSending extends BaseEmailSending {
  subdomains: SubdomainsAPI.Subdomains = new SubdomainsAPI.Subdomains(this._client);
}

EmailSending.Subdomains = Subdomains;
EmailSending.BaseSubdomains = BaseSubdomains;

export declare namespace EmailSending {
  export { Subdomains as Subdomains, BaseSubdomains as BaseSubdomains };
}
