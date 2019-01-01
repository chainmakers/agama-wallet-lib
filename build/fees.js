"use strict";

/* list of static fees confirmed to be working to push transactions
 * consider these fees as average to sign most of the transactions
 * certain transactions may require higher fees
 * btc has dynamic fees
 * fee values are in satoshis
 */

var KMD_STD_FEE = 10000; // kmd main/chips/asset chains
var fees = {
  // btc compatible coins, fees in satoshis
  // kmd/chips/asset chains
  kmd: KMD_STD_FEE,
  chips: KMD_STD_FEE,
  zilla: KMD_STD_FEE,
  prlpay: KMD_STD_FEE,
  kv: KMD_STD_FEE,
  bntn: KMD_STD_FEE,
  eql: KMD_STD_FEE,
  oot: KMD_STD_FEE,
  coqui: KMD_STD_FEE,
  chain: KMD_STD_FEE,
  glxt: KMD_STD_FEE,
  revs: KMD_STD_FEE,
  supernet: KMD_STD_FEE,
  dex: KMD_STD_FEE,
  bots: KMD_STD_FEE,
  crypto: KMD_STD_FEE,
  dnr: KMD_STD_FEE,
  hodl: KMD_STD_FEE,
  pangea: KMD_STD_FEE,
  pgt: KMD_STD_FEE,
  bet: KMD_STD_FEE,
  mshark: KMD_STD_FEE,
  mnz: KMD_STD_FEE,
  wlc: KMD_STD_FEE,
  mgw: KMD_STD_FEE,
  btch: KMD_STD_FEE,
  beer: KMD_STD_FEE,
  pizza: KMD_STD_FEE,
  vote2018: KMD_STD_FEE,
  ninja: KMD_STD_FEE,
  jumblr: KMD_STD_FEE,
  ccl: KMD_STD_FEE,
  vrsc: KMD_STD_FEE,
  dion: KMD_STD_FEE,
  kmdice: KMD_STD_FEE,
  ptx: KMD_STD_FEE,
  spltest: KMD_STD_FEE,
  // ext. coins
  doge: 100000000,
  via: 100000,
  vtc: 100000,
  nmc: 100000,
  mona: 100000,
  ltc: 100000,
  fair: 1000000,
  dgb: 100000,
  dash: 10000,
  crw: 10000,
  btg: 10000,
  blk: 10000,
  sib: 10000,
  bch: 10000,
  arg: 50000,
  zec: 10000,
  hush: 10000,
  bzc: 10000,
  sng: 10000,
  xmy: 5000,
  zcl: 1000,
  hodlc: 5000,
  suqa: 5000,
  btx: 50000,
  btcz: 10000,
  grs: 50000,
  qtum: 400000,
  btcp: 10000,
  emc2: 100000,
  bcbc: 10000,
  game: 100000,
  fjc: 100000,
  ftc: 1000000,
  xmcc: 10000,
  xzc: 10000,
  gbx: 10000,
  mac: 100000,
  mnx: 10000,
  arco: 10000,
  lana: 100,
  neva: 100,
  netko: 100,
  taj: 100,
  xvg: 10000,
  uno: 10000,
  kreds: 10000,
  ufo: 100000,
  lcc: 1000000,
  grlc: 200000,
  axe: 10000,
  aywa: 10000,
  bitb: 100000000,
  polis: 10000,
  crc: 1000000,
  tzc: 1000000,
  inn: 1000000,
  goa: 100000,
  xsc: 100000,
  eny: 10000,
  rap: 1000,
  cesc: 0, // todo
  mue: 0, // todo
  koto: 0, // todo
  rdd: 0, // todo
  pak: 0, // todo
  cpc: 0, // todo
  // eth, gas limit in wei
  eth: 21000,
  eth_ropsten: 21000
};

module.exports = fees;