# ❓ FAQ - Perguntas Frequentes sobre Assinaturas

## 📱 Geral

### P: Preciso pagar para testar as assinaturas?

**R:** Não! Use o `Configuration.storekit` para testes locais gratuitos, ou crie Sandbox Testers no App Store Connect para testes realistas sem cobranças.

### P: Quanto custa ter um app com assinaturas na App Store?

**R:**

- Apple Developer Program: **$99/ano** (obrigatório)
- Apple cobra **30% das assinaturas** no primeiro ano
- Após 1 ano de assinatura contínua: **15%**
- Você recebe: 70% (ano 1) ou 85% (após ano 1)

### P: Posso mudar os preços depois?

**R:** Sim! Você pode alterar preços a qualquer momento no App Store Connect. Assinantes existentes podem ser notificados e manter o preço antigo ou migrar para o novo.

### P: Posso ter apenas a compra vitalícia sem assinaturas recorrentes?

**R:** Sim! Você pode oferecer apenas a compra única (lifetime). Mas assinaturas geralmente geram mais receita a longo prazo.

---

## 💰 Preços e Receita

### P: Como escolher o preço ideal?

**R:**

- Pesquise apps similares
- Considere o valor que você oferece
- Teste diferentes valores (A/B testing)
- Referências comuns:
  - Mensal: R$ 9,90 - R$ 19,90
  - Anual: 40-50% de desconto sobre mensal
  - Vitalício: 10-15x o preço mensal

### P: Vale a pena oferecer trial gratuito?

**R:** **SIM!** 🔥 Trial de 7 dias pode aumentar conversões em 300%+. É praticamente essencial para apps de assinatura.

### P: Qual plano as pessoas mais compram?

**R:** Geralmente:

- **70%** escolhem mensal (entrada mais barata)
- **25%** escolhem anual (melhor valor)
- **5%** escolhem vitalício (super fans)

### P: Quanto posso ganhar com 1000 usuários?

**R:** Exemplo:

- 1000 usuários gratuitos
- 5% convertem para trial = 50 usuários
- 60% do trial vira pago = 30 assinantes
- 30 × R$ 9,90 = **R$ 297/mês**
- Apple fica com 30% = você recebe **R$ 208/mês**
- **R$ 2.496/ano** (com apenas 1000 usuários!)

---

## 🔧 Técnico

### P: StoreKit 1 ou StoreKit 2?

**R:** Use **StoreKit 2** (já implementado nos arquivos criados). É mais moderno, usa async/await, e é mais seguro.

### P: Preciso de um servidor backend?

**R:** Não! StoreKit 2 gerencia tudo localmente e se comunica diretamente com a Apple. Sem necessidade de servidor.

### P: Como sincronizar entre dispositivos?

**R:**

- As compras são vinculadas ao Apple ID
- `Transaction.currentEntitlements` busca compras ativas
- Chame `updatePurchasedProducts()` ao abrir o app
- Para dados do app: use iCloud/CloudKit (opcional)

### P: E se o usuário desinstalar e reinstalar o app?

**R:** As compras permanecem! Ao abrir o app:

1. `SubscriptionManager` carrega automaticamente
2. Verifica `Transaction.currentEntitlements`
3. Restaura status premium
4. Use também o botão "Restaurar Compras"

### P: Funciona no simulador?

**R:** Parcialmente. Para testes completos, use:

- **Simulador**: Apenas com StoreKit Configuration
- **Dispositivo real**: Sandbox Testers ou produção

---

## 🧪 Testes

### P: Como testar sem gastar dinheiro?

**R:** 3 opções:

1. **StoreKit Configuration**: Totalmente offline, grátis
2. **Sandbox Testers**: Contas fake, sem cobranças reais
3. **TestFlight**: Beta testing com sandbox

### P: Sandbox não funciona, o que fazer?

**R:** Checklist:

- [ ] Dispositivo real (não simulador)
- [ ] Produtos "Ready to Submit" no App Store Connect
- [ ] Aguardou 2h após criar produtos
- [ ] Product IDs corretos no código
- [ ] Fez logout do Apple ID normal
- [ ] Fez login com Sandbox Tester
- [ ] Tentou em Ajustes → App Store → Sandbox Account

### P: Como testar renovações de assinatura?

**R:** No Sandbox, os períodos são acelerados:

- 1 semana → 3 minutos
- 1 mês → 5 minutos
- 1 ano → 1 hora
  Você pode ver renovações em poucos minutos!

### P: Como testar cancelamento?

**R:**

1. Ajustes → Apple ID → Assinaturas
2. Selecione a assinatura sandbox
3. Cancele
4. Aguarde o fim do período (acelerado)
5. Verifique se o app revoga acesso premium

---

## 📄 Legal e Compliance

### P: Sou obrigado a ter Termos de Uso e Política de Privacidade?

**R:** **SIM!** ⚠️ É obrigatório pela Apple e pela LGPD (Brasil). Sem isso, seu app será rejeitado.

### P: Preciso de advogado para criar esses documentos?

**R:** **Altamente recomendado!** 🚨

- LGPD tem multas de até R$ 50 milhões
- Templates ajudam, mas advogado garante compliance
- Especialmente importante se coletar dados sensíveis (saúde)

### P: Onde hospedar Termos e Privacidade?

**R:** Opções gratuitas:

- GitHub Pages (github.io)
- Notion público
- Google Sites
- Seu domínio próprio
  **Importante**: URL deve ser pública e permanente!

### P: O que acontece se eu não configurar App Privacy corretamente?

**R:** Seu app será **rejeitado** na revisão. A Apple leva privacidade muito a sério. Seja 100% honesto sobre os dados que coleta.

---

## 🚨 Problemas Comuns

### P: "Cannot connect to App Store" no teste

**R:** Possíveis causas:

1. Está usando simulador → use dispositivo real
2. Não fez login com Sandbox Tester
3. Produtos ainda não sincronizados (aguarde 2h)
4. Sem internet
5. Servidores da Apple fora do ar (raro)

### P: "Product IDs not found"

**R:**

1. Verifique os IDs no código vs App Store Connect
2. Aguarde 2 horas após criar produtos
3. Certifique-se que estão "Ready to Submit"
4. Limpe o build e recompile

### P: "Failed verification"

**R:**

- Transaction não é válida
- Possível tentativa de hack
- Verifique implementação do `checkVerified()`
- Não entregue conteúdo premium nesse caso

### P: Restaurar compras não funciona

**R:**

1. Mesmo Apple ID usado na compra?
2. Aguardou alguns minutos após compra?
3. Internet ativa?
4. Tente: `AppStore.sync()` primeiro
5. Verifique logs para erros

### P: App rejeitado - "Informações de assinatura não claras"

**R:** Certifique-se de:

- Preços visíveis ANTES de comprar
- Período de renovação claro
- Informação de cancelamento visível
- Botão "Restaurar Compras" presente
- Links de Termos e Privacidade funcionando

---

## 🎨 UX e Design

### P: Quando mostrar o paywall?

**R:** **Não logo na abertura!** ⚠️ Deixe o usuário ver o valor primeiro:

- ✅ Após 3-5 dias de uso
- ✅ Quando tentar feature premium
- ✅ Quando atingir limite gratuito
- ✅ Banner discreto sempre visível
- ❌ Logo ao abrir o app
- ❌ Bloqueando features básicas

### P: Quantos hábitos devo permitir no plano gratuito?

**R:**

- Muito pouco (1-2): Frustra usuários
- **Ideal: 3-5**: Mostra valor, mas cria necessidade
- Muito (10+): Menos incentivo para upgrade

### P: Devo mostrar anúncios no plano gratuito?

**R:** Pode funcionar, mas:

- ✅ Anúncios discretos
- ✅ "Remover anúncios" como benefício premium
- ❌ Anúncios intrusivos (irritam e reduzem conversão)

### P: Como comunicar o valor do premium?

**R:**

- Use comparações: "Menos que um café por mês"
- Destaque economia: "Economize 50% no anual"
- Social proof: "10.000+ usuários premium"
- Lista de benefícios clara e visível
- Mostre o que está bloqueado (com locks)

---

## 📊 Analytics e Otimização

### P: Como aumentar conversão de trial para pago?

**R:**

1. **Onboarding forte**: Mostre valor nas primeiras sessões
2. **Lembretes**: Avise 1 dia antes do fim do trial
3. **Engajamento**: Usuários ativos convertem mais
4. **Reduzir fricção**: Menos passos para comprar
5. **Social proof**: Depoimentos, reviews positivos

### P: Como reduzir cancelamentos (churn)?

**R:**

1. **Valor contínuo**: Sempre adicione features
2. **Comunicação**: Email sobre novidades
3. **Win-back**: Ofertas para quem cancelou
4. **Feedback**: Pergunte por que cancelou
5. **Preço justo**: Se muito caro, revise

### P: Qual métrica é mais importante?

**R:** Depende da fase:

- **Início**: Conversão trial → pago
- **Crescimento**: MRR (Monthly Recurring Revenue)
- **Maturidade**: LTV (Lifetime Value) e Churn
- **Sempre**: Satisfação do usuário (reviews)

---

## 🌍 Internacionalização

### P: Posso ter preços diferentes por país?

**R:** Sim! A Apple gerencia isso automaticamente:

- Você define o preço "base" (ex: USA)
- Apple converte para outras moedas
- Considera impostos locais
- Você pode ajustar manualmente se quiser

### P: Como traduzir os nomes de assinatura?

**R:** No App Store Connect:

1. Vá na assinatura
2. Adicione localizações
3. Cada idioma tem nome e descrição próprios
4. Exemplo: "Premium Mensal" (pt-BR) → "Premium Monthly" (en-US)

---

## 🔄 Mudanças e Atualizações

### P: Posso adicionar mais planos depois?

**R:** Sim! Pode criar novos produtos a qualquer momento. Exemplo:

- Adicionar plano "Family" (R$ 19,90)
- Adicionar plano "Estudante" (R$ 4,90)
- Adicionar ofertas sazonais

### P: Como migrar usuários para novo plano?

**R:**

- Crie o novo produto no App Store Connect
- Adicione lógica de detecção no app
- Ofereça upgrade/downgrade
- Usuários podem trocar nas configurações

### P: E se eu quiser remover um plano?

**R:**

- Não pode deletar produtos (Apple não permite)
- Mas pode "ocultar" novos assinantes
- Assinantes existentes continuam no plano antigo
- Crie novo produto para substituir

---

## 🆘 Suporte ao Usuário

### P: Usuário pagou mas não tem acesso

**R:** Checklist:

1. Pediu para "Restaurar Compras"?
2. Mesmo Apple ID usado na compra?
3. Pagamento foi aprovado? (pode estar pendente)
4. Bug no app? (verifique logs)
5. Se tudo falhar: Reembolso via Apple

### P: Como processar reembolsos?

**R:**

- **Você não processa!** Apple gerencia tudo
- Usuário pede reembolso diretamente à Apple
- Apple decide se aprova ou não
- Você pode ver estatísticas no App Store Connect
- Não tem controle direto sobre reembolsos

### P: Usuário quer cancelar, como ajudar?

**R:** Explique:

1. Abra Ajustes do iOS
2. Toque no nome (topo)
3. Toque em "Assinaturas"
4. Selecione HabitRats
5. Toque "Cancelar Assinatura"

Ou envie link: `https://apps.apple.com/account/subscriptions`

---

## 💡 Dicas de Sucesso

### P: Qual é o segredo para boas conversões?

**R:**

1. **Produto excelente**: App de qualidade
2. **Valor claro**: Usuário entende o que ganha
3. **Trial gratuito**: Deixa experimentar
4. **Preço justo**: Não muito caro, não muito barato
5. **Comunicação**: Mostre benefícios constantemente
6. **Social proof**: Reviews e depoimentos
7. **Urgência suave**: "Oferta por tempo limitado"

### P: Vale a pena oferecer desconto permanente?

**R:** Evite "sempre 50% off":

- Diminui valor percebido
- Usuários esperam promoções
- Melhor: Descontos sazonais (Black Friday, Ano Novo)
- Ou: Ofertas para usuários específicos (win-back)

### P: Como lidar com reviews negativas sobre preço?

**R:**

1. **Responda educadamente**: Explique o valor
2. **Destaque trial**: "7 dias grátis para experimentar"
3. **Compare**: "Menos que um café por mês"
4. **Mostre custos**: "Ajuda a manter o app melhorando"
5. **Ofereça opções**: "Temos plano vitalício também"

---

## 🎓 Recursos Adicionais

### P: Onde aprender mais sobre StoreKit?

**R:**

- [Documentação oficial Apple](https://developer.apple.com/storekit/)
- WWDC sessions sobre StoreKit 2
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/in-app-purchase)
- [Ray Wenderlich tutorials](https://www.raywenderlich.com)

### P: Existem ferramentas para facilitar?

**R:** Sim, mas não são necessárias:

- **RevenueCat**: Gerenciamento cross-platform
- **Adapty**: Analytics de assinaturas
- **Qonversion**: Growth toolkit
  **Nota**: Para começar, StoreKit 2 nativo é suficiente!

---

## 🚀 Próximos Passos

### P: Implementei tudo, e agora?

**R:**

1. ✅ Teste exaustivamente com Sandbox
2. ✅ Peça para amigos testarem (TestFlight)
3. ✅ Revise documentos legais com advogado
4. ✅ Configure Analytics
5. ✅ Submeta para revisão!
6. ✅ Após aprovação: Marketing!

### P: Como promover o app após lançamento?

**R:**

- **Product Hunt**: Lançamento público
- **Redes sociais**: Twitter, Instagram, TikTok
- **Reddit**: Subreddits relevantes (cuidado com spam)
- **YouTube**: Demos e tutoriais
- **Blog**: SEO e conteúdo orgânico
- **Influencers**: Parcerias estratégicas
- **App Store Ads**: Ads pagos da Apple

---

**Ainda tem dúvidas?**

Consulte os outros documentos:

- `QUICK_START_SUBSCRIPTIONS.md` - Início rápido
- `SUBSCRIPTION_SETUP.md` - Guia completo
- `SUBMISSION_CHECKLIST.md` - Checklist detalhado
- `ARCHITECTURE_SUBSCRIPTIONS.md` - Arquitetura técnica

**Boa sorte! 🚀**
