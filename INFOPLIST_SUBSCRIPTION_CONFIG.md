# Configurações Info.plist para Assinaturas

## Adicione estas chaves no seu Info.plist:

### 1. Privacy - App Store Connect Key (opcional, para RevenueCat ou similar)
```xml
<key>SKAdNetworkItems</key>
<array>
    <!-- Adicione os SKAdNetwork IDs que você usa -->
</array>
```

### 2. URLs para Termos e Privacidade
Certifique-se de adicionar URLs válidas no código:

```swift
// No PaywallView.swift, atualize:

Button("Termos de Uso") {
    if let url = URL(string: "https://seusite.com/terms") {
        #if os(iOS)
        UIApplication.shared.open(url)
        #endif
    }
}

Button("Privacidade") {
    if let url = URL(string: "https://seusite.com/privacy") {
        #if os(iOS)
        UIApplication.shared.open(url)
        #endif
    }
}
```

## Configurações do Projeto Xcode

### 1. Bundle Identifier
Certifique-se de que seu Bundle ID seja único:
- Exemplo: `com.seudominio.habitrats`
- O mesmo usado no App Store Connect

### 2. Signing & Capabilities
- ✅ In-App Purchase capability adicionada
- ✅ Certificado de distribuição configurado
- ✅ Provisioning Profile atualizado

### 3. Build Settings
- Deployment Target: iOS 17.0+
- Swift Language Version: Swift 6.0

### 4. Info.plist - Descrições de Privacidade
Adicione se usar HealthKit (já deve estar):

```xml
<key>NSHealthShareUsageDescription</key>
<string>HabitRats precisa acessar seus dados de saúde para sincronizar hábitos de fitness</string>

<key>NSHealthUpdateUsageDescription</key>
<string>HabitRats precisa atualizar seus dados de saúde para registrar atividades</string>
```

## App Store Connect - Metadados

### Nome do App
**HabitRats**

### Subtítulo (opcional, mas recomendado)
**Hábitos, Streaks & Progresso**

### Descrição
```
Transforme sua vida com HabitRats - o app definitivo para rastrear hábitos, construir streaks e alcançar suas metas!

🔥 RECURSOS PRINCIPAIS
• Rastreie hábitos diários com facilidade
• Sistema de streaks e gamificação
• Integração com Apple Health
• Calendário de visualização tipo GitHub
• Badges e conquistas desbloqueáveis
• Modo discreto para hábitos sensíveis

⭐ PREMIUM
• Hábitos ilimitados
• Análises avançadas e estatísticas
• Sincronização na nuvem
• Exportação de dados
• Temas personalizados
• Widgets personalizados
• Sem anúncios

🎯 PERFEITO PARA
• Fitness e exercícios
• Leitura e estudo
• Meditação e mindfulness
• Abstinência (NoFap, sem fumo, sobriedade)
• Sono e hidratação
• Qualquer hábito que você queira construir!

💪 GAMIFICAÇÃO
• Sistema de XP e níveis
• Badges para conquistas
• Streaks diários
• Dias perfeitos
• Desafios personalizados

Comece sua jornada hoje com teste gratuito de 7 dias!

Termos de Uso: https://seusite.com/terms
Política de Privacidade: https://seusite.com/privacy
```

### Palavras-chave (100 caracteres máximo)
```
hábitos,rotina,streak,fitness,saúde,gamificação,motivação,metas,progresso,rastreador
```

### Categoria Principal
**Saúde e Fitness**

### Categoria Secundária
**Estilo de Vida** ou **Produtividade**

## Screenshots Necessários

### iPhone 6.7" (iPhone 15 Pro Max, 14 Pro Max, etc.)
- Resolução: 1290 x 2796 pixels
- Mínimo: 3 screenshots
- Recomendado: 5-6 screenshots

### iPhone 6.5" (iPhone 11 Pro Max, XS Max)
- Resolução: 1242 x 2688 pixels
- Mínimo: 3 screenshots

### Sugestão de ordem dos screenshots:
1. **Home Screen** - Dashboard principal com hábitos
2. **Check-in** - Interface de marcar hábito como completo
3. **Calendário** - Heatmap estilo GitHub
4. **Stats** - Gráficos e estatísticas
5. **Profile** - Perfil com badges e nível
6. **Premium** (opcional) - Tela de assinatura

## Informações sobre Assinaturas

### Texto de Marketing (Promotional Text)
```
🎉 OFERTA DE LANÇAMENTO: 7 dias grátis + 50% de desconto no primeiro mês!
```

### Descrição da Assinatura (no App Store Connect)
```
HABITRATS PREMIUM

Desbloqueie todo o potencial do app:

✓ Hábitos ilimitados
✓ Análises avançadas com gráficos detalhados
✓ Sincronização na nuvem entre dispositivos
✓ Exportação de dados (JSON/CSV)
✓ Temas personalizados
✓ Widgets premium
✓ Sem anúncios
✓ Suporte prioritário

OPÇÕES DE ASSINATURA:
• Mensal: R$ 9,90/mês
• Anual: R$ 59,90/ano (economize 50%)
• Vitalício: R$ 99,90 (pagamento único)

TESTE GRÁTIS DE 7 DIAS
Experimente todos os recursos premium gratuitamente por 7 dias. Cancele a qualquer momento.

RENOVAÇÃO AUTOMÁTICA
• O pagamento será cobrado na sua conta Apple ID na confirmação da compra
• A assinatura renova automaticamente a menos que seja cancelada pelo menos 24 horas antes do fim do período atual
• Sua conta será cobrada pela renovação dentro de 24 horas antes do fim do período atual
• Você pode gerenciar e cancelar suas assinaturas nas configurações da sua conta Apple ID

Termos de Uso: https://seusite.com/terms
Política de Privacidade: https://seusite.com/privacy
```

## Checklist Final

Antes de submeter:

### Xcode
- [ ] Build sem warnings
- [ ] Teste em dispositivo real
- [ ] Teste com StoreKit Configuration
- [ ] Versão atualizada (ex: 1.0.0)
- [ ] Build number incrementado (ex: 1)

### App Store Connect
- [ ] App criado
- [ ] Assinaturas configuradas e aprovadas
- [ ] Informações bancárias configuradas
- [ ] Screenshots enviados
- [ ] Descrição completa
- [ ] Palavras-chave definidas
- [ ] Categoria selecionada
- [ ] Ícone do app enviado (1024x1024)

### Legal
- [ ] Termos de uso publicados
- [ ] Política de privacidade publicada
- [ ] Links funcionando no app
- [ ] Links adicionados no App Store Connect

### Testes
- [ ] Compras testadas com sandbox
- [ ] Restaurar compras funcionando
- [ ] Features premium desbloqueiam
- [ ] Teste em iOS 17.0 (versão mínima)
- [ ] Teste em iPhone e iPad (se suportar)

Boa sorte! 🚀
