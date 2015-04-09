describe("wordOrder", function(){
    it("returns hi if user enter 'hi'", function(){
        expect(wordOrder("hi")).to.equal("hi");
    });

    it("returns hi world if user enter 'hi world'", function(){
        expect(wordOrder("hi world")).to.equal("hi world");
    });

    it("returns world hi if user enter 'hi world world'", function(){
        expect(wordOrder("hi world world")).to.equal("world hi");
    });
});
