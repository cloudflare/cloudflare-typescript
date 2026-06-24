// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseSetupFlows extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb', 'applications', 'setupFlows'] = Object.freeze(
    ['zeroTrust', 'casb', 'applications', 'setupFlows'] as const,
  );
}
export class SetupFlows extends BaseSetupFlows {}
