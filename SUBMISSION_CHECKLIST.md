# ✅ Checklist Completo - Preparação para App Store

Use este checklist para garantir que tudo está pronto antes de submeter seu app!

## 📱 1. Configuração do Xcode

### Projeto
- [ ] Bundle Identifier único definido (ex: `com.seudominio.habitrats`)
- [ ] Versão configurada (ex: `1.0.0`)
- [ ] Build number definido (ex: `1`)
- [ ] Deployment Target configurado (iOS 17.0+)
- [ ] Ícone do app adicionado (1024x1024 PNG)
- [ ] Launch Screen configurado
- [ ] Suporte para múltiplos tamanhos de tela testado

### Capabilities
- [ ] In-App Purchase capability adicionada
- [ ] Sign in with Apple configurado (se usar)
- [ ] HealthKit capability adicionada
- [ ] iCloud configurado (se usar sincronização)
- [ ] Push Notifications (se usar)

### Signing
- [ ] Certificado de distribuição configurado
- [ ] Provisioning Profile de produção criado
- [ ] Automatic Signing desabilitado (recomendado para produção)
- [ ] Sem erros de signing

### Build
- [ ] Build sem warnings
- [ ] Build sem erros
- [ ] Archive criado com sucesso
- [ ] Testado em dispositivo real
- [ ] Testado no iOS mínimo suportado

---

## 💳 2. App Store Connect - Configuração Inicial

### Conta e Finanças
- [ ] Conta Apple Developer ativa ($99/ano)
- [ ] **Informações bancárias configuradas** ⚠️ OBRIGATÓRIO
- [ ] **Informações fiscais configuradas** ⚠️ OBRIGATÓRIO
- [ ] **Acordo de Apps Pagos aceito** ⚠️ OBRIGATÓRIO
- [ ] Informações de contato atualizadas

### App Criado
- [ ] Novo app criado no App Store Connect
- [ ] Nome do app definido: **HabitRats**
- [ ] Idioma principal: Português (Brasil)
- [ ] Bundle ID correto selecionado
- [ ] SKU definido (ex: `habitrats-app`)
- [ ] App Icon visível no App Store Connect

---

## 💰 3. Assinaturas - Configuração

### Grupo de Assinatura
- [ ] Grupo criado: "Premium Subscription"
- [ ] Nome de exibição (pt-BR): "HabitRats Premium"
- [ ] Descrição do grupo adicionada

### Assinatura Mensal
- [ ] Product ID: `com.habitrats.premium.monthly`
- [ ] Nome de Referência: "Premium Monthly"
- [ ] Duração: 1 mês
- [ ] Preço configurado: R$ 9,90 (ou seu preço)
- [ ] Localização pt-BR:
  - [ ] Nome: "Premium Mensal"
  - [ ] Descrição completa
- [ ] Oferta introdutória: 7 dias grátis
- [ ] Screenshots da interface enviados
- [ ] Status: "Ready to Submit" ou "Approved"

### Assinatura Anual
- [ ] Product ID: `com.habitrats.premium.yearly`
- [ ] Nome de Referência: "Premium Yearly"
- [ ] Duração: 1 ano
- [ ] Preço configurado: R$ 59,90 (ou seu preço)
- [ ] Localização pt-BR:
  - [ ] Nome: "Premium Anual"
  - [ ] Descrição com destaque de economia
- [ ] Oferta introdutória: 7 dias grátis
- [ ] Screenshots da interface enviados
- [ ] Status: "Ready to Submit" ou "Approved"

### Compra Vitalícia
- [ ] Product ID: `com.habitrats.premium.lifetime`
- [ ] Nome de Referência: "Premium Lifetime"
- [ ] Tipo: Non-Consumable
- [ ] Preço configurado: R$ 99,90 (ou seu preço)
- [ ] Localização pt-BR:
  - [ ] Nome: "Premium Vitalício"
  - [ ] Descrição
- [ ] Screenshots da interface enviados
- [ ] Status: "Ready to Submit" ou "Approved"

### Verificação
- [ ] Todos os 3 produtos criados
- [ ] Preços configurados para todos os territórios
- [ ] Aguardou pelo menos 2 horas após criação (sincronização)
- [ ] Product IDs no código correspondem aos do App Store Connect

---

## 🎨 4. Metadados do App Store

### Informações Básicas
- [ ] Nome do app: **HabitRats**
- [ ] Subtítulo: (ex: "Hábitos, Streaks & Progresso")
- [ ] Categoria principal: **Saúde e Fitness**
- [ ] Categoria secundária: Estilo de Vida ou Produtividade
- [ ] Classificação etária configurada

### Descrição
- [ ] Descrição completa escrita (até 4000 caracteres)
- [ ] Destaca recursos principais
- [ ] Menciona recursos premium
- [ ] Menciona trial gratuito
- [ ] Formatação clara com emojis e bullets
- [ ] Call-to-action forte

### Palavras-chave
- [ ] 100 caracteres de keywords
- [ ] Separadas por vírgula, sem espaços
- [ ] Foco em: hábitos, rotina, streak, fitness, saúde, etc.

### Screenshots
- [ ] **iPhone 6.7"** (Pro Max): Mínimo 3, recomendado 5-6
- [ ] **iPhone 6.5"**: Mínimo 3
- [ ] iPad (se suportar): Mínimo 3
- [ ] Screenshots de alta qualidade
- [ ] Ordem estratégica:
  1. Home/Dashboard
  2. Check-in de hábito
  3. Calendário/Heatmap
  4. Estatísticas
  5. Perfil com badges
  6. Tela de assinatura (opcional)

### URLs de Suporte
- [ ] URL de suporte definida
- [ ] URL de marketing definida (opcional)

### Promotional Text (opcional)
- [ ] Texto promocional adicionado (170 caracteres)
- [ ] Destaca oferta especial ou novidades

---

## 📄 5. Legal - Documentos Obrigatórios

### Termos de Uso
- [ ] Documento criado baseado no template
- [ ] Informações específicas preenchidas:
  - [ ] Nome da empresa
  - [ ] Endereço
  - [ ] Contato
  - [ ] Jurisdição legal
  - [ ] Preços corretos
- [ ] Hospedado em URL público e permanente
- [ ] URL acessível e funcional
- [ ] Link adicionado no código do app (PaywallView)
- [ ] Link adicionado no App Store Connect

### Política de Privacidade
- [ ] Documento criado baseado no template
- [ ] Adaptado para práticas reais do app
- [ ] Informações específicas preenchidas:
  - [ ] Dados coletados (lista exata)
  - [ ] Onde são armazenados
  - [ ] Como são usados
  - [ ] Direitos do usuário (LGPD)
  - [ ] Informações de contato
  - [ ] DPO (se necessário)
- [ ] **REVISADO POR ADVOGADO** ⚠️ MUITO IMPORTANTE
- [ ] Hospedado em URL público e permanente
- [ ] URL acessível e funcional
- [ ] Link adicionado no código do app
- [ ] Link adicionado no App Store Connect

### App Privacy no App Store Connect
- [ ] Seção "App Privacy" preenchida
- [ ] Todos os tipos de dados coletados declarados:
  - [ ] Nome/User ID
  - [ ] Email (se coletar)
  - [ ] Dados de saúde (HealthKit)
  - [ ] Dados de uso
  - [ ] Diagnósticos
- [ ] Finalidade de cada tipo de dado especificada
- [ ] Linked to user / Not linked to user corretamente marcado
- [ ] Tracking declarado (ou "Does not track" se aplicável)

---

## 💻 6. Código - Implementação

### Arquivos de Assinatura
- [ ] `SubscriptionManager.swift` adicionado ao projeto
- [ ] `PaywallView.swift` adicionado ao projeto
- [ ] `PremiumComponents.swift` adicionado ao projeto
- [ ] `Configuration.storekit` configurado para testes
- [ ] Product IDs corretos no código

### Integração no App
- [ ] `PremiumBannerView` adicionado em local visível (ex: ProfileView)
- [ ] Lógica de bloqueio de features implementada
- [ ] Limite de hábitos gratuitos implementado (ex: 5)
- [ ] Botão "Restaurar Compras" funcionando
- [ ] Links de Termos e Privacidade funcionando
- [ ] Features premium desbloqueiam após compra

### StoreKit Configuration
- [ ] Scheme configurado para usar `Configuration.storekit`
- [ ] Testado localmente com sucesso
- [ ] Compras simuladas funcionam
- [ ] Restaurar compras funciona

---

## 🧪 7. Testes

### Testes Locais (StoreKit Configuration)
- [ ] Compra mensal testada
- [ ] Compra anual testada
- [ ] Compra vitalícia testada
- [ ] Restaurar compras testado
- [ ] Features premium desbloqueiam
- [ ] Trial period simulado

### Testes com Sandbox
- [ ] Sandbox Tester criado no App Store Connect
- [ ] Login com Sandbox no dispositivo
- [ ] Compra mensal testada em sandbox
- [ ] Compra anual testada em sandbox
- [ ] Compra vitalícia testada em sandbox
- [ ] Renovação testada (acelerar tempo)
- [ ] Cancelamento testado
- [ ] Restaurar compras testado
- [ ] Teste em dispositivo real (não simulador)

### Testes Gerais
- [ ] App funciona sem assinatura (features básicas)
- [ ] App funciona com assinatura (todas features)
- [ ] Transição de free para premium funciona
- [ ] Logout/login mantém estado de assinatura
- [ ] Sem crashes ou bugs críticos
- [ ] Performance aceitável
- [ ] Testado em iOS mínimo suportado (17.0)
- [ ] Testado em diferentes tamanhos de iPhone

---

## 🚀 8. Submissão

### Build Final
- [ ] Versão final compilada sem warnings
- [ ] Archive criado
- [ ] Upload para App Store Connect concluído
- [ ] Build processado com sucesso
- [ ] Sem "Missing Compliance" issues

### Informações de Revisão
- [ ] Build selecionado
- [ ] Notas de versão escritas (What's New)
- [ ] Informações de contato de revisão fornecidas:
  - [ ] Email
  - [ ] Telefone
  - [ ] Nome
- [ ] Notas para revisor (se necessário):
  - [ ] Credenciais de teste
  - [ ] Instruções especiais
  - [ ] Explicações sobre features sensíveis

### Export Compliance
- [ ] Declaração de criptografia preenchida
- [ ] Geralmente "No" para apps simples (apenas HTTPS)

### Submissão Final
- [ ] Todos os itens verdes no App Store Connect
- [ ] Botão "Submit for Review" disponível
- [ ] App submetido! 🎉

---

## ⏰ 9. Pós-Submissão

### Aguardando Revisão
- [ ] Status: "Waiting for Review"
- [ ] Tempo estimado: 24-48 horas (pode variar)
- [ ] Email de confirmação recebido

### Durante Revisão
- [ ] Monitore email para possíveis questões
- [ ] Responda rapidamente a pedidos da Apple
- [ ] Mantenha contato disponível

### Se Rejeitado
- [ ] Leia cuidadosamente o motivo
- [ ] Corrija os problemas
- [ ] Incremente build number
- [ ] Reenvie

### Se Aprovado
- [ ] 🎉 Parabéns!
- [ ] Configure disponibilidade:
  - [ ] Liberar automaticamente
  - [ ] Ou agendar data de lançamento
- [ ] Monitore primeiras reviews
- [ ] Responda a feedback de usuários

---

## 📊 10. Pós-Lançamento

### Monitoramento
- [ ] App Store Connect Analytics configurado
- [ ] Monitore downloads
- [ ] Monitore conversão de assinaturas
- [ ] Analise reviews e ratings
- [ ] Verifique crash reports
- [ ] Acompanhe receita (MRR)

### Marketing
- [ ] Prepare materiais promocionais
- [ ] Compartilhe em redes sociais
- [ ] Peça reviews de usuários satisfeitos
- [ ] Considere App Store ads
- [ ] Crie landing page

### Suporte
- [ ] Monitore emails de suporte
- [ ] Responda dúvidas sobre assinaturas
- [ ] Ajude com problemas de pagamento
- [ ] Mantenha FAQ atualizada

### Melhorias Contínuas
- [ ] Colete feedback de usuários
- [ ] Planeje próximas features
- [ ] Otimize conversão do paywall
- [ ] Teste diferentes preços (A/B testing)
- [ ] Atualize regularmente

---

## 🎯 Resumo Rápido (Antes de Submeter)

### Crítico ⚠️ (Não submeta sem isso!)
- [ ] ✅ Informações bancárias e fiscais
- [ ] ✅ Assinaturas criadas e aprovadas
- [ ] ✅ Termos de uso publicados
- [ ] ✅ Política de privacidade publicada
- [ ] ✅ App Privacy preenchido
- [ ] ✅ Screenshots enviados
- [ ] ✅ Descrição completa
- [ ] ✅ Build sem erros
- [ ] ✅ Testado em dispositivo real

### Importante 💡 (Recomendado)
- [ ] Trial gratuito de 7 dias
- [ ] Teste com Sandbox
- [ ] Links funcionando
- [ ] Botão restaurar compras
- [ ] Reviews do código

### Opcional 🌟 (Melhora qualidade)
- [ ] Video preview
- [ ] Promotional text
- [ ] App Store Optimization (ASO)
- [ ] Press kit
- [ ] Landing page

---

## 📞 Recursos de Ajuda

- **Documentação oficial**: [developer.apple.com/app-store](https://developer.apple.com/app-store/)
- **Human Interface Guidelines**: [developer.apple.com/design](https://developer.apple.com/design/human-interface-guidelines/)
- **App Store Review Guidelines**: [developer.apple.com/app-store/review/guidelines](https://developer.apple.com/app-store/review/guidelines/)
- **StoreKit**: [developer.apple.com/storekit](https://developer.apple.com/storekit/)
- **Support**: [developer.apple.com/support](https://developer.apple.com/support/)

---

## ✨ Dica Final

**Não tenha pressa!** É melhor investir tempo garantindo que tudo está perfeito do que ser rejeitado e ter que refazer. Cada rejeição pode adicionar dias ao processo.

**Boa sorte com seu lançamento!** 🚀🎉

Lembre-se: você está construindo algo incrível. O mundo precisa de apps como o HabitRats! 💪

---

**Salve este checklist e marque os itens conforme progride!**
