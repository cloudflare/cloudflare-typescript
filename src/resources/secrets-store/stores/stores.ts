// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as SecretsAPI from './secrets';
import { Secrets } from './secrets';

export class Stores extends APIResource {
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);
}

Stores.Secrets = Secrets;

export declare namespace Stores {
  export { Secrets as Secrets };
}
