import { Match, Set } from '../core/models/match';
import { environment } from '../../environments/environment';



export function matchIsValid(match: Match): boolean {
        if (!match.player1Id || !match.player2Id) {
            console.log('missing player');
            return false;
        }
        if (match.player1Id === match.player2Id) {
            console.log('same player');
            return false;
        }
        return this.checkSets(match.sets);
    }

export function checkSets(sets: Set[]): boolean {
        if (sets.length > environment.sets) {
            console.log('number of set > ' + environment.sets);
            return false;
        }
        let score1 = 0;
        let score2 = 0;
        for (let i = 0 ; i < sets.length ; i++) {
            if (sets[i].score1 > sets[i].score2) {
                score1 += 1;
            } else {
                score2 += 1;
            }
            if (!this.checkSet(sets[i])) {
                console.log('the ' + i + ' set is not correct');
                return false;
            }
        }
        if (score1 === score2) { console.log('total score can\'t be same'); return false; }
        return true;
    }

export function checkSet(set: Set): boolean {
        const score1 = set.score1;
        const score2 = set.score2;
        if (score1 === score2) { console.log('score can\'t be the same'); return false; }
        if (score1 > score2) {
            return this.checkScore(score1, score2);
        } else {
            return this.checkScore(score2, score1);
        }
    }

export function checkScore(winner: number, loser: number): boolean {
        if (winner === 11) {
            if ( loser < 10 ) { return true; } else { return false; }
        } else if (winner > 11) {
            if ( (winner - loser) === 2 ) { return true; } else { return false; }
        } else { return false; }
    }

