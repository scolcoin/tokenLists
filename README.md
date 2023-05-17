# Gestión de fichas
Lista de Token dex.scolcoin.com

Todos los tokens están en `tokens.ts`. Son instancias de la clase `Token` definida en el SDK
Formato:

`
graco: new Token(

     MAINNET,
     
     '0x988e9dc8855DfF6f244412E2830A011514b0865a',
     
     18,
     
     'GRACO',
     
     'GRANACOIN',
     
     'https://granacoin.com.co/',
     
   ),`



sube las imágenes en el siguiente formato: PNG y SVG

Ejemplo:
- 0xf25bFda0E59E9f946eA85Df4B9D52d298a3a7E81.png
- 0xf25bFda0E59E9f946eA85Df4B9D52d298a3a7E81.svg

`images/tokens/`

y en el formato:
   `
   {
      "name": "Granacoin",
      
      "symbol": "GRACO",
      
      "address": "0x988e9dc8855DfF6f244412E2830A011514b0865a",
      
      "chainId": 65450,
      
      "decimals": 18,
      
      "logoURI": "https://dex.scolcoin.com/images/tokens/0x988e9dc8855DfF6f244412E2830A011514b0865a.png"
      
    },`
    
pon tu token en el archivo
`default.tokenlist.json`
