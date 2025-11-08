# Nosso Cantinho

Um painel romântico e responsivo feito para ela que se atualiza com informações úteis, APIs externas e conteúdo personalizado.

## Funcionalidades Principais

* **Design Responsivo:** O layout é baseado em CSS Grid e Flexbox, adaptando-se perfeitamente a desktops, tablets e celulares.
* **Tema Dark/Light:** Possui um seletor de tema (claro/escuro) que salva a preferência do usuário no `localStorage`.
* **Contagens Regressivas:** Calcula e exibe os dias restantes para datas importantes (aniversários).
* **Integração com APIs (Assíncrono):**
    * **Clima em Tempo Real:** Busca dados meteorológicos de duas cidades (Belo Horizonte e Bambuí) usando a API do `wttr.in`.
    * **Capas de Músicas:** Busca as artes dos álbuns/singles da semana usando a API do iTunes.
* **Conteúdo Dinâmico Diário:**
    * **Frase do Dia:** Exibe uma frase diferente para cada dia da semana, com base em uma lista.
    * **Foto Astronômica do Dia:** Mostra uma imagem e descrição de astronomia diferente para cada dia da semana.
* **Previsão Astronômica:** Exibe os próximos eventos astronômicos, como chuvas de meteoros.

## Tecnologias Utilizadas

O núcleo deste projeto é o JavaScript (Vanilla) para manipulação do DOM e consumo de APIs.

* **HTML5:** Estrutura semântica para os cards do dashboard.
* **CSS3:** Estilização moderna com:
    * Variáveis CSS 
    * CSS Grid e Flexbox 
    * Media Queries 
* **JavaScript (Vanilla / ES6+):**
    * Manipulação do DOM 

## Estrutura do Projeto

```

├── index.html 
├── css/ 
│ └── style.css  
├── js/ 
│ └── script.js  
└── assets/ 
└── icons/ 
   └── wedding-icon.png
```

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT].
