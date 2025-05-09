/* English translations */

export default {
  // Fallback Error Code
  unknown_error: 'An unexpected error occurred. Please try again later.',
  services: {
    // Auth-specific errors
    auth: {
      anonymous_provider_disabled: 'Anonymous sign‑ins are disabled.',
      bad_code_verifier:
        'Returned from the PKCE flow where the provided code verifier does not match the expected one. Indicates a bug in the implementation of the client library.',
      bad_json: 'Usually used when the HTTP body of the request is not valid JSON.',
      bad_jwt: 'JWT sent in the Authorization header is not valid.',
      bad_oauth_callback:
        'OAuth callback from provider to Auth does not have all the required attributes (state). Indicates an issue with the OAuth provider or client library implementation.',
      bad_oauth_state:
        'OAuth state (data echoed back by the OAuth provider to Supabase Auth) is not in the correct format. Indicates an issue with the OAuth provider integration.',
      captcha_failed:
        'CAPTCHA challenge could not be verified with the CAPTCHA provider. Check your CAPTCHA integration.',
      conflict:
        'General database conflict, such as concurrent requests on resources that should not be modified concurrently. Can often occur when you have too many session refresh requests firing off at the same time for a user. Check your app for concurrency issues, and if detected, back off exponentially.',
      email_address_invalid:
        'Example and test domains are currently not supported. Use a different email address.',
      email_address_not_authorized:
        'Email sending is not allowed for this address as your project is using the default SMTP service. Emails can only be sent to members in your Supabase organization. If you want to send emails to others, set up a custom SMTP provider.',
      email_conflict_identity_not_deletable:
        "Unlinking this identity causes the user's account to change to an email address which is already used by another user account. Indicates an issue where the user has two different accounts using different primary email addresses. You may need to migrate user data to one of their accounts in this case.",
      email_exists: 'Email address already exists in the system.',
      email_not_confirmed:
        'Signing in is not allowed for this user as the email address is not confirmed.',
      email_provider_disabled: 'Signups are disabled for email and password.',
      flow_state_expired:
        'PKCE flow state to which the API request relates has expired. Ask the user to sign in again.',
      flow_state_not_found:
        'PKCE flow state to which the API request relates no longer exists. Flow states expire after a while and are progressively cleaned up, which can cause this error. Retried requests can cause this error, as the previous request likely destroyed the flow state. Ask the user to sign in again.',
      hook_payload_invalid_content_type:
        'Payload from Auth does not have a valid Content-Type header.',
      hook_payload_over_size_limit: 'Payload from Auth exceeds maximum size limit.',
      hook_timeout: 'Unable to reach hook within maximum time allocated.',
      hook_timeout_after_retry: 'Unable to reach hook after maximum number of retries.',
      identity_already_exists: 'The identity to which the API relates is already linked to a user.',
      identity_not_found:
        'Identity to which the API call relates does not exist, such as when an identity is unlinked or deleted.',
      insufficient_aal:
        'To call this API, the user must have a higher Authenticator Assurance Level. To resolve, ask the user to solve an MFA challenge.',
      invite_not_found: 'Invite is expired or already used.',
      invalid_credentials: 'Login credentials or grant type not recognized.',
      manual_linking_disabled:
        'Calling the supabase.auth.linkUser() and related APIs is not enabled on the Auth server.',
      mfa_challenge_expired:
        'Responding to an MFA challenge should happen within a fixed time period. Request a new challenge when encountering this error.',
      mfa_factor_name_conflict:
        'MFA factors for a single user should not have the same friendly name.',
      mfa_factor_not_found: 'MFA factor no longer exists.',
      mfa_ip_address_mismatch:
        'The enrollment process for MFA factors must begin and end with the same IP address.',
      mfa_phone_enroll_not_enabled: 'Enrollment of MFA Phone factors is disabled.',
      mfa_phone_verify_not_enabled:
        'Login via Phone factors and verification of new Phone factors is disabled.',
      mfa_totp_enroll_not_enabled: 'Enrollment of MFA TOTP factors is disabled.',
      mfa_totp_verify_not_enabled:
        'Login via TOTP factors and verification of new TOTP factors is disabled.',
      mfa_verification_failed: 'MFA challenge could not be verified -- wrong TOTP code.',
      mfa_verification_rejected:
        'Further MFA verification is rejected. Only returned if the MFA verification attempt hook returns a reject decision.',
      mfa_verified_factor_exists:
        'Verified phone factor already exists for a user. Unenroll existing verified phone factor to continue.',
      mfa_web_authn_enroll_not_enabled: 'Enrollment of MFA Web Authn factors is disabled.',
      mfa_web_authn_verify_not_enabled:
        'Login via WebAuthn factors and verification of new WebAuthn factors is disabled.',
      no_authorization:
        'This HTTP request requires an Authorization header, which is not provided.',
      not_admin:
        'User accessing the API is not admin, i.e. the JWT does not contain a role claim that identifies them as an admin of the Auth server.',
      oauth_provider_not_supported: 'Using an OAuth provider which is disabled on the Auth server.',
      otp_disabled:
        "Sign in with OTPs (magic link, email OTP) is disabled. Check your server's configuration.",
      otp_expired: 'OTP code for this sign-in has expired. Ask the user to sign in again.',
      over_email_send_rate_limit:
        'Too many emails have been sent to this email address. Ask the user to wait a while before trying again.',
      over_request_rate_limit:
        'Too many requests have been sent by this client (IP address). Ask the user to try again in a few minutes. Sometimes can indicate a bug in your application that mistakenly sends out too many requests (such as a badly written useEffect React hook).',
      over_sms_send_rate_limit:
        'Too many SMS messages have been sent to this phone number. Ask the user to wait a while before trying again.',
      phone_exists: 'Phone number already exists in the system.',
      phone_not_confirmed:
        'Signing in is not allowed for this user as the phone number is not confirmed.',
      phone_provider_disabled: 'Signups are disabled for phone and password.',
      provider_disabled: "OAuth provider is disabled for use. Check your server's configuration.",
      provider_email_needs_verification:
        "Not all OAuth providers verify their user's email address. Supabase Auth requires emails to be verified, so this error is sent out when a verification email is sent after completing the OAuth flow.",
      reauthentication_needed:
        'A user needs to reauthenticate to change their password. Ask the user to reauthenticate by calling the supabase.auth.reauthenticate() API.',
      reauthentication_not_valid:
        'Verifying a reauthentication failed, the code is incorrect. Ask the user to enter a new code.',
      refresh_token_not_found: 'Session containing the refresh token not found.',
      refresh_token_already_used:
        'Refresh token has been revoked and falls outside the refresh token reuse interval. See the documentation on sessions for further information.',
      request_timeout: 'Processing the request took too long. Retry the request.',
      same_password:
        'A user that is updating their password must use a different password than the one currently used.',
      saml_assertion_no_email:
        "SAML assertion (user information) was received after sign in, but no email address was found in it, which is required. Check the provider's attribute mapping and/or configuration.",
      saml_assertion_no_user_id:
        "SAML assertion (user information) was received after sign in, but a user ID (called NameID) was not found in it, which is required. Check the SAML identity provider's configuration.",
      saml_entity_id_mismatch:
        '(Admin API.) Updating the SAML metadata for a SAML identity provider is not possible, as the entity ID in the update does not match the entity ID in the database. This is equivalent to creating a new identity provider, and you should do that instead.',
      saml_idp_already_exists:
        '(Admin API.) Adding a SAML identity provider that is already added.',
      saml_idp_not_found:
        'SAML identity provider not found. Most often returned after IdP-initiated sign-in with an unregistered SAML identity provider in Supabase Auth.',
      saml_metadata_fetch_failed:
        '(Admin API.) Adding or updating a SAML provider failed as its metadata could not be fetched from the provided URL.',
      saml_provider_disabled:
        'Using Enterprise SSO with SAML 2.0 is not enabled on the Auth server.',
      saml_relay_state_expired:
        'SAML relay state is an object that tracks the progress of a supabase.auth.signInWithSSO() request. The SAML identity provider should respond after a fixed amount of time, after which this error is shown. Ask the user to sign in again.',
      saml_relay_state_not_found:
        'SAML relay states are progressively cleaned up after they expire, which can cause this error. Ask the user to sign in again.',
      session_expired:
        'Session to which the API request relates has expired. This can occur if an inactivity timeout is configured, or the session entry has exceeded the configured timebox value. See the documentation on sessions for more information.',
      session_not_found:
        'Session to which the API request relates no longer exists. This can occur if the user has signed out, or the session entry in the database was deleted in some other way.',
      signup_disabled: 'Sign ups (new account creation) are disabled on the server.',
      single_identity_not_deletable:
        "Every user must have at least one identity attached to it, so deleting (unlinking) an identity is not allowed if it's the only one for the user.",
      sms_send_failed: 'Sending an SMS message failed. Check your SMS provider configuration.',
      sso_domain_already_exists:
        '(Admin API.) Only one SSO domain can be registered per SSO identity provider.',
      sso_provider_not_found:
        'SSO provider not found. Check the arguments in supabase.auth.signInWithSSO().',
      too_many_enrolled_mfa_factors: 'A user can only have a fixed number of enrolled MFA factors.',
      unexpected_audience:
        "(Deprecated feature not available via Supabase client libraries.) The request's X-JWT-AUD claim does not match the JWT's audience.",
      unexpected_failure:
        'Auth service is degraded or a bug is present, without a specific reason.',
      user_already_exists:
        'User with this information (email address, phone number) cannot be created again as it already exists.',
      user_banned:
        'User to which the API request relates has a banned_until property which is still active. No further API requests should be attempted until this field is cleared.',
      user_not_found: 'User to which the API request relates no longer exists.',
      user_sso_managed:
        'When a user comes from SSO, certain fields of the user cannot be updated (like email).',
      validation_failed: 'Provided parameters are not in the expected format.',
      weak_password:
        'User is signing up or changing their password without meeting the password strength criteria. Use the AuthWeakPasswordError class to access more information about what they need to do to make the password pass.',
    },
    // Realtime-specific errors
    realtime: {
      RealtimeDisabledForConfiguration:
        'The configuration provided to Realtime on connect will not be able to provide you any Postgres changes. Verify your configuration on channel startup as you might not have your tables properly registered.',
      TenantNotFound:
        'The tenant you are trying to connect to does not exist. Verify the tenant name you are trying to connect to exists in the realtime.tenants table.',
      ErrorConnectingToWebSocket:
        'Error when trying to connect to the WebSocket server. Verify your user information on connect.',
      ErrorAuthorizingWebSocket:
        'Error when trying to authorize the WebSocket connection. Verify your user information on connect.',
      TableHasSpacesInName:
        'The table you are trying to listen to has spaces in its name which are not supported. Change the table name to remove spaces.',
      UnableToDeleteTenant: 'Error when trying to delete a tenant. Contact Support.',
      UnableToSetPolicies: 'Error when setting up Authorization Policies. Contact Support.',
      UnableCheckoutConnection:
        'Error when trying to checkout a connection from the tenant pool. Contact Support.',
      UnableToSubscribeToPostgres:
        'Error when trying to subscribe to Postgres changes. Contact Support.',
      ChannelRateLimitReached:
        'The number of channels you can create has reached its limit. Contact support to increase your rate limits.',
      ConnectionRateLimitReached:
        'The number of connected clients has reached its limit. Contact support to increase your rate limits.',
      ClientJoinRateLimitReached:
        'The rate of joins per second from your clients has reached the channel limits. Contact support to increase your rate limits.',
      UnableToConnectToTenantDatabase:
        "Realtime was not able to connect to the tenant's database. Contact support for further instructions.",
      RealtimeNodeDisconnected:
        'Realtime is a distributed application and is unable to communicate with one of the distributed nodes. Contact support for further instructions.',
      MigrationsFailedToRun:
        'Error when running the migrations against the tenant database required by Realtime. Contact support for further instructions.',
      ErrorStartingPostgresCDCStream:
        'Error when starting the Postgres CDC stream used for Postgres changes. Contact support for further instructions.',
      UnknownDataProcessed:
        'An unknown data type was processed by the Realtime system. Contact support for further instructions.',
      ErrorStartingPostgresCDC:
        'Error when starting the Postgres CDC extension used for Postgres changes. Contact support for further instructions.',
      ReplicationSlotBeingUsed:
        'The replication slot is being used by another transaction. Contact support for further instructions.',
      PoolingReplicationPreparationError:
        'Error when preparing the replication slot. Contact support for further instructions.',
      PoolingReplicationError:
        'Error when pooling the replication slot. Contact support for further instructions.',
      SubscriptionDeletionFailed:
        'Error when trying to delete a subscription for Postgres changes. Contact support for further instructions.',
      UnableToDeletePhantomSubscriptions:
        'Error when trying to delete subscriptions that are no longer being used. Contact support for further instructions.',
      UnableToCheckProcessesOnRemoteNode:
        'Error when trying to check the processes on a remote node. Contact support for further instructions.',
      UnableToCreateCounter:
        'Error when trying to create a counter to track rate limits for a tenant. Contact support for further instructions.',
      UnableToIncrementCounter:
        'Error when trying to increment a counter to track rate limits for a tenant. Contact support for further instructions.',
      UnableToDecrementCounter:
        'Error when trying to decrement a counter to track rate limits for a tenant. Contact support for further instructions.',
      UnableToUpdateCounter:
        'Error when trying to update a counter to track rate limits for a tenant. Contact support for further instructions.',
      UnableToFindCounter:
        'Error when trying to find a counter to track rate limits for a tenant. Contact support for further instructions.',
      UnhandledProcessMessage:
        'Unhandled message received by a Realtime process. Contact support for further instructions.',
      UnknownError: 'An unknown error occurred. Contact support for further instructions',
    },
    // Storage-specific errors
    storage: {
      NoSuchBucket: 'The specified bucket does not exist.',
      NoSuchKey: 'The specified file does not exist.',
      NoSuchUpload: 'The specified upload does not exist.',
      InvalidJWT: 'The provided authentication token is invalid.',
      InvalidRequest: 'The request is not properly formed.',
      TenantNotFound: 'The specified tenant does not exist.',
      EntityTooLarge: 'The file being uploaded is too large.',
      InternalError: 'An internal server error occurred. Please try again later.',
      ResourceAlreadyExists: 'The specified resource already exists.',
      InvalidBucketName: 'The specified bucket name is invalid.',
      InvalidKey: 'The specified file key is invalid.',
      InvalidRange: 'The specified range is not valid.',
      InvalidMimeType: 'The specified file type is not valid.',
      InvalidUploadId: 'The specified upload ID is invalid.',
      KeyAlreadyExists: 'The specified file already exists.',
      BucketAlreadyExists: 'The specified bucket already exists.',
      DatabaseTimeout: 'Timeout occurred while accessing the database. Please try again later.',
      InvalidSignature: 'The signature provided does not match the calculated signature.',
      SignatureDoesNotMatch: 'The request signature does not match the calculated signature.',
      AccessDenied: 'Access to the specified resource is denied.',
      ResourceLocked: 'The specified resource is locked.',
      DatabaseError: 'An error occurred while accessing the database.',
      MissingContentLength: 'The Content-Length header is missing.',
      MissingParameter: 'A required parameter is missing in the request.',
      InvalidUploadSignature: 'The provided upload signature is invalid.',
      LockTimeout: 'Timeout occurred while waiting for a lock. Please try again later.',
      S3Error: 'An error occurred with the storage service.',
      S3InvalidAccessKeyId: 'The provided storage access key ID is invalid.',
      S3MaximumCredentialsLimit: 'The maximum number of credentials has been reached.',
      InvalidChecksum: 'The checksum of the file does not match.',
      MissingPart: 'A part of the file is missing.',
      SlowDown: 'Request rate is too high. Please try again later.',
    },
    // Database-specific errors
    database: {
      '08000': 'The connection to the database server was lost or could not be established.',
      '08003': 'The database connection being used is no longer active.',
      '08006': 'The attempt to connect to the database failed.',
      '0P000': 'The specified database name does not exist.',
      '22000': 'General error related to data processing; check the specific message for details.',
      '22001': 'The text you entered is too long for the database column.',
      '22002': 'A required value was missing when trying to insert or update data.',
      '22003': 'The number you entered is too large or too small for the database column.',
      '22004': 'A null value was used in an inappropriate context.',
      '22005': 'An invalid character was found in a numeric value.',
      '22007': 'The date or time value provided is not in a valid format.',
      '22008': 'The date or time value is out of the valid range.',
      '22012': 'You attempted to divide a number by zero.',
      '22018': 'An invalid character value was found for the character set.',
      '22019': 'An invalid escape character was found.',
      '22021': 'An invalid character value was found for the specified character set.',
      '22023': 'An invalid parameter value was used.',
      '22025': 'An invalid escape sequence was found.',
      '22026': 'The string data has an invalid length for the operation.',
      '22P01': 'A floating point exception occurred (e.g., overflow, underflow).',
      '22P02': 'The text you provided cannot be converted to the required data type.',
      '22P03': 'An invalid datetime value was provided.',
      '22P04': 'A null value was used where it is not allowed.',
      '22P05': 'An invalid value was provided for an XML document.',
      '23000': 'An integrity constraint was violated.',
      '23502': 'A required field was left empty (violates not-null constraint).',
      '23503': 'The linked record you referenced does not exist (violates foreign key constraint).',
      '23505': 'A record with this information already exists (violates unique constraint).',
      '23514':
        'The data you entered does not meet the required conditions (violates check constraint).',
      '25000': 'The current transaction state is invalid for the operation.',
      '25P02':
        'The current transaction was aborted; commands ignored until end of transaction block.',
      '28000': 'Authentication failed for the specified user.',
      '28P01': 'Authentication failed: Invalid password.',
      '3D000': 'The specified database does not exist.',
      '3F000': 'The specified schema does not exist.',
      '40001': 'A serialization failure occurred due to a concurrent update (try again).',
      '40P01': 'A deadlock was detected; the transaction has been rolled back.',
      '42000': 'A syntax error or access rule violation occurred.',
      '42501': 'You do not have the necessary permissions to perform this action.',
      '42601': 'There is a mistake in the database query or command (syntax error).',
      '42602': 'An invalid name was used for a database object.',
      '42701': 'A duplicate column name was used.',
      '42702': 'An ambiguous column reference was made.',
      '42703': 'The column you are trying to access does not exist.',
      '42704': 'The database object (like a sequence, type, or function) does not exist.',
      '42710': 'An object with this name already exists (duplicate object).',
      '42712': 'An ambiguous alias was used.',
      '42803': 'A grouping error occurred in the query.',
      '42804': 'The data type provided is not compatible with the column or operation.',
      '42830': 'An invalid foreign key definition was made.',
      '42883':
        'The function or operator you are trying to use does not exist with the given arguments.',
      '42P01': 'The table you are trying to access does not exist.',
      '42P02': 'A parameter used in the query is not defined.',
      '42P07': 'A table with this name already exists.',
      '42P18': 'An indeterminate data type was used where a specific type is required.',
      '53000': 'The database server is experiencing resource limitations.',
      '53100': 'The database server has run out of disk space.',
      '53200': 'The database server has run out of memory.',
      '53300': 'The maximum number of allowed database connections has been reached.',
      '54000': 'A program limit was exceeded (e.g., too many columns, too complex query).',
      '54001': 'A statement was too complex.',
      '54011': 'Too many columns were specified.',
      '54023': 'Too much memory was requested by the operation.',
      '55000': 'The database object is not in the correct state for the requested operation.',
      '55006': 'The database object is currently being used by another process.',
      '55P03': 'The lock you are trying to acquire is not available.',
      '57014': 'The query was canceled by the user or an administrator.',
      '58P01': 'Could not access a required file or resource.',
      P0001: 'A custom error occurred as defined by the database (check the message for details).',
      P0002: 'Your query returned no results when at least one was expected.',
      P0003: 'Too many rows were returned by a subquery that expects a single result.',
      P0004: 'A status code indicates an assertion failure.',
      PGRST000: 'Could not connect to the database.',
      PGRST001: 'The database role for the connection is invalid.',
      PGRST002: 'The database schema is not accessible.',
      PGRST100: 'The schema cache could not be loaded.',
      PGRST101: 'The JWT token is invalid or expired.',
      PGRST102: 'The JWT secret is missing or incorrect.',
      PGRST103: 'The JWT role claim is invalid or could not be parsed.',
      PGRST105: 'The database role specified in the JWT does not exist.',
      PGRST106: 'The server configuration is invalid.',
      PGRST107: 'The requested media type is not supported.',
      PGRST108: 'The requested schema is not exposed.',
      PGRST109: 'The requested table/view is not exposed in the schema.',
      PGRST110: 'The requested function is not exposed or does not exist.',
      PGRST111: 'Attempted to call a volatile function with GET request.',
      PGRST112: 'The request body is malformed or unparseable.',
      PGRST113: 'The query parameter is invalid or malformed.',
      PGRST114: 'The HTTP header is invalid or malformed.',
      PGRST116: 'The request violates a security policy (e.g., RLS).',
      PGRST117: 'The requested resource could not be found.',
      PGRST200: 'The query string contains an invalid parameter.',
      PGRST201: 'The request body is missing or malformed for the operation.',
      PGRST202: 'The requested range is not satisfiable.',
      PGRST203: 'The request contains an invalid filter or order parameter.',
      PGRST204:
        "The specified column could not be found in the table's schema cache; check schema exposure or column existence.",
      PGRST300: 'An error occurred during a bulk insert or update.',
      PGRST301: 'The requested action is not allowed on the resource.',
      PGRST302: 'The number of rows affected by the operation does not match expectations.',
    },

    // Functions-specific errors
    functions: {},
  },
};
