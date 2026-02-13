# BMverse Marketplace (Starter)

Universe-first NFT marketplace UI scaffold: **Worlds • Elements • Mutation • Identity**.

## Run locally
```bash
npm i
npm run dev
```

## Routes
- `/` (marketing portal)
- `/explore`
- `/worlds/[slug]`
- `/asset/[chain]/[contract]/[tokenId]`
- `/vault`

## Replace demo data
Edit `data/demo.ts` and `data/schema.ts`.

## Next steps (prod)
- Connect wallet + auth (SIWE)
- Index listings (Seaport / Reservoir / custom)
- Cache metadata (IPFS gateways, OpenSea, etc.)
- Add Lore + Elements encyclopedia pages
