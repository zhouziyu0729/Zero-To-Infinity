// 使用 BlockEvents.rightClicked 监听方块右键点击
BlockEvents.rightClicked(event => {
    // 获取玩家、方块和方块位置
    let player = event.player;
    let block = event.block;
    let pos = block.pos;
    let level = block.level;

    // 检查点击的方块是否是石头 (minecraft:stone) 且玩家是空手
    if (block.id === 'minecraft:stone'){

        if( (player.mainHandItem.isEmpty()|| player.mainHandItem.id === 'zti:shard_stone') && event.hand == 'MAIN_HAND'){
            
            player.give('zti:shard_stone');

            if (Math.random() < 0.05) {
            // 使用 BlockContainerJS 的 set 方法将方块设置为空气
            block.set('minecraft:air');

            // 播放草方块破坏音效 - 使用原生 Minecraft API
            let soundEvent = Java.loadClass('net.minecraft.sounds.SoundEvents').GRASS_BREAK;
            level.playSound(null, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, soundEvent, 'BLOCKS', 1.0, 1.0);
        
            // 播放破坏粒子效果 - 使用 ParticleTypes 获取粒子类型
            level.spawnParticles('minecraft:crack', true, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 0.5, 0.5, 0.5, 20, 15);
            }
        }
        if( player.mainHandItem.id === 'zti:extractor_t1' && event.hand == 'MAIN_HAND'){
            player.give('20x zti:shard_stone');
            block.set('minecraft:air');
            let soundEvent = Java.loadClass('net.minecraft.sounds.SoundEvents').GRASS_BREAK;
            level.playSound(null, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, soundEvent, 'BLOCKS', 1.0, 1.0);
            level.spawnParticles('minecraft:crack', true, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 0.5, 0.5, 0.5, 20, 15);
        }
        if( player.mainHandItem.id === 'zti:extractor_t2' && event.hand == 'MAIN_HAND'){
            player.give('64x zti:shard_stone');
            block.set('minecraft:air');
            let soundEvent = Java.loadClass('net.minecraft.sounds.SoundEvents').GRASS_BREAK;
            level.playSound(null, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, soundEvent, 'BLOCKS', 1.0, 1.0);
            level.spawnParticles('minecraft:crack', true, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 0.5, 0.5, 0.5, 20, 15);
        }
    }

    if (block.id === 'minecraft:cobblestone'){

        if( player.mainHandItem.id === 'zti:compressing_tool' && event.hand == 'MAIN_HAND'){
            let canCompress = true;
            let blocks = [];
            for (let x = pos.x - 1; x <= pos.x + 1; x++) {
                for (let y = pos.y - 2; y <= pos.y; y++) {
                    for (let z = pos.z - 1; z <= pos.z + 1; z++) {
                        let target = level.getBlock(x, y, z);
                        if (!target || target.id !== 'minecraft:cobblestone') {
                            canCompress = false;
                            break;
                        }
                        blocks.push(target);
                    }
                    if (!canCompress) break;
                }
                if (!canCompress) break;
            }

            if (canCompress) {
                for (let i = 0; i < blocks.length; i++) {
                    blocks[i].set('minecraft:air');
                }
                player.give('zti:1compressed_cobblestone');
                let soundEvent = Java.loadClass('net.minecraft.sounds.SoundEvents').ANVIL_LAND;
                level.playSound(null, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, soundEvent, 'BLOCKS', 1.0, 1.0);
                level.spawnParticles('minecraft:explosion', true, pos.x + 0.5, pos.y - 1.0, pos.z + 0.5, 0.5, 0.5, 0.5, 10, 0);
                event.cancel();
                return;
            }
        }

        if( (player.mainHandItem.isEmpty()|| player.mainHandItem.id === 'zti:particle_stone' ) && event.hand == 'MAIN_HAND'){
            
            player.give('zti:particle_stone');

            if (Math.random() < 0.05) {
                // 使用 BlockContainerJS 的 set 方法将方块设置为空气
                block.set('minecraft:air');

                // 播放草方块破坏音效 - 使用原生 Minecraft API
                let soundEvent = Java.loadClass('net.minecraft.sounds.SoundEvents').GRASS_BREAK;
                level.playSound(null, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, soundEvent, 'BLOCKS', 1.0, 1.0);
        
                // 播放破坏粒子效果 - 使用 ParticleTypes 获取粒子类型
                level.spawnParticles('minecraft:crack', true, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 0.5, 0.5, 0.5, 20, 15);
            }

        //取消事件，防止其他交互
        //event.cancel();
        }
        if( player.mainHandItem.id === 'zti:extractor_t1' && event.hand == 'MAIN_HAND'){
            player.give('20x zti:particle_stone');
            block.set('minecraft:air');
            let soundEvent = Java.loadClass('net.minecraft.sounds.SoundEvents').GRASS_BREAK;
            level.playSound(null, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, soundEvent, 'BLOCKS', 1.0, 1.0);
            level.spawnParticles('minecraft:crack', true, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 0.5, 0.5, 0.5, 20, 15);
        }
        if( player.mainHandItem.id === 'zti:extractor_t2' && event.hand == 'MAIN_HAND'){
            player.give('64x zti:particle_stone');
            block.set('minecraft:air');
            let soundEvent = Java.loadClass('net.minecraft.sounds.SoundEvents').GRASS_BREAK;
            level.playSound(null, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, soundEvent, 'BLOCKS', 1.0, 1.0);
            level.spawnParticles('minecraft:crack', true, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 0.5, 0.5, 0.5, 20, 15);
        }
    }

    if (block.id === 'minecraft:gravel'){

        if( (player.mainHandItem.isEmpty()|| player.mainHandItem.id === 'minecraft:flint' ) && event.hand == 'MAIN_HAND'){
            
            player.give('flint');

            if (Math.random() < 0.05) {
                // 使用 BlockContainerJS 的 set 方法将方块设置为空气
                block.set('minecraft:air');

                // 播放草方块破坏音效 - 使用原生 Minecraft API
                let soundEvent = Java.loadClass('net.minecraft.sounds.SoundEvents').GRASS_BREAK;
                level.playSound(null, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, soundEvent, 'BLOCKS', 1.0, 1.0);
        
                // 播放破坏粒子效果 - 使用 ParticleTypes 获取粒子类型
                level.spawnParticles('minecraft:crack', true, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 0.5, 0.5, 0.5, 20, 15);
            }

        //取消事件，防止其他交互
        //event.cancel();
        }
        if( player.mainHandItem.id === 'zti:extractor_t1' && event.hand == 'MAIN_HAND'){
            player.give('20x flint');
            block.set('minecraft:air');
            let soundEvent = Java.loadClass('net.minecraft.sounds.SoundEvents').GRASS_BREAK;
            level.playSound(null, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, soundEvent, 'BLOCKS', 1.0, 1.0);
            level.spawnParticles('minecraft:crack', true, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 0.5, 0.5, 0.5, 20, 15);
        }
        if( player.mainHandItem.id === 'zti:extractor_t2' && event.hand == 'MAIN_HAND'){
            player.give('64x flint');
            block.set('minecraft:air');
            let soundEvent = Java.loadClass('net.minecraft.sounds.SoundEvents').GRASS_BREAK;
            level.playSound(null, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, soundEvent, 'BLOCKS', 1.0, 1.0);
            level.spawnParticles('minecraft:crack', true, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 0.5, 0.5, 0.5, 20, 15);
        }
    }
    
    
});