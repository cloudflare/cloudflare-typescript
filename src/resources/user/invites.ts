// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as InvitesAPI from 'cloudflare/resources/user/invites';
import * as Shared from 'cloudflare/resources/shared';
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
  ): Core.APIPromise<InviteEditResponse> {
    return (
      this._client.patch(`/user/invites/${inviteId}`, { body, ...options }) as Core.APIPromise<{
        result: InviteEditResponse;
      }>
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
  roles?: Array<Shared.Role>;

  /**
   * Current status of the invitation.
   */
  status?: 'pending' | 'accepted' | 'rejected' | 'expired';
}

export type InviteEditResponse = unknown | string | null;

export type InviteGetResponse = unknown | string | null;

export interface InviteEditParams {
  /**
   * Status of your response to the invitation (rejected or accepted).
   */
  status: 'accepted' | 'rejected';
}

export namespace Invites {
  export import Invite = InvitesAPI.Invite;
  export import InviteEditResponse = InvitesAPI.InviteEditResponse;
  export import InviteGetResponse = InvitesAPI.InviteGetResponse;
  export import InvitesSinglePage = InvitesAPI.InvitesSinglePage;
  export import InviteEditParams = InvitesAPI.InviteEditParams;
}
