mocha.setup('bdd');
let assert = chai.assert;

// let sessionId = 'sessionId';
// let userName = 'userName';

// describe('Test checkErrorsJsonData', () => {
//     let jsonGood = {
//         ok: true,
//         data: {
//             id: sessionId,
//             canMove: true
//         }
//     };

//     let jsonBad = {
//         ok: false,
//         reason: 'something happens',
//         reasonR: '1'
//     };

//     it('json is OK', () => {
//         let jsonAnswer = checkErrorsJsonData(jsonGood);
//         assert.equal(jsonGood, jsonAnswer);
//     });

//     it('json is NOT OK', done => {
//         let jsonAnswerBad = checkErrorsJsonData(jsonBad);
//         jsonAnswerBad
//             .catch(result => {
//                 assert.include(result, jsonBad.reason);
//             })
//             .finally(done);
//     });
// });

mocha.run();
