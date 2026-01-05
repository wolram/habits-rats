# 🏗️ Arquitetura do Sistema de Assinaturas

## 📊 Visão Geral do Fluxo

```
┌─────────────────────────────────────────────────────────────────┐
│                         USUÁRIO                                  │
│                            ↓                                     │
│                      Abre o App                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    SUBSCRIPTION MANAGER                          │
│  (Verifica status da assinatura automaticamente)                │
│                                                                  │
│  ┌──────────────────────┐         ┌────────────────────────┐   │
│  │  isPremium: Bool     │         │  subscriptionStatus    │   │
│  │  • true = Premium    │         │  • .free               │   │
│  │  • false = Gratuito  │         │  • .monthly            │   │
│  └──────────────────────┘         │  • .yearly             │   │
│                                    │  • .lifetime           │   │
│                                    └────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↓
                    ┌─────────┴─────────┐
                    ↓                   ↓
         ┌──────────────────┐  ┌──────────────────┐
         │ USUÁRIO GRATUITO │  │  USUÁRIO PREMIUM │
         └──────────────────┘  └──────────────────┘
                    ↓                   ↓
         ┌──────────────────┐  ┌──────────────────┐
         │ Vê Banner        │  │ Vê Badge Premium │
         │ Premium          │  │ "Premium Ativo"  │
         │                  │  │                  │
         │ Limite:          │  │ Sem limites:     │
         │ • 5 hábitos      │  │ • ∞ hábitos      │
         │ • Stats básicas  │  │ • Stats avançadas│
         │ • Sem export     │  │ • Export dados   │
         │ • Temas básicos  │  │ • Temas custom   │
         └──────────────────┘  └──────────────────┘
                    ↓
         ┌──────────────────┐
         │ Toca "Upgrade"   │
         └──────────────────┘
                    ↓
         ┌──────────────────────────────────┐
         │        PAYWALL VIEW              │
         │                                  │
         │  ┌────────────────────────────┐ │
         │  │  Premium Mensal: R$ 9,90  │ │
         │  │  [7 dias grátis]          │ │
         │  └────────────────────────────┘ │
         │                                  │
         │  ┌────────────────────────────┐ │
         │  │  Premium Anual: R$ 59,90  │ │
         │  │  [Economize 50%] ⭐        │ │
         │  └────────────────────────────┘ │
         │                                  │
         │  ┌────────────────────────────┐ │
         │  │  Vitalício: R$ 99,90      │ │
         │  │  [Pagamento único]         │ │
         │  └────────────────────────────┘ │
         │                                  │
         │  [Assinar] [Restaurar Compras]  │
         └──────────────────────────────────┘
                    ↓
         ┌──────────────────┐
         │ Usuário seleciona│
         │ plano e compra   │
         └──────────────────┘
                    ↓
┌─────────────────────────────────────────────────────────────────┐
│                    STOREKIT 2 (APPLE)                            │
│                                                                  │
│  1. Valida pagamento                                            │
│  2. Processa com Apple Pay/iTunes                               │
│  3. Retorna resultado:                                          │
│     • .success → Compra aprovada ✅                             │
│     • .userCancelled → Cancelou                                 │
│     • .pending → Aguardando aprovação                           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                    ↓ (se success)
┌─────────────────────────────────────────────────────────────────┐
│              SUBSCRIPTION MANAGER                                │
│                                                                  │
│  1. updatePurchasedProducts()                                   │
│  2. purchasedProductIDs.insert(product.id)                      │
│  3. isPremium = true ✅                                          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────────────────────┐
│                      APP UI REAGE                                │
│                                                                  │
│  • Banner premium desaparece                                    │
│  • Badge "Premium Ativo" aparece                                │
│  • Features premium desbloqueadas                               │
│  • Limite de hábitos removido                                   │
│  • Exportação habilitada                                        │
│  • Análises avançadas disponíveis                               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🧩 Componentes do Sistema

### 1. SubscriptionManager (Singleton)
```swift
┌──────────────────────────────────────────┐
│      SubscriptionManager.shared          │
├──────────────────────────────────────────┤
│ Properties:                              │
│  • products: [Product]                   │
│  • purchasedProductIDs: Set<String>      │
│  • isPremium: Bool                       │
│  • subscriptionStatus: SubscriptionStatus│
│                                          │
│ Methods:                                 │
│  • loadProducts() async                  │
│  • purchase(_ product) async throws      │
│  • restorePurchases() async throws       │
│  • updatePurchasedProducts() async       │
│                                          │
│ Listens to:                              │
│  • Transaction.updates (renovações)      │
│  • Transaction.currentEntitlements       │
└──────────────────────────────────────────┘
```

### 2. PaywallView (SwiftUI View)
```swift
┌──────────────────────────────────────────┐
│           PaywallView                    │
├──────────────────────────────────────────┤
│ Design:                                  │
│  • Gradiente verde (brand)               │
│  • Cards de assinatura                   │
│  • Destaque de economia                  │
│  • Trial gratuito visível                │
│  • Links legais (Termos/Privacidade)     │
│                                          │
│ Ações:                                   │
│  • Comprar assinatura                    │
│  • Restaurar compras                     │
│  • Fechar (dismiss)                      │
│                                          │
│ Estado:                                  │
│  • selectedProduct: Product?             │
│  • isProcessing: Bool                    │
│  • showingError: Bool                    │
└──────────────────────────────────────────┘
```

### 3. PremiumComponents (Helpers)
```swift
┌──────────────────────────────────────────┐
│        PremiumComponents                 │
├──────────────────────────────────────────┤
│ PremiumBannerView:                       │
│  • Banner para usuários gratuitos        │
│  • Badge para usuários premium           │
│  • Abre PaywallView ao tocar            │
│                                          │
│ PremiumFeatureLock:                      │
│  • Tela de bloqueio para features        │
│  • Ícone de cadeado                      │
│  • Botão de upgrade                      │
│                                          │
│ .requirePremium() Modifier:              │
│  • Bloqueia views automaticamente        │
│  • Mostra lock se não for premium        │
└──────────────────────────────────────────┘
```

---

## 🔄 Fluxo de Dados

### Carregamento Inicial
```
App Launch
    ↓
SubscriptionManager.init()
    ↓
listenForTransactions() → Background listener
    ↓
loadProducts() → Busca produtos da Apple
    ↓
updatePurchasedProducts() → Verifica compras existentes
    ↓
isPremium atualizado
    ↓
UI reage (@Observable)
```

### Fluxo de Compra
```
User toca "Assinar"
    ↓
purchase(product) chamado
    ↓
Product.purchase() → StoreKit
    ↓
Apple processa pagamento
    ↓
Resultado retornado
    ↓
  ┌─────┴─────┐
  ↓           ↓
Success    Cancelled
  ↓
Transaction verificado
  ↓
updatePurchasedProducts()
  ↓
isPremium = true
  ↓
UI atualiza automaticamente
  ↓
PaywallView fecha (dismiss)
```

### Fluxo de Restauração
```
User toca "Restaurar"
    ↓
restorePurchases() chamado
    ↓
AppStore.sync() → Sincroniza com Apple
    ↓
updatePurchasedProducts()
    ↓
Verifica Transaction.currentEntitlements
    ↓
purchasedProductIDs atualizado
    ↓
  ┌──────┴──────┐
  ↓             ↓
Found       Not Found
  ↓             ↓
isPremium=true  Mostra erro
  ↓             ↓
Success!      "Nenhuma compra encontrada"
```

---

## 🏗️ Integração no App

### ProfileView
```swift
┌──────────────────────────────────────────┐
│         ProfileView                      │
├──────────────────────────────────────────┤
│                                          │
│  ProfileHeader                           │
│      ↓                                   │
│  PremiumBannerView ← ADICIONE AQUI       │
│      ↓                                   │
│  LevelProgressCard                       │
│      ↓                                   │
│  QuickStatsGrid                          │
│      ↓                                   │
│  BadgesSection                           │
│                                          │
└──────────────────────────────────────────┘
```

### AddHabitView (com limite)
```swift
┌──────────────────────────────────────────┐
│        AddHabitView                      │
├──────────────────────────────────────────┤
│                                          │
│  Form para criar hábito                  │
│      ↓                                   │
│  Botão "Salvar"                          │
│      ↓                                   │
│  Verificação:                            │
│  if canAddHabit() {                      │
│      saveHabit()                         │
│  } else {                                │
│      showPaywall = true ← BLOQUEIO       │
│  }                                       │
│                                          │
│  canAddHabit() {                         │
│      return isPremium || count < 5       │
│  }                                       │
│                                          │
└──────────────────────────────────────────┘
```

### AdvancedAnalyticsView (bloqueada)
```swift
┌──────────────────────────────────────────┐
│     AdvancedAnalyticsView                │
├──────────────────────────────────────────┤
│                                          │
│  if isPremium {                          │
│      ↓                                   │
│      Gráficos avançados                  │
│      Estatísticas detalhadas             │
│      Comparações                         │
│  } else {                                │
│      ↓                                   │
│      PremiumFeatureLock ← BLOQUEIO       │
│  }                                       │
│                                          │
└──────────────────────────────────────────┘
```

---

## 📱 Testes - Ambientes

### 1. StoreKit Configuration (Local)
```
┌──────────────────────────────────────────┐
│       Configuration.storekit             │
├──────────────────────────────────────────┤
│  • Produtos simulados                    │
│  • Preços fake                           │
│  • Sem cobranças reais                   │
│  • Testes rápidos                        │
│  • Debug → StoreKit → Transactions       │
│                                          │
│  ✅ Use para: Desenvolvimento inicial    │
└──────────────────────────────────────────┘
```

### 2. Sandbox (Realista)
```
┌──────────────────────────────────────────┐
│          Sandbox Testers                 │
├──────────────────────────────────────────┤
│  • Contas fake no App Store Connect      │
│  • Produtos reais configurados           │
│  • Simula fluxo completo                 │
│  • Sem cobranças reais                   │
│  • Acelerar renovações                   │
│                                          │
│  ✅ Use para: Testes antes de produção   │
└──────────────────────────────────────────┘
```

### 3. Produção (Real)
```
┌──────────────────────────────────────────┐
│            Produção                      │
├──────────────────────────────────────────┤
│  • Produtos aprovados pela Apple         │
│  • Cobranças reais                       │
│  • Usuários reais                        │
│  • Analytics reais                       │
│                                          │
│  ✅ Use para: App publicado              │
└──────────────────────────────────────────┘
```

---

## 🔐 Segurança e Validação

### Transaction Verification
```
┌──────────────────────────────────────────┐
│      Transaction Verificação             │
├──────────────────────────────────────────┤
│                                          │
│  Transaction.updates                     │
│      ↓                                   │
│  result: VerificationResult<Transaction> │
│      ↓                                   │
│  ┌─────┴─────┐                          │
│  ↓           ↓                           │
│ .verified  .unverified                   │
│  ↓           ↓                           │
│ Safe ✅    Reject ❌                      │
│  ↓                                       │
│ transaction.finish()                     │
│                                          │
└──────────────────────────────────────────┘
```

### Receipt Validation
```
• Apple faz automaticamente com StoreKit 2
• Não precisa implementar server-side
• JWS (JSON Web Signature) já validado
• Renovações verificadas automaticamente
```

---

## 📊 Monitoramento

### App Store Connect Analytics
```
┌──────────────────────────────────────────┐
│         Métricas Importantes             │
├──────────────────────────────────────────┤
│                                          │
│  Conversão:                              │
│   Downloads → Trial → Pagos              │
│                                          │
│  Receita:                                │
│   MRR (Monthly Recurring Revenue)        │
│   ARPU (Average Revenue Per User)        │
│                                          │
│  Retenção:                               │
│   Churn rate (cancelamentos)             │
│   Renovação de trials                    │
│                                          │
│  Produtos:                               │
│   Mensal vs Anual vs Vitalício           │
│   Ofertas especiais performance          │
│                                          │
└──────────────────────────────────────────┘
```

---

## 🚨 Tratamento de Erros

### Possíveis Erros
```swift
enum StoreError: Error {
    case failedVerification     // Transaction inválida
    case purchaseCancelled      // User cancelou
    case networkError           // Sem internet
    case productNotFound        // ID incorreto
    case alreadyPurchased       // Já comprou
}

// Tratamento:
do {
    let transaction = try await purchase(product)
} catch StoreError.failedVerification {
    // Mostrar erro de segurança
} catch StoreError.purchaseCancelled {
    // User cancelou, não fazer nada
} catch {
    // Erro genérico
    showError(error.localizedDescription)
}
```

---

## 🎯 Pontos Críticos de Atenção

### ⚠️ IMPORTANTE
1. **Product IDs** devem ser EXATAMENTE iguais ao App Store Connect
2. **Aguardar 2h** após criar produtos para sincronizar
3. **Botão Restaurar** é OBRIGATÓRIO pela Apple
4. **Links legais** devem estar funcionando
5. **Informações bancárias** antes de submeter

### ✅ Boas Práticas
1. Sempre use `@MainActor` para UI updates
2. Finalize transactions com `await transaction.finish()`
3. Verifique transactions com `checkVerified()`
4. Use `@Observable` para reactive updates
5. Teste MUITO com Sandbox antes de produção

---

## 🎉 Resultado Final

```
User Journey:
1. Abre app → Vê banner premium
2. Toca "Upgrade" → Vê PaywallView
3. Escolhe plano → Inicia compra
4. Apple processa → Confirma pagamento
5. Features desbloqueiam → Premium ativo!
6. Sincroniza devices → iCloud (opcional)
7. Usa features → Estatísticas, export, etc.
8. Renovação automática → Mantém premium

Developer Journey:
1. Implementa código → 30 min
2. Configura App Store → 1 hora
3. Testa localmente → 15 min
4. Testa sandbox → 30 min
5. Cria docs legais → 2 horas
6. Submete para revisão → 5 min
7. Aprovação Apple → 1-3 dias
8. Lançamento! 🚀
```

---

**Sistema pronto para uso!** 🎊

Próximo passo: Leia `QUICK_START_SUBSCRIPTIONS.md` e comece a implementar!
