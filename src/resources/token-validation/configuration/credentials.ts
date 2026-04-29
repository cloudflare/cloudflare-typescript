// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseCredentials extends APIResource {
  static override readonly _key: readonly ['tokenValidation', 'configuration', 'credentials'] = Object.freeze(
    ['tokenValidation', 'configuration', 'credentials'] as const,
  );
}
export class Credentials extends BaseCredentials {}
