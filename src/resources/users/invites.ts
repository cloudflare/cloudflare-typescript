// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as InvitesAPI from 'cloudflare/resources/users/invites';

export class Invites extends APIResource {
  /**
   * Responds to an invitation.
   */
  update(
    inviteId: string,
    body: InviteUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InviteUpdateResponse> {
    return (
      this._client.patch(`/user/invites/${inviteId}`, { body, ...options }) as Core.APIPromise<{
        result: InviteUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all invitations associated with my user.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<InviteListResponse | null> {
    return (
      this._client.get('/user/invites', options) as Core.APIPromise<{ result: InviteListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the details of an invitation.
   */
  get(inviteId: string, options?: Core.RequestOptions): Core.APIPromise<InviteGetResponse> {
    return (
      this._client.get(`/user/invites/${inviteId}`, options) as Core.APIPromise<{ result: InviteGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type InviteUpdateResponse = unknown | string | null;

export type InviteListResponse = Array<InviteListResponse.InviteListResponseItem>;

export namespace InviteListResponse {
  export interface InviteListResponseItem {
    /**
     * ID of the user to add to the organization.
     */
    invited_member_id: string | null;

    /**
     * ID of the organization the user will be added to.
     */
    organization_id: string;

    /**
     * Invite identifier tag.
     */
    id?: string;

    /**
     * When the invite is no longer active.
     */
    expires_on?: string;

    /**
     * The email address of the user who created the invite.
     */
    invited_by?: string;

    /**
     * Email address of the user to add to the organization.
     */
    invited_member_email?: string;

    /**
     * When the invite was sent.
     */
    invited_on?: string;

    /**
     * Organization name.
     */
    organization_name?: string;

    /**
     * Roles to be assigned to this user.
     */
    roles?: Array<InviteListResponseItem.Role>;

    /**
     * Current status of the invitation.
     */
    status?: 'pending' | 'accepted' | 'rejected' | 'expired';
  }

  export namespace InviteListResponseItem {
    export interface Role {
      /**
       * Role identifier tag.
       */
      id: string;

      /**
       * Description of role's permissions.
       */
      description: string;

      /**
       * Role Name.
       */
      name: string;

      /**
       * Access permissions for this User.
       */
      permissions: Array<string>;
    }
  }
}

export type InviteGetResponse = unknown | string | null;

export interface InviteUpdateParams {
  /**
   * Status of your response to the invitation (rejected or accepted).
   */
  status: 'accepted' | 'rejected';
}

export namespace Invites {
  export import InviteUpdateResponse = InvitesAPI.InviteUpdateResponse;
  export import InviteListResponse = InvitesAPI.InviteListResponse;
  export import InviteGetResponse = InvitesAPI.InviteGetResponse;
  export import InviteUpdateParams = InvitesAPI.InviteUpdateParams;
}
