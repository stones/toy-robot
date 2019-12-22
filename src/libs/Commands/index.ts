import { DIRECTIONS } from '../ToyRobot';
import { X_LOWER, X_UPPER, Y_LOWER, Y_UPPER } from '../ToyRobot/MovementService';

export const PLACEMENT_COMMAND_REGEX: RegExp = new RegExp(`^PLACE (?<x>[${X_LOWER}-${X_UPPER}]{1}),(?<y>[[${Y_LOWER}-${Y_UPPER}]{1}),(?<direction>[${DIRECTIONS.join('|')}]{4,5})$`);

export const REPORT_COMMAND_REGEX: RegExp = /^REPORT$/;

