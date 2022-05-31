window.BENCHMARK_DATA = {
  "lastUpdate": 1654036566990,
  "repoUrl": "https://github.com/Zachinquarantine/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5430bf33c00106fafcd35f730ac2d32211834f07",
          "message": "client: create custom chain `common` from geth genesis file (#1414)\n\n* common: new constructor from geth genesis file\r\n\r\n* Add deps\r\n\r\n* add tests\r\n\r\n* Remove block/trie dependencies\r\n\r\n* make hash/stateroot required on common again\r\n\r\n* Rework customGenesis constructor/helper script\r\n\r\n* lint fixes\r\n\r\n* Move customGenesis functionality to client\r\n\r\n* Handle poa in gethGenesis\r\n\r\n* Fix parse tests\r\n\r\n* Update comments in parse\r\n\r\n* revert blockchain edits\r\n\r\n* lint\r\n\r\n* Add genesisState test\r\n\r\n* Add nonce formatting test",
          "timestamp": "2021-08-23T10:25:29+02:00",
          "tree_id": "53dfab35218e51c212a3c0905300456c9e0d37f0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5430bf33c00106fafcd35f730ac2d32211834f07"
        },
        "date": 1629707434180,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14532,
            "range": "±12.65%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14933,
            "range": "±15.75%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14943,
            "range": "±2.99%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14100,
            "range": "±3.72%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 7125,
            "range": "±27.05%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1039,
            "range": "±16.38%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 249,
            "range": "±8.93%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 112,
            "range": "±13.80%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.49,
            "range": "±120.14%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b298cafeba24a46ebd0cd55f1a24256de5c71155",
          "message": "Client: add basic TxPool (#1176)",
          "timestamp": "2021-08-23T18:49:30-07:00",
          "tree_id": "b4c169f13bee51db4d9e8fd55babe858673dda41",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b298cafeba24a46ebd0cd55f1a24256de5c71155"
        },
        "date": 1629770062174,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15531,
            "range": "±12.41%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19349,
            "range": "±2.32%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17617,
            "range": "±2.15%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14802,
            "range": "±7.10%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6186,
            "range": "±22.76%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1158,
            "range": "±6.29%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 100,
            "range": "±118.08%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 106,
            "range": "±29.28%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.91,
            "range": "±125.37%",
            "unit": "ops/sec",
            "extra": "21 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "700c9a3f84b53103e420702d671a54e0e350c86e",
          "message": "Monorepo: separate build commands for node and browser (#1419)\n\n* monorepo: separate build commands for node and browser\r\n\r\n* monorepo: separate build commands using build script",
          "timestamp": "2021-08-24T11:04:28+02:00",
          "tree_id": "d942380f3b97898b520a2bfb8fc5894db85062c4",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/700c9a3f84b53103e420702d671a54e0e350c86e"
        },
        "date": 1629796253086,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12991,
            "range": "±7.20%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 11055,
            "range": "±16.45%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12374,
            "range": "±3.71%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11761,
            "range": "±4.11%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12915,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 711,
            "range": "±15.09%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 133,
            "range": "±35.89%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 107,
            "range": "±8.90%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 6.56,
            "range": "±128.98%",
            "unit": "ops/sec",
            "extra": "16 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae9989c6efd5d7916938351ae0f065b9fc9adb42",
          "message": "Devp2p: RLPx send message code and debug improvements (#1425)\n\n* devp2p: improved RLPx message sending and protocol selection code and debug message",
          "timestamp": "2021-08-25T08:44:58-04:00",
          "tree_id": "475b44509a2146d8ee27c0e93763ed5ff7eaba08",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ae9989c6efd5d7916938351ae0f065b9fc9adb42"
        },
        "date": 1629895839056,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16031,
            "range": "±14.82%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 19541,
            "range": "±2.77%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 17191,
            "range": "±2.45%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 15416,
            "range": "±4.70%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5956,
            "range": "±19.67%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1156,
            "range": "±6.83%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 129,
            "range": "±90.50%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 113,
            "range": "±19.94%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.32,
            "range": "±132.16%",
            "unit": "ops/sec",
            "extra": "24 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "github@fang.io",
            "name": "fang",
            "username": "Fang-"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6808f721e4af3aa5353fec2170b8fd876fa9d5f7",
          "message": "util: fix module documentation links in readme (#1432)\n\nutil: docs: The included underscores made them points to 404s.",
          "timestamp": "2021-08-26T21:27:45-04:00",
          "tree_id": "2c478bc499d5b76cdd415350eaa7c252f843b4ed",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6808f721e4af3aa5353fec2170b8fd876fa9d5f7"
        },
        "date": 1630028246038,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 19338,
            "range": "±15.07%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 22528,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 20307,
            "range": "±2.88%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8111,
            "range": "±24.27%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 20204,
            "range": "±7.37%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1275,
            "range": "±6.45%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 113,
            "range": "±122.96%",
            "unit": "ops/sec",
            "extra": "29 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 98.92,
            "range": "±52.15%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.19,
            "range": "±122.18%",
            "unit": "ops/sec",
            "extra": "16 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a2ed1a10761e753d8a38fba4859aa8f8d0294df4",
          "message": "client: Fix connection issues with geth when using custom genesis file (#1423)\n\n* devp2p: improved RLPx message sending and protocol selection code and debug message\r\n\r\n* devp2p: lint fixes\r\n\r\n* Add forkhash calculation to parse utilities\r\n\r\n* update customGenesis path handling/formatNonce\r\n\r\n* clarify customGenesis param description\r\n\r\n* Fix function name change in tests\r\n\r\n* Move fork hash calculation to common constructor\r\n\r\n* throw when spurious dragon block numbers don't match\r\n\r\n* Update tests\r\n\r\n* Add example usage for custom geth params\r\n\r\n* reorganize cli params and function names\r\n\r\n* readme updates, cli tweaks, and test fixes\r\n\r\n* requested edits\r\n\r\n* nit fix :-)\r\n\r\n* clarify geth setup instructions\r\n\r\n* Move examples to separate doc\r\n\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-08-27T10:51:40+02:00",
          "tree_id": "3e68ae952d23e3cc0d808b75089734ada1e44187",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a2ed1a10761e753d8a38fba4859aa8f8d0294df4"
        },
        "date": 1630054619523,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18135,
            "range": "±13.16%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 21179,
            "range": "±2.40%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19098,
            "range": "±2.62%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10943,
            "range": "±18.25%",
            "unit": "ops/sec",
            "extra": "46 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12715,
            "range": "±25.15%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1254,
            "range": "±6.44%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 117,
            "range": "±119.18%",
            "unit": "ops/sec",
            "extra": "29 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 118,
            "range": "±28.14%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.82,
            "range": "±143.24%",
            "unit": "ops/sec",
            "extra": "16 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a694b829f6d72b70c8f8873990266b640971633",
          "message": "tx: add docs for signing with an external or hardware wallet using `getMessageToSign` (#1431)\n\n* add tx docs for getMessageToSign\r\n\r\n* Tx: raw()/serialize() methods code doc improvements\r\n\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-08-27T12:39:40+02:00",
          "tree_id": "f6de3e7bb40299ba438072c5e69be1864b02fecc",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7a694b829f6d72b70c8f8873990266b640971633"
        },
        "date": 1630061110973,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14319,
            "range": "±13.06%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16951,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15724,
            "range": "±2.44%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14363,
            "range": "±3.24%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5528,
            "range": "±26.71%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1212,
            "range": "±6.28%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 136,
            "range": "±94.22%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 132,
            "range": "±7.37%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.54,
            "range": "±125.81%",
            "unit": "ops/sec",
            "extra": "24 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8c5c15dfcfe545d3ca9938f9f3ec127c7877618",
          "message": "Client: sendRawTransaction RPC method TxPool inclusion / generalization of HF choice for tx creation / tx pool improvements and cleanup functionality (#1428)\n\n* client -> RPC: generalize HF selection for tx creation in sendRawTransaction RPC call\r\n\r\n* client -> RPC: expand RPC test baseSetup() return values to be more flexible along test setup modification\r\n\r\n* client -> RPC: added additional sendRawTransaction RPC method sync target height test\r\n\r\n* client -> txPool, RPC: added new addTransaction() and sendTransactions() tx pool methods\r\n\r\n* client -> tx pool: only send txs to peers if the list of txs is not empty\r\n\r\n* client -> tx pool: switched to map for handled data structure to prepare for more efficient hash pool access and allow for cleanup\r\n\r\n* client -> tx pool: added two new internal types UnprefixedAddress and UnprefixedHash for more explicit hash and address string typing\r\n\r\n* client -> tx pool: improved API terminology\r\n\r\n* client -> tx pool: extract removeByHash() functionality, rewrite retrieval code\r\n\r\n* client -> tx pool: added tx pool cleanup functionality and tests",
          "timestamp": "2021-08-27T19:35:13+02:00",
          "tree_id": "a936d14fc00fe5ae017316d5a728ee882818b1c8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e8c5c15dfcfe545d3ca9938f9f3ec127c7877618"
        },
        "date": 1630086004981,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 20092,
            "range": "±13.31%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 22657,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 20791,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 9169,
            "range": "±21.58%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 19844,
            "range": "±5.60%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1297,
            "range": "±5.85%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 276,
            "range": "±11.62%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 118,
            "range": "±37.08%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.18,
            "range": "±135.28%",
            "unit": "ops/sec",
            "extra": "17 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d2578d22d7acb60cf48866ddfdbe74e3384dd06",
          "message": "tests: update to 9.0.5 (#1422)",
          "timestamp": "2021-08-27T14:14:47-07:00",
          "tree_id": "76abd28c5d0f89c1da6ce3d632dd8ffc9bc434e7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5d2578d22d7acb60cf48866ddfdbe74e3384dd06"
        },
        "date": 1630099235909,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15173,
            "range": "±13.96%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17841,
            "range": "±2.07%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16601,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 15462,
            "range": "±2.41%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6590,
            "range": "±24.18%",
            "unit": "ops/sec",
            "extra": "19 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1099,
            "range": "±7.62%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 129,
            "range": "±88.52%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 103,
            "range": "±22.18%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.81,
            "range": "±107.45%",
            "unit": "ops/sec",
            "extra": "32 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc0388c732dcb14e7003724a49c5dc4b914593a8",
          "message": "client: Consolidate/move client usage examples (#1434)",
          "timestamp": "2021-08-27T14:15:52-07:00",
          "tree_id": "03a61b44af6fa78a6e841c538ba1e4302340a7b2",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fc0388c732dcb14e7003724a49c5dc4b914593a8"
        },
        "date": 1630100159410,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 19239,
            "range": "±14.10%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 22411,
            "range": "±2.53%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 20288,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8200,
            "range": "±22.50%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 19806,
            "range": "±4.87%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1279,
            "range": "±6.29%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 111,
            "range": "±124.03%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 128,
            "range": "±14.43%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.85,
            "range": "±136.30%",
            "unit": "ops/sec",
            "extra": "18 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "866f865e792a613e9d417f67eecec36f06dc47a0",
          "message": "client: parse gasLimit as number for type safety (#1437)",
          "timestamp": "2021-08-28T06:34:54-04:00",
          "tree_id": "8a4857069ff6c247a050ac7d3c5b001b161f54f1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/866f865e792a613e9d417f67eecec36f06dc47a0"
        },
        "date": 1630147249631,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14149,
            "range": "±20.06%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16868,
            "range": "±2.42%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15296,
            "range": "±2.23%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14184,
            "range": "±3.36%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6711,
            "range": "±18.59%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 878,
            "range": "±23.04%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 137,
            "range": "±78.10%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 111,
            "range": "±9.96%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.06,
            "range": "±114.63%",
            "unit": "ops/sec",
            "extra": "30 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "327d2d44878deb39ef5bd1879c27fb5b94a4e232",
          "message": "devp2p: add snappy compression to ping/pong (#1442)\n\n* devp2p:  add snappy compression to ping/pong\r\n\r\n* lint",
          "timestamp": "2021-08-31T08:43:30+02:00",
          "tree_id": "14fd0efd3c0ca751b0d895921ad7143ad1820690",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/327d2d44878deb39ef5bd1879c27fb5b94a4e232"
        },
        "date": 1630392908667,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14107,
            "range": "±12.23%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13993,
            "range": "±11.42%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14595,
            "range": "±3.21%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13364,
            "range": "±3.84%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 8828,
            "range": "±18.65%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 879,
            "range": "±21.25%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 138,
            "range": "±81.29%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 87.06,
            "range": "±53.47%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.26,
            "range": "±122.50%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zachinquarantine@yahoo.com",
            "name": "Zachinquarantine",
            "username": "Zachinquarantine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d80656edc28b94750ae72a117e5dd308e42b3d6",
          "message": "Common: Remove calaveras ephemerial testnet (#1430)\n\n* Remove calaveras json config\r\n\r\n* Remove calaveras testnet\r\n\r\n* Remove Calaveras testnet\r\n\r\n* Remove Calaveras testnet\r\n\r\n* Remove mention of Calaveras testnet\r\n\r\n* Remove mention of Calaveras testnet\r\n\r\n* Remove Calaveras testnet\r\n\r\n* Remove Calaveras\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-09-01T09:30:12+02:00",
          "tree_id": "b8aaced5f950bd0d37e559a9ff607e6e318f355c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6d80656edc28b94750ae72a117e5dd308e42b3d6"
        },
        "date": 1630481754979,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15079,
            "range": "±13.57%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16965,
            "range": "±6.40%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15857,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 15293,
            "range": "±2.61%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5356,
            "range": "±20.97%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1068,
            "range": "±7.54%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 132,
            "range": "±85.77%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 101,
            "range": "±33.58%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.91,
            "range": "±123.27%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "508de0d93df24bb85719f59f55c00b88351def3b",
          "message": "bug: fix comparison operator bug (#1451)",
          "timestamp": "2021-09-03T08:37:14-07:00",
          "tree_id": "00276051858bb21e796a482f0a0775c8980a1117",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/508de0d93df24bb85719f59f55c00b88351def3b"
        },
        "date": 1630683684222,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 21942,
            "range": "±10.70%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 23039,
            "range": "±2.55%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 20009,
            "range": "±2.56%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8039,
            "range": "±19.26%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 20676,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1377,
            "range": "±5.19%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 98.67,
            "range": "±114.93%",
            "unit": "ops/sec",
            "extra": "22 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 159,
            "range": "±6.65%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.54,
            "range": "±145.66%",
            "unit": "ops/sec",
            "extra": "14 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c9d34b4c79e09b6c9b7a42f9c3d9c9e2fb42952",
          "message": "client: fix reqId overflow issue in ETH handler (#1456)",
          "timestamp": "2021-09-03T22:33:35-04:00",
          "tree_id": "fa58f1694d38402727f5d21e5ace8ee3a4506d14",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4c9d34b4c79e09b6c9b7a42f9c3d9c9e2fb42952"
        },
        "date": 1630723108352,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15726,
            "range": "±15.50%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17846,
            "range": "±2.72%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16425,
            "range": "±2.33%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14821,
            "range": "±7.04%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 4815,
            "range": "±21.31%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1082,
            "range": "±7.91%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 108,
            "range": "±104.54%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 93.71,
            "range": "±40.66%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.12,
            "range": "±118.97%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e6dfb8f4c813c8be4be23b3f5a627e3aa545835",
          "message": "Devp2p: Per-Message debugging for ETH and other protocols / Improved docs (#1449)\n\n* devp2p -> debugger: added ETH protocol per-message debugging, improved debug logging documentation\r\n\r\n* devp2p -> debugger: added LES protocol per-message debugging\r\n\r\n* devp2p -> debugger: added RLPx protocol per-message debugging\r\n\r\n* devp2p -> debugger: added DPT server per-message debugging\r\n\r\n* devp2p -> debugger: added special RLPx peer DISCONNECT reason logger\r\n\r\n* devp2p -> debugger: added IP-based per-peer debugger and special FIRST_PEER first-connected-peer debugger",
          "timestamp": "2021-09-06T10:41:59+02:00",
          "tree_id": "784e7beebcc27abb71ddd85517a0c5449ee21eee",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6e6dfb8f4c813c8be4be23b3f5a627e3aa545835"
        },
        "date": 1630918042262,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13627,
            "range": "±7.81%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 11323,
            "range": "±16.48%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13651,
            "range": "±3.30%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12697,
            "range": "±3.64%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 11857,
            "range": "±12.17%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 627,
            "range": "±22.19%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 232,
            "range": "±7.94%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 48.2,
            "range": "±120.93%",
            "unit": "ops/sec",
            "extra": "27 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 19.17,
            "range": "±41.93%",
            "unit": "ops/sec",
            "extra": "45 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67348d6e3f51eba1054b5ce8266c5aa26f954fd0",
          "message": "add develop branch to GH actions (#1453)\n\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-06T11:06:33+02:00",
          "tree_id": "98de8379945ae4650d6de7221796e5ce1683e477",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/67348d6e3f51eba1054b5ce8266c5aa26f954fd0"
        },
        "date": 1630919516791,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13220,
            "range": "±12.78%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14060,
            "range": "±11.37%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14050,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13592,
            "range": "±3.82%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6927,
            "range": "±23.14%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 893,
            "range": "±36.14%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 138,
            "range": "±80.31%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 100,
            "range": "±31.30%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 23.4,
            "range": "±11.39%",
            "unit": "ops/sec",
            "extra": "29 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b91ccde820dae0b4eb969eb53d88227c9582931",
          "message": "client: add `NEW_BLOCK` devp2p message handler (#1443)\n\n* client: add NEW_BLOCK handler to ETH protocol\r\n\r\n* lint\r\n\r\n* move block construction to handleEth\r\n\r\n* Add encode method to NewBlock handler\r\n\r\n* Add test to invoke handleNewBlock\r\n\r\n* add integration test for new block\r\n\r\n* lint fixes\r\n\r\n* Fix import\r\n\r\n* Revise common instantiation in block constructor\r\n\r\n* Fix protocol encode/decode and add test\r\n\r\n* lint fixes\r\n\r\n* Fix broken test\r\n\r\n* lint fix\r\n\r\n* Many fixes\r\n\r\n* fix broken test\r\n\r\n* fix broken test\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-06T11:31:44+02:00",
          "tree_id": "ef48072ba50468a1618dd1ac3060b4c14a5bc57c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5b91ccde820dae0b4eb969eb53d88227c9582931"
        },
        "date": 1630920965055,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18889,
            "range": "±14.39%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 22130,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19885,
            "range": "±2.40%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8614,
            "range": "±22.98%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 17752,
            "range": "±6.66%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1262,
            "range": "±6.57%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 113,
            "range": "±119.70%",
            "unit": "ops/sec",
            "extra": "29 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 124,
            "range": "±11.94%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.39,
            "range": "±140.01%",
            "unit": "ops/sec",
            "extra": "17 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3984a3b80bccbfb376918c51556a845afbecad9",
          "message": "monorepo: upgrade TypeScript to v4, explicit `error: any` type for catch clauses (#1452)\n\n* run test on PR to debug\r\n\r\n* upgrade typescript version\r\n\r\n* add `any` type to error catch clauses to satisfy noImplicitAny\r\n\r\n* remove debugging line\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-07T10:02:39+02:00",
          "tree_id": "46e7349936bfc096d73d386f8a206e1c475df364",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a3984a3b80bccbfb376918c51556a845afbecad9"
        },
        "date": 1631002062478,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16824,
            "range": "±11.88%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17475,
            "range": "±2.84%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 9482,
            "range": "±21.65%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14950,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15684,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1241,
            "range": "±7.03%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 121,
            "range": "±115.66%",
            "unit": "ops/sec",
            "extra": "29 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 147,
            "range": "±6.61%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 22.25,
            "range": "±82.44%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e8dff0e3d7dcd45de6b79676d5b5a58458fed3f",
          "message": "Client: New Pooled Tx Hashes Service Functionality (Re-broadcasting/Tracking) for TxPool (#1441)\n\n* client -> tx pool: added initial setup and functionality to send/broadcast new (pooled) tx hashes\r\n\r\n* client -> tx pool: add new pooled tx hashes received as well as rebroadcasted to list of tx hashes known by peer\r\n\r\n* client -> tx pool: some bugfixes, refactoring and API refinements along the new tx hashes broadcasting logic, added tests\r\n\r\n* client -> tx pool: added new getByHash() function, added PooledTransactions response service functionality\r\n\r\n* client: improved message encoding/decoding and typing for transaction related service functionality (PooledTransactions, Transactions, GetPooledTransactions)\r\n\r\n* client -> tx pool: added mock for getPooledTransactions ETH message integration test (TODO)\r\n\r\n* client -> FullEthereumService: fixed GetPooledTransactions message handling bug, added integration test\r\n\r\n* client -> FullEthereumService: added simple Transactions message integration test\r\n\r\n* client -> tx pool: added Transactions ETH method retrieval and rebroadcast functionality\r\n\r\n* Fix test\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-09-07T20:46:41+02:00",
          "tree_id": "26a84f99c2149f51e07a1e1a1d450b66f2425e2b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2e8dff0e3d7dcd45de6b79676d5b5a58458fed3f"
        },
        "date": 1631040666149,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18014,
            "range": "±15.16%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20073,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11027,
            "range": "±21.96%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 17269,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18493,
            "range": "±2.89%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1240,
            "range": "±6.05%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 78.94,
            "range": "±125.07%",
            "unit": "ops/sec",
            "extra": "20 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 144,
            "range": "±7.21%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.23,
            "range": "±127.19%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46797fec716a9749d3e96b619a1bcb33a00400e9",
          "message": "Block, Tx: Caching for hash method (#1445)\n\n* block: caching for hash method\r\n\r\n* tx: caching for hash method\r\n\r\n* block, tx: updates to caching for hash method\r\n\r\n* block, tx: updates to caching for hash method\r\n\r\n* block: refactor caching mechanism in block header\r\n\r\n* block: lint fixes\r\n\r\n* block: hash caching refactor\r\n\r\n* tx: hash caching refactor\r\n\r\n* tx: test for hash throwing on unsigned tx\r\n\r\n* tx: updated tests for hash caching\r\n\r\n* tx: revert throwing when hash() is called on unsigned legacy txs due to eventual compatibility issues, added longer explanatory comment\r\n\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-08T11:37:52+02:00",
          "tree_id": "254503a09f65b675e5879e624e62fff2845548b6",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/46797fec716a9749d3e96b619a1bcb33a00400e9"
        },
        "date": 1631094149796,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16897,
            "range": "±10.71%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17763,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 9959,
            "range": "±19.14%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13881,
            "range": "±2.51%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15085,
            "range": "±3.62%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1289,
            "range": "±6.39%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 101,
            "range": "±111.14%",
            "unit": "ops/sec",
            "extra": "23 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 143,
            "range": "±7.41%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.54,
            "range": "±134.01%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4159a427c69088bc9e0494b32b997c9e4abc7e7",
          "message": "client: change event params to named tuples (#1457)\n\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-08T12:17:01+02:00",
          "tree_id": "df2dfb7da7c462e2e7574da790e4f1b4075a143c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d4159a427c69088bc9e0494b32b997c9e4abc7e7"
        },
        "date": 1631096531092,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14836,
            "range": "±11.03%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16737,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10140,
            "range": "±13.59%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10560,
            "range": "±23.00%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14381,
            "range": "±2.90%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1131,
            "range": "±7.15%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 110,
            "range": "±107.50%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 109,
            "range": "±26.30%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 24.53,
            "range": "±11.73%",
            "unit": "ops/sec",
            "extra": "25 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b373df57a5965c52ce1c786b81b83accf349e04a",
          "message": "VM: Add test to ensure that IDENTITY precompile copies the memory (chain split from 2021-08) (#1436)\n\n* vm: tests: add evm exploit test\r\n\r\n* vm: update geth chain split test comment\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-09T11:04:19+02:00",
          "tree_id": "4ef7ec7347970fd5b751e751abfd25fe9eee0773",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b373df57a5965c52ce1c786b81b83accf349e04a"
        },
        "date": 1631178575066,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14128,
            "range": "±13.14%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15136,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11276,
            "range": "±15.56%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7953,
            "range": "±27.36%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14005,
            "range": "±3.38%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1060,
            "range": "±8.26%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 120,
            "range": "±96.84%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 99.88,
            "range": "±36.22%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.06,
            "range": "±118.76%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6af296ba24498c6ee2ad3b36698249785ce5685f",
          "message": "add .vscode/settings.json with eslint config (#1465)",
          "timestamp": "2021-09-09T14:59:20-07:00",
          "tree_id": "5f39aba026602d864c8c4af6b3c7e588939f2dc2",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6af296ba24498c6ee2ad3b36698249785ce5685f"
        },
        "date": 1631225028674,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17156,
            "range": "±9.61%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17532,
            "range": "±2.82%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10079,
            "range": "±24.66%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14910,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15664,
            "range": "±2.71%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1276,
            "range": "±6.82%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 104,
            "range": "±108.86%",
            "unit": "ops/sec",
            "extra": "26 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 143,
            "range": "±6.62%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.18,
            "range": "±125.12%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee1a44eb135e881e6bfa035d53357a496a59c30c",
          "message": "ci: fix hardhat e2e (#1467)\n\n* test adding @types/bn.js to resolutions\r\n\r\n* add method to break statemanager interface which should cause hardhat e2e build failure\r\n\r\n* Revert \"add method to break statemanager interface which should cause hardhat e2e build failure\"\r\n\r\nThis reverts commit b5b2960aaf623935316d15ff52c557540c79153d.\r\n\r\n* improve workaround notes",
          "timestamp": "2021-09-10T10:05:43+02:00",
          "tree_id": "11520a5cb17e0d1b6440eede54f088754c5e8b90",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ee1a44eb135e881e6bfa035d53357a496a59c30c"
        },
        "date": 1631261460405,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13566,
            "range": "±11.21%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14774,
            "range": "±2.25%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11325,
            "range": "±12.39%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8820,
            "range": "±20.96%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14605,
            "range": "±3.24%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1151,
            "range": "±6.42%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 118,
            "range": "±106.83%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 131,
            "range": "±6.88%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.05,
            "range": "±125.46%",
            "unit": "ops/sec",
            "extra": "24 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69f5ec6c650a16e361168f196de5871a72c08c52",
          "message": "Util: More explicit EIP-1191 checksum usage discouraged note / Client: remove Rinkeby from CLI test matrix (#1463)\n\n* util: added more explicit note about providing a chainId to produce EIP-1191 compatible checksums with toChecksumAddress() being discouraged\r\n\r\n* client: removed Rinkeby from client CLI runs being to unreliable often leading to CI failures",
          "timestamp": "2021-09-10T11:26:53+02:00",
          "tree_id": "fc6d688e3f4d5e1c402a8bca7961d0174d0b2ccd",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/69f5ec6c650a16e361168f196de5871a72c08c52"
        },
        "date": 1631266355096,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10470,
            "range": "±14.10%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13218,
            "range": "±2.72%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11818,
            "range": "±3.69%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6595,
            "range": "±21.63%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12750,
            "range": "±4.14%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 995,
            "range": "±7.66%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 157,
            "range": "±52.88%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 88.02,
            "range": "±47.57%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 22.86,
            "range": "±10.05%",
            "unit": "ops/sec",
            "extra": "29 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35fdced8e72a1c6b9b45c7397b4aea03ecfa686c",
          "message": "docs: add Windows installation note (#1470)",
          "timestamp": "2021-09-13T12:15:03-07:00",
          "tree_id": "8e9b924ee35904da0b0414e4024f9248d0f52fa8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/35fdced8e72a1c6b9b45c7397b4aea03ecfa686c"
        },
        "date": 1631561106815,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10630,
            "range": "±15.36%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12913,
            "range": "±2.87%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12160,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 5976,
            "range": "±22.10%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13229,
            "range": "±4.16%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 950,
            "range": "±7.91%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 133,
            "range": "±73.55%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 93.49,
            "range": "±24.96%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 21.32,
            "range": "±9.08%",
            "unit": "ops/sec",
            "extra": "32 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d2f2b240ab8110ae0689beda5ddd1a86b1ae0a1",
          "message": "client -> FullSynchronizer: handle NEW_BLOCK message and rebroadcast to peers (#1458)\n\n* client: rebroadcast NEW_BLOCK message\r\n\r\n* add NewBlockHashes to knownblocks for each peer\r\n\r\n* lint\r\n\r\n* Requested changes\r\n\r\n* requested fixes\r\n\r\n* pass peer ID to new block handler\r\n\r\n* client: small review adjustments\r\n\r\n* client: fixed tests\r\n\r\n* Fix tests, move handleNewBlockHashes to fullsync\r\n\r\n* various fixes\r\n\r\n* fix error logging\r\n\r\n* lint\r\n\r\n* Fix no enqueueTask of undefined error on node startup\r\n\r\n* fix `NewBlockHashes` message bug\r\n\r\n* client: further align tx pool and new block handling code for easier portability/readability, new sendNewBlock method\r\n\r\n* client: simplify block hash tracking code for sending peer by using addToKnownByPeer() method\r\n\r\n* client: simplify NewBlock -> NewBlockHashes rebroadcasting logic by using addToKnowByPeer() function\r\n\r\n* client: update sync target height if block from NEW_BLOCK message is added to the chain to avoid sync inconsistencies\r\n\r\n* client -> FullSynchronizer: removed redundand (TypeScript) code doc type annotations\r\n\r\n* client -> FullSynchronizer: improved handleNewBlockHashes() bulk request logic readability\r\n\r\n* client -> FullSynchronizer: rather ignore NEW_BLOCK_HASHES method than side-starting a new fetcher in handleNewBlockHashes() when fetcher is not yet up and running\r\n\r\n* client -> FullSynchronizer: extract bulk task creation functionality as new enqueueByNumberList() function in BlockFetcherBase\r\n\r\n* client: improved FullSynchronizer NewBlock/NewBlockHashes test robustness and readability\r\n\r\n* client: added Fetcher.enqueueByNumberList() test cases to FullSynchronizer tests\r\n\r\n* client: added syncTargetHeight test case\r\n\r\n* client: added enqueueByNumberList() Fetcher tests\r\n\r\n* client -> FullSynchronizer: fixed addToKnownByPeer() not filtering existing hashes correctly, added missing putBlock() test case\r\n\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-14T15:22:13+02:00",
          "tree_id": "7cb14bdf3d922b538bd239db979ee21447b27efc",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5d2f2b240ab8110ae0689beda5ddd1a86b1ae0a1"
        },
        "date": 1631626060670,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14202,
            "range": "±10.46%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15345,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 9795,
            "range": "±23.91%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12770,
            "range": "±15.50%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15528,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1308,
            "range": "±5.98%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 85.55,
            "range": "±143.21%",
            "unit": "ops/sec",
            "extra": "22 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 133,
            "range": "±15.20%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.49,
            "range": "±117.21%",
            "unit": "ops/sec",
            "extra": "16 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b22424783fd538af0644d5e93d783871943be5e1",
          "message": "vm: skip `_runStepHook` method if no step event listener (#1676)\n\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-02-01T15:00:30+01:00",
          "tree_id": "01c402171904c05532d585a919f7217ae2badfae",
          "url": "https://github.com/Zachinquarantine/ethereumjs-monorepo/commit/b22424783fd538af0644d5e93d783871943be5e1"
        },
        "date": 1643727690853,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14343,
            "range": "±14.15%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12681,
            "range": "±16.59%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15955,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12072,
            "range": "±14.37%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5127,
            "range": "±12.87%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 876,
            "range": "±7.27%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 172,
            "range": "±12.15%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 18.89,
            "range": "±168.69%",
            "unit": "ops/sec",
            "extra": "16 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 16.14,
            "range": "±16.31%",
            "unit": "ops/sec",
            "extra": "32 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernestognw@gmail.com",
            "name": "Ernesto García",
            "username": "ernestognw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30ca12e6e38d107aa80e0b626078a345ff0f06f2",
          "message": "Util: Allow `v` to be `0` or `1` for EIP1559 transactions (#1905)\n\n* Util: Allow v to be `0` or `1` for EIP1559 transactions\r\n\r\n* vm: fix ecrecover precompile for v=0 and v=1\r\n\r\n* tx/legacyTransaction: add `v` guard for non-EIP155 txs\r\n\r\n* tx: switch to earlier v validation and throwing before v common/EIP-155 determination logic\r\n\r\n* tx: remove v==0 check which always defaults to the default common\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2022-05-31T19:54:41+02:00",
          "tree_id": "925f79a30206c16ad2a48f8ed17e6f5a001fc0c1",
          "url": "https://github.com/Zachinquarantine/ethereumjs-monorepo/commit/30ca12e6e38d107aa80e0b626078a345ff0f06f2"
        },
        "date": 1654036565967,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10268,
            "range": "±14.97%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 11863,
            "range": "±3.06%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 7344,
            "range": "±26.12%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 11696,
            "range": "±3.47%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13152,
            "range": "±3.97%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 691,
            "range": "±7.80%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 143,
            "range": "±13.18%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 34.22,
            "range": "±107.79%",
            "unit": "ops/sec",
            "extra": "34 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 14.11,
            "range": "±8.28%",
            "unit": "ops/sec",
            "extra": "31 samples"
          }
        ]
      }
    ]
  }
}