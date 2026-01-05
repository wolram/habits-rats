# 🚀 Quick Start - Sistema de Assinaturas

## ✅ Arquivos Criados

| Arquivo | Descrição |
|---------|-----------|
| `SubscriptionManager.swift` | Gerenciador central de assinaturas com StoreKit 2 |
| `PaywallView.swift` | Tela de apresentação de assinaturas |
| `PremiumComponents.swift` | Componentes reutilizáveis (banner, locks) |
| `PremiumIntegrationExamples.swift` | Exemplos de como integrar no app |
| `Configuration.storekit` | Configuração para testes locais |
| `SUBSCRIPTION_SETUP.md` | Guia completo de configuração |
| `INFOPLIST_SUBSCRIPTION_CONFIG.md` | Configurações do projeto |

## 🎯 Planos de Assinatura

### 💰 Preços Sugeridos
- **Mensal**: R$ 9,90/mês
- **Anual**: R$ 59,90/ano (economiza ~50%)
- **Vitalício**: R$ 99,90 (pagamento único)

### 🎁 Trial Gratuito
- **7 dias grátis** em todas as assinaturas
- Aumenta conversão em 300%+

## 📦 Product IDs

```swift
com.habitrats.premium.monthly   // Assinatura mensal
com.habitrats.premium.yearly    // Assinatura anual
com.habitrats.premium.lifetime  // Compra vitalícia
```

**⚠️ IMPORTANTE**: Altere o prefixo `com.habitrats` para o seu Bundle ID!

## 🔨 Implementação Rápida

### 1. Adicionar Banner Premium no ProfileView

```swift
// Em ProfileView.swift, adicione após o ProfileHeader:

VStack(spacing: 24) {
    GlassCard {
        ProfileHeader(profile: viewModel.userProfile)
    }
    
    // ✨ ADICIONE AQUI
    PremiumBannerView()
    
    // ... resto do código
}
```

### 2. Bloquear Features Premium

```swift
// Exemplo: Limitar hábitos para usuários gratuitos
func canAddHabit() -> Bool {
    let subscriptionManager = SubscriptionManager.shared
    return subscriptionManager.isPremium || habits.count < 5
}

// Exemplo: Bloquear exportação de dados
Button("Exportar") {
    if SubscriptionManager.shared.isPremium {
        exportData()
    } else {
        showPaywall = true
    }
}
```

### 3. Adicionar no Settings

```swift
Section("Assinatura") {
    if SubscriptionManager.shared.isPremium {
        HStack {
            Label("Status", systemImage: "crown.fill")
            Spacer()
            Text("Premium Ativo")
        }
        Button("Gerenciar Assinatura") {
            openSubscriptionSettings()
        }
    } else {
        Button {
            showPaywall = true
        } label: {
            Label("Fazer Upgrade", systemImage: "crown.fill")
        }
    }
}
```

## 🎨 Features Premium Sugeridas

### Limites no Plano Gratuito
- ✅ **5 hábitos** (ilimitado no premium)
- ✅ **30 dias** de histórico (ilimitado no premium)
- ✅ **Estatísticas básicas** (avançadas no premium)

### Recursos Exclusivos Premium
- 🔒 Hábitos ilimitados
- 🔒 Análises avançadas
- 🔒 Sincronização na nuvem
- 🔒 Exportação de dados (JSON/CSV)
- 🔒 Temas personalizados
- 🔒 Widgets personalizados
- 🔒 Sem anúncios
- 🔒 Suporte prioritário

## 📱 Xcode - Passos Essenciais

### 1. Adicionar Capability
```
Target → Signing & Capabilities → + Capability → In-App Purchase
```

### 2. Configurar StoreKit para Testes
```
Edit Scheme → Run → Options → StoreKit Configuration → Configuration.storekit
```

### 3. Bundle ID
Certifique-se de usar seu Bundle ID único:
```
com.seudominio.habitrats
```

## 🌐 App Store Connect - Checklist

### Antes de Criar Assinaturas
- [ ] Informações bancárias configuradas
- [ ] Informações fiscais configuradas
- [ ] Acordo de apps pagos aceito

### Criar Assinaturas
1. **Grupo de Assinatura**: "Premium Subscription"
2. **Assinatura Mensal**: `com.habitrats.premium.monthly`
3. **Assinatura Anual**: `com.habitrats.premium.yearly`
4. **Compra Vitalícia**: `com.habitrats.premium.lifetime`

### Configurar Ofertas
- [ ] Trial grátis de 7 dias
- [ ] Localização em Português (Brasil)
- [ ] Screenshots da interface de assinatura
- [ ] Preços para todos os territórios

## 📄 Legal - Requisitos Obrigatórios

### Termos de Uso
Crie uma página incluindo:
- Descrição do serviço
- Política de renovação automática
- Preços e duração
- Como cancelar
- Política de reembolso

### Política de Privacidade
Explique:
- Dados coletados
- Como são usados
- Compartilhamento com terceiros
- Proteção de dados (LGPD)
- Direitos do usuário

### Onde Hospedar (Grátis)
- GitHub Pages
- Notion (público)
- Google Sites
- Seu domínio

### Adicionar no App
```swift
// PaywallView.swift
Button("Termos de Uso") {
    if let url = URL(string: "https://seusite.com/terms") {
        UIApplication.shared.open(url)
    }
}
```

## 🧪 Testes

### Teste Local (StoreKit Configuration)
1. Configure o scheme para usar `Configuration.storekit`
2. Execute o app
3. Compras serão simuladas
4. Veja transações em: Debug → StoreKit → Manage Transactions

### Teste com Sandbox
1. App Store Connect → Usuários e Acesso → Sandbox → Testers
2. Crie um tester (ex: `test@teste.com`)
3. No dispositivo: Ajustes → App Store → Sandbox Account
4. Faça login com o tester
5. Teste as compras (não serão cobradas)

## 🚨 Erros Comuns

### "Cannot connect to App Store"
- ✅ Certifique-se de estar usando um dispositivo real (não simulador)
- ✅ Use um Sandbox Tester válido
- ✅ Verifique se as assinaturas estão "Ready to Submit" no App Store Connect

### "Product IDs not found"
- ✅ Aguarde até 2 horas após criar as assinaturas
- ✅ Verifique se os IDs no código correspondem ao App Store Connect
- ✅ Certifique-se de que as assinaturas estão aprovadas

### "Restore failed"
- ✅ Use o mesmo Apple ID que fez a compra
- ✅ Aguarde alguns minutos após a compra
- ✅ Tente fazer logout/login do Sandbox Account

## 📊 Monitoramento

### App Store Connect Analytics
Monitore:
- 📈 Taxa de conversão do trial
- 💰 Receita (MRR - Monthly Recurring Revenue)
- 📉 Churn rate (cancelamentos)
- 👥 Assinantes ativos
- 💵 ARPU (Average Revenue Per User)

### Métricas de Sucesso
- **Boa taxa de conversão**: 5-10% de trial para pago
- **Churn aceitável**: < 5% ao mês
- **LTV ideal**: > 3x o CAC

## 🎯 Dicas de Marketing

### Onboarding
- Mostre valor premium na primeira semana
- Ofereça trial após 3-5 dias de uso
- Destaque recursos bloqueados estrategicamente

### Pricing
- Anual: 40-50% de desconto sobre mensal
- Vitalício: 10-15x o preço mensal
- Teste diferentes valores (A/B testing)

### Copy que Converte
✅ "Menos que um café por mês"
✅ "Economize 50% no plano anual"
✅ "Mais de 10.000 usuários premium"
✅ "Experimente grátis por 7 dias"
❌ "Premium custa R$ 9,90"

## 📚 Próximos Passos

1. ✅ Leia `SUBSCRIPTION_SETUP.md` (guia completo)
2. ✅ Configure no Xcode (In-App Purchase)
3. ✅ Crie assinaturas no App Store Connect
4. ✅ Integre `PremiumBannerView` no app
5. ✅ Bloqueie features premium
6. ✅ Crie páginas de Termos e Privacidade
7. ✅ Teste com StoreKit Configuration
8. ✅ Teste com Sandbox Tester
9. ✅ Submeta para revisão!

## 💡 Recursos

- [Apple StoreKit Docs](https://developer.apple.com/storekit/)
- [App Store Connect](https://appstoreconnect.apple.com)
- [WWDC: What's new in StoreKit](https://developer.apple.com/videos/)
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/in-app-purchase)

## 🆘 Suporte

Se tiver dúvidas:
1. Consulte `SUBSCRIPTION_SETUP.md` para guia detalhado
2. Veja `PremiumIntegrationExamples.swift` para código de exemplo
3. Teste com `Configuration.storekit` antes de ir para produção

---

**Boa sorte com seu lançamento!** 🚀✨

Lembre-se: Um bom onboarding e trial grátis são essenciais para conversão!
