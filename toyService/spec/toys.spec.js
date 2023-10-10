// const { Router } = require('express'); // Import your route handler
// const router = Router(); // Create an instance of your route handler

// // Mock your route dependencies
// const mockResponse = {
//   json: jasmine.createSpy('json'),
//   send: jasmine.createSpy('send'),
//   status: jasmine.createSpy('status').and.returnValue(mockResponse),
// };
// const next = jasmine.createSpy('next');
// const base_url = 'http://localhost:3033/';
// const toys_url = base_url + 'toys/Raleigh';
// const not_found_url = base_url + 'toys/';


// describe("Toys server  endpoint tests", function () {
    
//     describe("GET /toys/Raleigh", () => {
//         it("returns status code 200",  (done) => {
//             request.get(toys_url, (error, response, body) => {
//                 expect(response.statusCode).toBe(200);
//                 done();
//             });
//         });
//         it("contains price", (done) => {
//             request.get(toys_url, (error, response, body) => {
//                 expect(body).toBeTruthy();
//                 expect(body).toContain("prize");
//                 done();
//             });
//         });
//     });
//     // test for wrong path and expect 404
//     describe("GET /toys/", () => {
//         it("returns status code 404",  (done) => {
//             request.get(not_found_url, (error, response, body) => {
//                 expect(response.statusCode).toBe(404);
//                 done();
//             });
//         });
//     });
//     describe("GET /toys/China", () => {
//         it("returns status code 404",  (done) => {
//             request.get(not_found_url + "China", (error, response, body) => {
//                 expect(response.statusCode).toBe(404);
//                 done();
//             });
//         });
//     });
// });