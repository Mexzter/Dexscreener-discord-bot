# Setup

### Requirements 
- #### [Node.js](https://nodejs.org/en/)
- #### [Git(Optional)](https://git-scm.com/downloads)

### Download project files
Download the ZIP folder or do `git clone https://github.com/Mexzter/Dexscreener-discord-bot.git`. 

### Installing and configuration
After downloading the project files, run `npm install` in the directory you cloned it to, this will download all required packages.

#### Config
```javascript
{
    "auth_token": "", //
    "interval_ms": "30000", 
    "pair": "avalanche/0x4cf9dc05c715812fead782dc98de0168029e05c8"
}
```

`auth_token` Can be created at https://discord.com/developers/applications.

`interval_ms` Interval of price updates, keep in mind ***API calls are limited to 100 requests per minute***

`pair` Can be changed by grabbing the chain and token adress from the dexscreener url. Example of $TIC `avalanche/0x4cf9dc05c715812fead782dc98de0168029e05c8`

![How to](https://cdn.discordapp.com/attachments/354339043531685888/964894178788139058/unknown.png)



#### Starting the bot
Once those it is properly configured you can go ahead and run `node index` in terminal to start the bot.
