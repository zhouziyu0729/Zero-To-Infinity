// 监听方块右键点击事件
BlockEvents.rightClicked(event => {
    let player = event.player;
    let block = event.block;
    let pos = block.pos;
    let level = block.level;

    // 只处理空手右键点击 zti:star_coagulator 且为主手
    if (block.id !== 'zti:star_coagulator') return;
    if (event.hand !== 'MAIN_HAND') return;
    if (!(player.mainHandItem.isEmpty()||player.mainHandItem.id === 'zti:star_stone')) return;

    // 定义 13x13 结构图案（行从 -6 到 +6，列从 -6 到 +6）
    // 字符含义：o=空气, a=1级压缩圆石, b=2级压缩圆石, s=圆石, c=星凝器（中心）
    let pattern = [
        "ooooooaoooooo",
        "oooooabaooooo",
        "ooooasbsaoooo",
        "ooooasbsaoooo",
        "ooaaasbsaaaoo",
        "oassssbssssao",
        "abbbbbcbbbbba",
        "oassssbssssao",
        "ooaaasbsaaaoo",
        "ooooasbsaoooo",
        "ooooasbsaoooo",
        "oooooabaooooo",
        "ooooooaoooooo"

    ];

    // 定义字符到方块ID的映射
    let charToBlock = {
        'o': 'minecraft:air',
        'a': 'zti:1compressed_cobblestone',
        'b': 'zti:2compressed_cobblestone',
        's': 'minecraft:cobblestone',
        'c': 'zti:star_coagulator'   // 中心不用额外检查，但保留
    };

    let match = true;

    // 遍历偏移量 dx（列）和 dz（行）
    for (let dz = -6; dz <= 6; dz++) {
        for (let dx = -6; dx <= 6; dx++) {
            // 图案中的行索引为 dz+6，列索引为 dx+6
            let blockx = pos.x + dx;
            let blockz = pos.z + dz;
            let row = pattern[dz + 6];
            let expectedChar = row[dx + 6];
            let expectedBlockId = charToBlock[expectedChar];

            // 获取该位置的方块
            let targetBlock = level.getBlock(pos.x + dx, pos.y, pos.z + dz);
            if (!targetBlock || targetBlock.id !== expectedBlockId) {
                match = false;
                
                player.tell('结构不匹配: x=' + blockx + ' z=' + blockz + ' 期望=' + expectedBlockId + ' 实际=' + (targetBlock ? targetBlock.id : 'null'));
                break;
            }
        }
        if (!match) break;
    }

    // 如果结构匹配
    if (match) {
        // 给予玩家星石
        player.give('zti:star_stone');

        for (let dz = -6; dz <= 6; dz++) {
            for (let dx = -6; dx <= 6; dx++) {
                if (dz!==0 || dx!==0) {
                    let targetBlock = level.getBlock(pos.x + dx, pos.y, pos.z + dz);
                    targetBlock.set('minecraft:air');
                }
            }
        }

        let soundEvent = Java.loadClass('net.minecraft.sounds.SoundEvents').ENCHANTMENT_TABLE_USE;
        level.playSound(null, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, soundEvent, 'BLOCKS', 1.0, 1.0);

        level.spawnParticles('minecraft:firework', true, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 2, 2, 2, 100, 0.5);
        level.spawnParticles('minecraft:flame', true, pos.x + 0.5, pos.y + 1.0, pos.z + 0.5, 0.5, 0.5, 0.5, 30, 0);

        event.cancel();
    }
});