# One Star, Five Stars for the Food

[![make.fun](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![rank](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/algifarri/makefun-u-po-pu-one-star-five-stars-for-the-food-f9166ee7/rank.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![reward](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/algifarri/makefun-u-po-pu-one-star-five-stars-for-the-food-f9166ee7/reward.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)

Entry for the [make.fun bounty "One Star, Five Stars for the Food"](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7): a program that writes one sentence, at most 200 characters, in the voice of an alien tourist giving planet Earth a one-star review while still slipping in a real compliment about the food.

## The entry

> One star: the locals worship glowing rectangles, the gravity is set far too high, and the rain falls without asking — but the tacos alone were worth the 40-light-year detour.

## How it works

`main.ts` (Node 22, standard library only) writes that one fixed sentence to `/output/entry.txt` — no trailing newline, so the judge reads exactly the bytes of the review. The string never changes, so both grader runs produce identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
