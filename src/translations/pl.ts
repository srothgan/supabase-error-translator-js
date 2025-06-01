/* Polish translations */

export default {
  // Fallback Error Code
  unknown_error: 'Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.',
  services: {
    // Auth-specific errors
    auth: {
      anonymous_provider_disabled: 'Anonimowe logowanie jest wyłączone.',
      bad_code_verifier:
        'Zwrócone z przepływu PKCE, gdzie podany weryfikator kodu nie pasuje do oczekiwanego. Wskazuje na błąd w implementacji biblioteki klienta.',
      bad_json: 'Zwykle używane, gdy treść HTTP żądania nie jest prawidłowym JSON.',
      bad_jwt: 'JWT wysłany w nagłówku Authorization nie jest prawidłowy.',
      bad_oauth_callback:
        'Callback OAuth od dostawcy do Auth nie ma wszystkich wymaganych atrybutów (state). Wskazuje na problem z dostawcą OAuth lub implementacją biblioteki klienta.',
      bad_oauth_state:
        'Stan OAuth (dane odesłane przez dostawcę OAuth do Supabase Auth) nie jest w poprawnym formacie. Wskazuje na problem z integracją dostawcy OAuth.',
      captcha_failed:
        'Wyzwanie CAPTCHA nie mogło zostać zweryfikowane z dostawcą CAPTCHA. Sprawdź swoją integrację CAPTCHA.',
      conflict:
        'Ogólny konflikt bazy danych, taki jak równoczesne żądania na zasobach, które nie powinny być modyfikowane jednocześnie. Może często występować, gdy masz zbyt wiele żądań odświeżania sesji wystrzeliwujących jednocześnie dla użytkownika. Sprawdź swoją aplikację pod kątem problemów współbieżności i jeśli zostaną wykryte, wycofaj się wykładniczo.',
      email_address_invalid:
        'Domeny przykładowe i testowe nie są obecnie obsługiwane. Użyj innego adresu e-mail.',
      email_address_not_authorized:
        'Wysyłanie e-maili nie jest dozwolone dla tego adresu, ponieważ twój projekt używa domyślnej usługi SMTP. E-maile mogą być wysyłane tylko do członków twojej organizacji Supabase. Jeśli chcesz wysyłać e-maile do innych, skonfiguruj niestandardowego dostawcę SMTP.',
      email_conflict_identity_not_deletable:
        'Odłączenie tej tożsamości powoduje zmianę konta użytkownika na adres e-mail, który jest już używany przez inne konto użytkownika. Wskazuje na problem, gdzie użytkownik ma dwa różne konta używające różnych głównych adresów e-mail. Możesz potrzebować migracji danych użytkownika do jednego z ich kont w tym przypadku.',
      email_exists: 'Adres e-mail już istnieje w systemie.',
      email_not_confirmed:
        'Logowanie nie jest dozwolone dla tego użytkownika, ponieważ adres e-mail nie jest potwierdzony.',
      email_provider_disabled: 'Rejestracje są wyłączone dla e-maila i hasła.',
      flow_state_expired:
        'Stan przepływu PKCE, do którego odnosi się żądanie API, wygasł. Poproś użytkownika o ponowne zalogowanie.',
      flow_state_not_found:
        'Stan przepływu PKCE, do którego odnosi się żądanie API, już nie istnieje. Stany przepływu wygasają po pewnym czasie i są progresywnie czyszczone, co może powodować ten błąd. Powtórzone żądania mogą powodować ten błąd, ponieważ poprzednie żądanie prawdopodobnie zniszczyło stan przepływu. Poproś użytkownika o ponowne zalogowanie.',
      hook_payload_invalid_content_type:
        'Payload z Auth nie ma prawidłowego nagłówka Content-Type.',
      hook_payload_over_size_limit: 'Payload z Auth przekracza maksymalny limit rozmiaru.',
      hook_timeout: 'Nie można dotrzeć do hook w maksymalnym przydzielonym czasie.',
      hook_timeout_after_retry: 'Nie można dotrzeć do hook po maksymalnej liczbie prób.',
      identity_already_exists:
        'Tożsamość, do której odnosi się API, jest już połączona z użytkownikiem.',
      identity_not_found:
        'Tożsamość, do której odnosi się wywołanie API, nie istnieje, na przykład gdy tożsamość jest odłączona lub usunięta.',
      insufficient_aal:
        'Aby wywołać ten API, użytkownik musi mieć wyższy poziom zapewnienia uwierzytelniania. Aby rozwiązać, poproś użytkownika o rozwiązanie wyzwania MFA.',
      invite_not_found: 'Zaproszenie wygasło lub zostało już użyte.',
      invalid_credentials: 'Dane logowania lub typ grantu nie zostały rozpoznane.',
      manual_linking_disabled:
        'Wywoływanie supabase.auth.linkUser() i powiązanych API nie jest włączone na serwerze Auth.',
      mfa_challenge_expired:
        'Odpowiadanie na wyzwanie MFA powinno nastąpić w określonym czasie. Poproś o nowe wyzwanie po napotkaniu tego błędu.',
      mfa_factor_name_conflict:
        'Czynniki MFA dla pojedynczego użytkownika nie powinny mieć tej samej przyjaznej nazwy.',
      mfa_factor_not_found: 'Czynnik MFA już nie istnieje.',
      mfa_ip_address_mismatch:
        'Proces rejestracji czynników MFA musi rozpocząć i zakończyć się tym samym adresem IP.',
      mfa_phone_enroll_not_enabled: 'Rejestracja czynników MFA Phone jest wyłączona.',
      mfa_phone_verify_not_enabled:
        'Logowanie przez czynniki Phone i weryfikacja nowych czynników Phone jest wyłączona.',
      mfa_totp_enroll_not_enabled: 'Rejestracja czynników MFA TOTP jest wyłączona.',
      mfa_totp_verify_not_enabled:
        'Logowanie przez czynniki TOTP i weryfikacja nowych czynników TOTP jest wyłączona.',
      mfa_verification_failed:
        'Wyzwanie MFA nie mogło zostać zweryfikowane - nieprawidłowy kod TOTP.',
      mfa_verification_rejected:
        'Dalsza weryfikacja MFA została odrzucona. Zwracane tylko jeśli hook próby weryfikacji MFA zwraca decyzję odrzucenia.',
      mfa_verified_factor_exists:
        'Zweryfikowany czynnik telefonu już istnieje dla użytkownika. Wypisz istniejący zweryfikowany czynnik telefonu, aby kontynuować.',
      mfa_web_authn_enroll_not_enabled: 'Rejestracja czynników MFA Web Authn jest wyłączona.',
      mfa_web_authn_verify_not_enabled:
        'Logowanie przez czynniki WebAuthn i weryfikacja nowych czynników WebAuthn jest wyłączona.',
      no_authorization: 'To żądanie HTTP wymaga nagłówka Authorization, który nie jest podany.',
      not_admin:
        'Użytkownik uzyskujący dostęp do API nie jest administratorem, tj. JWT nie zawiera roszczenia roli, które identyfikuje go jako administratora serwera Auth.',
      oauth_provider_not_supported:
        'Używanie dostawcy OAuth, który jest wyłączony na serwerze Auth.',
      otp_disabled:
        'Logowanie z OTP (magic link, e-mail OTP) jest wyłączone. Sprawdź konfigurację swojego serwera.',
      otp_expired: 'Kod OTP dla tego logowania wygasł. Poproś użytkownika o ponowne zalogowanie.',
      over_email_send_rate_limit:
        'Zbyt wiele e-maili zostało wysłanych na ten adres e-mail. Poproś użytkownika o odczekanie chwili przed ponowną próbą.',
      over_request_rate_limit:
        'Zbyt wiele żądań zostało wysłanych przez tego klienta (adres IP). Poproś użytkownika o ponowną próbę za kilka minut. Czasami może wskazywać na błąd w aplikacji, która błędnie wysyła zbyt wiele żądań (na przykład źle napisany hook useEffect React).',
      over_sms_send_rate_limit:
        'Zbyt wiele wiadomości SMS zostało wysłanych na ten numer telefonu. Poproś użytkownika o odczekanie chwili przed ponowną próbą.',
      phone_exists: 'Numer telefonu już istnieje w systemie.',
      phone_not_confirmed:
        'Logowanie nie jest dozwolone dla tego użytkownika, ponieważ numer telefonu nie jest potwierdzony.',
      phone_provider_disabled: 'Rejestracje są wyłączone dla telefonu i hasła.',
      provider_disabled:
        'Dostawca OAuth jest wyłączony do użytku. Sprawdź konfigurację swojego serwera.',
      provider_email_needs_verification:
        'Nie wszyscy dostawcy OAuth weryfikują adres e-mail swoich użytkowników. Supabase Auth wymaga, aby e-maile były zweryfikowane, więc ten błąd jest wysyłany, gdy e-mail weryfikacyjny jest wysyłany po zakończeniu przepływu OAuth.',
      reauthentication_needed:
        'Użytkownik musi ponownie się uwierzytelnić, aby zmienić hasło. Poproś użytkownika o ponowne uwierzytelnienie poprzez wywołanie API supabase.auth.reauthenticate().',
      reauthentication_not_valid:
        'Weryfikacja ponownego uwierzytelnienia nie powiodła się, kod jest nieprawidłowy. Poproś użytkownika o wprowadzenie nowego kodu.',
      refresh_token_not_found: 'Sesja zawierająca token odświeżania nie została znaleziona.',
      refresh_token_already_used:
        'Token odświeżania został unieważniony i wykracza poza interwał ponownego użycia tokena odświeżania. Zobacz dokumentację na temat sesji po więcej informacji.',
      request_timeout: 'Przetwarzanie żądania trwało zbyt długo. Ponów żądanie.',
      same_password:
        'Użytkownik aktualizujący swoje hasło musi użyć innego hasła niż to obecnie używane.',
      saml_assertion_no_email:
        'Asercja SAML (informacje o użytkowniku) została odebrana po zalogowaniu, ale nie znaleziono w niej adresu e-mail, który jest wymagany. Sprawdź mapowanie atrybutów dostawcy i/lub konfigurację.',
      saml_assertion_no_user_id:
        'Asercja SAML (informacje o użytkowniku) została odebrana po zalogowaniu, ale nie znaleziono w niej ID użytkownika (zwanego NameID), które jest wymagane. Sprawdź konfigurację dostawcy tożsamości SAML.',
      saml_entity_id_mismatch:
        '(Admin API.) Aktualizacja metadanych SAML dla dostawcy tożsamości SAML nie jest możliwa, ponieważ ID encji w aktualizacji nie pasuje do ID encji w bazie danych. To jest równoznaczne z utworzeniem nowego dostawcy tożsamości i powinieneś to zrobić zamiast tego.',
      saml_idp_already_exists:
        '(Admin API.) Dodawanie dostawcy tożsamości SAML, który już został dodany.',
      saml_idp_not_found:
        'Dostawca tożsamości SAML nie został znaleziony. Najczęściej zwracane po logowaniu inicjowanym przez IdP z niezarejestrowanym dostawcą tożsamości SAML w Supabase Auth.',
      saml_metadata_fetch_failed:
        '(Admin API.) Dodawanie lub aktualizacja dostawcy SAML nie powiodła się, ponieważ jego metadane nie mogły zostać pobrane z podanego URL.',
      saml_provider_disabled:
        'Używanie Enterprise SSO z SAML 2.0 nie jest włączone na serwerze Auth.',
      saml_relay_state_expired:
        'Stan przekaźnika SAML to obiekt, który śledzi postęp żądania supabase.auth.signInWithSSO(). Dostawca tożsamości SAML powinien odpowiedzieć po określonym czasie, po którym ten błąd jest wyświetlany. Poproś użytkownika o ponowne zalogowanie.',
      saml_relay_state_not_found:
        'Stany przekaźnika SAML są progresywnie czyszczone po wygaśnięciu, co może powodować ten błąd. Poproś użytkownika o ponowne zalogowanie.',
      session_expired:
        'Sesja, do której odnosi się żądanie API, wygasła. Może to nastąpić, jeśli skonfigurowany jest timeout nieaktywności lub wpis sesji przekroczył skonfigurowaną wartość timebox. Zobacz dokumentację na temat sesji po więcej informacji.',
      session_not_found:
        'Sesja, do której odnosi się żądanie API, już nie istnieje. Może to nastąpić, jeśli użytkownik się wylogował lub wpis sesji w bazie danych został usunięty w inny sposób.',
      signup_disabled: 'Rejestracje (tworzenie nowych kont) są wyłączone na serwerze.',
      single_identity_not_deletable:
        'Każdy użytkownik musi mieć co najmniej jedną tożsamość przypisaną do siebie, więc usuwanie (odłączanie) tożsamości nie jest dozwolone, jeśli jest to jedyna dla użytkownika.',
      sms_send_failed:
        'Wysyłanie wiadomości SMS nie powiodło się. Sprawdź konfigurację swojego dostawcy SMS.',
      sso_domain_already_exists:
        '(Admin API.) Tylko jedna domena SSO może być zarejestrowana na dostawcę tożsamości SSO.',
      sso_provider_not_found:
        'Dostawca SSO nie został znaleziony. Sprawdź argumenty w supabase.auth.signInWithSSO().',
      too_many_enrolled_mfa_factors:
        'Użytkownik może mieć tylko określoną liczbę zarejestrowanych czynników MFA.',
      unexpected_audience:
        '(Przestarzała funkcja niedostępna przez biblioteki klienta Supabase.) Roszczenie X-JWT-AUD żądania nie pasuje do odbiorców JWT.',
      unexpected_failure:
        'Usługa Auth jest zdegradowana lub występuje błąd, bez konkretnego powodu.',
      user_already_exists:
        'Użytkownik z tymi informacjami (adres e-mail, numer telefonu) nie może zostać utworzony ponownie, ponieważ już istnieje.',
      user_banned:
        'Użytkownik, do którego odnosi się żądanie API, ma właściwość banned_until, która jest nadal aktywna. Żadne dalsze żądania API nie powinny być podejmowane, dopóki to pole nie zostanie wyczyszczone.',
      user_not_found: 'Użytkownik, do którego odnosi się żądanie API, już nie istnieje.',
      user_sso_managed:
        'Gdy użytkownik pochodzi z SSO, niektóre pola użytkownika nie mogą być aktualizowane (jak e-mail).',
      validation_failed: 'Podane parametry nie są w oczekiwanym formacie.',
      weak_password:
        'Użytkownik rejestruje się lub zmienia hasło bez spełnienia kryteriów siły hasła. Użyj klasy AuthWeakPasswordError, aby uzyskać dostęp do więcej informacji o tym, co muszą zrobić, aby hasło przeszło.',
    },
    // Realtime-specific errors
    realtime: {
      RealtimeDisabledForConfiguration:
        'Konfiguracja podana do Realtime przy połączeniu nie będzie mogła dostarczyć żadnych zmian Postgres. Zweryfikuj swoją konfigurację przy uruchomieniu kanału, ponieważ możesz nie mieć swoich tabel prawidłowo zarejestrowanych.',
      TenantNotFound:
        'Najemca, z którym próbujesz się połączyć, nie istnieje. Zweryfikuj, czy nazwa najemcy, z którą próbujesz się połączyć, istnieje w tabeli realtime.tenants.',
      ErrorConnectingToWebSocket:
        'Błąd podczas próby połączenia z serwerem WebSocket. Zweryfikuj swoje informacje o użytkowniku przy połączeniu.',
      ErrorAuthorizingWebSocket:
        'Błąd podczas próby autoryzacji połączenia WebSocket. Zweryfikuj swoje informacje o użytkowniku przy połączeniu.',
      TableHasSpacesInName:
        'Tabela, której próbujesz słuchać, ma spacje w nazwie, które nie są obsługiwane. Zmień nazwę tabeli, aby usunąć spacje.',
      UnableToDeleteTenant: 'Błąd podczas próby usunięcia najemcy. Skontaktuj się z obsługą.',
      UnableToSetPolicies:
        'Błąd podczas konfigurowania polityk autoryzacji. Skontaktuj się z obsługą.',
      UnableCheckoutConnection:
        'Błąd podczas próby wydzierżawienia połączenia z puli najemcy. Skontaktuj się z obsługą.',
      UnableToSubscribeToPostgres:
        'Błąd podczas próby subskrypcji zmian Postgres. Skontaktuj się z obsługą.',
      ChannelRateLimitReached:
        'Liczba kanałów, które możesz utworzyć, osiągnęła swój limit. Skontaktuj się z obsługą, aby zwiększyć swoje limity szybkości.',
      ConnectionRateLimitReached:
        'Liczba połączonych klientów osiągnęła swój limit. Skontaktuj się z obsługą, aby zwiększyć swoje limity szybkości.',
      ClientJoinRateLimitReached:
        'Szybkość dołączeń na sekundę od twoich klientów osiągnęła limity kanału. Skontaktuj się z obsługą, aby zwiększyć swoje limity szybkości.',
      UnableToConnectToTenantDatabase:
        'Realtime nie był w stanie połączyć się z bazą danych najemcy. Skontaktuj się z obsługą po dalsze instrukcje.',
      RealtimeNodeDisconnected:
        'Realtime to aplikacja rozproszona i nie jest w stanie komunikować się z jednym z rozproszonych węzłów. Skontaktuj się z obsługą po dalsze instrukcje.',
      MigrationsFailedToRun:
        'Błąd podczas uruchamiania migracji względem bazy danych najemcy wymaganych przez Realtime. Skontaktuj się z obsługą po dalsze instrukcje.',
      ErrorStartingPostgresCDCStream:
        'Błąd podczas uruchamiania strumienia Postgres CDC używanego do zmian Postgres. Skontaktuj się z obsługą po dalsze instrukcje.',
      UnknownDataProcessed:
        'Nieznany typ danych został przetworzony przez system Realtime. Skontaktuj się z obsługą po dalsze instrukcje.',
      ErrorStartingPostgresCDC:
        'Błąd podczas uruchamiania rozszerzenia Postgres CDC używanego do zmian Postgres. Skontaktuj się z obsługą po dalsze instrukcje.',
      ReplicationSlotBeingUsed:
        'Slot replikacji jest używany przez inną transakcję. Skontaktuj się z obsługą po dalsze instrukcje.',
      PoolingReplicationPreparationError:
        'Błąd podczas przygotowywania slotu replikacji. Skontaktuj się z obsługą po dalsze instrukcje.',
      PoolingReplicationError:
        'Błąd podczas pulowania slotu replikacji. Skontaktuj się z obsługą po dalsze instrukcje.',
      SubscriptionDeletionFailed:
        'Błąd podczas próby usunięcia subskrypcji zmian Postgres. Skontaktuj się z obsługą po dalsze instrukcje.',
      UnableToDeletePhantomSubscriptions:
        'Błąd podczas próby usunięcia subskrypcji, które nie są już używane. Skontaktuj się z obsługą po dalsze instrukcje.',
      UnableToCheckProcessesOnRemoteNode:
        'Błąd podczas próby sprawdzenia procesów na zdalnym węźle. Skontaktuj się z obsługą po dalsze instrukcje.',
      UnableToCreateCounter:
        'Błąd podczas próby utworzenia licznika do śledzenia limitów szybkości dla najemcy. Skontaktuj się z obsługą po dalsze instrukcje.',
      UnableToIncrementCounter:
        'Błąd podczas próby zwiększenia licznika do śledzenia limitów szybkości dla najemcy. Skontaktuj się z obsługą po dalsze instrukcje.',
      UnableToDecrementCounter:
        'Błąd podczas próby zmniejszenia licznika do śledzenia limitów szybkości dla najemcy. Skontaktuj się z obsługą po dalsze instrukcje.',
      UnableToUpdateCounter:
        'Błąd podczas próby aktualizacji licznika do śledzenia limitów szybkości dla najemcy. Skontaktuj się z obsługą po dalsze instrukcje.',
      UnableToFindCounter:
        'Błąd podczas próby znalezienia licznika do śledzenia limitów szybkości dla najemcy. Skontaktuj się z obsługą po dalsze instrukcje.',
      UnhandledProcessMessage:
        'Nieobsłużona wiadomość otrzymana przez proces Realtime. Skontaktuj się z obsługą po dalsze instrukcje.',
      UnknownError: 'Wystąpił nieznany błąd. Skontaktuj się z obsługą po dalsze instrukcje',
    },
    // Storage-specific errors
    storage: {
      NoSuchBucket: 'Określony bucket nie istnieje.',
      NoSuchKey: 'Określony plik nie istnieje.',
      NoSuchUpload: 'Określone przesyłanie nie istnieje.',
      InvalidJWT: 'Podany token uwierzytelniania jest nieprawidłowy.',
      InvalidRequest: 'Żądanie nie jest prawidłowo sformułowane.',
      TenantNotFound: 'Określony najemca nie istnieje.',
      EntityTooLarge: 'Przesyłany plik jest zbyt duży.',
      InternalError: 'Wystąpił wewnętrzny błąd serwera. Spróbuj ponownie później.',
      ResourceAlreadyExists: 'Określony zasób już istnieje.',
      InvalidBucketName: 'Określona nazwa bucketa jest nieprawidłowa.',
      InvalidKey: 'Określony klucz pliku jest nieprawidłowy.',
      InvalidRange: 'Określony zakres nie jest prawidłowy.',
      InvalidMimeType: 'Określony typ pliku nie jest prawidłowy.',
      InvalidUploadId: 'Określone ID przesyłania jest nieprawidłowe.',
      KeyAlreadyExists: 'Określony plik już istnieje.',
      BucketAlreadyExists: 'Określony bucket już istnieje.',
      DatabaseTimeout: 'Wystąpił timeout podczas dostępu do bazy danych. Spróbuj ponownie później.',
      InvalidSignature: 'Podany podpis nie pasuje do obliczonego podpisu.',
      SignatureDoesNotMatch: 'Podpis żądania nie pasuje do obliczonego podpisu.',
      AccessDenied: 'Dostęp do określonego zasobu jest zabroniony.',
      ResourceLocked: 'Określony zasób jest zablokowany.',
      DatabaseError: 'Wystąpił błąd podczas dostępu do bazy danych.',
      MissingContentLength: 'Brakuje nagłówka Content-Length.',
      MissingParameter: 'Brakuje wymaganego parametru w żądaniu.',
      InvalidUploadSignature: 'Podany podpis przesyłania jest nieprawidłowy.',
      LockTimeout: 'Wystąpił timeout podczas oczekiwania na blokadę. Spróbuj ponownie później.',
      S3Error: 'Wystąpił błąd z usługą przechowywania.',
      S3InvalidAccessKeyId: 'Podany klucz dostępu do przechowywania jest nieprawidłowy.',
      S3MaximumCredentialsLimit: 'Osiągnięto maksymalną liczbę poświadczeń.',
      InvalidChecksum: 'Suma kontrolna pliku nie pasuje.',
      MissingPart: 'Brakuje części pliku.',
      SlowDown: 'Szybkość żądań jest zbyt wysoka. Spróbuj ponownie później.',
    },
    // Database-specific errors
    database: {
      '08000': 'Połączenie z serwerem bazy danych zostało utracone lub nie mogło zostać nawiązane.',
      '08003': 'Używane połączenie z bazą danych nie jest już aktywne.',
      '08006': 'Próba połączenia z bazą danych nie powiodła się.',
      '0P000': 'Określona nazwa bazy danych nie istnieje.',
      '22000':
        'Ogólny błąd związany z przetwarzaniem danych; sprawdź konkretną wiadomość po szczegóły.',
      '22001': 'Wprowadzony tekst jest zbyt długi dla kolumny bazy danych.',
      '22002': 'Wymagana wartość była brakująca podczas próby wstawienia lub aktualizacji danych.',
      '22003': 'Wprowadzona liczba jest zbyt duża lub zbyt mała dla kolumny bazy danych.',
      '22004': 'Wartość null została użyta w niewłaściwym kontekście.',
      '22005': 'Znaleziono nieprawidłowy znak w wartości numerycznej.',
      '22007': 'Podana wartość daty lub czasu nie jest w prawidłowym formacie.',
      '22008': 'Wartość daty lub czasu jest poza prawidłowym zakresem.',
      '22012': 'Próbowałeś podzielić liczbę przez zero.',
      '22018': 'Znaleziono nieprawidłową wartość znaku dla zestawu znaków.',
      '22019': 'Znaleziono nieprawidłowy znak ucieczki.',
      '22021': 'Znaleziono nieprawidłową wartość znaku dla określonego zestawu znaków.',
      '22023': 'Użyto nieprawidłowej wartości parametru.',
      '22025': 'Znaleziono nieprawidłową sekwencję ucieczki.',
      '22026': 'Dane ciągu mają nieprawidłową długość dla operacji.',
      '22P01': 'Wystąpił wyjątek zmiennoprzecinkowy (np. przepełnienie, niedopełnienie).',
      '22P02': 'Podany tekst nie może być przekonwertowany na wymagany typ danych.',
      '22P03': 'Podano nieprawidłową wartość datetime.',
      '22P04': 'Wartość null została użyta tam, gdzie nie jest dozwolona.',
      '22P05': 'Podano nieprawidłową wartość dla dokumentu XML.',
      '23000': 'Ograniczenie integralności zostało naruszone.',
      '23502': 'Wymagane pole zostało pozostawione puste (narusza ograniczenie not-null).',
      '23503':
        'Rekord, do którego się odwołujesz, nie istnieje (narusza ograniczenie klucza obcego).',
      '23505': 'Rekord z tymi informacjami już istnieje (narusza ograniczenie unikalności).',
      '23514':
        'Wprowadzone dane nie spełniają wymaganych warunków (narusza ograniczenie sprawdzania).',
      '25000': 'Obecny stan transakcji jest nieprawidłowy dla operacji.',
      '25P02':
        'Obecna transakcja została przerwana; polecenia ignorowane do końca bloku transakcji.',
      '28000': 'Uwierzytelnienie nie powiodło się dla określonego użytkownika.',
      '28P01': 'Uwierzytelnienie nie powiodło się: Nieprawidłowe hasło.',
      '3D000': 'Określona baza danych nie istnieje.',
      '3F000': 'Określony schemat nie istnieje.',
      '40001': 'Wystąpił błąd serializacji z powodu równoczesnej aktualizacji (spróbuj ponownie).',
      '40P01': 'Wykryto deadlock; transakcja została wycofana.',
      '42000': 'Wystąpił błąd składni lub naruszenie reguły dostępu.',
      '42501': 'Nie masz niezbędnych uprawnień do wykonania tej akcji.',
      '42601': 'Jest błąd w zapytaniu lub poleceniu bazy danych (błąd składni).',
      '42602': 'Użyto nieprawidłowej nazwy dla obiektu bazy danych.',
      '42701': 'Użyto duplikatu nazwy kolumny.',
      '42702': 'Dokonano niejednoznacznego odwołania do kolumny.',
      '42703': 'Kolumna, do której próbujesz uzyskać dostęp, nie istnieje.',
      '42704': 'Obiekt bazy danych (jak sekwencja, typ lub funkcja) nie istnieje.',
      '42710': 'Obiekt o tej nazwie już istnieje (duplikat obiektu).',
      '42712': 'Użyto niejednoznacznego aliasu.',
      '42803': 'Wystąpił błąd grupowania w zapytaniu.',
      '42804': 'Podany typ danych nie jest kompatybilny z kolumną lub operacją.',
      '42830': 'Dokonano nieprawidłowej definicji klucza obcego.',
      '42883': 'Funkcja lub operator, którego próbujesz użyć, nie istnieje z podanymi argumentami.',
      '42P01': 'Tabela, do której próbujesz uzyskać dostęp, nie istnieje.',
      '42P02': 'Parametr użyty w zapytaniu nie jest zdefiniowany.',
      '42P07': 'Tabela o tej nazwie już istnieje.',
      '42P18': 'Użyto nieokreślonego typu danych tam, gdzie wymagany jest konkretny typ.',
      '53000': 'Serwer bazy danych doświadcza ograniczeń zasobów.',
      '53100': 'Serwerowi bazy danych skończyło się miejsce na dysku.',
      '53200': 'Serwerowi bazy danych skończyła się pamięć.',
      '53300': 'Osiągnięto maksymalną liczbę dozwolonych połączeń z bazą danych.',
      '54000': 'Przekroczono limit programu (np. zbyt wiele kolumn, zbyt złożone zapytanie).',
      '54001': 'Instrukcja była zbyt złożona.',
      '54011': 'Określono zbyt wiele kolumn.',
      '54023': 'Operacja zażądała zbyt dużo pamięci.',
      '55000': 'Obiekt bazy danych nie jest w poprawnym stanie dla żądanej operacji.',
      '55006': 'Obiekt bazy danych jest obecnie używany przez inny proces.',
      '55P03': 'Blokada, którą próbujesz nabyć, nie jest dostępna.',
      '57014': 'Zapytanie zostało anulowane przez użytkownika lub administratora.',
      '58P01': 'Nie można uzyskać dostępu do wymaganego pliku lub zasobu.',
      P0001:
        'Wystąpił niestandardowy błąd zdefiniowany przez bazę danych (sprawdź wiadomość po szczegóły).',
      P0002: 'Twoje zapytanie nie zwróciło wyników, gdy oczekiwano co najmniej jednego.',
      P0003:
        'Zbyt wiele wierszy zostało zwróconych przez podzapytanie, które oczekuje pojedynczego wyniku.',
      P0004: 'Kod statusu wskazuje na błąd asercji.',
      PGRST000: 'Nie można połączyć się z bazą danych.',
      PGRST001: 'Rola bazy danych dla połączenia jest nieprawidłowa.',
      PGRST002: 'Schemat bazy danych nie jest dostępny.',
      PGRST100: 'Pamięć podręczna schematu nie mogła zostać załadowana.',
      PGRST101: 'Token JWT jest nieprawidłowy lub wygasł.',
      PGRST102: 'Sekret JWT brakuje lub jest nieprawidłowy.',
      PGRST103: 'Roszczenie roli JWT jest nieprawidłowe lub nie może być przeanalizowane.',
      PGRST105: 'Rola bazy danych określona w JWT nie istnieje.',
      PGRST106: 'Konfiguracja serwera jest nieprawidłowa.',
      PGRST107: 'Żądany typ mediów nie jest obsługiwany.',
      PGRST108: 'Żądany schemat nie jest eksponowany.',
      PGRST109: 'Żądana tabela/widok nie jest eksponowana w schemacie.',
      PGRST110: 'Żądana funkcja nie jest eksponowana lub nie istnieje.',
      PGRST111: 'Próbowano wywołać funkcję volatile z żądaniem GET.',
      PGRST112: 'Treść żądania jest nieprawidłowo sformułowana lub nie może być przeanalizowana.',
      PGRST113: 'Parametr zapytania jest nieprawidłowy lub nieprawidłowo sformułowany.',
      PGRST114: 'Nagłówek HTTP jest nieprawidłowy lub nieprawidłowo sformułowany.',
      PGRST116: 'Żądanie narusza politykę bezpieczeństwa (np. RLS).',
      PGRST117: 'Żądany zasób nie mógł zostać znaleziony.',
      PGRST200: 'Ciąg zapytania zawiera nieprawidłowy parametr.',
      PGRST201: 'Treść żądania brakuje lub jest nieprawidłowo sformułowana dla operacji.',
      PGRST202: 'Żądany zakres nie jest zaspokojony.',
      PGRST203: 'Żądanie zawiera nieprawidłowy parametr filtru lub kolejności.',
      PGRST204:
        'Określona kolumna nie mogła zostać znaleziona w pamięci podręcznej schematu tabeli; sprawdź ekspozycję schematu lub istnienie kolumny.',
      PGRST300: 'Wystąpił błąd podczas masowego wstawiania lub aktualizacji.',
      PGRST301: 'Żądana akcja nie jest dozwolona na zasobie.',
      PGRST302: 'Liczba wierszy dotkniętych operacją nie pasuje do oczekiwań.',
    },

    // Functions-specific errors
    functions: {},
  },
};
