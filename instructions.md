# Canary

## Documentation

- [Canary upstream README](https://github.com/schjonhaug/canary#readme) — the upstream project: features, supported wallet types, notifications, and limitations.

## What you get on StartOS

- A **Web UI** for Canary, served at the bundled `ui` interface.
- A watch-only monitor that looks up your wallets through your own local Electrum server — **Fulcrum** or **Electrs**. Addresses never leave your StartOS.
- An admin account (`admin@local`) whose password is generated on demand by a StartOS action and persisted across restarts.

## Getting set up

1. Install **Fulcrum** or **Electrs** on StartOS and let it fully sync. Canary will not start until one is selected and running.
2. On first install, StartOS posts a critical **Set Admin Password** task. Run it and copy the generated password to a password manager — you will need it to sign in.
3. Run the **Select Electrum Server** action and pick which dependency Canary should talk to (defaults to Fulcrum).
4. Open the **Web UI** and sign in with `admin@local` and the password from step 2.

## Using Canary

### Web UI

The Web UI is where you add wallets (paste an xpub / ypub / zpub or output descriptor), watch transactions confirm, configure ntfy push notifications, and set balance alerts. Everything is read-only — Canary never holds keys and never signs.

### Actions

- **Select Electrum Server** — pick **Fulcrum** or **Electrs** as Canary's address-lookup backend. Re-run any time to switch.
- **Set Admin Password** — generate a new random password for `admin@local`. Use this if you've lost the password or want to rotate it.
