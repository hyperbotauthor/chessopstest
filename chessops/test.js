import {makeFen, parseFen} from "../chessops/fen"

import {Atomic} from "../chessops/variant"

const fenBefore = "rnbqk2r/pp1p2pp/2p3Nn/5p2/1b2P1PP/8/PPP2P2/R1BQKB1R w KQkq - 0 9"

const fenAfter = "rn5r/pp4pp/2p3Nn/5p2/1b2P1PP/8/PPP2P2/R1B1KB1R b KQ - 0 9"

let setup = parseFen(fenBefore).value        

let pos = Atomic.fromSetup(setup).value

console.log("pos before Qxd7#", pos)

setup = parseFen(fenAfter).value        

pos = Atomic.fromSetup(setup).value

console.log("pos after Qxd7#", pos)
