# 📱 Guia de Configuração de Assinaturas - HabitRats

Este guia explica como configurar as assinaturas do HabitRats para submissão na App Store.

## 📋 Índice

1. [Configuração no Xcode](#configuração-no-xcode)
2. [Configuração no App Store Connect](#configuração-no-app-store-connect)
3. [Testar Localmente](#testar-localmente)
4. [Informações Legais Necessárias](#informações-legais-necessárias)
5. [Checklist antes de Submeter](#checklist-antes-de-submeter)

---

## 🔧 Configuração no Xcode

### 1. Adicionar Capability "In-App Purchase"

1. Abra o projeto no Xcode
2. Selecione o target `HabitRats`
3. Vá para a aba **Signing & Capabilities**
4. Clique em **+ Capability**
5. Adicione **In-App Purchase**

### 2. Configurar StoreKit Configuration File

1. O arquivo `Configuration.storekit` já está criado
2. Para testar localmente:
   - Menu: **Product** → **Scheme** → **Edit Scheme**
   - Selecione **Run** no lado esquerdo
   - Na aba **Options**, encontre **StoreKit Configuration**
   - Selecione `Configuration.storekit`

### 3. Arquivos Criados

- ✅ `SubscriptionManager.swift` - Gerenciador de assinaturas
- ✅ `PaywallView.swift` - Tela de assinatura
- ✅ `PremiumComponents.swift` - Componentes para features premium
- ✅ `Configuration.storekit` - Configuração de teste

---

## 🌐 Configuração no App Store Connect

### 1. Criar o App (se ainda não existe)

1. Acesse [App Store Connect](https://appstoreconnect.apple.com)
2. Vá para **Meus Apps**
3. Clique no **+** e selecione **Novo App**
4. Preencha:
   - **Plataformas**: iOS
   - **Nome**: HabitRats
   - **Idioma Principal**: Português (Brasil)
   - **Bundle ID**: (seu bundle identifier)
   - **SKU**: habitrats-app

### 2. Configurar Informações Bancárias e Fiscais

⚠️ **IMPORTANTE**: Você não pode vender assinaturas sem isso!

1. Em App Store Connect, vá para **Acordos, Impostos e Bancos**
2. Configure:
   - ✅ Informações de Contato
   - ✅ Informações Bancárias
   - ✅ Informações Fiscais
3. Aceite o **Acordo de Aplicativos Pagos**

### 3. Criar Grupo de Assinaturas

1. No seu app, vá para **Recursos do App** → **Compras no App**
2. Clique em **Grupos de Assinatura**
3. Clique no **+** para criar um novo grupo
4. Configure:
   - **Nome de Referência**: Premium Subscription
   - **Nome de Exibição** (pt-BR): HabitRats Premium

### 4. Criar Assinaturas

#### Assinatura Mensal

1. No grupo criado, clique em **Criar Assinatura**
2. Configure:
   - **ID do Produto**: `com.habitrats.premium.monthly`
   - **Nome de Referência**: Premium Monthly
   - **Duração da Assinatura**: 1 mês
   - **Preço**: R$ 9,90 (ou o valor desejado)
3. Adicione localização em Português (Brasil):
   - **Nome de Exibição**: Premium Mensal
   - **Descrição**: Acesso mensal a todos os recursos premium do HabitRats
4. Configure **Análise de Informações**:
   - Upload de screenshots da interface de assinatura
   - Descrição de como funciona

#### Assinatura Anual

1. Repita o processo acima com:
   - **ID do Produto**: `com.habitrats.premium.yearly`
   - **Nome de Referência**: Premium Yearly
   - **Duração da Assinatura**: 1 ano
   - **Preço**: R$ 59,90 (economiza ~50%)
   - **Nome de Exibição**: Premium Anual
   - **Descrição**: Acesso anual com melhor valor - economize 50%

#### Compra Única (Lifetime)

1. Vá para **Compras no App** (não no grupo de assinaturas)
2. Clique no **+** e selecione **Compra Não Consumível**
3. Configure:
   - **ID do Produto**: `com.habitrats.premium.lifetime`
   - **Nome de Referência**: Premium Lifetime
   - **Preço**: R$ 99,90 (ou o valor desejado)
   - **Nome de Exibição**: Premium Vitalício
   - **Descrição**: Acesso vitalício a todos os recursos premium

### 5. Configurar Ofertas Introdutórias (Opcional mas Recomendado!)

Para cada assinatura (mensal e anual):

1. Na página da assinatura, vá para **Ofertas de Assinatura**
2. Adicione uma **Oferta Introdutória**:
   - **Tipo**: Teste Gratuito
   - **Duração**: 7 dias
   - **Países**: Todos os territórios

Isso aumenta MUITO as conversões! 🚀

---

## 🧪 Testar Localmente

### 1. Teste com StoreKit Configuration

1. Execute o app com o arquivo `Configuration.storekit` configurado
2. Os preços serão simulados
3. Você pode testar compras sem cobranças reais
4. Configurações de teste:
   - Menu: **Debug** → **StoreKit** → **Manage Transactions**

### 2. Teste com Sandbox Testers

1. Em App Store Connect, vá para **Usuários e Acesso**
2. Clique em **Sandbox** → **Testers**
3. Adicione um email de teste (pode ser fictício, ex: `test@teste.com`)
4. No dispositivo iOS:
   - Vá para **Ajustes** → **App Store** → **Sandbox Account**
   - Faça login com o tester criado
5. Execute o app e teste as compras (não serão cobradas)

---

## 📄 Informações Legais Necessárias

### 1. Termos de Uso

Você precisa criar e hospedar uma página de **Termos de Uso** que inclua:

- Descrição do serviço
- Política de assinatura
- Renovação automática
- Preços
- Como cancelar

Exemplo de estrutura:

```
# Termos de Uso - HabitRats

## Assinaturas
- O pagamento será cobrado na conta do iTunes na confirmação da compra
- A assinatura é renovada automaticamente
- A renovação será cobrada 24 horas antes do fim do período atual
- Você pode gerenciar e cancelar assinaturas nas configurações da App Store
- O cancelamento entra em vigor no fim do período atual

## Preços (exemplo)
- Mensal: R$ 9,90/mês
- Anual: R$ 59,90/ano
- Vitalício: R$ 99,90 (pagamento único)

## Política de Reembolso
Conforme políticas da Apple App Store
```

### 2. Política de Privacidade

Crie uma página explicando:

- Quais dados você coleta
- Como usa os dados
- Se compartilha com terceiros
- Como protege os dados
- Direitos do usuário (LGPD)

### 3. Onde Hospedar

Opções gratuitas:

- GitHub Pages
- Notion (público)
- Google Sites
- Seu próprio domínio

### 4. Adicionar no App

No arquivo `PaywallView.swift`, atualize os botões:

```swift
Button("Termos de Uso") {
    if let url = URL(string: "https://seusite.com/terms") {
        UIApplication.shared.open(url)
    }
}

Button("Privacidade") {
    if let url = URL(string: "https://seusite.com/privacy") {
        UIApplication.shared.open(url)
    }
}
```

---

## ✅ Checklist antes de Submeter

### App Store Connect

- [ ] Informações bancárias e fiscais configuradas
- [ ] Acordo de apps pagos aceito
- [ ] Grupo de assinatura criado
- [ ] Todas as 3 assinaturas criadas e aprovadas
- [ ] Preços definidos para todos os territórios
- [ ] Localizações em Português (Brasil) adicionadas
- [ ] Screenshots das telas de assinatura enviadas

### Código

- [ ] StoreKit configurado no Xcode
- [ ] SubscriptionManager integrado ao app
- [ ] PaywallView acessível para o usuário
- [ ] Lógica de bloqueio de features premium implementada
- [ ] Botão "Restaurar Compras" funcionando

### Legal

- [ ] Página de Termos de Uso criada e hospedada
- [ ] Política de Privacidade criada e hospedada
- [ ] Links atualizados no PaywallView
- [ ] Links adicionados no App Store Connect (seção App Privacy)

### Testes

- [ ] Testado com StoreKit Configuration
- [ ] Testado com Sandbox Tester
- [ ] Compra mensal funciona
- [ ] Compra anual funciona
- [ ] Compra vitalícia funciona
- [ ] Restaurar compras funciona
- [ ] Features premium desbloqueiam após compra
- [ ] Logout/login mantém estado premium

---

## 🚀 Próximos Passos

### Depois da Aprovação

1. **Monitore as conversões** no App Store Connect
2. **Analise métricas**:
   - Taxa de conversão de trial para pago
   - Taxa de cancelamento (churn)
   - Receita média por usuário (ARPU)
3. **Teste preços**: Faça A/B tests com diferentes valores
4. **Ofertas especiais**: Crie ofertas promocionais sazonais

### Marketing de Assinaturas

- Destaque benefícios premium nas telas do app
- Mostre o banner premium em locais estratégicos
- Ofereça trial de 7 dias (já configurado!)
- Comunique o valor: "Menos que um café por mês"

### Suporte

- Monitore reviews sobre problemas de pagamento
- Responda dúvidas sobre assinaturas rapidamente
- Tenha uma FAQ sobre billing no seu site

---

## 📞 Recursos Úteis

- [Documentação StoreKit](https://developer.apple.com/storekit/)
- [App Store Connect Help](https://help.apple.com/app-store-connect/)
- [Human Interface Guidelines - In-App Purchase](https://developer.apple.com/design/human-interface-guidelines/in-app-purchase)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)

---

## ⚠️ Avisos Importantes

### O que a Apple NÃO permite:

- ❌ Preços ou informações de pagamento enganosas
- ❌ Renovação automática sem consentimento claro
- ❌ Dificultar o cancelamento
- ❌ Não implementar "Restaurar Compras"
- ❌ Mencionar outras plataformas de pagamento

### O que a Apple EXIGE:

- ✅ Botão "Restaurar Compras" visível
- ✅ Termos e condições claros
- ✅ Preços transparentes
- ✅ Descrição do que o usuário recebe
- ✅ Informação sobre renovação automática

---

## 🎯 Dicas de Conversão

1. **Mostre valor logo cedo**: Banner premium já na home
2. **Trial gratuito**: 7 dias aumenta conversão em 300%+
3. **Destaque economia**: "Economize 50% no plano anual"
4. **Social proof**: "Mais de 10.000 usuários premium"
5. **Limites claros**: "Apenas 5 hábitos no plano gratuito"
6. **Gatilho de escassez**: "Oferta por tempo limitado"

---

Boa sorte com seu lançamento! 🚀✨
