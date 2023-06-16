const Pokemon = require("../src/models/Pokemon");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
});

Pokemon(sequelize);
const { pokemon } = sequelize.models;
const attributes = pokemon.getAttributes();

beforeAll(async () => {
  await sequelize.authenticate();
});

describe("El modelo pokemon", () => {
  it("Debe haber sido creado correctamente y con el nombre correcto", () => {
    expect(pokemon).toBeDefined();
  });
  it("No debe generar automáticamente los atributos createdAt y updatedAt", () => {
    expect(attributes["createdAt"]).not.toBeDefined();
    expect(attributes["updatedAt"]).not.toBeDefined();
  });
});

describe("Los atributos del modelo...", () => {
  it("id: Un identificador único de tipo entero, con incremento automático y clave primaria.", () => {
    expect(attributes.id.type instanceof DataTypes.UUID).toBe(true);
  });

  it("name: El nombre completo del pokemon, de tipo String y no puede ser nulo.", () => {
    expect(attributes.name.type instanceof DataTypes.STRING).toBe(true);
    expect(attributes.name.allowNull).toBe(false);
  });
  it("height: La altura del pokemon, de tipo INTEGER y no puede ser nulo.", () => {
    expect(attributes.height.type instanceof DataTypes.INTEGER).toBe(
      true
    );
    expect(attributes.height.allowNull).toBe(false);
  });
  it("image: La imagen del pokemon, de tipo STRING y no puede ser nulo.", () => {
    expect(attributes.image.type instanceof DataTypes.STRING).toBe(true);
    expect(attributes.image.allowNull).toBe(false);
  });
  it("thumbnailImage: la thumbnail Image del pokemon, de tipo STRING y no puede ser nulo.", () => {
    expect(attributes.thumbnailImage.type instanceof DataTypes.STRING).toBe(true);
    expect(attributes.thumbnailImage.allowNull).toBe(false);
  });
  it("hp: La vida del pokemon, de tipo entero y no puede ser nulo.", () => {
    expect(attributes.hp.type instanceof DataTypes.INTEGER).toBe(true);
    expect(attributes.hp.allowNull).toBe(false);
  });
  it("attack: El ataque del pokemon, de tipo entero y no puede ser nulo.", () => {
    expect(attributes.attack.type instanceof DataTypes.INTEGER).toBe(true);
    expect(attributes.attack.allowNull).toBe(false);
  });
  it("defense: La defensa del pokemon, de tipo entero y no puede ser nulo.", () => {
    expect(attributes.defense.type instanceof DataTypes.INTEGER).toBe(true);
    expect(attributes.defense.allowNull).toBe(false);
  });
  it("specialAttack: El ataque especial del pokemon, de tipo entero y no puede ser nulo.", () => {
    expect(attributes.specialAttack.type instanceof DataTypes.INTEGER).toBe(true);
    expect(attributes.specialAttack.allowNull).toBe(false);
  });
  it("specialDefense: La defensa especial del pokemon, de tipo entero y no puede ser nulo.", () => {
    expect(attributes.specialDefense.type instanceof DataTypes.INTEGER).toBe(true);
    expect(attributes.specialDefense.allowNull).toBe(false);
  });
  it("speed: La velocidad del pokemon, de tipo entero y no puede ser nulo.", () => {
    expect(attributes.speed.type instanceof DataTypes.INTEGER).toBe(true);
    expect(attributes.speed.allowNull).toBe(false);
  });
  it("weight: el peso del pokemon, de tipo entero y no puede ser nulo.", () => {
    expect(attributes.weight.type instanceof DataTypes.INTEGER).toBe(true);
    expect(attributes.weight.allowNull).toBe(false);
  });
});
afterAll(async () => {
  await sequelize.close();
});
