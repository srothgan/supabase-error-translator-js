/* German translations */

export default {
  // Fallback Error Code
  unknown_error: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
  services: {
    // Auth-specific errors
    auth: {
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
      mfa_ip_address_mismatch:
        'MFA-Registrierung und -Verifizierung müssen von derselben IP erfolgen.',
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
    },
    // Realtime-specific errors
    realtime: {
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
    },
    // Storage-specific errors
    storage: {
      NoSuchBucket: 'Der angegebene Bucket existiert nicht.',
      NoSuchKey: 'Der angegebene Schlüssel existiert nicht.',
      NoSuchUpload: 'Der angegebene Upload existiert nicht.',
      InvalidJWT: 'Das bereitgestellte JWT (JSON Web Token) ist ungültig.',
      InvalidRequest: 'Die Anfrage ist nicht korrekt formatiert.',
      TenantNotFound: 'Der angegebene Mandant existiert nicht.',
      EntityTooLarge: 'Die hochzuladende Entität ist zu groß.',
      InternalError: 'Ein interner Serverfehler ist aufgetreten.',
      ResourceAlreadyExists: 'Die angegebene Ressource existiert bereits.',
      InvalidBucketName: 'Der angegebene Bucket-Name ist ungültig.',
      InvalidKey: 'Der angegebene Schlüssel ist ungültig.',
      InvalidRange: 'Der angegebene Bereich ist ungültig.',
      InvalidMimeType: 'Der angegebene MIME-Typ ist ungültig.',
      InvalidUploadId: 'Die angegebene Upload-ID ist ungültig.',
      KeyAlreadyExists: 'Der angegebene Schlüssel existiert bereits.',
      BucketAlreadyExists: 'Der angegebene Bucket existiert bereits.',
      DatabaseTimeout: 'Zeitüberschreitung beim Zugriff auf die Datenbank.',
      InvalidSignature:
        'Die bereitgestellte Signatur stimmt nicht mit der berechneten Signatur überein.',
      SignatureDoesNotMatch:
        'Die Signatur der Anfrage stimmt nicht mit der berechneten Signatur überein.',
      AccessDenied: 'Der Zugriff auf die angegebene Ressource wurde verweigert.',
      ResourceLocked: 'Die angegebene Ressource ist gesperrt.',
      DatabaseError: 'Beim Zugriff auf die Datenbank ist ein Fehler aufgetreten.',
      MissingContentLength: 'Der Content-Length-Header fehlt.',
      MissingParameter: 'Ein erforderlicher Parameter fehlt in der Anfrage.',
      InvalidUploadSignature: 'Die bereitgestellte Upload-Signatur ist ungültig.',
      LockTimeout: 'Zeitüberschreitung beim Warten auf eine Sperre.',
      S3Error: 'Ein Fehler im Zusammenhang mit Amazon S3 ist aufgetreten.',
      S3InvalidAccessKeyId: 'Die bereitgestellte AWS Access Key ID ist ungültig.',
      S3MaximumCredentialsLimit: 'Die maximale Anzahl an Anmeldeinformationen wurde erreicht.',
      InvalidChecksum: 'Die Prüfsumme der Entität stimmt nicht überein.',
      MissingPart: 'Ein Teil der Entität fehlt.',
      SlowDown: 'Die Anfragerate ist zu hoch und wurde gedrosselt',
    },
    // Database-specific errors
    database: {
      '08000':
        'Die Verbindung zum Datenbankserver wurde unterbrochen oder konnte nicht hergestellt werden.',
      '08003': 'Die verwendete Datenbankverbindung ist nicht mehr aktiv.',
      '08006': 'Der Versuch, eine Verbindung zur Datenbank herzustellen, ist fehlgeschlagen.',
      '0P000': 'Der angegebene Datenbankname existiert nicht.',
      '22000':
        'Allgemeiner Fehler bei der Datenverarbeitung; prüfen Sie die spezifische Meldung für Details.',
      '22001': 'Der eingegebene Text ist zu lang für die Datenbankspalte.',
      '22002':
        'Ein erforderlicher Wert fehlte beim Versuch, Daten einzufügen oder zu aktualisieren.',
      '22003': 'Die eingegebene Zahl ist zu groß oder zu klein für die Datenbankspalte.',
      '22004': 'Ein Nullwert wurde in einem unzulässigen Kontext verwendet.',
      '22005': 'Ein ungültiges Zeichen wurde in einem numerischen Wert gefunden.',
      '22007': 'Das angegebene Datums- oder Zeitformat ist ungültig.',
      '22008': 'Der Datums- oder Zeitwert liegt außerhalb des gültigen Bereichs.',
      '22012': 'Es wurde versucht, eine Zahl durch Null zu teilen.',
      '22018': 'Für den Zeichensatz wurde ein ungültiger Zeichenwert gefunden.',
      '22019': 'Ein ungültiges Escape-Zeichen wurde gefunden.',
      '22021': 'Für den angegebenen Zeichensatz wurde ein ungültiger Zeichenwert gefunden.',
      '22023': 'Ein ungültiger Parameterwert wurde verwendet.',
      '22025': 'Eine ungültige Escape-Sequenz wurde gefunden.',
      '22026': 'Die Zeichenfolgedaten haben eine ungültige Länge für die Operation.',
      '22P01': 'Eine Gleitkomma-Ausnahme ist aufgetreten (z.B. Überlauf, Unterlauf).',
      '22P02':
        'Der angegebene Text konnte nicht in den erforderlichen Datentyp konvertiert werden.',
      '22P03': 'Ein ungültiger Datums-/Zeitwert wurde angegeben.',
      '22P04': 'Ein Nullwert wurde verwendet, wo er nicht erlaubt ist.',
      '22P05': 'Für ein XML-Dokument wurde ein ungültiger Wert angegeben.',
      '23000': 'Eine Integritätsbedingung wurde verletzt.',
      '23502': 'Ein Pflichtfeld wurde leer gelassen (verletzt NOT-NULL-Bedingung).',
      '23503':
        'Der verknüpfte Datensatz, auf den Sie verwiesen haben, existiert nicht (verletzt Fremdschlüsselbedingung).',
      '23505':
        'Ein Datensatz mit diesen Informationen existiert bereits (verletzt UNIQUE-Bedingung).',
      '23514':
        'Die eingegebenen Daten erfüllen nicht die erforderlichen Bedingungen (verletzt CHECK-Bedingung).',
      '25000': 'Der aktuelle Transaktionsstatus ist für die Operation ungültig.',
      '25P02':
        'Die aktuelle Transaktion wurde abgebrochen; Befehle werden bis zum Ende des Transaktionsblocks ignoriert.',
      '28000': 'Die Authentifizierung für den angegebenen Benutzer ist fehlgeschlagen.',
      '28P01': 'Authentifizierung fehlgeschlagen: Ungültiges Passwort.',
      '3D000': 'Die angegebene Datenbank existiert nicht.',
      '3F000': 'Das angegebene Schema existiert nicht.',
      '40001':
        'Ein Serialisierungsfehler ist aufgrund einer gleichzeitigen Aktualisierung aufgetreten (bitte erneut versuchen).',
      '40P01': 'Ein Deadlock wurde erkannt; die Transaktion wurde zurückgesetzt.',
      '42000': 'Ein Syntaxfehler oder eine Zugriffsregelverletzung ist aufgetreten.',
      '42501':
        'Sie verfügen nicht über die erforderlichen Berechtigungen, um diese Aktion auszuführen.',
      '42601':
        'Es ist ein Fehler in der Datenbankabfrage oder im Befehl aufgetreten (Syntaxfehler).',
      '42602': 'Für ein Datenbankobjekt wurde ein ungültiger Name verwendet.',
      '42701': 'Ein doppelter Spaltenname wurde verwendet.',
      '42702': 'Ein mehrdeutiger Spaltenverweis wurde verwendet.',
      '42703': 'Die Spalte, auf die Sie zugreifen möchten, existiert nicht.',
      '42704':
        'Das Datenbankobjekt (wie eine Sequenz, ein Typ oder eine Funktion) existiert nicht.',
      '42710': 'Ein Objekt mit diesem Namen existiert bereits (doppeltes Objekt).',
      '42712': 'Ein mehrdeutiger Alias wurde verwendet.',
      '42803': 'Ein Gruppierungsfehler ist in der Abfrage aufgetreten.',
      '42804': 'Der angegebene Datentyp ist nicht mit der Spalte oder Operation kompatibel.',
      '42830': 'Eine ungültige Fremdschlüsseldefinition wurde erstellt.',
      '42883':
        'Die Funktion oder der Operator, den Sie verwenden möchten, existiert nicht mit den angegebenen Argumenten.',
      '42P01': 'Die Tabelle, auf die Sie zugreifen möchten, existiert nicht.',
      '42P02': 'Ein in der Abfrage verwendeter Parameter ist nicht definiert.',
      '42P07': 'Eine Tabelle mit diesem Namen existiert bereits.',
      '42P18':
        'Ein unbestimmter Datentyp wurde verwendet, wo ein spezifischer Typ erforderlich ist.',
      '53000': 'Der Datenbankserver hat Ressourcenbeschränkungen.',
      '53100': 'Dem Datenbankserver ist der Speicherplatz ausgegangen.',
      '53200': 'Dem Datenbankserver ist der Arbeitsspeicher ausgegangen.',
      '53300': 'Die maximal zulässige Anzahl von Datenbankverbindungen wurde erreicht.',
      '54000':
        'Ein Programmlimit wurde überschritten (z.B. zu viele Spalten, zu komplexe Abfrage).',
      '54001': 'Eine Anweisung war zu komplex.',
      '54011': 'Es wurden zu viele Spalten angegeben.',
      '54023': 'Für die Operation wurde zu viel Speicher angefordert.',
      '55000':
        'Das Datenbankobjekt befindet sich nicht im korrekten Zustand für die angeforderte Operation.',
      '55006': 'Das Datenbankobjekt wird derzeit von einem anderen Prozess verwendet.',
      '55P03': 'Die Sperre, die Sie erwerben möchten, ist nicht verfügbar.',
      '57014': 'Die Abfrage wurde vom Benutzer oder einem Administrator abgebrochen.',
      '58P01': 'Auf eine erforderliche Datei oder Ressource konnte nicht zugegriffen werden.',
      P0001:
        'Ein benutzerdefinierter Fehler ist gemäß Datenbankdefinition aufgetreten (Details in der Meldung prüfen).',
      P0002: 'Ihre Abfrage lieferte keine Ergebnisse, obwohl mindestens eines erwartet wurde.',
      P0003:
        'Eine Unterabfrage, die ein einzelnes Ergebnis erwartet, hat zu viele Zeilen zurückgegeben.',
      P0004: 'Ein Statuscode weist auf einen Assertionsfehler hin.',
      PGRST000: 'Verbindung zur Datenbank konnte nicht hergestellt werden.',
      PGRST001: 'Die Datenbankrolle für die Verbindung ist ungültig.',
      PGRST002: 'Auf das Datenbankschema kann nicht zugegriffen werden.',
      PGRST100: 'Der Schema-Cache konnte nicht geladen werden.',
      PGRST101: 'Das JWT-Token ist ungültig oder abgelaufen.',
      PGRST102: 'Das JWT-Secret fehlt oder ist falsch.',
      PGRST103:
        'Der JWT-Rollenanspruch (role claim) ist ungültig oder konnte nicht analysiert werden.',
      PGRST105: 'Die im JWT angegebene Datenbankrolle existiert nicht.',
      PGRST106: 'Die Serverkonfiguration ist ungültig.',
      PGRST107: 'Der angeforderte Medientyp wird nicht unterstützt.',
      PGRST108: 'Das angeforderte Schema ist nicht freigegeben (exposed).',
      PGRST109: 'Die angeforderte Tabelle/Sicht ist im Schema nicht freigegeben (exposed).',
      PGRST110: 'Die angeforderte Funktion ist nicht freigegeben (exposed) oder existiert nicht.',
      PGRST111:
        'Es wurde versucht, eine veränderliche (volatile) Funktion mit einer GET-Anfrage aufzurufen.',
      PGRST112: 'Der Anfragekörper (request body) ist fehlerhaft oder nicht analysierbar.',
      PGRST113: 'Der Abfrageparameter ist ungültig oder fehlerhaft.',
      PGRST114: 'Der HTTP-Header ist ungültig oder fehlerhaft.',
      PGRST116: 'Die Anfrage verstößt gegen eine Sicherheitsrichtlinie (z.B. RLS).',
      PGRST117: 'Die angeforderte Ressource konnte nicht gefunden werden.',
      PGRST200: 'Der Abfragestring (query string) enthält einen ungültigen Parameter.',
      PGRST201: 'Der Anfragekörper (request body) fehlt oder ist für die Operation fehlerhaft.',
      PGRST202: 'Der angeforderte Bereich (range) ist nicht erfüllbar.',
      PGRST203: 'Die Anfrage enthält einen ungültigen Filter- oder Sortierparameter.',
      PGRST204:
        'Die angegebene Spalte konnte im Schema-Cache der Tabelle nicht gefunden werden; prüfen Sie die Schema-Freigabe oder die Existenz der Spalte.',
      PGRST300: 'Bei einer Masseneinfügung oder -aktualisierung ist ein Fehler aufgetreten.',
      PGRST301: 'Die angeforderte Aktion ist für die Ressource nicht zulässig.',
      PGRST302:
        'Die Anzahl der von der Operation betroffenen Zeilen entspricht nicht den Erwartungen.',
    },

    // Functions-specific errors
    functions: {},
  },
};
