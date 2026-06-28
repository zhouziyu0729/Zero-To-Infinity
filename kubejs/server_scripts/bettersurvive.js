/*ServerEvents.recipes(event =>{

    event.remove({output:'crafting_table'});
    event.remove({output:'#minecraft:planks'});
    event.replaceInput({input:'#minecraft:planks'},'#minecraft:planks','oak_planks');


    event.shaped('crafting_table',[
        ['#minecraft:axes','minecraft:stick',''],
        ['#minecraft:logs','#minecraft:logs',],
        ['','','']
    ])


    event.shapeless('2x minecraft:oak_planks',[ 
        '#minecraft:logs'
    ])

});*/