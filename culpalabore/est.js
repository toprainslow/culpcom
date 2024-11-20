class SomeClass {
    constructor() {
        this._hash = this.generateHash();
    }
    
    generateHash() {
        // Logic to generate a hash value
        return Math.random().toString(36).substring(2, 15);
    }

    getHash() {
        return this._hash;
    }
}

const instance = new SomeClass();
console.log(instance.getHash());  // Outputs the hash value generated in the constructor
