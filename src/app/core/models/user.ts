export class User {
    constructor(
        public id: String,
        public name: String,
        public rank: number
    ) {}
}

export class Player extends User {}
