/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
const firstName = faker.name.firstName(); // Rowan Nikolaus
const lastName = faker.name.lastName();
const codepostal = faker.address.zipCodeByState();
describe("premier exercice", () => {
  it("mon premier test acces site", () => {
    cy.visit("https://www.saucedemo.com");
    cy.get("#user-name")
      .type("standard_user")
      .should("be.visible")
      .and("contain.value", "standard_user");
    cy.get("#password").type("secret_sauce").should("be.visible");
    //.and("contain.value", "secret_sauce");
    cy.get("#login-button").click();
    // cy.get("#add-to-cart-sauce-labs-bike-light").click();
    //cy.get("#add-to-cart-sauce-labs-backpack").click();
    //cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    //cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
    //cy.get("#add-to-cart-sauce-labs-onesie").click();
    //cy.get("#add-to-cart-test.allthethings()-t-shirt-(red)").click();
    //cy.get("#add-to-cart-sauce-labs-onesie").click();
    cy.contains("Add to cart").click();
    cy.contains("Remove").should("be.visible");
    cy.contains("Add to cart").click();
    cy.contains("Remove").should("be.visible");
    cy.contains("Add to cart").click();
    cy.contains("Remove").should("be.visible");
    cy.contains("Add to cart").click();
    cy.contains("Remove").should("be.visible");
    cy.contains("Add to cart").click();
    cy.contains("Remove").should("be.visible");
    cy.contains("Add to cart").click();
    cy.contains("Remove").should("be.visible");
    cy.get("#shopping_cart_container").click();
    cy.get("#checkout").click();
    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#postal-code").type(codepostal);
    cy.get("#continue").click();
    cy.get("#finish").click();
  });
});
