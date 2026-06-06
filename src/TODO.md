# TODO - Gaming Tech Store Upgrade

## Plan Approved

### Step 1: Expand product catalog
- [x] Update `lib/products.ts` with a large set of realistic gaming-tech items (headphones, keyboards, mice, monitors, GPUs, rigs, accessories)
- [x] Ensure each product has believable `price`, `description`, `features`, `highlight`, and a working remote `image`
- [x] Keep unique stable `slug` values


### Step 2: Improve home page (professional + responsive)
- [x] Refactor `app/page.tsx` to use a better layout and larger responsive product grid
- [x] Add category sections and a stronger featured-products area


### Step 3: Improve product detail pages
- [x] Update `app/product/[slug]/page.tsx` with a more professional layout
- [x] Add related products section by category


### Step 4: Validate image + routing robustness
- [x] Ensure unknown slug shows `not-found`
- [x] Verify remote images render correctly in Next `Image`


### Step 5: Run & verify
- [ ] Start dev server and check:
  - home renders
  - all product routes work
  - responsiveness across breakpoints

