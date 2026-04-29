// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SubdomainsAPI from './subdomains/subdomains';
import { Subdomains } from './subdomains/subdomains';

export class EmailSending extends APIResource {
  subdomains: SubdomainsAPI.Subdomains = new SubdomainsAPI.Subdomains(this._client);
}

EmailSending.Subdomains = Subdomains;

export declare namespace EmailSending {
  export { Subdomains as Subdomains };
}
