export class User {
    constructor(
        public id: String,
        public name: String,
        public rank: String
    ) {}
}

export class Player extends User {}
