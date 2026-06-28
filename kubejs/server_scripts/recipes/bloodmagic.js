ServerEvents.recipes(event =>{

    event.custom({
        type: 'bloodmagic:altar',
        input: {
        item:'zti:3compresses_cobblestone'
        },
        output: {
            item: 'bloodmagic:weakbloodorb'
        },
        "upgradeLevel": 0,
        "altarSyphon": 2000,
        "consumptionRate": 5,
        "drainRate": 1
    });

})