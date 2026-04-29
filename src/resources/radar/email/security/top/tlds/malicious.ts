// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';

export class BaseMalicious extends APIResource {
  static override readonly _key: readonly ['radar', 'email', 'security', 'top', 'tlds', 'malicious'] =
    Object.freeze(['radar', 'email', 'security', 'top', 'tlds', 'malicious'] as const);
}
export class Malicious extends BaseMalicious {}
