// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseDeployments extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'cws', 'deployments'] = Object.freeze([
    'zeroTrust',
    'cws',
    'deployments',
  ] as const);

  /**
   * Creates a deployment with the specified policy sets, domain ACL, and basic-auth
   * credentials.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.zeroTrust.cws.deployments.create({
   *     account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *     basic_auth_credential_ids: [
   *       '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     ],
   *     default_mode: 'ALLOW',
   *     name: 'x',
   *     policy_set_ids: [
   *       '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     ],
   *   });
   * ```
   */
  create(params: DeploymentCreateParams, options?: RequestOptions): APIPromise<Deployment> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cws/deployments`, { body, ...options }) as APIPromise<{
        result: Deployment;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replaces the deployment's mutable configuration and resource attachments.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.zeroTrust.cws.deployments.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
   *       basic_auth_credential_ids: [
   *         '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       ],
   *       default_mode: 'ALLOW',
   *       name: 'x',
   *       policy_set_ids: [
   *         '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       ],
   *     },
   *   );
   * ```
   */
  update(
    deploymentID: string,
    params: DeploymentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Deployment> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/cws/deployments/${deploymentID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Deployment }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of deployments in the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const deployment of client.zeroTrust.cws.deployments.list(
   *   { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: DeploymentListParams,
    options?: RequestOptions,
  ): PagePromise<DeploymentsCursorPagination, Deployment> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/cws/deployments`,
      CursorPagination<Deployment>,
      { query, ...options },
    );
  }

  /**
   * Deletes the deployment and detaches its associated resources. The resources are
   * not deleted.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.zeroTrust.cws.deployments.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   *   );
   * ```
   */
  delete(
    deploymentID: string,
    params: DeploymentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/cws/deployments/${deploymentID}`,
        options,
      ) as APIPromise<{ result: DeploymentDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the deployment with the specified ID.
   *
   * @example
   * ```ts
   * const deployment =
   *   await client.zeroTrust.cws.deployments.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
   *   );
   * ```
   */
  get(deploymentID: string, params: DeploymentGetParams, options?: RequestOptions): APIPromise<Deployment> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/cws/deployments/${deploymentID}`, options) as APIPromise<{
        result: Deployment;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Deployments extends BaseDeployments {}

export type DeploymentsCursorPagination = CursorPagination<Deployment>;

export interface Deployment {
  /**
   * Server-assigned UUID
   */
  id: string;

  /**
   * IDs of basic-auth credentials attached to this deployment
   */
  basic_auth_credential_ids: Array<string> | null;

  created_at: string;

  /**
   * Default traffic decision when no policy set matches
   */
  default_mode: 'ALLOW' | 'BLOCK';

  /**
   * Human-readable name; unique per account
   */
  name: string;

  /**
   * Action applied when an enforcing policy has a runtime Rego error
   */
  on_error_action: 'BLOCK' | 'SKIP';

  /**
   * IDs of policy sets attached to this deployment
   */
  policy_set_ids: Array<string> | null;

  /**
   * Whether OPA builtin failures are raised as runtime evaluation errors
   */
  rego_raise_error: boolean;

  /**
   * Tags attached to this deployment
   */
  tags: { [key: string]: string };

  updated_at: string;

  /**
   * Optional free-form description.
   */
  description?: string;

  /**
   * ID of the attached domain ACL. Omitted when none.
   */
  domain_acl_id?: string;
}

export interface DeploymentDeleteResponse {
  id: string;
}

export interface DeploymentCreateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param: IDs of basic-auth credentials to attach
   */
  basic_auth_credential_ids: Array<string> | null;

  /**
   * Body param: Default traffic mode: ALLOW or BLOCK
   */
  default_mode: 'ALLOW' | 'BLOCK';

  /**
   * Body param: Name of the deployment
   */
  name: string;

  /**
   * Body param: IDs of policy sets to attach
   */
  policy_set_ids: Array<string> | null;

  /**
   * Body param: Optional free-form description.
   */
  description?: string;

  /**
   * Body param: ID of the domain ACL to attach (omit or null for none)
   */
  domain_acl_id?: string | null;

  /**
   * Body param: Action for runtime Rego errors. Omit to use BLOCK.
   */
  on_error_action?: 'BLOCK' | 'SKIP';

  /**
   * Body param: Whether OPA builtin failures are raised as runtime evaluation
   * errors. Omit to use the default true value.
   */
  rego_raise_error?: boolean;

  /**
   * Body param: Tags to attach. Keys are limited to 256 UTF-8 bytes and values to
   * 1024 UTF-8 bytes.
   */
  tags?: { [key: string]: string };
}

export interface DeploymentUpdateParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Body param: Replacement set of basic-auth credential IDs
   */
  basic_auth_credential_ids: Array<string> | null;

  /**
   * Body param: Default traffic mode: ALLOW or BLOCK
   */
  default_mode: 'ALLOW' | 'BLOCK';

  /**
   * Body param: Name of the deployment
   */
  name: string;

  /**
   * Body param: Replacement set of policy set IDs
   */
  policy_set_ids: Array<string> | null;

  /**
   * Body param: Optional free-form description.
   */
  description?: string;

  /**
   * Body param: ID of the domain ACL to attach (omit or null to clear)
   */
  domain_acl_id?: string | null;

  /**
   * Body param: Action for runtime Rego errors. Omit to reset to BLOCK.
   */
  on_error_action?: 'BLOCK' | 'SKIP';

  /**
   * Body param: Whether OPA builtin failures are raised as runtime evaluation
   * errors. Omit to reset to true.
   */
  rego_raise_error?: boolean;

  /**
   * Body param: Replacement tag set. Omit or use {} to clear. Keys are limited to
   * 256 UTF-8 bytes and values to 1024 UTF-8 bytes.
   */
  tags?: { [key: string]: string };
}

export interface DeploymentListParams extends CursorPaginationParams {
  /**
   * Path param: Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;

  /**
   * Query param: Sort direction (default: asc)
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter by deployment name (case-insensitive substring match)
   */
  name?: string;

  /**
   * Query param: Field to order results by (default: created_at)
   */
  order?: 'name' | 'created_at' | 'updated_at';
}

export interface DeploymentDeleteParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;
}

export interface DeploymentGetParams {
  /**
   * Cloudflare account ID (32-character hexadecimal string)
   */
  account_id: string;
}

export declare namespace Deployments {
  export {
    type Deployment as Deployment,
    type DeploymentDeleteResponse as DeploymentDeleteResponse,
    type DeploymentsCursorPagination as DeploymentsCursorPagination,
    type DeploymentCreateParams as DeploymentCreateParams,
    type DeploymentUpdateParams as DeploymentUpdateParams,
    type DeploymentListParams as DeploymentListParams,
    type DeploymentDeleteParams as DeploymentDeleteParams,
    type DeploymentGetParams as DeploymentGetParams,
  };
}
