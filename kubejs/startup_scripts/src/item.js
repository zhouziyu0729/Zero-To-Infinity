StartupEvents.registry('item', event => { 

    function newStar( name , displayname , color1 , color2 ) {
        if (color2 !== undefined && color2 !== null) {
            event.create('zti:star_' + name)
            .displayName( displayname + '之星')
            .rarity('epic')
            .tag('forge:stars')
            .texture({
                layer0: 'zti:item/base/star1',
                layer1: 'zti:item/base/star2'
            })
            .color(0, color1)
            .color(1, color2);
        } else {
            event.create('zti:star_' + name)
            .displayName( displayname + '之星')
            .rarity('epic')
            .tag('forge:stars')
            .texture('zti:item/base/star')
            .color(0, color1);
        }
    }

    function newRod( name , displayname , color1 , color2 ) {
        if (color2 !== undefined && color2 !== null) {
            event.create('zti:rod_' + name)
            .displayName( displayname + '杆')
            .tag('forge:rods')
            .texture({
                layer0: 'zti:item/base/rod1',
                layer1: 'zti:item/base/rod2'
            })
            .color(0, color1)
            .color(1, color2);
        } else {
            event.create('zti:rod_' + name)
            .displayName( displayname + '杆')
            .tag('forge:rods')
            .texture('zti:item/base/rod')
            .color(0, color1);
        }
    }

    function newMetal( name , displayname , color1 , color2 ) { 
        newStar( name , displayname , color1 , color2 );
        newRod( name , displayname , color1 , color2 );
    }

    function newGem( name , displayname , color1 , color2 ) { 
        newStar( name , displayname , color1 , color2 );
        newRod( name , displayname , color1 , color2 );
    }

    event.create('zti:shard_stone').displayName('石头碎片')
    event.create('zti:particle_stone').displayName('石头粒')
    event.create('zti:dust_stone').displayName('石头粉').tag('forge:dusts')
    event.create('zti:hopper_stone').displayName('石漏斗')
    event.create('zti:firestone').displayName('火石').burnTime(2000)
    event.create('zti:piston_top_stone').displayName('石活塞头')
    event.create('zti:piston_stone').displayName('石活塞')
    event.create('zti:piston_top_reinforced_stone').displayName('加固石活塞头')
    event.create('zti:piston_reinforced_stone').displayName('加固石活塞')
    event.create('zti:canister_stone').displayName('石头套')
    event.create('zti:compressing_tool').displayName('压缩工具')
    event.create('zti:extractor_t1').displayName('提取器')
    event.create('zti:extractor_t2').displayName('进阶提取器').rarity('rare')
    event.create('zti:catalyst_stone').displayName('§6石头催化剂')
    event.create('zti:catalyst_blood').displayName('§c血之催化剂')



    newMetal('stone', '石头', 0x7f7f7f)
    newMetal('gold', '金', 0xfdf55f)
    newMetal('iron', '铁', 0xd8d8d8)
    newMetal('copper', '铜', 0xe77c56 , 0x271c1d)
    newMetal('netheritem', '下界合金', 0x5a575a , 0x271c1d)

    newGem('diamod', '钻石', 0x4aedd9)
    newGem('emerald', '绿宝石', 0x41f384)
    newGem('lapis', '青金石', 0x12408b)
    newGem('redstone', '红石', 0xff0000)
    newGem('quartz', '石英', 0xffffff)



    event.create('zti:meatball_stone_raw').displayName('生石头肉丸')
    .food(food => {
        food
        .hunger(3)
        .saturation(0)
        .fastToEat()
    })
    event.create('zti:meatball_stone_cooked').displayName('熟石头肉丸').rarity('rare')
    .food(food => {
        food
        .hunger(8)
        .saturation(2)
    })
    event.create('zti:meatball_star_stone').displayName('星石肉丸').rarity('epic')
    .food(food => {
        food
        .hunger(8)
        .saturation(2)
        .alwaysEdible()
        .effect('minecraft:regeneration', 1200, 7, 1)
        .effect('minecraft:saturation',1200,1,1)
    })
})