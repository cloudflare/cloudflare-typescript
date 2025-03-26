// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Invites extends APIResource {
  /**
   * Lists all invitations associated with my user.
   */
  list(options?: RequestOptions): PagePromise<InvitesSinglePage, Invite> {
    return this._client.getAPIList('/user/invites', SinglePage<Invite>, options);
  }

  /**
   * Responds to an invitation.
   */
  edit(inviteID: string, body: InviteEditParams, options?: RequestOptions): APIPromise<Invite> {
    return (
      this._client.patch(path`/user/invites/${inviteID}`, { body, ...options }) as APIPromise<{
        result: Invite;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the details of an invitation.
   */
  get(inviteID: string, options?: RequestOptions): APIPromise<Invite> {
    return (
      this._client.get(path`/user/invites/${inviteID}`, options) as APIPromise<{ result: Invite }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type InvitesSinglePage = SinglePage<Invite>;

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

  organization_is_enforcing_twofactor?: boolean;

  /**
   * Organization name.
   */
  organization_name?: string;

  /**
   * List of role names the membership has for this account.
   */
  roles?: Array<string>;

  /**
   * Current status of the invitation.
   */
  status?: 'pending' | 'accepted' | 'rejected' | 'expired';
}

export interface InviteEditParams {
  /**
   * Status of your response to the invitation (rejected or accepted).
   */
  status: 'accepted' | 'rejected';
}

export declare namespace Invites {
  export {
    type Invite as Invite,
    type InvitesSinglePage as InvitesSinglePage,
    type InviteEditParams as InviteEditParams,
  };
}
