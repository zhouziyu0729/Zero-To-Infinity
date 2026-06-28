ServerEvents.recipes(event =>{

    /*

    event.remove({output:});
    {output:}

    event.shaped(,[
        [,,],
        [,,],
        [,,]
    ]).id('')

    event.shapeless(,[  
        '',
        '',
        ''
    ]).id('')

    */


    event.shaped('crafting_table',[
        ['minecraft:flint','zti:rod_stone',],
        ['cobblestone','cobblestone',],
        [,,]
    ])

    event.shaped('cobblestone',[
        ['zti:shard_stone','zti:shard_stone',],
        ['zti:shard_stone','zti:shard_stone',],
        [,,]
    ]).id('zti:cobblestone')

    event.shaped('gravel',[
        ['zti:particle_stone','zti:particle_stone',],
        ['zti:particle_stone','zti:particle_stone',],
        [,,]
    ]).id('zti:gravel')

    event.shaped('zti:firestone',[
        ['cobblestone','cobblestone','cobblestone'],
        ['cobblestone','flint','cobblestone'],
        ['cobblestone','cobblestone','cobblestone']
    ]).id('zti:firestone')

    event.shaped('zti:rod_stone',[
        ['zti:shard_stone',,],
        ['zti:shard_stone',,],
        [,,]
    ])

    event.shaped('zti:piston_stone',[
        ['zti:piston_top_stone',,],
        ['zti:canister_stone',,],
        ['zti:rod_stone',,]
    ])

    event.shaped('zti:canister_stone',[
        ['cobblestone','','cobblestone'],
        ['cobblestone','','cobblestone'],
        ['cobblestone','','cobblestone']
     ])

    event.shaped('furnace',[
        ['cobblestone','zti:canister_stone','cobblestone'],
        ['cobblestone','zti:firestone','cobblestone'],
        ['cobblestone','zti:canister_stone','cobblestone']
    ])

    event.shaped('zti:compressing_tool',[
        ['zti:rod_stone','zti:rod_stone','zti:rod_stone'],
        ['zti:rod_stone','','zti:rod_stone'],
        ['zti:piston_stone','zti:piston_stone','zti:piston_stone']
    ])

    event.shaped('zti:piston_top_stone',[
        ['cobblestone','cobblestone','cobblestone'],
        ['cobblestone','zti:rod_stone','cobblestone'],
        ['','zti:rod_stone','']
    ])

    event.shaped('zti:extractor_t1',[
        'bab',
        'bab',
        'cac'
    ], {
        a: 'zti:1compressed_cobblestone',
        b: 'zti:piston_stone',
        c: ''
    })

    event.shaped('zti:extractor_t2',[
        'beb',
        'bcb',
        'dad'
    ], {
        a: 'zti:1compressed_cobblestone',
        b: 'zti:piston_stone',
        c: 'zti:extractor_t1',
        d: '',
        e: 'zti:star_stone'
    })

    event.shaped('zti:auto_extractor_t1',[
        'aca',
        'aea',
        'aca'
    ], {
        a: 'zti:1compressed_cobblestone',
        b: 'zti:piston_stone',
        c: 'zti:extractor_t1',
        d: '',
        e: 'zti:star_stone'
    })

    event.shaped('zti:auto_extractor_t2',[
        'aca',
        'aea',
        'aca'
    ], {
        a: 'zti:2compressed_cobblestone',
        b: 'zti:piston_stone',
        c: 'zti:extractor_t2',
        d: '',
        e: 'zti:auto_extractor_t1'
    })

    event.shaped('zti:compressor',[
        'aba',
        'bcb',
        'aba'
    ], {
        a: 'zti:1compressed_cobblestone',
        b: 'zti:piston_stone',
        c: ''
    })

    event.shaped('zti:meatball_stone_raw',[
        'aba',
        'bcb',
        'aba'
    ], {
        a: 'stone',
        b: 'cobblestone',
        c: 'zti:shard_stone'
    })

    event.shaped('16x zti:meatball_stone_raw',[
        'aba',
        'bcb',
        'aba'
    ], {
        a: 'stone',
        b: 'zti:1compressed_cobblestone',
        c: 'zti:shard_stone'
    })

    event.shaped('zti:etcher',[
        'dcd',
        'ccc',
        'bbb'
    ], {
        a: 'zti:particle_stone',
        b: 'zti:1compressed_cobblestone',
        c: 'zti:piston_reinforced_stone',
        d: 'zti:star_stone'
    })

    event.recipes.zti.compress()
        .duration(400)
        .inputItems('9x furnace')
        .outputItems('zti:1compressed_furnace')
    
    event.recipes.zti.compress()
        .duration(800)
        .inputItems('9x zti:1compressed_furnace')
        .outputItems('zti:2compressed_furnace')

    event.recipes.zti.compress()
        .duration(50)
        .inputItems('9x cobblestone')
        .outputItems('zti:1compressed_cobblestone')

    event.recipes.zti.compress()
        .duration(100)
        .inputItems('9x zti:1compressed_cobblestone')
        .outputItems('zti:2compressed_cobblestone')

    event.recipes.zti.compress()
        .duration(200)
        .inputItems('9x zti:2compressed_cobblestone')
        .outputItems('zti:3compressed_cobblestone')

    event.recipes.zti.compress()
        .duration(200)
        .inputItems('32x zti:meatball_stone_cooked', 'zti:star_stone')
        .outputItems('zti:meatball_star_stone')
    
    event.recipes.zti.compress()
        .duration(10)
        .inputItems('9x zti:shard_stone')
        .outputItems('3x cobblestone')
    
    event.recipes.zti.compress()
        .duration(10)
        .inputItems('9x zti:particle_stone')
        .outputItems('3x gravel')

    event.recipes.zti.compress()
        .duration(6000)
        .inputItems('64x zti:shard_stone','64x zti:particle_stone','64x flint','8x zti:star_stone')
        .outputItems('zti:catalyst_stone')

    event.recipes.zti.compress()
        .duration(6000)
        .inputItems('2x zti:star_stone',)
        .chance(0, builder => builder
            .inputItems('zti:catalyst_stone')
        )
        .outputItems('zti:catalyst_stone')

    event.recipes.zti.compress()
        .priority(100)
        .duration(10)
        .inputItems('2x zti:2compressed_cobblestone','zti:piston_top_stone')
        .outputItems('zti:piston_top_reinforced_stone')




    event.recipes.zti.auto_extractor()
        .duration(1)
        .inputItems('cobblestone')
        .outputItems('20x zti:particle_stone')

    event.recipes.zti.auto_extractor()
        .duration(1)
        .inputItems('gravel')
        .outputItems('20x flint')




    event.recipes.zti.compressed_furnace()
        .duration(400)
        .inputItems('zti:meatball_stone_raw')
        .outputItems('zti:meatball_stone_cooked')

    event.recipes.zti.compressed_furnace()
        .duration(9600)
        .inputItems('zti:2compressed_cobblestone')
        .outputItems('zti:star_coagulator')




    event.recipes.zti.etcher()
        .duration(600)
        .inputItems('zti:3compressed_cobblestone')
        .slotName('template', builder => builder
            .uiName('template', builder => builder
                .chance(0, builder => builder
                    .inputItems('zti:star_stone')
                )
            )
        )
        .outputItems('zti:star_stone')

    event.recipes.zti.etcher()
        .duration(20)
        .inputItems('zti:1compressed_cobblestone')
        .slotName('template', builder => builder
            .uiName('template', builder => builder
                .chance(0, builder => builder
                    .inputItems('zti:piston_stone')
                )
            )
        )
        .outputItems('zti:piston_stone')

    event.recipes.zti.etcher()
        .duration(5)
        .inputItems('zti:fire_stone')
        .slotName('template', builder => builder
            .uiName('template', builder => builder
                .chance(0, builder => builder
                    .inputItems('zti:star_stone')
                )
            )
        )
        .outputItems('zti:star_stone')
});