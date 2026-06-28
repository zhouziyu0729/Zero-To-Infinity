ServerEvents.recipes(event =>{

    event.custom({
        "type":"mekanism:infusion_conversion",
        "input":{ingredient:{item:'zti:catalyst_blood'}},
        "output":{amount:1000,"infuse_type":"zti:blood"}
    });
    
    event.custom({
        type: 'mekanism:metallurgic_infusing',
        chemicalInput: { infuse_type: 'zti:blood' , amount : 10 },
        itemInput: {ingredient: { item: 'iron_ingot'} , amount : 1 },
        output: { item: 'mekanism:alloy_infused', amount: 1 },
    });

})