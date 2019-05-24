describe('Todo Component', function() {
    beforeEach(() => {
        cy.visit("http://localhost:3000/todo");
    });

    it('Open Todo app', function() {
        cy.get(".todo-container");
    });

    describe("unit testing", () => {
        describe("Find all buttons", () => {
            it('should add-button is shown', function () {
                cy.get(".add-btn");
            });

            it('should all-btn is shown', function () {
                cy.get(".all-btn");
            });

            it('should completed-btn is shown', function () {
                cy.get(".completed-btn");
            });

            it('should not-completed-btn is shown', function () {
                cy.get(".not-completed-btn");
            });

            it('should one-complete is not shown', function () {
                cy.get(".todo-container").not(".one-complete");
            });

            it('should delete-todo is not shown', function () {
                cy.get(".todo-container").not(".delete-todo");
            });
        });
    });

    describe("add todos", () => {
        it('should add todo work correctly', function () {
            cy.get(".add-todo").type("mustafa todo test");
            cy.get(".add-btn").click();

            cy.get(".one-todo > .one-complete");
            cy.get(".one-todo").contains("mustafa todo test");
        });

        it('should add todo work correctly multiple', function () {
            cy.get(".add-todo").type("mustafa1 todo test");
            cy.get(".add-btn").click();

            cy.get(".add-todo").type("mustafa2 todo test");
            cy.get(".add-btn").click();

            cy.get(".add-todo").type("mustafa3 todo test");
            cy.get(".add-btn").click();

            cy.get(".one-todo > .one-complete");

            cy.get(".todos").children().should('have.length', 3)
        });

        describe("todo functionalities", () => {
            beforeEach(() => {
                cy.get(".add-todo").type("mustafa1 todo test");
                cy.get(".add-btn").click();

                cy.get(".add-todo").type("mustafa2 todo test");
                cy.get(".add-btn").click();

                cy.get(".add-todo").type("mustafa3 todo test");
                cy.get(".add-btn").click();
            });

            it('should complete todo work correctly', function () {
                cy.get(".todos>div").eq(0).contains("mustafa1 todo test");
            });


        })
    });

});