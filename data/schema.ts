export type ElementName =
  | "Earth"
  | "Water"
  | "Wind"
  | "Fire"
  | "Thunder"
  | "Ice"
  | "Force"
  | "Time"
  | "Flower"
  | "Shadow"
  | "Light"
  | "Moon";

export type Tier = "Genesis" | "Rare" | "Epic" | "Mythic" | "Ascended";
export type UtilityRole = "Character" | "Jewel" | "Relic" | "Pass";

export type WorldSlug = "antverse" | "bm-jewels" | "bm-galaxy";

export type Asset = {
  chain: "ethereum";
  contract: string;
  tokenId: string;
  name: string;
  image: string;
  world: WorldSlug;
  elementPrimary: ElementName;
  elementSecondary?: ElementName;
  mutationClass: "Single" | "Dual" | "Triad" | "Quintessence";
  mutationScore: number; // 0-100
  tier: Tier;
  utilityRole: UtilityRole;
  priceEth?: number;
};
