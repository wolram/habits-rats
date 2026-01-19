export const blogPosts = [
  // PASSOS (Green)
  {
    id: 1,
    category: 'Passos',
    title: 'Por que 10.000 passos? A verdade sobre o número mágico',
    slug: 'por-que-10000-passos-verdade',
    excerpt: 'Descubra a origem desse objetivo popular e o que a ciência moderna realmente diz sobre a quantidade ideal de movimento diário.',
    date: '18 Jan 2026',
    readTime: 5,
    color: 'green',
    content: `
      <p>Você provavelmente já ouviu falar que deve caminhar 10.000 passos por dia para ser saudável. Mas de onde veio esse número? Foi uma recomendação médica? Um estudo científico?</p>
      <p>Na verdade, tudo começou com uma campanha de marketing no Japão na década de 1960. Um pedômetro chamado <em>Manpo-kei</em> (medidor de 10 mil passos) foi lançado pouco antes das Olimpíadas de Tóquio de 1964.</p>
      <h2>O que a ciência diz hoje?</h2>
      <p>Estudos recentes mostram que os benefícios para a saúde começam muito antes dos 10.000 passos. Uma meta de <strong>7.000 a 8.000 passos</strong> já está associada a uma redução significativa na mortalidade por todas as causas.</p>
      <p>O mais importante não é o número exato, mas a consistência. Sair do sedentarismo (menos de 5.000 passos) para um nível ativo já traz os maiores ganhos.</p>
      <h3>Dicas para aumentar seus passos:</h3>
      <ul>
        <li>Estacione o carro mais longe.</li>
        <li>Use as escadas em vez do elevador.</li>
        <li>Faça reuniões caminhando (walking meetings).</li>
      </ul>
    `
  },
  {
    id: 2,
    category: 'Passos',
    title: 'NEAT: Como queimar calorias sem ir à academia',
    slug: 'neat-queimar-calorias-sem-academia',
    excerpt: 'Aumentar sua termogênese de atividade não-exercício (NEAT) através de caminhadas pode ser o segredo que faltava para seu emagrecimento.',
    date: '12 Jan 2026',
    readTime: 4,
    color: 'green',
    content: `
      <p>Muitas pessoas focam apenas na hora que passam na academia, mas esquecem das outras 23 horas do dia. O NEAT (Non-Exercise Activity Thermogenesis) representa todas as calorias que você queima vivendo, exceto dormindo, comendo ou fazendo exercícios formais.</p>
      <p>Isso inclui caminhar até o trabalho, digitar, cozinhar e até gesticular.</p>
      <h2>O poder dos pequenos movimentos</h2>
      <p>A diferença no gasto calórico diário entre uma pessoa sedentária e uma ativa (sem contar academia) pode chegar a <strong>2.000 calorias</strong>. Isso é mais do que a maioria dos treinos intensos!</p>
      <p>Rastrear seus passos é a maneira mais fácil de monitorar seu NEAT. Se você treina pesado 1 hora por dia, mas passa 10 horas sentado, seu gasto total ainda pode ser baixo.</p>
    `
  },

  // SONO (Purple)
  {
    id: 3,
    category: 'Sono',
    title: 'Higiene do Sono: O guia definitivo para dormir melhor',
    slug: 'higiene-do-sono-guia-definitivo',
    excerpt: 'Luz azul, temperatura e rotina. Ajuste esses três pilares e transforme suas noites de sono (e seus dias de produtividade).',
    date: '15 Jan 2026',
    readTime: 7,
    color: 'purple',
    content: `
      <p>Dormir bem não começa quando você deita a cabeça no travesseiro. Começa horas antes. A higiene do sono é um conjunto de práticas que preparam seu corpo e mente para o descanso.</p>
      <h2>Os 3 Pilares</h2>
      <h3>1. Escuridão (Melatonina)</h3>
      <p>A luz azul das telas inibe a produção de melatonina, o hormônio do sono. Tente desligar telas 1 hora antes de dormir ou use filtros de luz azul.</p>
      <h3>2. Temperatura</h3>
      <p>Seu corpo precisa resfriar para entrar em sono profundo. A temperatura ideal do quarto é entre 18°C e 22°C.</p>
      <h3>3. Regularidade</h3>
      <p>Ir para a cama e acordar no mesmo horário todos os dias treina seu relógio biológico.</p>
    `
  },
  {
    id: 4,
    category: 'Sono',
    title: 'O ciclo circadiano e sua energia diária',
    slug: 'ciclo-circadiano-energia-diaria',
    excerpt: 'Entenda como sincronizar seu relógio biológico com a luz do sol para acordar disposto e dormir na hora certa sem esforço.',
    date: '08 Jan 2026',
    readTime: 6,
    color: 'purple',
    content: `
      <p>Somos seres diurnos. Nossa biologia evoluiu para estar alerta com a luz do sol e descansar na escuridão. Quando lutamos contra isso, nossa saúde sofre.</p>
      <h2>A importância da luz da manhã</h2>
      <p>Expor seus olhos à luz solar direta (não através de janelas) nos primeiros 30-60 minutos após acordar é o sinal mais poderoso para seu cérebro de que o dia começou.</p>
      <p>Isso dispara um pico saudável de cortisol (energia) pela manhã e define um "timer" para a liberação de melatonina cerca de 12-14 horas depois.</p>
    `
  },

  // CALORIAS (Orange)
  {
    id: 5,
    category: 'Calorias',
    title: 'Déficit Calórico: Matemática simples, execução complexa',
    slug: 'deficit-calorico-matematica-simples',
    excerpt: 'Como calcular suas necessidades reais e criar um plano alimentar sustentável sem passar fome ou cortar tudo o que gosta.',
    date: '10 Jan 2026',
    readTime: 8,
    color: 'orange',
    content: `
      <p>Para perder peso, você precisa consumir menos energia do que gasta. É a lei da termodinâmica. Mas dizer "coma menos e mova-se mais" é como dizer a uma pessoa pobre "ganhe mais e gaste menos". Tecnicamente correto, mas não ajuda muito.</p>
      <h2>Calculando sua TMB</h2>
      <p>Use o HabitRats para estimar sua Taxa Metabólica Basal. A partir daí, crie um déficit moderado de 300 a 500 calorias.</p>
      <p>Déficits muito agressivos levam à perda de massa muscular, queda no metabolismo e compulsão alimentar. A chave é a paciência.</p>
    `
  },
  {
    id: 6,
    category: 'Calorias',
    title: 'Densidade Nutricional vs. Densidade Calórica',
    slug: 'densidade-nutricional-vs-calorica',
    excerpt: 'Aprenda a comer grandes volumes de comida mantendo as calorias baixas. O segredo para a saciedade durante a dieta.',
    date: '03 Jan 2026',
    readTime: 5,
    color: 'orange',
    content: `
      <p>Imagine 200 calorias de óleo (uma colher de sopa) versus 200 calorias de brócolis (um balde cheio). Qual vai te deixar mais cheio?</p>
      <p>Isso é densidade calórica. Alimentos integrais, ricos em água e fibras, ocupam muito espaço no estômago mas trazem poucas calorias.</p>
      <ul>
        <li><strong>Alta Densidade:</strong> Óleos, nozes, açúcar, processados.</li>
        <li><strong>Baixa Densidade:</strong> Vegetais, frutas, carnes magras, batata.</li>
      </ul>
      <p>Priorize alimentos de baixa densidade calórica para comer muito e ainda emagrecer.</p>
    `
  },

  // TREINO (Red)
  {
    id: 7,
    category: 'Treino',
    title: 'Sobrecarga Progressiva: A regra de ouro da hipertrofia',
    slug: 'sobrecarga-progressiva-hipertrofia',
    excerpt: 'Se você não está registrando seus pesos, provavelmente não está crescendo. Saiba como aplicar a evolução constante nos treinos.',
    date: '17 Jan 2026',
    readTime: 6,
    color: 'red',
    content: `
      <p>Se você faz o mesmo treino, com as mesmas cargas e repetições há meses, seu corpo não tem motivo para mudar. Ele já se adaptou.</p>
      <p>A sobrecarga progressiva significa tornar o treino um pouco mais difícil ao longo do tempo. Isso pode ser feito de várias formas:</p>
      <ol>
        <li>Mais carga (peso).</li>
        <li>Mais repetições.</li>
        <li>Mais séries.</li>
        <li>Menor tempo de descanso.</li>
        <li>Melhor técnica (execução mais lenta e controlada).</li>
      </ol>
      <p>O HabitRats ajuda você a registrar essas métricas para garantir que a curva esteja sempre subindo.</p>
    `
  },
  {
    id: 8,
    category: 'Treino',
    title: 'Cardio antes ou depois da musculação?',
    slug: 'cardio-antes-ou-depois-musculacao',
    excerpt: 'Resolvemos essa dúvida eterna com base nos seus objetivos: ganhar força, resistência ou queimar gordura.',
    date: '05 Jan 2026',
    readTime: 4,
    color: 'red',
    content: `
      <p>A resposta curta: depende da sua prioridade.</p>
      <h2>Prioridade: Ganho de Músculo</h2>
      <p>Faça cardio <strong>depois</strong>. Se você correr antes, gastará suas reservas de glicogênio (energia rápida) e terá menos força para levantar pesos, prejudicando o estímulo de hipertrofia.</p>
      <h2>Prioridade: Resistência (Maratona, etc.)</h2>
      <p>Faça cardio <strong>antes</strong>. Se seu foco é correr melhor, você deve estar descansado para o treino de corrida.</p>
      <h2>Saúde Geral</h2>
      <p>A ordem importa menos. O importante é fazer ambos.</p>
    `
  },

  // HORAS EM PÉ (Yellow)
  {
    id: 9,
    category: 'Horas em pé',
    title: 'Sentar é o novo fumar? Os riscos do sedentarismo',
    slug: 'sentar-novo-fumar-riscos',
    excerpt: 'Ficar sentado por mais de 8 horas anula os benefícios do seu treino? Veja o que os estudos dizem sobre pausas ativas.',
    date: '14 Jan 2026',
    readTime: 5,
    color: 'yellow',
    content: `
      <p>Nossos corpos não foram projetados para ficar dobrados em forma de "L" por 10 horas seguidas. O sedentarismo prolongado afeta a circulação, a postura e o metabolismo da glicose.</p>
      <p>Estudos indicam que pausas frequentes são cruciais. Levantar-se por 5 minutos a cada hora pode reativar a produção de enzimas que quebram gordura.</p>
      <p>Use o alerta de "Ficar em Pé" do seu Apple Watch ou HabitRats para se lembrar de esticar as pernas.</p>
    `
  },
  {
    id: 10,
    category: 'Horas em pé',
    title: 'A técnica 20-20-20 para quem trabalha no computador',
    slug: 'tecnica-20-20-20-computador',
    excerpt: 'Pequenos intervalos para levantar e olhar ao longe podem salvar sua postura e sua visão a longo prazo.',
    date: '07 Jan 2026',
    readTime: 3,
    color: 'yellow',
    content: `
      <p>A fadiga digital é real. Para combatê-la, oftalmologistas recomendam a regra 20-20-20:</p>
      <blockquote>A cada <strong>20 minutos</strong>, olhe para algo a <strong>20 pés (6 metros)</strong> de distância por <strong>20 segundos</strong>.</blockquote>
      <p>Aproveite esses 20 segundos para se levantar. Isso ajuda a relaxar os músculos oculares e a coluna cervical.</p>
    `
  },

  // MEDITAÇÃO (Teal)
  {
    id: 11,
    category: 'Meditação',
    title: 'Mindfulness para céticos: Começando com 5 minutos',
    slug: 'mindfulness-para-ceticos',
    excerpt: 'Você não precisa virar um monge. Descubra como a atenção plena reduz o cortisol e melhora o foco no trabalho.',
    date: '16 Jan 2026',
    readTime: 6,
    color: 'teal',
    content: `
      <p>Muitas pessoas acham que meditar é "não pensar em nada". Isso é impossível. A mente foi feita para pensar.</p>
      <p>Mindfulness (Atenção Plena) é simplesmente o exercício de notar que você distraiu e voltar sua atenção para o presente (geralmente a respiração).</p>
      <p>Cada vez que você percebe que divagou e volta, é como uma "repetição" de musculação para o seu cérebro. Com o tempo, seu foco melhora e sua ansiedade diminui.</p>
    `
  },
  {
    id: 12,
    category: 'Meditação',
    title: 'Respiração Box Breathing: Acalme-se em segundos',
    slug: 'box-breathing-respiracao',
    excerpt: 'A técnica usada por fuzileiros navais para controlar o estresse em situações de alta pressão. Simples e poderosa.',
    date: '09 Jan 2026',
    readTime: 4,
    color: 'teal',
    content: `
      <p>Quando estamos ansiosos, nossa respiração fica curta e rápida. Controlar a respiração é a maneira mais rápida de "hackear" o sistema nervoso e dizer ao corpo que está tudo bem.</p>
      <h2>A Técnica Quadrada (Box Breathing)</h2>
      <ol>
        <li>Inspire contando até 4.</li>
        <li>Segure o ar contando até 4.</li>
        <li>Expire contando até 4.</li>
        <li>Segure sem ar contando até 4.</li>
      </ol>
      <p>Repita por 2 a 5 minutos. É infalível.</p>
    `
  },

  // LEITURA (Blue)
  {
    id: 13,
    category: 'Leitura',
    title: 'Como ler 52 livros por ano (sem leitura dinâmica)',
    slug: 'como-ler-52-livros-ano',
    excerpt: 'Substituindo o tempo de tela por páginas. Estratégias para criar o hábito de ler consistentemente todos os dias.',
    date: '13 Jan 2026',
    readTime: 7,
    color: 'blue',
    content: `
      <p>Ler um livro por semana parece impossível? Vamos à matemática.</p>
      <p>Um livro médio tem 60.000 palavras. A velocidade média de leitura é 200 palavras/minuto. Isso significa que leva cerca de 5 horas para ler um livro.</p>
      <p>5 horas por semana são cerca de <strong>45 minutos por dia</strong>.</p>
      <p>Quanto tempo você passa no Instagram ou TikTok por dia? Provavelmente mais que isso. A questão não é tempo, é prioridade. Comece lendo 10 páginas antes de dormir.</p>
    `
  },
  {
    id: 14,
    category: 'Leitura',
    title: 'Retenção: Como lembrar do que você leu',
    slug: 'como-lembrar-do-que-leu',
    excerpt: 'Não adianta ler se você esquece tudo. Técnicas de anotação e revisão para transformar informação em conhecimento.',
    date: '06 Jan 2026',
    readTime: 5,
    color: 'blue',
    content: `
      <p>Ler passivamente é entretenimento. Ler ativamente é estudo.</p>
      <p>Para reter mais:</p>
      <ul>
        <li><strong>Grife e anote:</strong> "Converse" com o autor nas margens.</li>
        <li><strong>Resuma:</strong> Ao final de cada capítulo, tente explicar o que leu em 3 frases.</li>
        <li><strong>Ensine:</strong> A melhor forma de aprender é ensinar alguém (Feynman Technique).</li>
      </ul>
    `
  },

  // ÁGUA (Teal)
  {
    id: 15,
    category: 'Água',
    title: 'Hidratação e Performance Cognitiva',
    slug: 'hidratacao-performance-cognitiva',
    excerpt: 'Sentindo-se lento à tarde? Pode ser falta de água. Como a desidratação leve afeta seu cérebro e decisões.',
    date: '11 Jan 2026',
    readTime: 4,
    color: 'teal',
    content: `
      <p>Nosso cérebro é cerca de 75% água. Uma desidratação leve de apenas 2% já é suficiente para prejudicar a atenção, a memória imediata e as funções executivas.</p>
      <p>Muitas vezes confundimos sede com cansaço ou até fome. Antes de tomar o terceiro café do dia, experimente beber um copo grande de água. Você pode se surpreender com o resultado.</p>
    `
  },
  {
    id: 16,
    category: 'Água',
    title: 'Quanto de água você realmente precisa?',
    slug: 'quanto-de-agua-beber',
    excerpt: 'Esqueça a regra dos 2 litros. Aprenda a calcular sua necessidade baseada no seu peso e nível de atividade.',
    date: '04 Jan 2026',
    readTime: 3,
    color: 'teal',
    content: `
      <p>A recomendação de "8 copos por dia" é um mito generalista. Sua necessidade depende do seu peso, clima e atividade física.</p>
      <h2>Fórmula Básica</h2>
      <p><strong>35ml x Seu Peso (kg) = Meta Diária</strong></p>
      <p>Exemplo: Se você pesa 70kg -> 35 x 70 = 2.450ml (2,45 litros).</p>
      <p>Adicione mais 500ml para cada hora de exercício intenso.</p>
    `
  },

  // ANDARES (Pink)
  {
    id: 17,
    category: 'Andares',
    title: 'O poder das escadas: Cardio de alta intensidade grátis',
    slug: 'poder-das-escadas-cardio',
    excerpt: 'Subir andares queima mais calorias por minuto do que correr. Como incorporar isso na sua rotina de escritório.',
    date: '19 Jan 2026',
    readTime: 4,
    color: 'pink',
    content: `
      <p>Subir escadas é um exercício vigoroso que desafia a gravidade. Ele eleva a frequência cardíaca rapidamente e fortalece glúteos, quadríceps e panturrilhas.</p>
      <p>Um estudo mostrou que subir escadas por apenas 10 minutos por dia (divididos ao longo do dia) melhorou a saúde cardiovascular significativamente em apenas 6 semanas.</p>
      <p>Dica: Evite o elevador para subir 1 ou 2 andares. É um "micro-treino" disfarçado.</p>
    `
  },
  {
    id: 18,
    category: 'Andares',
    title: 'Glúteos e Coração: Benefícios da inclinação',
    slug: 'gluteos-coracao-beneficios-inclinacao',
    excerpt: 'Por que trocar o elevador pela escada é o melhor "hack" de fitness para pernas fortes e saúde cardiovascular.',
    date: '02 Jan 2026',
    readTime: 5,
    color: 'pink',
    content: `
      <p>Caminhar no plano é ótimo, mas caminhar inclinado (subindo) é transformador. A inclinação recruta muito mais a cadeia posterior (glúteos e isquiotibiais) do que a caminhada plana.</p>
      <p>Além disso, o retorno venoso das pernas para o coração é estimulado, ajudando na circulação e prevenindo varizes.</p>
      <p>Rastreie quantos andares você sobe por dia com o HabitRats (usando dados do barômetro do iPhone/Watch) e tente bater seu recorde.</p>
    `
  },
];
