export class User {

    constructor(
        public id?: String,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public points?: number,
    ) {}
}

export class Player extends User {}
