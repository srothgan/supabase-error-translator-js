/* German translations */

export default {
  // Fallback Error Code
  unknown_error: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
  // Auth Error Codes
  anonymous_provider_disabled: 'Anonyme Anmeldungen sind deaktiviert.',
  bad_code_verifier: 'Der Code-Verifier stimmt nicht mit dem erwarteten überein.',
  bad_json: 'Der Anfragekörper ist kein gültiges JSON.',
  bad_jwt: 'Das JWT im Authorization-Header ist ungültig oder abgelaufen.',
  bad_oauth_callback: 'Der OAuth-Callback enthält nicht alle erforderlichen Attribute.',
  bad_oauth_state: 'Der OAuth-State hat das falsche Format.',
  captcha_failed: 'Die CAPTCHA-Prüfung ist fehlgeschlagen.',
  conflict: 'Datenbankkonflikt – gleichzeitige Anfragen.',
  email_address_invalid: 'Ungültige E-Mail-Adresse.',
  email_address_not_authorized: 'E-Mail-Versand für diese Adresse ist nicht erlaubt.',
  email_conflict_identity_not_deletable:
    'Identität kann nicht entfernt werden, da sonst eine andere E-Mail doppelt wäre.',
  email_exists: 'Die E-Mail-Adresse existiert bereits.',
  email_not_confirmed: 'Anmeldung nicht erlaubt – E-Mail ist nicht bestätigt.',
  email_provider_disabled: 'Registrierung per E-Mail ist deaktiviert.',
  flow_state_expired: 'Der PKCE-Flow-State ist abgelaufen. Bitte erneut anmelden.',
  flow_state_not_found: 'Der PKCE-Flow-State wurde nicht gefunden. Bitte erneut anmelden.',
  hook_payload_invalid_content_type: 'Hook-Payload hat einen ungültigen Content-Type.',
  hook_payload_over_size_limit: 'Hook-Payload überschreitet die maximale Größe.',
  hook_timeout: 'Hook konnte nicht innerhalb der Zeit erreicht werden.',
  hook_timeout_after_retry: 'Hook konnte auch nach Wiederholungen nicht erreicht werden.',
  identity_already_exists: 'Diese Identität ist bereits verknüpft.',
  identity_not_found: 'Die angegebene Identität wurde nicht gefunden.',
  insufficient_aal: 'Höheres Authenticator Assurance Level erforderlich.',
  invite_not_found: 'Einladung ist abgelaufen oder wurde bereits verwendet.',
  invalid_credentials: 'Ungültige Anmeldeinformationen.',
  manual_linking_disabled: 'Manuelles Verknüpfen von Identitäten ist deaktiviert.',
  mfa_challenge_expired: 'Die MFA-Challenge ist abgelaufen. Bitte erneut anfordern.',
  mfa_factor_name_conflict: 'Es existiert bereits ein MFA-Faktor mit diesem Namen.',
  mfa_factor_not_found: 'Der angegebene MFA-Faktor wurde nicht gefunden.',
  mfa_ip_address_mismatch: 'MFA-Registrierung und -Verifizierung müssen von derselben IP erfolgen.',
  mfa_phone_enroll_not_enabled: 'Telefon-MFA-Registrierung ist deaktiviert.',
  mfa_phone_verify_not_enabled: 'Telefon-MFA-Verifizierung ist deaktiviert.',
  mfa_totp_enroll_not_enabled: 'TOTP-MFA-Registrierung ist deaktiviert.',
  mfa_totp_verify_not_enabled: 'TOTP-MFA-Verifizierung ist deaktiviert.',
  mfa_verification_failed: 'MFA-Verifizierung fehlgeschlagen. Falscher Code.',
  mfa_verification_rejected: 'MFA-Verifizierung wurde abgelehnt.',
  mfa_verified_factor_exists: 'Ein verifizierter MFA-Faktor existiert bereits.',
  mfa_web_authn_enroll_not_enabled: 'WebAuthn-MFA-Registrierung ist deaktiviert.',
  mfa_web_authn_verify_not_enabled: 'WebAuthn-MFA-Verifizierung ist deaktiviert.',
  no_authorization: 'Authorization-Header fehlt.',
  not_admin: 'Der Benutzer ist kein Administrator.',
  oauth_provider_not_supported: 'Dieser OAuth-Anbieter wird nicht unterstützt.',
  otp_disabled: 'Anmeldung per OTP ist deaktiviert.',
  otp_expired: 'OTP-Code ist abgelaufen. Bitte neu anfordern.',
  over_email_send_rate_limit: 'Zu viele E-Mails gesendet – bitte warten und erneut versuchen.',
  over_request_rate_limit: 'Zu viele Anfragen – bitte kurz warten.',
  over_sms_send_rate_limit: 'Zu viele SMS gesendet – bitte warten und erneut versuchen.',
  phone_exists: 'Telefonnummer existiert bereits.',
  phone_not_confirmed: 'Anmeldung nicht erlaubt – Telefonnummer ist nicht bestätigt.',
  phone_provider_disabled: 'Registrierung per Telefon ist deaktiviert.',
  provider_disabled: 'Dieser OAuth-Anbieter ist deaktiviert.',
  provider_email_needs_verification: 'Nach OAuth-Flow muss die E-Mail bestätigt werden.',
  reauthentication_needed: 'Erneute Authentifizierung erforderlich.',
  reauthentication_not_valid: 'Erneute Authentifizierung fehlgeschlagen. Falscher Code.',
  refresh_token_not_found: 'Erfrischungs-Token nicht gefunden.',
  refresh_token_already_used: 'Erfrischungs-Token wurde bereits verwendet.',
  request_timeout: 'Anfrage hat zu lange gedauert. Bitte erneut senden.',
  same_password: 'Neues Passwort muss sich vom alten unterscheiden.',
  saml_assertion_no_email: 'SAML-Assertion enthält keine E-Mail-Adresse.',
  saml_assertion_no_user_id: 'SAML-Assertion enthält keine Benutzer-ID.',
  saml_entity_id_mismatch: 'Die Entity-ID stimmt nicht mit der bestehenden überein.',
  saml_idp_already_exists: 'Dieser SAML-Provider ist bereits hinterlegt.',
  saml_idp_not_found: 'SAML-Provider nicht gefunden.',
  saml_metadata_fetch_failed: 'SAML-Metadaten konnten nicht abgerufen werden.',
  saml_provider_disabled: 'SAML-Anbieter ist deaktiviert.',
  saml_relay_state_expired: 'SAML-Relay-State abgelaufen. Bitte erneut anmelden.',
  saml_relay_state_not_found: 'SAML-Relay-State nicht gefunden. Bitte erneut anmelden.',
  session_expired: 'Sitzung ist abgelaufen.',
  session_not_found: 'Sitzung nicht gefunden.',
  signup_disabled: 'Registrierung ist deaktiviert.',
  single_identity_not_deletable: 'Mindestens eine Identität muss vorhanden bleiben.',
  sms_send_failed: 'SMS-Versand fehlgeschlagen.',
  sso_domain_already_exists: 'SSO-Domain ist bereits registriert.',
  sso_provider_not_found: 'SSO-Provider nicht gefunden.',
  too_many_enrolled_mfa_factors: 'Zu viele MFA-Faktoren registriert.',
  unexpected_audience: 'Unerwarteter Audience-Claim.',
  unexpected_failure: 'Unerwarteter Fehler. Bitte später erneut versuchen.',
  user_already_exists: 'Benutzer existiert bereits.',
  user_banned: 'Benutzer ist gesperrt.',
  user_not_found: 'Benutzer nicht gefunden.',
  user_sso_managed: 'SSO-verwalteter Benutzer kann nicht geändert werden.',
  validation_failed: 'Validierungsfehler in den übergebenen Parametern.',
  weak_password: 'Passwort erfüllt nicht die Stärke-Anforderungen.',

  // Realtime Error Codes
  RealtimeDisabledForConfiguration:
    'Die für Realtime bereitgestellte Konfiguration kann keine Postgres-Änderungen liefern. Überprüfen Sie Ihre Konfiguration beim Kanalstart, da Ihre Tabellen möglicherweise nicht richtig registriert sind.',
  TenantNotFound:
    'Der Tenant, zu dem Sie eine Verbindung herstellen möchten, existiert nicht. Überprüfen Sie, ob der Tenant-Name, zu dem Sie eine Verbindung herstellen möchten, in der Tabelle realtime.tenants existiert.',
  ErrorConnectingToWebSocket:
    'Fehler beim Versuch, eine Verbindung zum WebSocket-Server herzustellen. Überprüfen Sie Ihre Benutzerinformationen bei der Verbindung.',
  ErrorAuthorizingWebSocket:
    'Fehler beim Versuch, die WebSocket-Verbindung zu autorisieren. Überprüfen Sie Ihre Benutzerinformationen bei der Verbindung.',
  TableHasSpacesInName:
    'Die Tabelle, die Sie überwachen möchten, enthält Leerzeichen im Namen, die nicht unterstützt werden. Ändern Sie den Tabellennamen, um Leerzeichen zu entfernen.',
  UnableToDeleteTenant:
    'Fehler beim Versuch, einen Tenant zu löschen. Kontaktieren Sie den Support.',
  UnableToSetPolicies:
    'Fehler beim Einrichten von Autorisierungsrichtlinien. Kontaktieren Sie den Support.',
  UnableCheckoutConnection:
    'Fehler beim Versuch, eine Verbindung aus dem Tenant-Pool zu entnehmen. Kontaktieren Sie den Support.',
  UnableToSubscribeToPostgres:
    'Fehler beim Versuch, Postgres-Änderungen zu abonnieren. Kontaktieren Sie den Support.',
  ChannelRateLimitReached:
    'Die Anzahl der Kanäle, die Sie erstellen können, hat ihr Limit erreicht. Kontaktieren Sie den Support, um Ihre Ratenbegrenzungen zu erhöhen.',
  ConnectionRateLimitReached:
    'Die Anzahl der verbundenen Clients hat ihr Limit erreicht. Kontaktieren Sie den Support, um Ihre Ratenbegrenzungen zu erhöhen.',
  ClientJoinRateLimitReached:
    'Die Rate der Beitritte pro Sekunde von Ihren Clients hat die Kanallimits erreicht. Kontaktieren Sie den Support, um Ihre Ratenbegrenzungen zu erhöhen.',
  UnableToConnectToTenantDatabase:
    'Realtime konnte keine Verbindung zur Datenbank des Tenants herstellen. Kontaktieren Sie den Support für weitere Anweisungen.',
  RealtimeNodeDisconnected:
    'Realtime ist eine verteilte Anwendung und kann nicht mit einem der verteilten Knoten kommunizieren. Kontaktieren Sie den Support für weitere Anweisungen.',
  MigrationsFailedToRun:
    'Fehler beim Ausführen der von Realtime benötigten Migrationen gegen die Tenant-Datenbank. Kontaktieren Sie den Support für weitere Anweisungen.',
  ErrorStartingPostgresCDCStream:
    'Fehler beim Starten des Postgres CDC-Streams für Postgres-Änderungen. Kontaktieren Sie den Support für weitere Anweisungen.',
  UnknownDataProcessed:
    'Ein unbekannter Datentyp wurde vom Realtime-System verarbeitet. Kontaktieren Sie den Support für weitere Anweisungen.',
  ErrorStartingPostgresCDC:
    'Fehler beim Starten der Postgres CDC-Erweiterung für Postgres-Änderungen. Kontaktieren Sie den Support für weitere Anweisungen.',
  ReplicationSlotBeingUsed:
    'Der Replikationsslot wird von einer anderen Transaktion verwendet. Kontaktieren Sie den Support für weitere Anweisungen.',
  PoolingReplicationPreparationError:
    'Fehler bei der Vorbereitung des Replikationsslots. Kontaktieren Sie den Support für weitere Anweisungen.',
  PoolingReplicationError:
    'Fehler beim Pooling des Replikationsslots. Kontaktieren Sie den Support für weitere Anweisungen.',
  SubscriptionDeletionFailed:
    'Fehler beim Versuch, ein Abonnement für Postgres-Änderungen zu löschen. Kontaktieren Sie den Support für weitere Anweisungen.',
  UnableToDeletePhantomSubscriptions:
    'Fehler beim Versuch, Abonnements zu löschen, die nicht mehr verwendet werden. Kontaktieren Sie den Support für weitere Anweisungen.',
  UnableToCheckProcessesOnRemoteNode:
    'Fehler beim Versuch, die Prozesse auf einem Remote-Knoten zu überprüfen. Kontaktieren Sie den Support für weitere Anweisungen.',
  UnableToCreateCounter:
    'Fehler beim Versuch, einen Zähler zur Verfolgung von Ratenbegrenzungen für einen Tenant zu erstellen. Kontaktieren Sie den Support für weitere Anweisungen.',
  UnableToIncrementCounter:
    'Fehler beim Versuch, einen Zähler zur Verfolgung von Ratenbegrenzungen für einen Tenant zu erhöhen. Kontaktieren Sie den Support für weitere Anweisungen.',
  UnableToDecrementCounter:
    'Fehler beim Versuch, einen Zähler zur Verfolgung von Ratenbegrenzungen für einen Tenant zu verringern. Kontaktieren Sie den Support für weitere Anweisungen.',
  UnableToUpdateCounter:
    'Fehler beim Versuch, einen Zähler zur Verfolgung von Ratenbegrenzungen für einen Tenant zu aktualisieren. Kontaktieren Sie den Support für weitere Anweisungen.',
  UnableToFindCounter:
    'Fehler beim Versuch, einen Zähler zur Verfolgung von Ratenbegrenzungen für einen Tenant zu finden. Kontaktieren Sie den Support für weitere Anweisungen.',
  UnhandledProcessMessage:
    'Nicht behandelte Nachricht von einem Realtime-Prozess empfangen. Kontaktieren Sie den Support für weitere Anweisungen.',
  UnknownError:
    'Ein unbekannter Fehler ist aufgetreten. Kontaktieren Sie den Support für weitere Anweisungen',
};
