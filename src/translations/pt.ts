/* Portugese translations */

export default {
  // Fallback Error Code
  unknown_error: 'Ocorreu um erro inesperado. Tente novamente mais tarde.',
  services: {
    // Auth-specific errors
    auth: {
      anonymous_provider_disabled: 'Login anônimo está desabilitado.',
      bad_code_verifier:
        'Retornado do fluxo PKCE onde o verificador de código fornecido não corresponde ao esperado. Indica um bug na implementação da biblioteca cliente.',
      bad_json: 'Geralmente usado quando o corpo HTTP da solicitação não é JSON válido.',
      bad_jwt: 'JWT enviado no cabeçalho Authorization não é válido.',
      bad_oauth_callback:
        'Callback OAuth do provedor para Auth não possui todos os atributos necessários (state). Indica um problema com o provedor OAuth ou implementação da biblioteca cliente.',
      bad_oauth_state:
        'Estado OAuth (dados ecoados de volta pelo provedor OAuth para Supabase Auth) não está no formato correto. Indica um problema com a integração do provedor OAuth.',
      captcha_failed:
        'Desafio CAPTCHA não pôde ser verificado com o provedor CAPTCHA. Verifique sua integração CAPTCHA.',
      conflict:
        'Conflito geral do banco de dados, como solicitações simultâneas em recursos que não devem ser modificados simultaneamente. Pode ocorrer quando você tem muitas solicitações de atualização de sessão sendo disparadas ao mesmo tempo para um usuário. Verifique seu aplicativo para problemas de concorrência e, se detectado, recue exponencialmente.',
      email_address_invalid:
        'Domínios de exemplo e teste não são suportados atualmente. Use um endereço de email diferente.',
      email_address_not_authorized:
        'O envio de email não é permitido para este endereço, pois seu projeto está usando o serviço SMTP padrão. Emails só podem ser enviados para membros da sua organização Supabase. Se você quiser enviar emails para outros, configure um provedor SMTP personalizado.',
      email_conflict_identity_not_deletable:
        'Desvincular esta identidade faz com que a conta do usuário mude para um endereço de email que já é usado por outra conta de usuário. Indica um problema onde o usuário tem duas contas diferentes usando endereços de email primários diferentes. Você pode precisar migrar dados do usuário para uma de suas contas neste caso.',
      email_exists: 'Endereço de email já existe no sistema.',
      email_not_confirmed:
        'Login não é permitido para este usuário, pois o endereço de email não está confirmado.',
      email_provider_disabled: 'Registros estão desabilitados para email e senha.',
      flow_state_expired:
        'Estado do fluxo PKCE ao qual a solicitação da API se relaciona expirou. Peça ao usuário para fazer login novamente.',
      flow_state_not_found:
        'Estado do fluxo PKCE ao qual a solicitação da API se relaciona não existe mais. Estados de fluxo expiram após um tempo e são progressivamente limpos, o que pode causar este erro. Solicitações repetidas podem causar este erro, pois a solicitação anterior provavelmente destruiu o estado do fluxo. Peça ao usuário para fazer login novamente.',
      hook_payload_invalid_content_type:
        'Payload do Auth não possui um cabeçalho Content-Type válido.',
      hook_payload_over_size_limit: 'Payload do Auth excede o limite máximo de tamanho.',
      hook_timeout: 'Não foi possível alcançar o hook dentro do tempo máximo alocado.',
      hook_timeout_after_retry:
        'Não foi possível alcançar o hook após o número máximo de tentativas.',
      identity_already_exists:
        'A identidade à qual a API se relaciona já está vinculada a um usuário.',
      identity_not_found:
        'Identidade à qual a chamada da API se relaciona não existe, como quando uma identidade é desvinculada ou excluída.',
      insufficient_aal:
        'Para chamar esta API, o usuário deve ter um Nível de Garantia de Autenticador mais alto. Para resolver, peça ao usuário para resolver um desafio MFA.',
      invite_not_found: 'Convite expirou ou já foi usado.',
      invalid_credentials: 'Credenciais de login ou tipo de concessão não reconhecidos.',
      manual_linking_disabled:
        'Chamar as APIs supabase.auth.linkUser() e relacionadas não está habilitado no servidor Auth.',
      mfa_challenge_expired:
        'Responder a um desafio MFA deve acontecer dentro de um período de tempo fixo. Solicite um novo desafio ao encontrar este erro.',
      mfa_factor_name_conflict:
        'Fatores MFA para um único usuário não devem ter o mesmo nome amigável.',
      mfa_factor_not_found: 'Fator MFA não existe mais.',
      mfa_ip_address_mismatch:
        'O processo de inscrição para fatores MFA deve começar e terminar com o mesmo endereço IP.',
      mfa_phone_enroll_not_enabled: 'Inscrição de fatores MFA de telefone está desabilitada.',
      mfa_phone_verify_not_enabled:
        'Login via fatores de telefone e verificação de novos fatores de telefone está desabilitado.',
      mfa_totp_enroll_not_enabled: 'Inscrição de fatores MFA TOTP está desabilitada.',
      mfa_totp_verify_not_enabled:
        'Login via fatores TOTP e verificação de novos fatores TOTP está desabilitado.',
      mfa_verification_failed: 'Desafio MFA não pôde ser verificado -- código TOTP incorreto.',
      mfa_verification_rejected:
        'Verificação MFA adicional é rejeitada. Retornado apenas se o hook de tentativa de verificação MFA retorna uma decisão de rejeição.',
      mfa_verified_factor_exists:
        'Fator de telefone verificado já existe para um usuário. Desinscreva o fator de telefone verificado existente para continuar.',
      mfa_web_authn_enroll_not_enabled: 'Inscrição de fatores MFA Web Authn está desabilitada.',
      mfa_web_authn_verify_not_enabled:
        'Login via fatores WebAuthn e verificação de novos fatores WebAuthn está desabilitado.',
      no_authorization:
        'Esta solicitação HTTP requer um cabeçalho Authorization, que não foi fornecido.',
      not_admin:
        'Usuário acessando a API não é admin, ou seja, o JWT não contém uma reivindicação de papel que os identifica como admin do servidor Auth.',
      oauth_provider_not_supported:
        'Usando um provedor OAuth que está desabilitado no servidor Auth.',
      otp_disabled:
        'Login com OTPs (magic link, email OTP) está desabilitado. Verifique a configuração do seu servidor.',
      otp_expired:
        'Código OTP para este login expirou. Peça ao usuário para fazer login novamente.',
      over_email_send_rate_limit:
        'Muitos emails foram enviados para este endereço de email. Peça ao usuário para aguardar um pouco antes de tentar novamente.',
      over_request_rate_limit:
        'Muitas solicitações foram enviadas por este cliente (endereço IP). Peça ao usuário para tentar novamente em alguns minutos. Às vezes pode indicar um bug em seu aplicativo que envia mistakenly muitas solicitações (como um hook React useEffect mal escrito).',
      over_sms_send_rate_limit:
        'Muitas mensagens SMS foram enviadas para este número de telefone. Peça ao usuário para aguardar um pouco antes de tentar novamente.',
      phone_exists: 'Número de telefone já existe no sistema.',
      phone_not_confirmed:
        'Login não é permitido para este usuário, pois o número de telefone não está confirmado.',
      phone_provider_disabled: 'Registros estão desabilitados para telefone e senha.',
      provider_disabled:
        'Provedor OAuth está desabilitado para uso. Verifique a configuração do seu servidor.',
      provider_email_needs_verification:
        'Nem todos os provedores OAuth verificam o endereço de email do usuário. Supabase Auth requer que emails sejam verificados, então este erro é enviado quando um email de verificação é enviado após completar o fluxo OAuth.',
      reauthentication_needed:
        'Um usuário precisa se reautenticar para alterar sua senha. Peça ao usuário para se reautenticar chamando a API supabase.auth.reauthenticate().',
      reauthentication_not_valid:
        'Verificação de uma reautenticação falhou, o código está incorreto. Peça ao usuário para inserir um novo código.',
      refresh_token_not_found: 'Sessão contendo o token de atualização não encontrada.',
      refresh_token_already_used:
        'Token de atualização foi revogado e está fora do intervalo de reutilização do token de atualização. Consulte a documentação sobre sessões para mais informações.',
      request_timeout: 'Processamento da solicitação demorou muito. Tente a solicitação novamente.',
      same_password:
        'Um usuário que está atualizando sua senha deve usar uma senha diferente da atualmente usada.',
      saml_assertion_no_email:
        'Asserção SAML (informações do usuário) foi recebida após o login, mas nenhum endereço de email foi encontrado nela, o que é obrigatório. Verifique o mapeamento de atributos e/ou configuração do provedor.',
      saml_assertion_no_user_id:
        'Asserção SAML (informações do usuário) foi recebida após o login, mas um ID de usuário (chamado NameID) não foi encontrado nela, o que é obrigatório. Verifique a configuração do provedor de identidade SAML.',
      saml_entity_id_mismatch:
        '(API Admin.) Atualizar os metadados SAML para um provedor de identidade SAML não é possível, pois o ID da entidade na atualização não corresponde ao ID da entidade no banco de dados. Isso é equivalente a criar um novo provedor de identidade, e você deve fazer isso em vez disso.',
      saml_idp_already_exists:
        '(API Admin.) Adicionando um provedor de identidade SAML que já foi adicionado.',
      saml_idp_not_found:
        'Provedor de identidade SAML não encontrado. Mais frequentemente retornado após login iniciado pelo IdP com um provedor de identidade SAML não registrado no Supabase Auth.',
      saml_metadata_fetch_failed:
        '(API Admin.) Adicionar ou atualizar um provedor SAML falhou, pois seus metadados não puderam ser buscados da URL fornecida.',
      saml_provider_disabled:
        'Usar Enterprise SSO com SAML 2.0 não está habilitado no servidor Auth.',
      saml_relay_state_expired:
        'Estado de retransmissão SAML é um objeto que rastreia o progresso de uma solicitação supabase.auth.signInWithSSO(). O provedor de identidade SAML deve responder após um período fixo de tempo, após o qual este erro é mostrado. Peça ao usuário para fazer login novamente.',
      saml_relay_state_not_found:
        'Estados de retransmissão SAML são progressivamente limpos após expirarem, o que pode causar este erro. Peça ao usuário para fazer login novamente.',
      session_expired:
        'Sessão à qual a solicitação da API se relaciona expirou. Isso pode ocorrer se um tempo limite de inatividade estiver configurado, ou se a entrada da sessão excedeu o valor de timebox configurado. Consulte a documentação sobre sessões para mais informações.',
      session_not_found:
        'Sessão à qual a solicitação da API se relaciona não existe mais. Isso pode ocorrer se o usuário fez logout, ou se a entrada da sessão no banco de dados foi excluída de alguma outra forma.',
      signup_disabled: 'Registros (criação de nova conta) estão desabilitados no servidor.',
      single_identity_not_deletable:
        'Todo usuário deve ter pelo menos uma identidade anexada a ele, então excluir (desvincular) uma identidade não é permitido se for a única para o usuário.',
      sms_send_failed:
        'Envio de uma mensagem SMS falhou. Verifique a configuração do seu provedor SMS.',
      sso_domain_already_exists:
        '(API Admin.) Apenas um domínio SSO pode ser registrado por provedor de identidade SSO.',
      sso_provider_not_found:
        'Provedor SSO não encontrado. Verifique os argumentos em supabase.auth.signInWithSSO().',
      too_many_enrolled_mfa_factors:
        'Um usuário só pode ter um número fixo de fatores MFA inscritos.',
      unexpected_audience:
        '(Recurso obsoleto não disponível via bibliotecas cliente Supabase.) A reivindicação X-JWT-AUD da solicitação não corresponde à audiência do JWT.',
      unexpected_failure:
        'Serviço Auth está degradado ou um bug está presente, sem uma razão específica.',
      user_already_exists:
        'Usuário com essas informações (endereço de email, número de telefone) não pode ser criado novamente, pois já existe.',
      user_banned:
        'Usuário ao qual a solicitação da API se relaciona tem uma propriedade banned_until que ainda está ativa. Nenhuma solicitação de API adicional deve ser tentada até que este campo seja limpo.',
      user_not_found: 'Usuário ao qual a solicitação da API se relaciona não existe mais.',
      user_sso_managed:
        'Quando um usuário vem do SSO, certos campos do usuário não podem ser atualizados (como email).',
      validation_failed: 'Parâmetros fornecidos não estão no formato esperado.',
      weak_password:
        'Usuário está se registrando ou alterando sua senha sem atender aos critérios de força da senha. Use a classe AuthWeakPasswordError para acessar mais informações sobre o que eles precisam fazer para fazer a senha passar.',
    },
    // Realtime-specific errors
    realtime: {
      RealtimeDisabledForConfiguration:
        'A configuração fornecida ao Realtime na conexão não será capaz de fornecer alterações do Postgres. Verifique sua configuração na inicialização do canal, pois você pode não ter suas tabelas devidamente registradas.',
      TenantNotFound:
        'O tenant que você está tentando conectar não existe. Verifique se o nome do tenant que você está tentando conectar existe na tabela realtime.tenants.',
      ErrorConnectingToWebSocket:
        'Erro ao tentar conectar ao servidor WebSocket. Verifique suas informações de usuário na conexão.',
      ErrorAuthorizingWebSocket:
        'Erro ao tentar autorizar a conexão WebSocket. Verifique suas informações de usuário na conexão.',
      TableHasSpacesInName:
        'A tabela que você está tentando ouvir tem espaços em seu nome que não são suportados. Altere o nome da tabela para remover espaços.',
      UnableToDeleteTenant: 'Erro ao tentar excluir um tenant. Entre em contato com o Suporte.',
      UnableToSetPolicies:
        'Erro ao configurar Políticas de Autorização. Entre em contato com o Suporte.',
      UnableCheckoutConnection:
        'Erro ao tentar fazer checkout de uma conexão do pool de tenant. Entre em contato com o Suporte.',
      UnableToSubscribeToPostgres:
        'Erro ao tentar se inscrever em alterações do Postgres. Entre em contato com o Suporte.',
      ChannelRateLimitReached:
        'O número de canais que você pode criar atingiu seu limite. Entre em contato com o suporte para aumentar seus limites de taxa.',
      ConnectionRateLimitReached:
        'O número de clientes conectados atingiu seu limite. Entre em contato com o suporte para aumentar seus limites de taxa.',
      ClientJoinRateLimitReached:
        'A taxa de junções por segundo de seus clientes atingiu os limites do canal. Entre em contato com o suporte para aumentar seus limites de taxa.',
      UnableToConnectToTenantDatabase:
        'Realtime não conseguiu se conectar ao banco de dados do tenant. Entre em contato com o suporte para instruções adicionais.',
      RealtimeNodeDisconnected:
        'Realtime é uma aplicação distribuída e não consegue se comunicar com um dos nós distribuídos. Entre em contato com o suporte para instruções adicionais.',
      MigrationsFailedToRun:
        'Erro ao executar as migrações contra o banco de dados do tenant exigidas pelo Realtime. Entre em contato com o suporte para instruções adicionais.',
      ErrorStartingPostgresCDCStream:
        'Erro ao iniciar o stream CDC do Postgres usado para alterações do Postgres. Entre em contato com o suporte para instruções adicionais.',
      UnknownDataProcessed:
        'Um tipo de dados desconhecido foi processado pelo sistema Realtime. Entre em contato com o suporte para instruções adicionais.',
      ErrorStartingPostgresCDC:
        'Erro ao iniciar a extensão CDC do Postgres usada para alterações do Postgres. Entre em contato com o suporte para instruções adicionais.',
      ReplicationSlotBeingUsed:
        'O slot de replicação está sendo usado por outra transação. Entre em contato com o suporte para instruções adicionais.',
      PoolingReplicationPreparationError:
        'Erro ao preparar o slot de replicação. Entre em contato com o suporte para instruções adicionais.',
      PoolingReplicationError:
        'Erro ao agrupar o slot de replicação. Entre em contato com o suporte para instruções adicionais.',
      SubscriptionDeletionFailed:
        'Erro ao tentar excluir uma assinatura para alterações do Postgres. Entre em contato com o suporte para instruções adicionais.',
      UnableToDeletePhantomSubscriptions:
        'Erro ao tentar excluir assinaturas que não estão mais sendo usadas. Entre em contato com o suporte para instruções adicionais.',
      UnableToCheckProcessesOnRemoteNode:
        'Erro ao tentar verificar os processos em um nó remoto. Entre em contato com o suporte para instruções adicionais.',
      UnableToCreateCounter:
        'Erro ao tentar criar um contador para rastrear limites de taxa para um tenant. Entre em contato com o suporte para instruções adicionais.',
      UnableToIncrementCounter:
        'Erro ao tentar incrementar um contador para rastrear limites de taxa para um tenant. Entre em contato com o suporte para instruções adicionais.',
      UnableToDecrementCounter:
        'Erro ao tentar decrementar um contador para rastrear limites de taxa para um tenant. Entre em contato com o suporte para instruções adicionais.',
      UnableToUpdateCounter:
        'Erro ao tentar atualizar um contador para rastrear limites de taxa para um tenant. Entre em contato com o suporte para instruções adicionais.',
      UnableToFindCounter:
        'Erro ao tentar encontrar um contador para rastrear limites de taxa para um tenant. Entre em contato com o suporte para instruções adicionais.',
      UnhandledProcessMessage:
        'Mensagem não tratada recebida por um processo Realtime. Entre em contato com o suporte para instruções adicionais.',
      UnknownError:
        'Ocorreu um erro desconhecido. Entre em contato com o suporte para instruções adicionais',
    },
    // Storage-specific errors
    storage: {
      NoSuchBucket: 'O bucket especificado não existe.',
      NoSuchKey: 'O arquivo especificado não existe.',
      NoSuchUpload: 'O upload especificado não existe.',
      InvalidJWT: 'O token de autenticação fornecido é inválido.',
      InvalidRequest: 'A solicitação não está formada adequadamente.',
      TenantNotFound: 'O tenant especificado não existe.',
      EntityTooLarge: 'O arquivo sendo enviado é muito grande.',
      InternalError: 'Ocorreu um erro interno do servidor. Tente novamente mais tarde.',
      ResourceAlreadyExists: 'O recurso especificado já existe.',
      InvalidBucketName: 'O nome do bucket especificado é inválido.',
      InvalidKey: 'A chave do arquivo especificada é inválida.',
      InvalidRange: 'O intervalo especificado não é válido.',
      InvalidMimeType: 'O tipo de arquivo especificado não é válido.',
      InvalidUploadId: 'O ID de upload especificado é inválido.',
      KeyAlreadyExists: 'O arquivo especificado já existe.',
      BucketAlreadyExists: 'O bucket especificado já existe.',
      DatabaseTimeout: 'Timeout ocorreu ao acessar o banco de dados. Tente novamente mais tarde.',
      InvalidSignature: 'A assinatura fornecida não corresponde à assinatura calculada.',
      SignatureDoesNotMatch: 'A assinatura da solicitação não corresponde à assinatura calculada.',
      AccessDenied: 'Acesso ao recurso especificado é negado.',
      ResourceLocked: 'O recurso especificado está bloqueado.',
      DatabaseError: 'Ocorreu um erro ao acessar o banco de dados.',
      MissingContentLength: 'O cabeçalho Content-Length está ausente.',
      MissingParameter: 'Um parâmetro obrigatório está ausente na solicitação.',
      InvalidUploadSignature: 'A assinatura de upload fornecida é inválida.',
      LockTimeout: 'Timeout ocorreu ao aguardar um bloqueio. Tente novamente mais tarde.',
      S3Error: 'Ocorreu um erro com o serviço de armazenamento.',
      S3InvalidAccessKeyId: 'O ID da chave de acesso de armazenamento fornecido é inválido.',
      S3MaximumCredentialsLimit: 'O número máximo de credenciais foi atingido.',
      InvalidChecksum: 'O checksum do arquivo não corresponde.',
      MissingPart: 'Uma parte do arquivo está ausente.',
      SlowDown: 'Taxa de solicitação muito alta. Tente novamente mais tarde.',
    },
    // Database-specific errors
    database: {
      '08000':
        'A conexão com o servidor de banco de dados foi perdida ou não pôde ser estabelecida.',
      '08003': 'A conexão de banco de dados sendo usada não está mais ativa.',
      '08006': 'A tentativa de conectar ao banco de dados falhou.',
      '0P000': 'O nome do banco de dados especificado não existe.',
      '22000':
        'Erro geral relacionado ao processamento de dados; verifique a mensagem específica para detalhes.',
      '22001': 'O texto que você inseriu é muito longo para a coluna do banco de dados.',
      '22002': 'Um valor obrigatório estava ausente ao tentar inserir ou atualizar dados.',
      '22003':
        'O número que você inseriu é muito grande ou muito pequeno para a coluna do banco de dados.',
      '22004': 'Um valor nulo foi usado em um contexto inadequado.',
      '22005': 'Um caractere inválido foi encontrado em um valor numérico.',
      '22007': 'O valor de data ou hora fornecido não está em um formato válido.',
      '22008': 'O valor de data ou hora está fora do intervalo válido.',
      '22012': 'Você tentou dividir um número por zero.',
      '22018': 'Um valor de caractere inválido foi encontrado para o conjunto de caracteres.',
      '22019': 'Um caractere de escape inválido foi encontrado.',
      '22021':
        'Um valor de caractere inválido foi encontrado para o conjunto de caracteres especificado.',
      '22023': 'Um valor de parâmetro inválido foi usado.',
      '22025': 'Uma sequência de escape inválida foi encontrada.',
      '22026': 'Os dados da string têm um comprimento inválido para a operação.',
      '22P01': 'Ocorreu uma exceção de ponto flutuante (ex.: overflow, underflow).',
      '22P02': 'O texto que você forneceu não pode ser convertido para o tipo de dados necessário.',
      '22P03': 'Um valor de datetime inválido foi fornecido.',
      '22P04': 'Um valor nulo foi usado onde não é permitido.',
      '22P05': 'Um valor inválido foi fornecido para um documento XML.',
      '23000': 'Uma restrição de integridade foi violada.',
      '23502': 'Um campo obrigatório foi deixado vazio (viola restrição not-null).',
      '23503':
        'O registro vinculado que você referenciou não existe (viola restrição de chave estrangeira).',
      '23505': 'Um registro com essas informações já existe (viola restrição de unicidade).',
      '23514':
        'Os dados que você inseriu não atendem às condições necessárias (viola restrição de verificação).',
      '25000': 'O estado atual da transação é inválido para a operação.',
      '25P02':
        'A transação atual foi abortada; comandos ignorados até o fim do bloco de transação.',
      '28000': 'Autenticação falhou para o usuário especificado.',
      '28P01': 'Autenticação falhou: Senha inválida.',
      '3D000': 'O banco de dados especificado não existe.',
      '3F000': 'O esquema especificado não existe.',
      '40001':
        'Uma falha de serialização ocorreu devido a uma atualização simultânea (tente novamente).',
      '40P01': 'Um deadlock foi detectado; a transação foi revertida.',
      '42000': 'Ocorreu um erro de sintaxe ou violação de regra de acesso.',
      '42501': 'Você não tem as permissões necessárias para executar esta ação.',
      '42601': 'Há um erro na consulta ou comando do banco de dados (erro de sintaxe).',
      '42602': 'Um nome inválido foi usado para um objeto do banco de dados.',
      '42701': 'Um nome de coluna duplicado foi usado.',
      '42702': 'Uma referência de coluna ambígua foi feita.',
      '42703': 'A coluna que você está tentando acessar não existe.',
      '42704': 'O objeto do banco de dados (como uma sequência, tipo ou função) não existe.',
      '42710': 'Um objeto com este nome já existe (objeto duplicado).',
      '42712': 'Um alias ambíguo foi usado.',
      '42803': 'Ocorreu um erro de agrupamento na consulta.',
      '42804': 'O tipo de dados fornecido não é compatível com a coluna ou operação.',
      '42830': 'Uma definição de chave estrangeira inválida foi feita.',
      '42883':
        'A função ou operador que você está tentando usar não existe com os argumentos fornecidos.',
      '42P01': 'A tabela que você está tentando acessar não existe.',
      '42P02': 'Um parâmetro usado na consulta não está definido.',
      '42P07': 'Uma tabela com este nome já existe.',
      '42P18': 'Um tipo de dados indeterminado foi usado onde um tipo específico é necessário.',
      '53000': 'O servidor de banco de dados está enfrentando limitações de recursos.',
      '53100': 'O servidor de banco de dados ficou sem espaço em disco.',
      '53200': 'O servidor de banco de dados ficou sem memória.',
      '53300': 'O número máximo de conexões de banco de dados permitidas foi atingido.',
      '54000': 'Um limite de programa foi excedido (ex.: muitas colunas, consulta muito complexa).',
      '54001': 'Uma declaração era muito complexa.',
      '54011': 'Muitas colunas foram especificadas.',
      '54023': 'Muita memória foi solicitada pela operação.',
      '55000': 'O objeto do banco de dados não está no estado correto para a operação solicitada.',
      '55006': 'O objeto do banco de dados está sendo usado por outro processo.',
      '55P03': 'O bloqueio que você está tentando adquirir não está disponível.',
      '57014': 'A consulta foi cancelada pelo usuário ou um administrador.',
      '58P01': 'Não foi possível acessar um arquivo ou recurso necessário.',
      P0001:
        'Ocorreu um erro personalizado conforme definido pelo banco de dados (verifique a mensagem para detalhes).',
      P0002: 'Sua consulta não retornou resultados quando pelo menos um era esperado.',
      P0003: 'Muitas linhas foram retornadas por uma subconsulta que espera um resultado único.',
      P0004: 'Um código de status indica uma falha de asserção.',
      PGRST000: 'Não foi possível conectar ao banco de dados.',
      PGRST001: 'O papel do banco de dados para a conexão é inválido.',
      PGRST002: 'O esquema do banco de dados não está acessível.',
      PGRST100: 'O cache do esquema não pôde ser carregado.',
      PGRST101: 'O token JWT é inválido ou expirou.',
      PGRST102: 'O segredo JWT está ausente ou incorreto.',
      PGRST103: 'A reivindicação de papel JWT é inválida ou não pôde ser analisada.',
      PGRST105: 'O papel do banco de dados especificado no JWT não existe.',
      PGRST106: 'A configuração do servidor é inválida.',
      PGRST107: 'O tipo de mídia solicitado não é suportado.',
      PGRST108: 'O esquema solicitado não está exposto.',
      PGRST109: 'A tabela/visualização solicitada não está exposta no esquema.',
      PGRST110: 'A função solicitada não está exposta ou não existe.',
      PGRST111: 'Tentativa de chamar uma função volátil com solicitação GET.',
      PGRST112: 'O corpo da solicitação está malformado ou não analisável.',
      PGRST113: 'O parâmetro de consulta é inválido ou malformado.',
      PGRST114: 'O cabeçalho HTTP é inválido ou malformado.',
      PGRST116: 'A solicitação viola uma política de segurança (ex.: RLS).',
      PGRST117: 'O recurso solicitado não pôde ser encontrado.',
      PGRST200: 'A string de consulta contém um parâmetro inválido.',
      PGRST201: 'O corpo da solicitação está ausente ou malformado para a operação.',
      PGRST202: 'O intervalo solicitado não é satisfazível.',
      PGRST203: 'A solicitação contém um filtro ou parâmetro de ordem inválido.',
      PGRST204:
        'A coluna especificada não pôde ser encontrada no cache do esquema da tabela; verifique a exposição do esquema ou existência da coluna.',
      PGRST300: 'Ocorreu um erro durante uma inserção ou atualização em massa.',
      PGRST301: 'A ação solicitada não é permitida no recurso.',
      PGRST302: 'O número de linhas afetadas pela operação não corresponde às expectativas.',
    },

    // Functions-specific errors
    functions: {},
  },
};
