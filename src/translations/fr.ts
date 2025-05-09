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
    database: {
      '08000':
        "La connexion au serveur de base de données a été perdue ou n'a pas pu être établie.",
      '08003': "La connexion à la base de données utilisée n'est plus active.",
      '08006': 'La tentative de connexion à la base de données a échoué.',
      '0P000': "Le nom de base de données spécifié n'existe pas.",
      '22000':
        'Erreur générale liée au traitement des données ; vérifiez le message spécifique pour plus de détails.',
      '22001': 'Le texte que vous avez saisi est trop long pour la colonne de la base de données.',
      '22002':
        "Une valeur requise manquait lors de la tentative d'insertion ou de mise à jour des données.",
      '22003':
        'Le nombre que vous avez saisi est trop grand ou trop petit pour la colonne de la base de données.',
      '22004': 'Une valeur nulle a été utilisée dans un contexte inapproprié.',
      '22005': 'Un caractère invalide a été trouvé dans une valeur numérique.',
      '22007': "La valeur de date ou d'heure fournie n'est pas dans un format valide.",
      '22008': "La valeur de date ou d'heure est hors de la plage valide.",
      '22012': 'Vous avez tenté de diviser un nombre par zéro.',
      '22018': 'Une valeur de caractère invalide a été trouvée pour le jeu de caractères.',
      '22019': "Un caractère d'échappement invalide a été trouvé.",
      '22021': 'Une valeur de caractère invalide a été trouvée pour le jeu de caractères spécifié.',
      '22023': 'Une valeur de paramètre invalide a été utilisée.',
      '22025': "Une séquence d'échappement invalide a été trouvée.",
      '22026': "Les données de la chaîne ont une longueur invalide pour l'opération.",
      '22P01':
        "Une exception de virgule flottante s'est produite (par exemple, dépassement, sous-dépassement).",
      '22P02':
        'Le texte que vous avez fourni ne peut pas être converti vers le type de données requis.',
      '22P03': 'Une valeur de date/heure invalide a été fournie.',
      '22P04': "Une valeur nulle a été utilisée là où elle n'est pas autorisée.",
      '22P05': 'Une valeur invalide a été fournie pour un document XML.',
      '23000': "Une contrainte d'intégrité a été violée.",
      '23502': 'Un champ obligatoire a été laissé vide (viole la contrainte NOT NULL).',
      '23503':
        "L'enregistrement lié auquel vous faites référence n'existe pas (viole la contrainte de clé étrangère).",
      '23505':
        "Un enregistrement avec ces informations existe déjà (viole la contrainte d'unicité).",
      '23514':
        'Les données que vous avez saisies ne respectent pas les conditions requises (viole la contrainte CHECK).',
      '25000': "L'état actuel de la transaction est invalide pour l'opération.",
      '25P02':
        "La transaction actuelle a été abandonnée ; les commandes sont ignorées jusqu'à la fin du bloc de transaction.",
      '28000': "L'authentification a échoué pour l'utilisateur spécifié.",
      '28P01': "Échec de l'authentification : Mot de passe invalide.",
      '3D000': "La base de données spécifiée n'existe pas.",
      '3F000': "Le schéma spécifié n'existe pas.",
      '40001':
        "Un échec de sérialisation s'est produit en raison d'une mise à jour concurrente (veuillez réessayer).",
      '40P01': 'Un interblocage (deadlock) a été détecté ; la transaction a été annulée.',
      '42000': "Une erreur de syntaxe ou une violation de règle d'accès s'est produite.",
      '42501': 'Vous ne disposez pas des autorisations nécessaires pour effectuer cette action.',
      '42601':
        "Une erreur s'est produite dans la requête ou la commande de base de données (erreur de syntaxe).",
      '42602': 'Un nom invalide a été utilisé pour un objet de base de données.',
      '42701': 'Un nom de colonne en double a été utilisé.',
      '42702': 'Une référence de colonne ambiguë a été faite.',
      '42703': "La colonne à laquelle vous essayez d'accéder n'existe pas.",
      '42704':
        "L'objet de base de données (comme une séquence, un type ou une fonction) n'existe pas.",
      '42710': 'Un objet portant ce nom existe déjà (objet en double).',
      '42712': 'Un alias ambigu a été utilisé.',
      '42803': "Une erreur de groupement s'est produite dans la requête.",
      '42804': "Le type de données fourni n'est pas compatible avec la colonne ou l'opération.",
      '42830': 'Une définition de clé étrangère invalide a été faite.',
      '42883':
        "La fonction ou l'opérateur que vous essayez d'utiliser n'existe pas avec les arguments donnés.",
      '42P01': "La table à laquelle vous essayez d'accéder n'existe pas.",
      '42P02': "Un paramètre utilisé dans la requête n'est pas défini.",
      '42P07': 'Une table portant ce nom existe déjà.',
      '42P18': 'Un type de données indéterminé a été utilisé là où un type spécifique est requis.',
      '53000': 'Le serveur de base de données rencontre des limitations de ressources.',
      '53100': "Le serveur de base de données n'a plus d'espace disque.",
      '53200': "Le serveur de base de données n'a plus de mémoire.",
      '53300': 'Le nombre maximal de connexions autorisées à la base de données a été atteint.',
      '54000':
        'Une limite du programme a été dépassée (par exemple, trop de colonnes, requête trop complexe).',
      '54001': 'Une instruction était trop complexe.',
      '54011': 'Trop de colonnes ont été spécifiées.',
      '54023': "Trop de mémoire a été demandée par l'opération.",
      '55000':
        "L'objet de base de données n'est pas dans l'état correct pour l'opération demandée.",
      '55006': "L'objet de base de données est actuellement utilisé par un autre processus.",
      '55P03': "Le verrou que vous essayez d'acquérir n'est pas disponible.",
      '57014': "La requête a été annulée par l'utilisateur ou un administrateur.",
      '58P01': "Impossible d'accéder à un fichier ou une ressource requis.",
      P0001:
        "Une erreur personnalisée s'est produite telle que définie par la base de données (vérifiez le message pour plus de détails).",
      P0002: "Votre requête n'a renvoyé aucun résultat alors qu'au moins un était attendu.",
      P0003: 'Trop de lignes ont été renvoyées par une sous-requête qui attend un seul résultat.',
      P0004: "Un code d'état indique un échec d'assertion.",
      PGRST000: 'Impossible de se connecter à la base de données.',
      PGRST001: 'Le rôle de base de données pour la connexion est invalide.',
      PGRST002: "Le schéma de base de données n'est pas accessible.",
      PGRST100: "Le cache du schéma n'a pas pu être chargé.",
      PGRST101: 'Le jeton JWT est invalide ou a expiré.',
      PGRST102: 'Le secret JWT est manquant ou incorrect.',
      PGRST103:
        "La revendication de rôle JWT (role claim) est invalide ou n'a pas pu être analysée.",
      PGRST105: "Le rôle de base de données spécifié dans le JWT n'existe pas.",
      PGRST106: 'La configuration du serveur est invalide.',
      PGRST107: "Le type de média demandé n'est pas pris en charge.",
      PGRST108: "Le schéma demandé n'est pas exposé.",
      PGRST109: "La table/vue demandée n'est pas exposée dans le schéma.",
      PGRST110: "La fonction demandée n'est pas exposée ou n'existe pas.",
      PGRST111: "Tentative d'appel d'une fonction volatile avec une requête GET.",
      PGRST112: 'Le corps de la requête est malformé ou inanalysable.',
      PGRST113: 'Le paramètre de requête est invalide ou malformé.',
      PGRST114: "L'en-tête HTTP est invalide ou malformé.",
      PGRST116: 'La requête viole une politique de sécurité (par exemple, RLS).',
      PGRST117: "La ressource demandée n'a pas pu être trouvée.",
      PGRST200: 'La chaîne de requête contient un paramètre invalide.',
      PGRST201: "Le corps de la requête est manquant ou malformé pour l'opération.",
      PGRST202: "La plage demandée n'est pas satisfaisable.",
      PGRST203: 'La requête contient un paramètre de filtre ou de tri invalide.',
      PGRST204:
        "La colonne spécifiée n'a pas pu être trouvée dans le cache du schéma de la table ; vérifiez l'exposition du schéma ou l'existence de la colonne.",
      PGRST300: "Une erreur s'est produite lors d'une insertion ou d'une mise à jour groupée.",
      PGRST301: "L'action demandée n'est pas autorisée sur la ressource.",
      PGRST302: "Le nombre de lignes affectées par l'opération ne correspond pas aux attentes.",
    },

    // Functions-specific errors
    functions: {},
  },
};
