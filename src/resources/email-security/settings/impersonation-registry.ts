// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseImpersonationRegistry extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'settings', 'impersonationRegistry'] =
    Object.freeze(['emailSecurity', 'settings', 'impersonationRegistry'] as const);
}
export class ImpersonationRegistry extends BaseImpersonationRegistry {}
