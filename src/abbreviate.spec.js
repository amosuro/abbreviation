import { abbreviate } from './abbreviate';

describe('abbreviate is a function that: ', () => {
    it('returns a string containing abbreviated words from given string', () => {
        let string, expectedResult;

        string = 'deep-fried mars bars are yummy!';
        expectedResult = 'd2p-f3d m2s b2s are y3y!';
        expect(abbreviate(string)).toEqual(expectedResult);
        
        string = 'it is important to look after your well-being!';
        expectedResult = 'it is i7t to l2k a3r y2r w2l-b3g!';
        expect(abbreviate(string)).toEqual(expectedResult);

        string = 'why does the alphabet only have 26 letters?';
        expectedResult = 'why d2s the a6t o2y h2e 26 l5s?';
        expect(abbreviate(string)).toEqual(expectedResult);

        string = 'hannah-louise';
        expectedResult = 'h4h-l4e';
        expect(abbreviate(string)).toEqual(expectedResult);
    });
});
