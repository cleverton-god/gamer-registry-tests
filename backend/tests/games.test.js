const request = require("supertest");
const app = require("../server");

describe("Testes da API /api/games", () => {

  test("Exercício 1 - GET /games retorna 200", async () => {
    const response = await request(app).get("/api/games");
    expect(response.statusCode).toBe(200);
  });

  test("Exercício 2 - GET /games retorna array", async () => {
    const response = await request(app).get("/api/games");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("Exercício 3 - POST /games cria jogo válido", async () => {
    const response = await request(app).post("/api/games").send({
      title: "The Witcher 3",
      genre: "RPG"
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("title", "The Witcher 3");
    expect(response.body).toHaveProperty("genre", "RPG");
  });

  test("Exercício 4 - POST /games com corpo vazio retorna 400", async () => {
    const response = await request(app).post("/api/games").send({});

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error");
  });

  test("Exercício 5 - GET /games/:id retorna 200", async () => {
    const createResponse = await request(app).post("/api/games").send({
      title: "GTA V",
      genre: "Ação",
      release_year: 2013
    });

    expect(createResponse.statusCode).toBe(201);

    const gameId = createResponse.body.id;

    const getResponse = await request(app).get(`/api/games/${gameId}`);

    expect(getResponse.statusCode).toBe(200);
    expect(getResponse.body).toHaveProperty("id", gameId);
    expect(getResponse.body).toHaveProperty("title", "GTA V");
    expect(getResponse.body).toHaveProperty("genre", "Ação");
    expect(getResponse.body).toHaveProperty("release_year", 2013);
  });

  test("Exercício 6 - Fluxo completo", async () => {
    const create = await request(app).post("/api/games").send({
      title: "Minecraft",
      genre: "Sandbox",
      release_year: 2011
    });

    expect(create.statusCode).toBe(201);

    const gameId = create.body.id;

    const deleteResponse = await request(app).delete(`/api/games/${gameId}`);
    expect(deleteResponse.statusCode).toBe(204);

    const getResponse = await request(app).get(`/api/games/${gameId}`);
    expect(getResponse.statusCode).toBe(404);
  });

});