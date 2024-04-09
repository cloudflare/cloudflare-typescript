// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as InvitesAPI from 'cloudflare/resources/user/invites';
import * as Shared from 'cloudflare/resources/shared';
import * as PermissionGroupsAPI from 'cloudflare/resources/user/tokens/permission-groups';
import { SinglePage } from 'cloudflare/pagination';

export class Invites extends APIResource {
  /**
   * Lists all invitations associated with my user.
   */
  list(options?: Core.RequestOptions): Core.PagePromise<InvitesSinglePage, Invite> {
    return this._client.getAPIList('/user/invites', InvitesSinglePage, options);
  }

  /**
   * Responds to an invitation.
   */
  edit(
    inviteId: string,
    body: InviteEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    return (
      this._client.patch(`/user/invites/${inviteId}`, { body, ...options }) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the details of an invitation.
   */
  get(
    inviteId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    return (
      this._client.get(`/user/invites/${inviteId}`, options) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class InvitesSinglePage extends SinglePage<Invite> {}

export interface Invite {
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
  roles?: Array<Invite.Role>;

  /**
   * Current status of the invitation.
   */
  status?: 'pending' | 'accepted' | 'rejected' | 'expired';
}

export namespace Invite {
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
    permissions: Array<PermissionGroupsAPI.Permission>;
  }
}

export interface InviteEditParams {
  /**
   * Status of your response to the invitation (rejected or accepted).
   */
  status: 'accepted' | 'rejected';
}

export namespace Invites {
  export import Invite = InvitesAPI.Invite;
  export import InvitesSinglePage = InvitesAPI.InvitesSinglePage;
  export import InviteEditParams = InvitesAPI.InviteEditParams;
}
