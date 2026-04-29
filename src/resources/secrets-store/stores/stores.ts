// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SecretsAPI from './secrets';
import { BaseSecrets, Secrets } from './secrets';

export class BaseStores extends APIResource {
  static override readonly _key: readonly ['secretsStore', 'stores'] = Object.freeze([
    'secretsStore',
    'stores',
  ] as const);
}
export class Stores extends BaseStores {
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);
}

Stores.Secrets = Secrets;
Stores.BaseSecrets = BaseSecrets;

export declare namespace Stores {
  export { Secrets as Secrets, BaseSecrets as BaseSecrets };
}
