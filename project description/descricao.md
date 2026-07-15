# StudyShare — Plataforma Comunitária de Recursos Académicos

## Descrição do Projeto

O **StudyShare** é uma plataforma web comunitária criada para facilitar a partilha e o acesso a materiais académicos dentro da universidade. O objetivo é centralizar recursos importantes que atualmente estão dispersos em diferentes grupos de mensagens e plataformas, permitindo que estudantes encontrem, partilhem e organizem facilmente conteúdos relacionados às suas disciplinas.

A plataforma permitirá aos estudantes disponibilizar e consultar recursos como **exames de anos anteriores, soluções de TPCs, apontamentos, fichas de exercícios, materiais de aulas e outros documentos importantes**.

Além de funcionar como um arquivo académico digital, o StudyShare pretende criar uma comunidade colaborativa onde estudantes possam ajudar-se mutuamente através de avaliações, comentários e recomendações dos materiais partilhados.

## Problema Identificado

Atualmente, muitos estudantes dependem de grupos de WeChat, WhatsApp ou outros meios informais para encontrar materiais académicos. Este método apresenta vários problemas:

* Dificuldade em encontrar documentos antigos.
* Perda de materiais importantes quando as mensagens ficam muito antigas.
* Falta de organização por disciplina, professor ou ano académico.
* Duplicação de ficheiros.
* Dependência de poucos estudantes que possuem determinados materiais.

## Solução Proposta

O StudyShare disponibiliza uma plataforma centralizada onde os estudantes podem:

* Pesquisar materiais académicos por disciplina, categoria e ano.
* Fazer upload de novos recursos.
* Fazer download de documentos partilhados por outros estudantes.
* Avaliar a utilidade dos materiais.
* Comentar e discutir conteúdos.
* Guardar recursos favoritos para consulta futura.

## Principais Funcionalidades

### 1. Gestão de Recursos Académicos

Os estudantes poderão publicar:

* Exames anteriores.
* Soluções de TPCs.
* Notas de aula.
* Slides.
* Guias de laboratório.
* Fórmulas e resumos.

Cada recurso terá informações como:

* Nome.
* Disciplina.
* Professor.
* Ano/Semestre.
* Categoria.
* Autor do upload.

### 2. Pesquisa e Organização

Sistema de pesquisa e filtros por:

* Curso.
* Disciplina.
* Categoria.
* Ano académico.
* Tipo de ficheiro.

### 3. Sistema de Utilizadores

Cada estudante terá um perfil com:

* Nome.
* Curso.
* Recursos publicados.
* Histórico de contribuições.
* Pontuação de participação.

### 4. Sistema Comunitário

Os utilizadores poderão:

* Gostar de recursos úteis.
* Comentar documentos.
* Guardar materiais favoritos.
* Avaliar a qualidade dos conteúdos.

### 5. Upload e Gestão de Ficheiros

A plataforma suportará o envio de:

* PDF.
* DOCX.
* PPT.
* ZIP.
* Imagens.

## Tecnologias Utilizadas

### Frontend

* React
* Vite
* Tailwind CSS

### Backend

* FastAPI (Python)

### Base de Dados

* PostgreSQL

### Outras Tecnologias

* JWT para autenticação.
* SQLAlchemy para comunicação com a base de dados.
* Sistema de armazenamento de ficheiros.

## Impacto Esperado

O StudyShare pretende melhorar a colaboração académica dentro da universidade, reduzindo o tempo gasto pelos estudantes à procura de materiais e promovendo uma cultura de partilha de conhecimento.

A longo prazo, a plataforma poderá evoluir para uma biblioteca académica digital da universidade, integrando funcionalidades inteligentes como pesquisa avançada e assistência baseada em Inteligência Artificial.


Frontend
├── React + Vite
├── Tailwind CSS
├── React Router
└── Axios

        ↓ API

Backend
├── FastAPI
├── SQLAlchemy
├── Pydantic
├── JWT Authentication
└── Uvicorn

        ↓

Database
└── PostgreSQL

        ↓

Storage
└── Upload folder (first)


