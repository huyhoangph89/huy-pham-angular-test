import { matchValidator } from './match/match.validator';
import { notInValidator } from './not-in/not-in.validator';
export declare class CustomValidators {
    static match: typeof matchValidator;
    static notIn: typeof notInValidator;
}
