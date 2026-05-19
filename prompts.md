# Documentação de Uso de Inteligência Artificial

## IAs Consultadas

1. ChatGPT (OpenAI)
2. Claude (Anthropic)
3. Gemini (Google)

---

## Prompt Utilizado

O mesmo prompt foi enviado para as três IAs:

```
Crie uma aplicação web completa utilizando apenas HTML, CSS e JavaScript puro, sem frameworks ou bibliotecas externas.
O projeto deve ser um sistema CRUD com tema de animes favoritos.

Requisitos obrigatórios:
- Tela de login inicial
- Usuário: aluno
- Senha: fiap2025
- Mostrar mensagem de erro na tela caso login esteja incorreto
- Não permitir campos vazios no login
Após o login, exibir uma interface moderna e responsiva contendo um CRUD completo.

O CRUD deve permitir:
- Adicionar anime no final da lista
- Adicionar anime no início da lista
- Editar qualquer anime individualmente
- Remover qualquer anime individualmente
- Atualizar a tela dinamicamente sempre que houver mudanças

Regras técnicas:
- Utilizar array de strings para armazenar os dados
- Não utilizar objetos no array
- Organizar toda lógica em funções nomeadas
- Não deixar código solto fora das funções
- Ter pelo menos 3 animes iniciais cadastrados
- A remoção deve usar o índice do item
- Se o usuário cancelar a edição ou deixar vazio, manter o valor original

Requisitos visuais:
- Interface moderna
- Design escuro estilo streaming/anime
- Layout responsivo
- Botões estilizados
- Cards modernos
- Visual profissional e não genérico

Estrutura esperada:
- index.html
- style.css
- script.js
Também explique passo a passo como criar as pastas, configurar o projeto no VS Code e executar a aplicação.
```

> Não foi necessário refinamento do prompt. As três IAs compreenderam os requisitos com o prompt inicial.

---

## Análise de cada resposta

### ChatGPT (OpenAI)
O site gerado tinha uma aparência funcional e organizada, porém com visual básico e pouco cativante. Foram identificados dois problemas técnicos: alguns botões vieram com comportamento incorreto em JavaScript, e o CSS apresentou conflito de cores — texto branco sobre fundo branco em alguns elementos, tornando o conteúdo ilegível.

### Claude (Anthropic) ✅ Escolhido
A resposta gerou um visual limpo, moderno e com identidade própria, utilizando uma estética brutalista/editorial com tipografia marcante (Bebas Neue + DM Mono) e paleta de cores bem definida (fundo escuro com destaque em amarelo). O código JavaScript estava correto e organizado em funções nomeadas. O visual era clean, sem excesso de informações, e os botões funcionavam corretamente.

### Gemini (Google)
O site gerado tinha um visual mais elaborado que o ChatGPT, com boas escolhas de cores e botões funcionando corretamente. Os pontos negativos foram a fonte utilizada, considerada genérica e sem personalidade, e a quantidade de informações exibidas na tela ao mesmo tempo, tornando a interface carregada e pouco clean.

---

## Justificativa da IA Escolhida

O Claude foi escolhido como base do projeto por apresentar o melhor equilíbrio entre qualidade visual e correção técnica. O código gerado não apresentou erros de JavaScript nem conflitos de CSS, e o design se destacou pela identidade visual forte e pela interface limpa, sem poluição visual. A tipografia diferenciada e a paleta de cores coesa tornaram o projeto mais profissional e memorável em comparação às outras duas respostas.
