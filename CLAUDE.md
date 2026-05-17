# CLAUDE.md

See [CONTRIBUTING.md](CONTRIBUTING.md) for the doc map and contribution workflow.

## Operating rules

- **Fork of `schjonhaug/canary-startos`.** Confirm with `gh api repos/Start9-Community/canary-startos --jq '.parent.full_name'` — `manifest.upstreamRepo` points at `schjonhaug/canary`, the upstream *software*, not the parent of this packaging repo.
- **Two upstream images are coupled.** `schjonhaug/canary-frontend` and `schjonhaug/canary-backend` ship the same Canary version and must always be bumped together.
