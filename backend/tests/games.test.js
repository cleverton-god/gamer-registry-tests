const request = require("supertest");
const app = require("../server");

describe("Testes da API /api/games", () => {

  // ============================
  // Exercício 5
  // ============================

  test("Exercício 5 - Criar jogo", async () => {
    const createResponse = await request(app).post("/api/games").send({
      title: "GTA V",
      genre: "Ação",
      release_year: 2013
    });

    expect(createResponse.statusCode).toBe(201);

    // Matheus continua aqui
  });

  // ============================
  // Exercício 6
  // ============================

  test("Exercício 6 - Criar outro jogo", async () => {
    const create = await request(app).post("/api/games").send({
      title: "Minecraft",
      genre: "Sandbox",
      release_year: 2011
    });

    expect(create.statusCode).toBe(201);

    // Flavio continua aqui
  });

});