let level = require("level");

let db = level("./db/world/db", {

}, async function(err, db) {

    let levelDownDb = db.db.db;

    let sstables = levelDownDb.getProperty("leveldb.sstables")
    console.log(sstables)

    // ressult of getProperty:
    // ----------------------------------------------------------------------------------------------------------
    // --- level 0 ---
    // 18:12121['\x00\x00\x00\x00\x00\x00\x00\x00-' @ 3526 : 1 .. '\xff\xff\xff\xff\xff\xff\xff\xffv' @ 3037 : 1]
    // 21:2223 ['~local_player'                     @ 3574 : 1 .. '~local_player'                     @ 3574 : 1]
    // --- level 1 ---
    // 16:12622['\x00\x00\x00\x00\x00\x00\x00\x00-' @ 2823 : 1 .. '\xff\xff\xff\xff\xff\xff\xff\xffv' @ 1650 : 1]
    // ----------------------------------------------------------------------------------------------------------

    // let local_player = await db.get("~local_player")
    // console.log(local_player);

    // let chunk = await db.get("\x00\x00\x00\x00\x00\x00\x00\x00-");
    // console.log(chunk)
})