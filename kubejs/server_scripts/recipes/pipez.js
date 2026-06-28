ServerEvents.recipes(event =>{

    event.shaped('32x pipez:item_pipe',[
        'bab',
        'bcb',
        'bab'
    ], {
        a: 'zti:canister_stone',
        b: 'zti:1compressed_cobblestone',
        c: 'zti:star_stone'
    })

    event.shaped('pipez:wrench',[
        'bab',
        'cbc',
        'cbc'
    ], {
        a: 'pipez:item_pipe',
        b: 'zti:1compressed_cobblestone',
        c: ''
    })

    event.shaped('pipez:item_pipe',[
        'abb',
        'bbb',
        'bbb'
    ], {
        a: '#zti:pipez_pipe_basic',
        b: ''
    })

    event.shaped('2x pipez:fluid_pipe',[
        'abb',
        'abb',
        'bbb'
    ], {
        a: '#zti:pipez_pipe_basic',
        b: ''
    })

    event.shaped('2x pipez:energy_pipe',[
        'abb',
        'bab',
        'bbb'
    ], {
        a: '#zti:pipez_pipe_basic',
        b: ''
    })

    event.shaped('2x pipez:gas_pipe',[
        'aab',
        'bbb',
        'bbb'
    ], {
        a: '#zti:pipez_pipe_basic',
        b: ''
    })

    event.shaped('32x pipez:universal_pipe',[
        'bab',
        'bcb',
        'bab'
    ], {
        a: 'zti:canister_stone',
        b: '#zti:pipez_pipe_basic',
        c: 'zti:catalyst_stone'
    })
})