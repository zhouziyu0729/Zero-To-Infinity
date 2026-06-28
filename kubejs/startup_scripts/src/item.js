StartupEvents.registry('item', event => { 
    event.create('zti:shard_stone').displayName('石头碎片')
    event.create('zti:particle_stone').displayName('石头粒')
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