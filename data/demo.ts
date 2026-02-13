import type { Asset, WorldSlug, ElementName } from "./schema";

export const WORLDS: Record<
  WorldSlug,
  { name: string; subtitle: string; hero: string }
> = {
  antverse: {
    name: "ANTverse",
    subtitle: "Characters • Elements • Mutation",
    hero: "/antverse-hero.jpg"
  },
  "bm-jewels": {
    name: "BM Jewels",
    subtitle: "Artifacts • Crafted rarity",
    hero: "/jewels-hero.jpg"
  },
  "bm-galaxy": {
    name: "BM Galaxy",
    subtitle: "Cosmic relics • Provenance",
    hero: "/galaxy-hero.jpg"
  }
};

export const ELEMENTS: Array<{ name: ElementName; hint: string }> = [
  { name: "Earth", hint: "Foundation & matter" },
  { name: "Water", hint: "Depth & flow" },
  { name: "Wind", hint: "Breath & motion" },
  { name: "Fire", hint: "Energy & transformation" },
  { name: "Thunder", hint: "Electric force" },
  { name: "Ice", hint: "Cold & clarity" },
  { name: "Force", hint: "Combat & spirit" },
  { name: "Time", hint: "Past • present • future" },
  { name: "Flower", hint: "Nature & growth" },
  { name: "Shadow", hint: "Darkness & mystery" },
  { name: "Light", hint: "Divinity & purity" },
  { name: "Moon", hint: "Space & paranormal" }
];

export const DEMO_ASSETS: Asset[] = [
  {
    chain: "ethereum",
    contract: "0x495f947276749ce646f68ac8c248420045cb7b5e",
    tokenId: "94780497993465599050485820079768614914578089821675988125085530589339318222849",
    name: "ANTverse • Entity #01",
    image: "/antverse-hero.jpg",
    world: "antverse",
    elementPrimary: "Shadow",
    elementSecondary: "Light",
    mutationClass: "Dual",
    mutationScore: 92,
    tier: "Mythic",
    utilityRole: "Character",
    priceEth: 0.08
  },
  {
    chain: "ethereum",
    contract: "0x495f947276749ce646f68ac8c248420045cb7b5e",
    tokenId: "94780497993465599050485820079768614914578089821675988125085530589339318222850",
    name: "BM Jewel • Prism Ring",
    image: "/jewels-hero.jpg",
    world: "bm-jewels",
    elementPrimary: "Fire",
    mutationClass: "Single",
    mutationScore: 58,
    tier: "Epic",
    utilityRole: "Jewel",
    priceEth: 0.03
  },
  {
    chain: "ethereum",
    contract: "0x495f947276749ce646f68ac8c248420045cb7b5e",
    tokenId: "94780497993465599050485820079768614914578089821675988125085530589339318222851",
    name: "BM Galaxy • Relic",
    image: "/galaxy-hero.jpg",
    world: "bm-galaxy",
    elementPrimary: "Moon",
    elementSecondary: "Time",
    mutationClass: "Dual",
    mutationScore: 81,
    tier: "Mythic",
    utilityRole: "Relic",
    priceEth: 0.05
  }
];
