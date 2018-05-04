import { Match, Set } from "../core/models/match";
import { User } from "../core/models/user";

export function mapMatches(res: any[]): Match[] {
    return res.map(m => this.mapMatch(m));
}

export function mapMatch(res: any): Match {
    const match = new Match(
        this.mapSets(res.sets),
        res.validationState,
        res.player1Id,
        res.player2Id,
        res.editedById
    );
    match.id = res.id;
    return match;
}

export function mapSets(json: any[]): Set[] {
    return json.map(s => this.mapSet(s));
}

export function mapSet(json: any): Set {
    return new Set(json.id, json.gameId, json.score1, json.score2);
}

export function mapUsers(json: any): User[] {
    return json.map(u => new User(u.id, u.firstName, u.lastName, u.email, u.points));
}