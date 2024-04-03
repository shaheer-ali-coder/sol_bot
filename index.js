const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
// const { parse } = require('path');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const token = '7004554507:AAHW1GVGycd4jqLJHhfIwbd1SY2Xzb_spXs';

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Listen for the /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    console.log(msg, chatId)
    const keyboard_1 = {
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'Buy & Sell', callback_data: 'buy_sell' },
              { text: 'Token Sniper', callback_data: 'token_sniper' },
              { text: 'Market Marker',callback_data:'marker'},
            ],
            [
              { text: 'Limit Orders', callback_data: 'limit_orders' },
              { text: 'DCA Orders', callback_data: 'dca_orders' },
              
            ],
            [
                { text: 'Profile', callback_data: 'profile' },
                { text: 'Wallets', callback_data: 'wallets' },
                { text: 'Trade', callback_data: 'trade' },
              ],
              [
                { text: 'Copy Trades', callback_data: 'copy_trade' },
                { text: 'Referral System', callback_data: 'refferal' },
              ],
              [
                { text: 'Transfer SOL', callback_data: 'transfer_sol' },
                { text: 'Settings', callback_data: 'settings' },
              ],
              [
                { text: 'New Pair Bot', callback_data: 'new_pair_bot' },
                { text: 'New Token Bot', callback_data: 'new_token_bot' },
              ],
              [
                { text: 'Backup Bots', callback_data: 'backup_bots' },
                
              ],
              [
                { text: 'Help', callback_data: 'help' },
                
              ],
              [
                { text: 'Close', callback_data: 'close' },
                
              ],
          ],
        },
      };

    
    // Send a message with the menu
    bot.sendMessage(chatId, 'Choose an option:', { parse_mode: "HTML", ...keyboard_1 });
});

// Listen for callback queries
bot.on('callback_query', (callbackQuery) => {
  const messageId = callbackQuery.message.message_id; // Get the message ID
    const chatId = callbackQuery.message.chat.id;
    const data = callbackQuery.data;
    // Respond to each option
    switch (data) {
        case 'buy_sell':
            bot.sendMessage(chatId,`Paste token contract to begin buy & sell ↔️ \nOr select token sell:: \n████████ --- ███ = ███ SOL = $███`) 
        break
    case 'token_sniper':
        const keyboard_1 = {
            reply_markup: {
              inline_keyboard: [
                
                  [
                    { text: 'Lists', callback_data: 'list' },
                    
                  ],
                  [
                    { text: 'Close', callback_data: 'close' },
                    
                  ],
              ],
            },
          };
        bot.sendMessage(chatId,`Active Snipers: 0\nPaste token address to create new sniper!`,{parse_mode:"HTML",...keyboard_1})
        break
        
    case 'limit_orders':
        bot.sendMessage(chatId,`You have no active limit orders. Create a limit order from the Buy/Sell menu.`)
        break
    case 'dca_orders':
        bot.sendMessage(chatId,`You have no active dca orders. Create a dca order from the Buy/Sell menu.`)
        break
    case 'marker':
      bot.sendMessage(chatId, `Click <a href='https://t.me/SolDeveloperBot'>[here]</a> to start a conversation with SolDeveloperBot`, { parse_mode: "HTML" });
        break
      
    case 'profile':
        const keyboard_2 = {
            reply_markup: {
              inline_keyboard: [
                
                  [
                    { text: 'Sell All', callback_data: 'sell_all' },
                    
                  ],
                  [
                    { text: 'Close', callback_data: 'close' },
                    
                  ],
              ],
            },
          };
        bot.sendMessage(chatId,`👤 PROFILE\n\n\n--------------------------------------------------\nBalance ◎: 0.000 SOL / $0.00\n--------------------------------------------------`,{parse_mode:"HTML",...keyboard_2})
        break
    case 'wallets':
      const keyboard = {
        reply_markup: {
          inline_keyboard: [
            
              [
                { text: 'Connect Wallet', callback_data: 'connect_wallet' },
                { text: 'Generate New Wallet', callback_data: 'generate_wallet' },
                
              ],
              [
                { text: 'Generate 5 Wallet', callback_data: 'generate_5_wallet' },
                { text: 'Generate 10 Wallet', callback_data: 'generate_10_wallet' },
                
                
              ],
              [
                { text: 'Transfer All SOL to one', callback_data: 'transfer_all' },
              
                
                
              ],
              [
                { text: 'Wrap SOL to WSOL', callback_data: 'sol_wsol' },
                { text: 'Wrap WSOL to SOL', callback_data: 'wsol_sol' },
                
                
              ],
              [
                { text: 'Reload List', callback_data: 'reload' },
              
                
                
              ],
              [  { text: 'Close', callback_data: 'close' },
              
                
                
            ],
          ],
        },
      };
    
        bot.sendMessage(chatId,`You don't have any wallet yet, please create a wallet to use.`,{parse_mode:"HTML",...keyboard})
        break
    case 'trade':
        bot.sendMessage(chatId,`You don't have any transactions yet`)
        break
    case 'copy_trade':
        bot.sendMessage(chatId,`Select a wallet to copy trade`)
        break
    case 'refferal':
      const keyboard_3 = {
        reply_markup: {
          inline_keyboard: [
            
              [
                { text: 'Create Claim Request', callback_data: 'create_claim' },
                { text: 'Claim History', callback_data: 'claim_history' },
                
              ],
              [
                { text: 'Close', callback_data: 'close' },
              
                
                
              ],
                
                
      
          ],
        },
      };
        bot.sendMessage(chatId,`ALPHA VERSION (The data recorded below is in the process of being verified, it is possible that the displayed data may differ from the actual number.)\nReferral System Report:\nYour referral link: https://t.me/SolTradingBot?start=ytVkG29ce\nReferrals: 0\nLifetime SOL earned: 0 SOL ($0)\n🎁 This is the referral reward period from 2023/11/21 to 2024/04/01\n⏳ The next claim will be available after 2024/04/02, (24 hours since your last claim)\nYour earned Sol will reset after 1 month. Please claim when possible\nRefer your friends and earn 30% forever!`,{parse_mode:'HTML',...keyboard_3})
        break
    case 'transfer_sol':
      const keyboard_4 = {
        reply_markup: {
          inline_keyboard: [
            
              [
                { text: 'Connect Wallet', callback_data: 'connect_wallet' },
                { text: 'Generate New Wallet', callback_data: 'generate_wallet' },
                
              ],
              [
                { text: 'Generate 5 Wallet', callback_data: 'generate_5_wallet' },
                { text: 'Generate 10 Wallet', callback_data: 'generate_10_wallet' },
                
                
              ],
              [
                { text: 'Transfer All SOL to one', callback_data: 'transfer_all' },
              
                
                
              ],
              [
                { text: 'Wrap SOL to WSOL', callback_data: 'sol_wsol' },
                { text: 'Wrap WSOL to SOL', callback_data: 'wsol_sol' },
                
                
              ],
              [
                { text: 'Reload List', callback_data: 'reload' },
              
                
                
              ],
              [  { text: 'Close', callback_data: 'close' },
              
                
                
            ],
          ],
        },
      };
        bot.sendMessage(chatId,`You don't have any wallet yet, please create a wallet to use.`,{parse_mode:"HTML",...keyboard_4})
        break
    case 'settings':
      const keyboard_5 = {
        reply_markup: {
          inline_keyboard: [
            [
              { text: '---AUTO BUY---', callback_data: 'TAN' },
            
              
              
            ],
            
              [
                { text: 'Inactive', callback_data: 'inactive' },
                { text: '0.1SOL', callback_data: 'sol' },
                
              ],
              [
                { text: '---AUTO SELL---', callback_data: 'TAN' },
              
                
                
              ],
              [
                { text: '---OTHERS---', callback_data: 'tan' },
              
                
                
              ],
              [
                { text: 'Inactive', callback_data: 'inactive' },
                { text: '0.1SOL', callback_data: 'sol' },
                
              ],
              [
                { text: 'ANTI-MEV', callback_data: 'anti_mev' },
                { text: 'WSOL Snipe', callback_data: 'wsol_snipe' },
                
                
              ],
              [
                { text: '(49%) Slippage Buy Sell', callback_data: 'slippage' },
                { text: '(1000%) Slippage Sniper', callback_data: 'slippage_sniper' },
                
                
              ],
              [
                { text: '(0.004) Tip SOL Buy Sell', callback_data: 'sol_tip' },
                { text: '(0.005) Tip Sol Sniper', callback_data: 'sol_sniper_tip' },
                
                
              ],
              [
                { text: '(0.00001 SOL) Custom ', callback_data: 'custom' },
                { text: 'Show Bird Eye', callback_data: 'bird_eye' },
                { text: '5 Num Wallet Disconnect', callback_data: '5_wallet_disconnect' },
                
                
              ],
              [  { text: 'Close', callback_data: 'close' },
              
                
                
            ],
          ],
        },
      };
        bot.sendMessage(chatId,`<b>ANTIMEV:</b> \nSecure your transaction, of course your transaction may be failed.\nAUTO BUY: \nAutomatically execute buys upon pasting token address. Tap to switch on/off.\n<b>AUTO SELL:</b>
        Automatically execute sells upon pasting token address. Tap to switch on/off.\n<b>Note:</b> \n* Tip amount will be adjusted based on the time of day according to our algorithm to improve the transaction success rate`,{parse_mode:'HTML',...keyboard_5})
        break
    case 'new_pair_bot':
        bot.sendMessage(chatId,`Click <a href="https://t.me/SolanaListing">[here]</a> to start a conversation with SolListingBot`, { parse_mode: "HTML"})
        break
    case 'new_token_bot':
      bot.sendMessage(chatId,`Click <a href="https://t.me/SolanaNewListing">[here]</a> to start a conversation with NewSolListingBot`, { parse_mode: "HTML"})
        break
    case 'backup_bots':
        const keyboard_6 = {
        reply_markup: {
          inline_keyboard: [
            [
              { text: '🔴Main Bot', callback_data: 'main' },
            
              
              
            ],
            [
              { text: '🟠Backup Bot', callback_data: 'backup' },
            
              
              
            ],
            [
              { text: '🟢Europe Bot', callback_data: 'backup' },
            
              
              
            ],
            [
              { text: '🟢Asia Bot', callback_data: 'backup' },
            
              
              
            ],
            [
              { text: '🟢Americas Bot', callback_data: 'backup' },
            
              
              
            ],]}}

        bot.sendMessage(chatId,`Backup Bots\nBecause of the telegram bot's limitations when sending messages, we were forced to deploy multiple backups in many different regions to improve user experience as well as reduce pressure on the server.\n\n🟢 - The best choice to experience the speed of light\n🟠 - In a state of many users\n🔴 - Overloading\n\nNote: do not search for the bot username on telegram, please click on the official button or link to use the bot.`,{parse_mode:'HTML',...keyboard_6})
        break
    case 'help':
        bot.sendMessage(chatId,`Support commands:\n/start - Your Gateway to Solana DeFi\n/sniper - Snipe token on Solana\n/limitorders - Manage limit orders\n/dcaorders - Manage DCA orders\n/copytrade - Copy Trade\n/profile - View your portfolio\n/trades - Track, monitor your trades\n/buysell - Swap Token\n/settings - Settings auto buy, auto sell, slippage\n/referral - Referral System\n/wallets - Config wallets\n/backupbots - Backup Bots\n/help - Tutorial & Help`)
        break
    case 'close':
      bot.deleteMessage(chatId, messageId);
        break
    }
});
