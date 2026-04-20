dasdsad

# 🎮 Gamer Registry

Sistema educacional completo para ensino de **Testes de Software**, desenvolvimento **Full Stack básico** e integração entre **Frontend, Backend e Banco de Dados**.

O projeto simula um pequeno sistema de cadastro de gamers e jogos, incluindo relacionamento N:N, permitindo criar um ambiente prático para aplicação de testes manuais e automatizados.

---

## 📚 Objetivo Educacional

Este projeto foi criado para:

- Ensinar conceitos de testes de software
- Demonstrar funcionamento de uma API REST
- Praticar integração Frontend + Backend + Banco
- Trabalhar relacionamento muitos-para-muitos
- Servir como base para testes unitários, integração e sistema

---

## 🧱 Tecnologias Utilizadas

### Backend
- Node.js
- Express
- PostgreSQL
- node-postgres (pg)
- dotenv
- cors
- Jest + Supertest (testes)

### Frontend
- HTML5
- Bootstrap 5
- JavaScript Vanilla
- Fetch API

---

## 🗂️ Estrutura do Projeto

```
gamer-registry-tests/
│
├── backend/
│   ├── routes/
│   │   ├── gamerGames.routes.js
│   │   ├── gamers.routes.js
│   │   └── games.routes.js
│   │
│   ├── tests/
│   │   ├── games.test.js
│   │   ├── db.js
│   │   └── RELATORIO-DE-DEFETO.md
│   │
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
├── database/
│   ├── schema.sql
│   └── seed.sql
│
├── frontend/
│   ├── index.html
│   ├── gamers.html
│   ├── games.html
│   ├── gamer-games.html
│   └── script.js
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## ⚙️ Configuração do Banco de Dados

### 1️⃣ Criar Banco PostgreSQL

```sql
CREATE DATABASE gamer_registry;
```

### 2️⃣ Executar Script de Estrutura

Execute o arquivo:

```
database/schema.sql
```

### 3️⃣ Inserir Dados Iniciais (Opcional)

Execute:

```
database/seeds.sql
```

---

## 🔐 Configuração do Ambiente

Criar arquivo `.env` dentro da pasta backend:

```
DB_USER=postgres
DB_HOST=localhost
DB_DATABASE=gamer_registry
DB_PASSWORD=1234
DB_PORT=5432
PORT=3000
```

---

## ▶️ Como Executar o Projeto

### 1️⃣ Instalar dependências

Dentro da pasta backend:

```
npm install
```

### 2️⃣ Iniciar servidor

```
node server.js
```

Servidor disponível em:

```
http://localhost:3000
```

---

## 🌐 Telas do Sistema

| Página | Função |
|----------|-----------|
| `/index.html` | Página inicial |
| `/gamers.html` | CRUD de gamers |
| `/games.html` | CRUD de jogos |
| `/gamer-games.html` | Associação Gamer ↔ Jogos |

---

## 🔗 Endpoints da API

### 🎮 Gamers

| Método | Rota |
|------------|-------------|
| GET | /api/gamers |
| POST | /api/gamers |
| PUT | /api/gamers/:id |
| DELETE | /api/gamers/:id |

---

### 🕹️ Games

| Método | Rota |
|------------|-------------|
| GET | /api/games |
| POST | /api/games |
| PUT | /api/games/:id |
| DELETE | /api/games/:id |

---

### 🔄 Associação Gamer ↔ Games

| Método | Rota |
|------------|-------------|
| GET | /api/gamer-games |
| POST | /api/gamer-games |
| DELETE | /api/gamer-games |

---

### 🧪 Testes

O projeto inclui testes automatizados utilizando:

- Jest  
- Supertest  

---

### ▶️ Executar testes

```bash
npm test
```
### 📁 Arquivos de testes

- `backend/tests/games.test.js`
- `backend/tests/db.js`

---

### 🐞 Relatório de Defeitos

Durante os testes, os defeitos encontrados são documentados em:

- `backend/tests/relatorio-de-defeito.md`
---

## 👨‍💻 Autor

Projeto desenvolvido para fins educacionais.
