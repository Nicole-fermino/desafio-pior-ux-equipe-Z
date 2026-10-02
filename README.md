# Desafio Pior UX - Equipe Z

## 📝 Sobre o Projeto
Este projeto foi desenvolvido como parte de um exercício prático de UI/UX (Engenharia do Erro). O objetivo da atividade é explorar e compreender princípios fundamentais de experiência do usuário e design de interface através da construção proposital da **pior experiência de usuário possível**. 

O fluxo escolhido foi um formulário de cadastro simplificado composto por 3 campos (Nome, E-mail e Senha) que submete o usuário a barreiras irritantes, mas que mantém uma rota de escape funcional até a tela de conclusão.

---

## ⚠️ Princípios e Heurísticas Violados
Durante a construção da interface, introduzimos intencionalmente falhas críticas baseadas nas heurísticas de Nielsen e diretrizes de usabilidade:

1. **Consistência e Padrões (Heurística de Nielsen):**
   * *O Erro:* Os botões de ação foram completamente invertidos. O botão de "Cancelar" foi estilizado de forma chamativa, gigante e verde-limão, induzindo o usuário ao erro. Já o botão principal de ação ("Avançar") foi miniaturizado, esmaecido e posicionado de forma quase invisível.
2. **Visibilidade do Status do Sistema:**
   * *O Erro:* O campo de e-mail possui um comportamento anômalo (inverte o texto digitado em tempo real), e o sistema não fornece alertas claros imediatos sobre o porquê de o texto estar invertido, gerando total desorientação.
3. **Prevenção de Erros e Flexibilidade:**
   * *O Erro:* O botão "Avançar" utiliza um comportamento "fugiço" (esquiva tática via JavaScript ao aproximar o cursor), tornando a interação frustrante e fisicamente exaustiva. A validação da senha exige uma regra específica ("chaos" + 8 caracteres) explicada de forma muito vaga.
4. **Critérios de Acessibilidade (WCAG - Baixo Contraste):**
   * *O Erro:* Textos descritivos e *labels* utilizam cores de baixo contraste (`#d1d1d1` e `#b0b0b0`) sobre fundo totalmente branco, violando os padrões mínimos de legibilidade para pessoas com deficiência visual.

---

## 💡 Proposta de Correção / Versão Ideal
Em uma aplicação profissional, os elementos caóticos devem ser corrigidos da seguinte forma:
* **Hierarquia Visual de Botões:** O botão de confirmação/avanço deve ter cores de forte destaque (ex: azul sólido ou verde escuro) e tamanho padrão. Botões de ação secundária ou destrutiva (como cancelar) devem ser discretos (texto simples ou contorno com borda).
* **Previsibilidade e Feedback:** A digitação de campos essenciais como o e-mail deve ser natural, validada apenas por formato padrão e complementada com mensagens de erro claras e objetivas posicionadas diretamente abaixo do input.
* **Acessibilidade WCAG:** Garantir sempre uma relação de contraste adequada entre o texto e o fundo (mínimo de 4.5:1 para texto normal), além de tipografia legível e sem comportamentos erráticos nos elementos interativos.

---

## 🚀 Como Executar
1. Clone este repositório:
   ```bash
   git clone [https://github.com/Nicole-fermino/desafio-pior-ux-equipe-Z.git](https://github.com/Nicole-fermino/desafio-pior-ux-equipe-Z.git)