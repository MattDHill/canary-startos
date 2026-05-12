# Canary - Bitcoin Wallet Monitoring

Canary is a self-hosted Bitcoin wallet monitoring service that helps you keep track of your Bitcoin wallets without exposing your private keys.

## Getting Started

### 1. Choose Your Electrum Server

Canary looks up your wallet addresses through a local Electrum server running on your StartOS — **Fulcrum** or **Electrs**. Both keep your addresses private; nothing leaves your server.

1. If you don't already have one, install **Fulcrum** or **Electrs** from the Marketplace and wait for it to sync with the blockchain (this can take several hours on first run)
2. Use the **Select Electrum Server** action to choose which one Canary uses (it defaults to Fulcrum)

StartOS prompts you with a task to do this before Canary will start.

### 2. Access the Web Interface

1. Run the **Set Admin Password** action and copy the generated password (StartOS prompts you with a task to do this on first install)
2. Click on **Interfaces** in the service details
3. Choose either:
   - **Tor Address** - Access via Tor Browser (more private, but slower)
   - **LAN Address** - Access from your local network (faster, requires HTTPS certificate acceptance)
4. Sign in with username `admin@local` and that password

### 3. Add Your First Wallet

1. In the Canary web interface, click **Add Wallet**
2. Enter a name for your wallet (e.g., "Cold Storage", "Hardware Wallet")
3. Paste your **extended public key (xpub/ypub/zpub)** or **output descriptor**
4. Click **Create**

Your wallet will begin syncing. Depending on the wallet's transaction history, this may take a few minutes.

## Features

### Transaction Monitoring

- View all incoming and outgoing transactions
- See transaction confirmations in real-time
- Detect RBF (Replace-By-Fee) and CPFP (Child-Pays-For-Parent) transactions

### Push Notifications

Canary supports push notifications via **ntfy.sh**:

1. Install the ntfy app on your phone ([Android](https://play.google.com/store/apps/details?id=io.heckel.ntfy) / [iOS](https://apps.apple.com/app/ntfy/id1625396347))
2. In Canary, add a contact with an ntfy topic
3. Subscribe to the same topic in the ntfy app
4. Receive instant notifications for all wallet transactions

### Balance Alerts

Set up alerts to notify you when your wallet balance crosses a threshold:

- **Above** - Alert when balance exceeds a certain amount
- **Below** - Alert when balance drops below a certain amount
- **Equals** - Alert when balance reaches an exact amount

### Multi-Language Support

Canary supports notifications in:

- English
- Norwegian (Norsk)

## Security Notes

- **Watch-Only**: Canary only uses your public keys. It cannot spend your Bitcoin.
- **No Cloud**: All data stays on your StartOS server.
- **Privacy**: Wallet addresses are looked up through your own local Electrum server — they never leave your StartOS.

## Troubleshooting

### Wallet Not Syncing

1. Check that your Electrum server (Fulcrum or Electrs) is running and fully synced
2. Verify your descriptor/xpub is valid
3. Check the Canary logs for errors

### Notifications Not Working

1. Verify your ntfy topic is correct
2. Make sure you're subscribed to the same topic in the ntfy app
3. Check your phone's notification settings

### High Address Index

If your wallet uses high address indexes (e.g., index 200+), Canary will automatically detect this through deep scanning. The initial sync may take longer.

## Support

For issues and feature requests, please visit:
https://github.com/schjonhaug/canary/issues
