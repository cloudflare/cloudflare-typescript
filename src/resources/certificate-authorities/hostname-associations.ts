// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseHostnameAssociations extends APIResource {
  static override readonly _key: readonly ['certificateAuthorities', 'hostnameAssociations'] = Object.freeze([
    'certificateAuthorities',
    'hostnameAssociations',
  ] as const);
}
export class HostnameAssociations extends BaseHostnameAssociations {}
