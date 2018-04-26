export class User {
    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public points: number
    ) {}
}

export class Player extends User {}
