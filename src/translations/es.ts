/* Spanish translations */

export default {
  // Fallback Error Code
  unknown_error: 'Se produjo un error inesperado. Por favor, inténtelo de nuevo más tarde.',
  // Auth Error Codes
  anonymous_provider_disabled: 'Los inicios de sesión anónimos están deshabilitados.',
  bad_code_verifier: 'El code-verifier no coincide con el esperado.',
  bad_json: 'El cuerpo de la solicitud no es un JSON válido.',
  bad_jwt: 'El JWT en el encabezado Authorization no es válido o ha expirado.',
  bad_oauth_callback: 'El callback OAuth está incompleto.',
  bad_oauth_state: 'El estado OAuth tiene un formato incorrecto.',
  captcha_failed: 'Falló la verificación CAPTCHA.',
  conflict: 'Conflicto de base de datos: solicitudes concurrentes.',
  email_address_invalid: 'Dirección de correo electrónico inválida.',
  email_address_not_authorized: 'No está permitido enviar correos a esta dirección.',
  email_conflict_identity_not_deletable:
    'No se puede desvincular esta identidad sin conflicto de correo.',
  email_exists: 'La dirección de correo ya existe.',
  email_not_confirmed: 'No permitido: correo electrónico no confirmado.',
  email_provider_disabled: 'Registro por correo deshabilitado.',
  flow_state_expired: 'El estado PKCE ha expirado. Por favor, vuelve a iniciar sesión.',
  flow_state_not_found: 'El estado PKCE no existe. Por favor, vuelve a iniciar sesión.',
  hook_payload_invalid_content_type: 'El payload del hook tiene un Content-Type inválido.',
  hook_payload_over_size_limit: 'El payload del hook supera el tamaño máximo.',
  hook_timeout: 'No se pudo alcanzar el hook a tiempo.',
  hook_timeout_after_retry: 'No se pudo alcanzar el hook tras varios intentos.',
  identity_already_exists: 'Esta identidad ya está vinculada.',
  identity_not_found: 'Identidad no encontrada.',
  insufficient_aal: 'Se requiere un nivel de autenticación más alto.',
  invite_not_found: 'Invitación expirada o ya usada.',
  invalid_credentials: 'Credenciales inválidas.',
  manual_linking_disabled: 'Vinculación manual de identidades deshabilitada.',
  mfa_challenge_expired: 'El desafío MFA ha expirado. Solicita uno nuevo.',
  mfa_factor_name_conflict: 'Hay conflicto con el nombre del factor MFA.',
  mfa_factor_not_found: 'Factor MFA no encontrado.',
  mfa_ip_address_mismatch: 'La dirección IP no coincide en el flujo MFA.',
  mfa_phone_enroll_not_enabled: 'Registro MFA por teléfono deshabilitado.',
  mfa_phone_verify_not_enabled: 'Verificación MFA por teléfono deshabilitada.',
  mfa_totp_enroll_not_enabled: 'Registro MFA TOTP deshabilitado.',
  mfa_totp_verify_not_enabled: 'Verificación MFA TOTP deshabilitada.',
  mfa_verification_failed: 'Fallo en la verificación MFA – código incorrecto.',
  mfa_verification_rejected: 'Verificación MFA rechazada.',
  mfa_verified_factor_exists: 'Ya existe un factor MFA verificado.',
  mfa_web_authn_enroll_not_enabled: 'Registro WebAuthn MFA deshabilitado.',
  mfa_web_authn_verify_not_enabled: 'Verificación WebAuthn MFA deshabilitada.',
  no_authorization: 'Falta el encabezado Authorization.',
  not_admin: 'El usuario no es administrador.',
  oauth_provider_not_supported: 'Proveedor OAuth no soportado.',
  otp_disabled: 'Inicio de sesión por OTP deshabilitado.',
  otp_expired: 'Código OTP expirado. Solicita uno nuevo.',
  over_email_send_rate_limit: 'Demasiados correos enviados – espera un momento.',
  over_request_rate_limit: 'Demasiadas solicitudes – espera un momento.',
  over_sms_send_rate_limit: 'Demasiados SMS enviados – espera un momento.',
  phone_exists: 'El número de teléfono ya existe.',
  phone_not_confirmed: 'No permitido: teléfono no confirmado.',
  phone_provider_disabled: 'Registro por teléfono deshabilitado.',
  provider_disabled: 'Proveedor OAuth deshabilitado.',
  provider_email_needs_verification: 'Se requiere verificar el correo tras OAuth.',
  reauthentication_needed: 'Se requiere reautenticación.',
  reauthentication_not_valid: 'Reautenticación no válida – código incorrecto.',
  refresh_token_not_found: 'Token de actualización no encontrado.',
  refresh_token_already_used: 'Token de actualización ya usado.',
  request_timeout: 'La petición tardó demasiado. Intenta de nuevo.',
  same_password: 'La nueva contraseña debe ser distinta.',
  saml_assertion_no_email: 'Assertion SAML sin dirección de correo.',
  saml_assertion_no_user_id: 'Assertion SAML sin ID de usuario.',
  saml_entity_id_mismatch: 'El entity ID SAML no coincide.',
  saml_idp_already_exists: 'Este proveedor SAML ya existe.',
  saml_idp_not_found: 'Proveedor SAML no encontrado.',
  saml_metadata_fetch_failed: 'Error al obtener metadatos SAML.',
  saml_provider_disabled: 'Proveedor SAML deshabilitado.',
  saml_relay_state_expired: 'El relay state SAML expiró. Vuelve a iniciar sesión.',
  saml_relay_state_not_found: 'Relay state SAML no encontrado. Vuelve a iniciar sesión.',
  session_expired: 'Sesión expirada.',
  session_not_found: 'Sesión no encontrada.',
  signup_disabled: 'Registro deshabilitado.',
  single_identity_not_deletable: 'Debe permanecer al menos una identidad vinculada.',
  sms_send_failed: 'Error al enviar SMS.',
  sso_domain_already_exists: 'Dominio SSO ya registrado.',
  sso_provider_not_found: 'Proveedor SSO no encontrado.',
  too_many_enrolled_mfa_factors: 'Demasiados factores MFA registrados.',
  unexpected_audience: 'Audience inesperada.',
  unexpected_failure: 'Error inesperado. Intenta más tarde.',
  user_already_exists: 'El usuario ya existe.',
  user_banned: 'El usuario está bloqueado.',
  user_not_found: 'Usuario no encontrado.',
  user_sso_managed: 'Usuario SSO no editable.',
  validation_failed: 'Error de validación de parámetros.',
  weak_password: 'Contraseña demasiado débil.',

  // Realtime Error Codes
  RealtimeDisabledForConfiguration:
    'La configuración proporcionada a Realtime no podrá entregar cambios de Postgres. Verifique su configuración al iniciar el canal, ya que es posible que sus tablas no estén registradas correctamente.',
  TenantNotFound:
    'El inquilino al que intenta conectarse no existe. Verifique que el nombre del inquilino al que intenta conectarse exista en la tabla realtime.tenants.',
  ErrorConnectingToWebSocket:
    'Error al intentar conectarse al servidor WebSocket. Verifique su información de usuario al conectarse.',
  ErrorAuthorizingWebSocket:
    'Error al intentar autorizar la conexión WebSocket. Verifique su información de usuario al conectarse.',
  TableHasSpacesInName:
    'La tabla a la que intenta escuchar tiene espacios en su nombre, lo cual no es compatible. Cambie el nombre de la tabla para eliminar los espacios.',
  UnableToDeleteTenant: 'Error al intentar eliminar un inquilino. Contacte con soporte.',
  UnableToSetPolicies: 'Error al configurar las políticas de autorización. Contacte con soporte.',
  UnableCheckoutConnection:
    'Error al intentar retirar una conexión del pool de inquilinos. Contacte con soporte.',
  UnableToSubscribeToPostgres:
    'Error al intentar suscribirse a los cambios de Postgres. Contacte con soporte.',
  ChannelRateLimitReached:
    'El número de canales que puede crear ha alcanzado su límite. Contacte con soporte para aumentar sus límites de tasa.',
  ConnectionRateLimitReached:
    'El número de clientes conectados ha alcanzado su límite. Contacte con soporte para aumentar sus límites de tasa.',
  ClientJoinRateLimitReached:
    'La tasa de uniones por segundo de sus clientes ha alcanzado los límites del canal. Contacte con soporte para aumentar sus límites de tasa.',
  UnableToConnectToTenantDatabase:
    'Realtime no pudo conectarse a la base de datos del inquilino. Contacte con soporte para más instrucciones.',
  RealtimeNodeDisconnected:
    'Realtime es una aplicación distribuida y no puede comunicarse con uno de los nodos distribuidos. Contacte con soporte para más instrucciones.',
  MigrationsFailedToRun:
    'Error al ejecutar las migraciones contra la base de datos del inquilino requeridas por Realtime. Contacte con soporte para más instrucciones.',
  ErrorStartingPostgresCDCStream:
    'Error al iniciar el stream CDC de Postgres usado para cambios de Postgres. Contacte con soporte para más instrucciones.',
  UnknownDataProcessed:
    'Un tipo de datos desconocido fue procesado por el sistema Realtime. Contacte con soporte para más instrucciones.',
  ErrorStartingPostgresCDC:
    'Error al iniciar la extensión CDC de Postgres usada para cambios de Postgres. Contacte con soporte para más instrucciones.',
  ReplicationSlotBeingUsed:
    'El slot de replicación está siendo usado por otra transacción. Contacte con soporte para más instrucciones.',
  PoolingReplicationPreparationError:
    'Error al preparar el slot de replicación. Contacte con soporte para más instrucciones.',
  PoolingReplicationError:
    'Error al agrupar el slot de replicación. Contacte con soporte para más instrucciones.',
  SubscriptionDeletionFailed:
    'Error al intentar eliminar una suscripción para cambios de Postgres. Contacte con soporte para más instrucciones.',
  UnableToDeletePhantomSubscriptions:
    'Error al intentar eliminar suscripciones que ya no se utilizan. Contacte con soporte para más instrucciones.',
  UnableToCheckProcessesOnRemoteNode:
    'Error al intentar verificar los procesos en un nodo remoto. Contacte con soporte para más instrucciones.',
  UnableToCreateCounter:
    'Error al intentar crear un contador para rastrear límites de tasa para un inquilino. Contacte con soporte para más instrucciones.',
  UnableToIncrementCounter:
    'Error al intentar incrementar un contador para rastrear límites de tasa para un inquilino. Contacte con soporte para más instrucciones.',
  UnableToDecrementCounter:
    'Error al intentar decrementar un contador para rastrear límites de tasa para un inquilino. Contacte con soporte para más instrucciones.',
  UnableToUpdateCounter:
    'Error al intentar actualizar un contador para rastrear límites de tasa para un inquilino. Contacte con soporte para más instrucciones.',
  UnableToFindCounter:
    'Error al intentar encontrar un contador para rastrear límites de tasa para un inquilino. Contacte con soporte para más instrucciones.',
  UnhandledProcessMessage:
    'Mensaje no manejado recibido por un proceso Realtime. Contacte con soporte para más instrucciones.',
  UnknownError: 'Ocurrió un error desconocido. Contacte con soporte para más instrucciones',
};
