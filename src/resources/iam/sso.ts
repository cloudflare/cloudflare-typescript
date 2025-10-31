// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class SSO extends APIResource {
  /**
   * Initialize new SSO connector
   *
   * @example
   * ```ts
   * const sso = await client.iam.sso.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   email_domain: 'example.com',
   * });
   * ```
   */
  create(params: SSOCreateParams, options?: Core.RequestOptions): Core.APIPromise<SSOCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/sso_connectors`, { body, ...options }) as Core.APIPromise<{
        result: SSOCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update SSO connector state
   *
   * @example
   * ```ts
   * const sso = await client.iam.sso.update(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  update(
    ssoConnectorId: string,
    params: SSOUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SSOUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/sso_connectors/${ssoConnectorId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SSOUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get all SSO connectors
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ssoListResponse of client.iam.sso.list({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    params: SSOListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SSOListResponsesSinglePage, SSOListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/sso_connectors`,
      SSOListResponsesSinglePage,
      options,
    );
  }

  /**
   * Delete SSO connector
   *
   * @example
   * ```ts
   * const sso = await client.iam.sso.delete(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    ssoConnectorId: string,
    params: SSODeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SSODeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/sso_connectors/${ssoConnectorId}`,
        options,
      ) as Core.APIPromise<{ result: SSODeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Begin SSO connector verification
   *
   * @example
   * ```ts
   * const response = await client.iam.sso.beginVerification(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  beginVerification(
    ssoConnectorId: string,
    params: SSOBeginVerificationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SSOBeginVerificationResponse> {
    const { account_id } = params;
    return this._client.post(
      `/accounts/${account_id}/sso_connectors/${ssoConnectorId}/begin_verification`,
      options,
    );
  }

  /**
   * Get single SSO connector
   *
   * @example
   * ```ts
   * const sso = await client.iam.sso.get(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    ssoConnectorId: string,
    params: SSOGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SSOGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/sso_connectors/${ssoConnectorId}`,
        options,
      ) as Core.APIPromise<{ result: SSOGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SSOListResponsesSinglePage extends SinglePage<SSOListResponse> {}

export interface SSOCreateResponse {
  /**
   * SSO Connector identifier tag.
   */
  id?: string;

  /**
   * Timestamp for the creation of the SSO connector
   */
  created_on?: string;

  email_domain?: string;

  enabled?: boolean;

  /**
   * Timestamp for the last update of the SSO connector
   */
  updated_on?: string;

  /**
   * Controls the display of FedRAMP language to the user during SSO login
   */
  use_fedramp_language?: boolean;

  verification?: SSOCreateResponse.Verification;
}

export namespace SSOCreateResponse {
  export interface Verification {
    /**
     * DNS verification code. Add this entire string to the DNS TXT record of the email
     * domain to validate ownership.
     */
    code?: string;

    /**
     * The status of the verification code from the verification process.
     */
    status?: 'awaiting' | 'pending' | 'failed' | 'verified';
  }
}

export interface SSOUpdateResponse {
  /**
   * SSO Connector identifier tag.
   */
  id?: string;

  /**
   * Timestamp for the creation of the SSO connector
   */
  created_on?: string;

  email_domain?: string;

  enabled?: boolean;

  /**
   * Timestamp for the last update of the SSO connector
   */
  updated_on?: string;

  /**
   * Controls the display of FedRAMP language to the user during SSO login
   */
  use_fedramp_language?: boolean;

  verification?: SSOUpdateResponse.Verification;
}

export namespace SSOUpdateResponse {
  export interface Verification {
    /**
     * DNS verification code. Add this entire string to the DNS TXT record of the email
     * domain to validate ownership.
     */
    code?: string;

    /**
     * The status of the verification code from the verification process.
     */
    status?: 'awaiting' | 'pending' | 'failed' | 'verified';
  }
}

export interface SSOListResponse {
  /**
   * SSO Connector identifier tag.
   */
  id?: string;

  /**
   * Timestamp for the creation of the SSO connector
   */
  created_on?: string;

  email_domain?: string;

  enabled?: boolean;

  /**
   * Timestamp for the last update of the SSO connector
   */
  updated_on?: string;

  /**
   * Controls the display of FedRAMP language to the user during SSO login
   */
  use_fedramp_language?: boolean;

  verification?: SSOListResponse.Verification;
}

export namespace SSOListResponse {
  export interface Verification {
    /**
     * DNS verification code. Add this entire string to the DNS TXT record of the email
     * domain to validate ownership.
     */
    code?: string;

    /**
     * The status of the verification code from the verification process.
     */
    status?: 'awaiting' | 'pending' | 'failed' | 'verified';
  }
}

export interface SSODeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface SSOBeginVerificationResponse {
  errors: Array<SSOBeginVerificationResponse.Error>;

  messages: Array<SSOBeginVerificationResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace SSOBeginVerificationResponse {
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

export interface SSOGetResponse {
  /**
   * SSO Connector identifier tag.
   */
  id?: string;

  /**
   * Timestamp for the creation of the SSO connector
   */
  created_on?: string;

  email_domain?: string;

  enabled?: boolean;

  /**
   * Timestamp for the last update of the SSO connector
   */
  updated_on?: string;

  /**
   * Controls the display of FedRAMP language to the user during SSO login
   */
  use_fedramp_language?: boolean;

  verification?: SSOGetResponse.Verification;
}

export namespace SSOGetResponse {
  export interface Verification {
    /**
     * DNS verification code. Add this entire string to the DNS TXT record of the email
     * domain to validate ownership.
     */
    code?: string;

    /**
     * The status of the verification code from the verification process.
     */
    status?: 'awaiting' | 'pending' | 'failed' | 'verified';
  }
}

export interface SSOCreateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Email domain of the new SSO connector
   */
  email_domain: string;

  /**
   * Body param: Begin the verification process after creation
   */
  begin_verification?: boolean;

  /**
   * Body param: Controls the display of FedRAMP language to the user during SSO
   * login
   */
  use_fedramp_language?: boolean;
}

export interface SSOUpdateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: SSO Connector enabled state
   */
  enabled?: boolean;

  /**
   * Body param: Controls the display of FedRAMP language to the user during SSO
   * login
   */
  use_fedramp_language?: boolean;
}

export interface SSOListParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface SSODeleteParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface SSOBeginVerificationParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface SSOGetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

SSO.SSOListResponsesSinglePage = SSOListResponsesSinglePage;

export declare namespace SSO {
  export {
    type SSOCreateResponse as SSOCreateResponse,
    type SSOUpdateResponse as SSOUpdateResponse,
    type SSOListResponse as SSOListResponse,
    type SSODeleteResponse as SSODeleteResponse,
    type SSOBeginVerificationResponse as SSOBeginVerificationResponse,
    type SSOGetResponse as SSOGetResponse,
    SSOListResponsesSinglePage as SSOListResponsesSinglePage,
    type SSOCreateParams as SSOCreateParams,
    type SSOUpdateParams as SSOUpdateParams,
    type SSOListParams as SSOListParams,
    type SSODeleteParams as SSODeleteParams,
    type SSOBeginVerificationParams as SSOBeginVerificationParams,
    type SSOGetParams as SSOGetParams,
  };
}
