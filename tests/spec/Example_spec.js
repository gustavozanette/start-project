import Example from "../../assets/js/components/Example";

describe("Example Class", function() {
	let example;

    beforeEach(() => {
        example = new Example();
    });

    it('should return Hello when calling example.hello', () => {
        expect( example.hello() ).toBe('Hello');
    });

    it('should not return Hi when calling example.hello', () => {
        expect( example.hello() ).toBe('Hi');
    });
});
