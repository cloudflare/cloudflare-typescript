// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as LastSeenIdentityAPI from './last-seen-identity';
import * as UserPolicyChecksAPI from '../applications/user-policy-checks';

export class LastSeenIdentity extends APIResource {}

export interface Identity {
  account_id?: string;

  auth_status?: string;

  common_name?: string;

  device_id?: string;

  device_sessions?: Record<string, Identity.DeviceSessions>;

  devicePosture?: Record<string, Identity.DevicePosture>;

  email?: string;

  geo?: UserPolicyChecksAPI.UserPolicyCheckGeo;

  iat?: number;

  idp?: Identity.IdP;

  ip?: string;

  is_gateway?: boolean;

  is_warp?: boolean;

  mtls_auth?: Identity.MTLSAuth;

  service_token_id?: string;

  service_token_status?: boolean;

  user_uuid?: string;

  version?: number;
}

export namespace Identity {
  export interface DeviceSessions {
    last_authenticated?: number;
  }

  export interface DevicePosture {
    id?: string;

    check?: DevicePosture.Check;

    data?: unknown;

    description?: string;

    error?: string;

    rule_name?: string;

    success?: boolean;

    timestamp?: string;

    type?: string;
  }

  export namespace DevicePosture {
    export interface Check {
      exists?: boolean;

      path?: string;
    }
  }

  export interface IdP {
    id?: string;

    type?: string;
  }

  export interface MTLSAuth {
    auth_status?: string;

    cert_issuer_dn?: string;

    cert_issuer_ski?: string;

    cert_presented?: boolean;

    cert_serial?: string;
  }
}

export namespace LastSeenIdentity {
  export import Identity = LastSeenIdentityAPI.Identity;
}
