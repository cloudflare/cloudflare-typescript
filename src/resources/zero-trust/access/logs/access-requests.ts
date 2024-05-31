// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as AccessRequestsAPI from './access-requests';

export class AccessRequests extends APIResource {}

export interface AccessRequests {
  /**
   * The event that occurred, such as a login attempt.
   */
  action?: string;

  /**
   * The result of the authentication event.
   */
  allowed?: boolean;

  /**
   * The URL of the Access application.
   */
  app_domain?: string;

  /**
   * The unique identifier for the Access application.
   */
  app_uid?: string;

  /**
   * The IdP used to authenticate.
   */
  connection?: string;

  created_at?: string;

  /**
   * The IP address of the authenticating user.
   */
  ip_address?: string;

  /**
   * The unique identifier for the request to Cloudflare.
   */
  ray_id?: string;

  /**
   * The email address of the authenticating user.
   */
  user_email?: string;
}

export namespace AccessRequests {
  export import AccessRequests = AccessRequestsAPI.AccessRequests;
}
