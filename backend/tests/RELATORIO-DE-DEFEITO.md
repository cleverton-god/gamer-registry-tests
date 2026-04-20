# Relatório de Defeito - Gamer Registry API

**Reporter:** Analista QA  
**ID do Bug:** GR-001  

---

## Título/Resumo do Bug
**Endpoint GET /api/games/:id não implementado na API**

A API não possui endpoint para busca individual de jogo por ID, essencial para operações completas de CRUD.

---

## Prioridade
Média - Afeta usabilidade mas não bloqueia criação/listagem

## Severidade
Alta - Falta funcionalidade essencial de leitura por ID

---

## Passos para Reproduzir
1. Executar `npm test` no backend  
2. Criar um jogo via `POST /api/games`  
3. Capturar o `id` retornado  
4. Tentar acessar `GET /api/games/:id`

---

## Resultado Esperado
```
Status: 200 OK
Body: { id: 1, title: "Test", genre: "RPG", release_year: 2024 }
```

## Resultado Obtido
```
Status: 404 Not Found
Body: {}
```

---

## Evidências
**Teste Jest (Ex5/Ex6):**
```
CREATE: { id: 1, title: "GTA V", ... }
GET: {}
Expected: 200
Received: 404
```

---

## Ambiente
- **Sistema Operacional:** Windows 11
- **Node.js:** v20.x (package.json)
- **Framework:** Express.js
- **Banco de Dados:** PostgreSQL (gamer_registry)
- **Testes:** Jest 30.3.0 + Supertest 7.2.2
- **Terminal:** PowerShell

---

## Reproduzibilidade
100% - Sempre ocorre

## Impacto
bloqueia o fluxo completo de leitura individual de dados

## Recomendação de Correção
Adicionar em `routes/games.routes.js`:
```js
router.get('/:id', async (req, res) => {
  const result = await pool.query('SELECT * FROM games WHERE id = $1', [req.params.id]);
  if (result.rows.length === 0) return res.status(404).send('Jogo não encontrado');
  res.json(result.rows[0]);
});
```

**Status:** Aberto  
**Versão:** 1.0.0  
**Anexos:** Screenshot testes falhando, logs console
