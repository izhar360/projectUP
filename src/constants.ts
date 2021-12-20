export const THE_GRAPH_URL = "http://localhost:8000/subgraphs/name/Factory";
export const EPOCH_INTERVAL = 9600;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 3;

export const TOKEN_DECIMALS = 9;

export const POOL_GRAPH_URLS = {
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  4: {
    DAI_ADDRESS: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C", // duplicate
    PID_ADDRESS: "0xC0b491daBf3709Ee5Eb79E603D73289Ca6060932",
    STAKING_ADDRESS: "0xC5d3318C0d74a72cD7C55bdf844e24516796BaB2",
    STAKING_HELPER_ADDRESS: "0xf73f23Bb0edCf4719b12ccEa8638355BF33604A1",
    OLD_STAKING_ADDRESS: "0xb640AA9082ad720c60102489b806E665d67DCE32",
    SPID_ADDRESS: "0x1Fecda1dE7b6951B248C0B62CaeBD5BAbedc2084",
    OLD_SPID_ADDRESS: "0x8Fc4167B0bdA22cb9890af2dB6cB1B818D6068AE",
    MIGRATE_ADDRESS: "0x3BA7C6346b93DA485e97ba55aec28E8eDd3e33E2",
    DISTRIBUTOR_ADDRESS: "0x0626D5aD2a230E05Fb94DF035Abbd97F2f839C3a",
    BONDINGCALC_ADDRESS: "0xaDBE4FA3c2fcf36412D618AfCfC519C869400CEB",
    CIRCULATING_SUPPLY_ADDRESS: "0x5b0AA7903FD2EaA16F1462879B71c3cE2cFfE868",
    TREASURY_ADDRESS: "0x0d722D813601E48b7DAcb2DF9bae282cFd98c6E7",
    REDEEM_HELPER_ADDRESS: "0xBd35d8b2FDc2b720842DB372f5E419d39B24781f",
    PT_TOKEN_ADDRESS: "0x0a2d026bacc573a8b5a2b049f956bdf8e5256cfd", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xf9081132864ed5e4980CFae83bDB122d86619281", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0x2Df17EA8D6B68Ec444c9a698315AfB36425dac8b", // NEW
  },
  56: {
    DAI_ADDRESS: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", // duplicate
    PID_ADDRESS: "0x1215Ed20aa507578ca352E195016F289e7A17f3A",
    STAKING_ADDRESS: "0x22d1704817D42bdE262d778bFE097e287151371D", // The new staking contract
    STAKING_HELPER_ADDRESS: "0x44E208b814feb8DD212039cb064512d507A2B33d", // Helper contract used for Staking only
    // OLD_STAKING_ADDRESS: "0x0822F3C03dcc24d200AFF33493Dc08d0e1f274A2",
    SPID_ADDRESS: "0xF6E9FEdef7282C2Df6e805C22ce846eca84469e1",
    // OLD_SPID_ADDRESS: "0x31932E6e45012476ba3A3A4953cbA62AeE77Fbbe",
    // PRESALE_ADDRESS: "0xcBb60264fe0AC96B0EFa0145A9709A825afa17D8", // ？？？
    // APID_ADDRESS: "0x24ecfd535675f36ba1ab9c5d39b50dc097b0792e", // ？？？
    // MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d", // 
    DISTRIBUTOR_ADDRESS: "0x8eC998e97cf957234505004bF556644761163D68",
    BONDINGCALC_ADDRESS: "0xEfD242bcEe97F664ea2688Ea81E65a132f8Df205",
    // CIRCULATING_SUPPLY_ADDRESS: "0x0efff9199aa1ac3c3e34e957567c1be8bf295034", //？？？
    TREASURY_ADDRESS: "0x458B737d87C40252EC11b160C76bb1C53F248b28",
    // CRUCIBLE_PID_LUSD: "0x2230ad29920D61A535759678191094b74271f373",
    // LQTY: "0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d",
    // MIST: "0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab",
    REDEEM_HELPER_ADDRESS: "0xcA7a558D767Ae5A8602E5A725beA582aAbA89d67",
    IDO_ADDRESS:'0x3Ae07374d7C89f608906321444e8AFdED91aDA5E',
    // IDO_ADDRESS:'0x1895A4F987183213fda562FDdfE8c4beB009686c',//
    // BUSD_ADDRESS:'0xdd37966A9049d2ECd64c004244112D6cC7f07C59',
    BUSD_ADDRESS:'0xe9e7cea3dedca5984780bafc599bd69add087d56'
    // FUSE_6_SOHM: "0x59bd6774c22486d9f4fab2d448dce4f892a9ae25", // Tetranode's Locker
    // FUSE_18_SOHM: "0x6eDa4b59BaC787933A4A21b65672539ceF6ec97b", // Olympus Pool Party
    // PT_TOKEN_ADDRESS: "0x0E930b8610229D74Da0A174626138Deb732cE6e9", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    // PT_PRIZE_POOL_ADDRESS: "0xEaB695A8F5a44f583003A8bC97d677880D528248", // NEW
    // PT_PRIZE_STRATEGY_ADDRESS: "0xf3d253257167c935f8C62A02AEaeBB24c9c5012a", // NEW
  },
};
