// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { CloudflareError } from '../../../error';

export class Classification extends APIResource {
  /**
   * Updates the user classification for a Security Center insight. Valid values are
   * 'false_positive' or 'accept_risk'. To reset, set classification to null. Cannot
   * change directly between classification values - must reset to null first.
   *
   * @example
   * ```ts
   * const classification =
   *   await client.securityCenter.insights.classification.update(
   *     'issue_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  update(
    issueId: string,
    params: ClassificationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClassificationUpdateResponse> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.patch(
      `/${accountOrZone}/${accountOrZoneId}/security-center/insights/${issueId}/classification`,
      { body, ...options },
    );
  }
}

export interface ClassificationUpdateResponse {
  errors: Array<ClassificationUpdateResponse.Error>;

  messages: Array<ClassificationUpdateResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace ClassificationUpdateResponse {
  export interface Error {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }
}

export interface ClassificationUpdateParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: User-defined classification for the insight. Can be
   * 'false_positive', 'accept_risk', 'other', or null.
   */
  classification?: 'false_positive' | 'accept_risk' | 'other' | null;

  /**
   * Body param: Rationale for the classification change. Required when
   * classification is 'accept_risk' or 'other'.
   */
  rationale?: string;
}

export declare namespace Classification {
  export {
    type ClassificationUpdateResponse as ClassificationUpdateResponse,
    type ClassificationUpdateParams as ClassificationUpdateParams,
  };
}
