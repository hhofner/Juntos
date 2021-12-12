import { writable, readable } from 'svelte/store';

export const teams = writable(["Sc0ville", "Recccoo", "Family"]);

export const challenges = writable([]);

export const trophies = readable([]);