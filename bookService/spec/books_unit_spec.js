let request = require("request");
let books = require("../dao/books");

describe("Unit tests on books module", () => {
    describe("load all books", () => {
        it("have four elements", () => {
            let results = books.list();
            expect(results.length).toBe(4);
        });
        
    });
    describe("load books with taxes", () => {
        it("with location Raleigh", () => {
            let results = books.query_by_arg("Raleigh");
            expect(results[0].prize).toBe("21.94");
        });
        it("with location Durham", () => {
            let results = books.query_by_arg("Durham");
            expect(results[0].prize).toBe("22.04");
        });
        it("with invalid location China", () => {
            expect( () => {
                books.query_by_arg("China");
                expect(results).toBeNull();
            })
        });
       
    });

});