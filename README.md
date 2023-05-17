# Tokens management
List Token dex.scolcoin.com

All the tokens are in `tokens.ts`. They are instances of the `Token` class defined in the SDK
Format:
`graco: new Token(

     MAINNET,
     
     '0x988e9dc8855DfF6f244412E2830A011514b0865a',
     
     18,
     
     'GRACO',
     
     'GRANACOIN',
     
     'https://granacoin.com.co/',
     
   ),`



upload the images in the following format: PNG and SVG

example:
- 0xf25bFda0E59E9f946eA85Df4B9D52d298a3a7E81.png
- 0xf25bFda0E59E9f946eA85Df4B9D52d298a3a7E81.svg

`images/tokens/`

and and in the format:
   `
   {
      "name": "Granacoin",
      
      "symbol": "GRACO",
      
      "address": "0x988e9dc8855DfF6f244412E2830A011514b0865a",
      
      "chainId": 65450,
      
      "decimals": 18,
      
      "logoURI": "https://dex.scolcoin.com/images/tokens/0x988e9dc8855DfF6f244412E2830A011514b0865a.png"
      
    },`
    
put your token in the file
`default.tokenlist.json`
