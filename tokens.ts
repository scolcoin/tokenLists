export const mainnetTokens = defineTokens({
  wscol: new Token(
    MAINNET,
    '0xB3F34bd27FC83f3792dFedf60210257C0c62Fd58',
    18,
    'WSCOL',
    'Wrapped SCOL',
    'https://explorer.scolcoin.com/',
  ),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  scol: new Token(MAINNET, '0xB3F34bd27FC83f3792dFedf60210257C0c62Fd58', 18, 'SCOL', 'SCOL', 'https://explorer.scolcoin.com/'),
  icol: new Token(MAINNET, '0xCc3FEba5d10Cb33528908143f613880838F7A690', 18, 'ICOL', 'ICOL', 'https://explorer.scolcoin.com/'),
  
  graco: new Token(
     MAINNET,
     '0x988e9dc8855DfF6f244412E2830A011514b0865a',
     18,
     'GRACO',
     'GRANACOIN',
     'https://granacoin.com.co/',
   ),
  scolcoin: new Token(
    MAINNET,
    '0x988e9dc8855DfF6f244412E2830A011514b0865a',
    18,
    'SCOL',
    'SCOLCOIN TOKEN',
    'https://scolcoin.com/',
  ),
  eco: new Token(
    MAINNET,
    '0xC618f2d90655Dbe11593298f1E225fDb69B4527C',
    18,
    'ECO',
    'ECODUENDE',
    'https://ecoduende.scolcoin.com/',
  ),
  abe: new Token(
    MAINNET,
    '0x5d7bBef116733A7F52538689CCeafce4Eb31FEe7',
    18,
    'ABE',
    'ABE',
    '',
  )
} as const)
