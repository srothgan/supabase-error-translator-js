/* French translations */

export default {
  // Fallback Error Code
  unknown_error: 'Une erreur inattendue est survenue. Veuillez réessayer plus tard.',
  services: {
    // Auth-specific errors
    auth: {
      anonymous_provider_disabled: 'Les connexions anonymes sont désactivées.',
      bad_code_verifier: 'Le code-verifier ne correspond pas à celui attendu.',
      bad_json: "Le corps de la requête n'est pas un JSON valide.",
      bad_jwt: "Le JWT dans l'en-tête Authorization est invalide ou expiré.",
      bad_oauth_callback: 'Le callback OAuth est incomplet.',
      bad_oauth_state: 'Le paramètre OAuth state a un format incorrect.',
      captcha_failed: 'La vérification CAPTCHA a échoué.',
      conflict: 'Conflit de base de données – requêtes concurrentes.',
      email_address_invalid: 'Adresse e-mail invalide.',
      email_address_not_authorized: "Envoi d'e-mail non autorisé pour cette adresse.",
      email_conflict_identity_not_deletable:
        "Impossible de détacher cette identité sans conflit d'e-mail.",
      email_exists: 'Cette adresse e-mail existe déjà.',
      email_not_confirmed: 'Connexion impossible – e-mail non confirmé.',
      email_provider_disabled: 'Inscription par e-mail désactivée.',
      flow_state_expired: 'Le state PKCE est expiré. Veuillez vous reconnecter.',
      flow_state_not_found: 'Le state PKCE est introuvable. Veuillez vous reconnecter.',
      hook_payload_invalid_content_type: 'Le payload du hook a un Content-Type invalide.',
      hook_payload_over_size_limit: 'Le payload du hook dépasse la taille maximale.',
      hook_timeout: 'Impossible de joindre le hook à temps.',
      hook_timeout_after_retry: 'Impossible de joindre le hook après plusieurs tentatives.',
      identity_already_exists: 'Cette identité est déjà liée.',
      identity_not_found: 'Identité introuvable.',
      insufficient_aal: "Un niveau d'authentification plus élevé est requis.",
      invite_not_found: 'Invitation expirée ou déjà utilisée.',
      invalid_credentials: 'Identifiants invalides.',
      manual_linking_disabled: "Le rattachement manuel d'identités est désactivé.",
      mfa_challenge_expired: 'Le challenge MFA est expiré. Veuillez en demander un nouveau.',
      mfa_factor_name_conflict: 'Conflit de nom pour un facteur MFA.',
      mfa_factor_not_found: 'Facteur MFA introuvable.',
      mfa_ip_address_mismatch: "L'IP utilisée lors du challenge MFA ne correspond pas.",
      mfa_phone_enroll_not_enabled: 'Inscription MFA par téléphone désactivée.',
      mfa_phone_verify_not_enabled: 'Vérification MFA par téléphone désactivée.',
      mfa_totp_enroll_not_enabled: 'Inscription MFA TOTP désactivée.',
      mfa_totp_verify_not_enabled: 'Vérification MFA TOTP désactivée.',
      mfa_verification_failed: 'Échec de la vérification MFA – code incorrect.',
      mfa_verification_rejected: 'Vérification MFA rejetée.',
      mfa_verified_factor_exists: 'Un facteur MFA vérifié existe déjà.',
      mfa_web_authn_enroll_not_enabled: 'Inscription WebAuthn désactivée.',
      mfa_web_authn_verify_not_enabled: 'Vérification WebAuthn désactivée.',
      no_authorization: 'En-tête Authorization manquant.',
      not_admin: 'Utilisateur non administrateur.',
      oauth_provider_not_supported: 'Fournisseur OAuth non pris en charge.',
      otp_disabled: 'Connexion par OTP désactivée.',
      otp_expired: 'Code OTP expiré. Veuillez réessayer.',
      over_email_send_rate_limit: "Trop d'e-mails envoyés – veuillez patienter.",
      over_request_rate_limit: 'Trop de requêtes – veuillez patienter.',
      over_sms_send_rate_limit: 'Trop de SMS envoyés – veuillez patienter.',
      phone_exists: 'Numéro de téléphone déjà utilisé.',
      phone_not_confirmed: 'Connexion impossible – téléphone non confirmé.',
      phone_provider_disabled: 'Inscription par téléphone désactivée.',
      provider_disabled: 'Fournisseur OAuth désactivé.',
      provider_email_needs_verification: "Une vérification d'e-mail est requise après OAuth.",
      reauthentication_needed: 'Nouvelle authentification requise.',
      reauthentication_not_valid: 'Ré-authentification invalide – code incorrect.',
      refresh_token_not_found: 'Jeton de rafraîchissement introuvable.',
      refresh_token_already_used: 'Jeton de rafraîchissement déjà utilisé.',
      request_timeout: 'La requête a pris trop de temps. Réessayez.',
      same_password: 'Le nouveau mot de passe doit être différent.',
      saml_assertion_no_email: 'Assertion SAML sans adresse e-mail.',
      saml_assertion_no_user_id: 'Assertion SAML sans ID utilisateur.',
      saml_entity_id_mismatch: "L'entity ID SAML ne correspond pas.",
      saml_idp_already_exists: 'Ce fournisseur SAML existe déjà.',
      saml_idp_not_found: 'Fournisseur SAML introuvable.',
      saml_metadata_fetch_failed: 'Échec de récupération des métadonnées SAML.',
      saml_provider_disabled: 'Fournisseur SAML désactivé.',
      saml_relay_state_expired: 'Le relay state SAML a expiré. Réessayez.',
      saml_relay_state_not_found: 'Relay state SAML introuvable. Réessayez.',
      session_expired: 'Session expirée.',
      session_not_found: 'Session introuvable.',
      signup_disabled: 'Inscription désactivée.',
      single_identity_not_deletable: 'Au moins une identité doit rester liée.',
      sms_send_failed: "Échec d'envoi du SMS.",
      sso_domain_already_exists: 'Domaine SSO déjà enregistré.',
      sso_provider_not_found: 'Fournisseur SSO introuvable.',
      too_many_enrolled_mfa_factors: 'Trop de facteurs MFA enregistrés.',
      unexpected_audience: 'Audience inattendue.',
      unexpected_failure: 'Erreur inattendue. Réessayez plus tard.',
      user_already_exists: "L'utilisateur existe déjà.",
      user_banned: 'Utilisateur banni.',
      user_not_found: 'Utilisateur introuvable.',
      user_sso_managed: 'Utilisateur SSO non modifiable.',
      validation_failed: 'Échec de la validation des paramètres.',
      weak_password: 'Mot de passe trop faible.',
    },
    // Realtime-specific errors
    realtime: {
      RealtimeDisabledForConfiguration:
        'La configuration fournie à Realtime ne pourra pas fournir de changements Postgres. Vérifiez votre configuration au démarrage du canal, car vos tables pourraient ne pas être correctement enregistrées.',
      TenantNotFound:
        "Le locataire auquel vous essayez de vous connecter n'existe pas. Vérifiez que le nom du locataire auquel vous essayez de vous connecter existe dans la table realtime.tenants.",
      ErrorConnectingToWebSocket:
        'Erreur lors de la tentative de connexion au serveur WebSocket. Vérifiez vos informations utilisateur lors de la connexion.',
      ErrorAuthorizingWebSocket:
        "Erreur lors de la tentative d'autorisation de la connexion WebSocket. Vérifiez vos informations utilisateur lors de la connexion.",
      TableHasSpacesInName:
        "La table que vous essayez d'écouter contient des espaces dans son nom, ce qui n'est pas pris en charge. Changez le nom de la table pour supprimer les espaces.",
      UnableToDeleteTenant:
        "Erreur lors de la tentative de suppression d'un locataire. Contactez le support.",
      UnableToSetPolicies:
        "Erreur lors de la configuration des politiques d'autorisation. Contactez le support.",
      UnableCheckoutConnection:
        "Erreur lors de la tentative de récupération d'une connexion du pool de locataires. Contactez le support.",
      UnableToSubscribeToPostgres:
        "Erreur lors de la tentative d'abonnement aux changements Postgres. Contactez le support.",
      ChannelRateLimitReached:
        'Le nombre de canaux que vous pouvez créer a atteint sa limite. Contactez le support pour augmenter vos limites de taux.',
      ConnectionRateLimitReached:
        'Le nombre de clients connectés a atteint sa limite. Contactez le support pour augmenter vos limites de taux.',
      ClientJoinRateLimitReached:
        'Le taux de jointures par seconde de vos clients a atteint les limites du canal. Contactez le support pour augmenter vos limites de taux.',
      UnableToConnectToTenantDatabase:
        "Realtime n'a pas pu se connecter à la base de données du locataire. Contactez le support pour plus d'instructions.",
      RealtimeNodeDisconnected:
        "Realtime est une application distribuée et ne peut pas communiquer avec l'un des nœuds distribués. Contactez le support pour plus d'instructions.",
      MigrationsFailedToRun:
        "Erreur lors de l'exécution des migrations requises par Realtime contre la base de données du locataire. Contactez le support pour plus d'instructions.",
      ErrorStartingPostgresCDCStream:
        "Erreur lors du démarrage du flux CDC Postgres utilisé pour les changements Postgres. Contactez le support pour plus d'instructions.",
      UnknownDataProcessed:
        "Un type de données inconnu a été traité par le système Realtime. Contactez le support pour plus d'instructions.",
      ErrorStartingPostgresCDC:
        "Erreur lors du démarrage de l'extension CDC Postgres utilisée pour les changements Postgres. Contactez le support pour plus d'instructions.",
      ReplicationSlotBeingUsed:
        "Le slot de réplication est utilisé par une autre transaction. Contactez le support pour plus d'instructions.",
      PoolingReplicationPreparationError:
        "Erreur lors de la préparation du slot de réplication. Contactez le support pour plus d'instructions.",
      PoolingReplicationError:
        "Erreur lors du pooling du slot de réplication. Contactez le support pour plus d'instructions.",
      SubscriptionDeletionFailed:
        "Erreur lors de la tentative de suppression d'un abonnement pour les changements Postgres. Contactez le support pour plus d'instructions.",
      UnableToDeletePhantomSubscriptions:
        "Erreur lors de la tentative de suppression d'abonnements qui ne sont plus utilisés. Contactez le support pour plus d'instructions.",
      UnableToCheckProcessesOnRemoteNode:
        "Erreur lors de la tentative de vérification des processus sur un nœud distant. Contactez le support pour plus d'instructions.",
      UnableToCreateCounter:
        "Erreur lors de la tentative de création d'un compteur pour suivre les limites de taux pour un locataire. Contactez le support pour plus d'instructions.",
      UnableToIncrementCounter:
        "Erreur lors de la tentative d'incrémentation d'un compteur pour suivre les limites de taux pour un locataire. Contactez le support pour plus d'instructions.",
      UnableToDecrementCounter:
        "Erreur lors de la tentative de décrémentation d'un compteur pour suivre les limites de taux pour un locataire. Contactez le support pour plus d'instructions.",
      UnableToUpdateCounter:
        "Erreur lors de la tentative de mise à jour d'un compteur pour suivre les limites de taux pour un locataire. Contactez le support pour plus d'instructions.",
      UnableToFindCounter:
        "Erreur lors de la tentative de recherche d'un compteur pour suivre les limites de taux pour un locataire. Contactez le support pour plus d'instructions.",
      UnhandledProcessMessage:
        "Message non géré reçu par un processus Realtime. Contactez le support pour plus d'instructions.",
      UnknownError:
        "Une erreur inconnue s'est produite. Contactez le support pour plus d'instructions",
    },
    // Storage-specific errors
    storage: {
      NoSuchBucket: "Le compartiment spécifié n'existe pas.",
      NoSuchKey: "La clé spécifiée n'existe pas.",
      NoSuchUpload: "Le téléversement spécifié n'existe pas.",
      InvalidJWT: 'Le JWT (JSON Web Token) fourni est invalide.',
      InvalidRequest: "La requête n'est pas correctement formée.",
      TenantNotFound: "Le locataire (tenant) spécifié n'existe pas.",
      EntityTooLarge: "L'entité en cours de téléversement est trop volumineuse.",
      InternalError: "Une erreur interne du serveur s'est produite.",
      ResourceAlreadyExists: 'La ressource spécifiée existe déjà.',
      InvalidBucketName: 'Le nom du compartiment spécifié est invalide.',
      InvalidKey: 'La clé spécifiée est invalide.',
      InvalidRange: "La plage spécifiée n'est pas valide.",
      InvalidMimeType: "Le type MIME spécifié n'est pas valide.",
      InvalidUploadId: "L'ID de téléversement spécifié est invalide.",
      KeyAlreadyExists: 'La clé spécifiée existe déjà.',
      BucketAlreadyExists: 'Le compartiment spécifié existe déjà.',
      DatabaseTimeout: "Délai d'attente dépassé lors de l'accès à la base de données.",
      InvalidSignature: 'La signature fournie ne correspond pas à la signature calculée.',
      SignatureDoesNotMatch:
        'La signature de la requête ne correspond pas à la signature calculée.',
      AccessDenied: "L'accès à la ressource spécifiée est refusé.",
      ResourceLocked: 'La ressource spécifiée est verrouillée.',
      DatabaseError: "Une erreur s'est produite lors de l'accès à la base de données.",
      MissingContentLength: "L'en-tête Content-Length est manquant.",
      MissingParameter: 'Un paramètre requis est manquant dans la requête.',
      InvalidUploadSignature: 'La signature de téléversement fournie est invalide.',
      LockTimeout: "Délai d'attente dépassé en attendant un verrou.",
      S3Error: "Une erreur liée à Amazon S3 s'est produite.",
      S3InvalidAccessKeyId: "L'ID de clé d'accès AWS fourni est invalide.",
      S3MaximumCredentialsLimit: "Le nombre maximum d'identifiants a été atteint.",
      InvalidChecksum: "La somme de contrôle de l'entité ne correspond pas.",
      MissingPart: "Une partie de l'entité est manquante.",
      SlowDown: 'Le taux de requêtes est trop élevé et a été limité (throttled).',
    },
    // Database-specific errors
    database: {},
    // Functions-specific errors
    functions: {},
  },
};
