// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';

export class BaseSpam extends APIResource {
  static override readonly _key: readonly ['radar', 'email', 'security', 'top', 'tlds', 'spam'] =
    Object.freeze(['radar', 'email', 'security', 'top', 'tlds', 'spam'] as const);
}
export class Spam extends BaseSpam {}
