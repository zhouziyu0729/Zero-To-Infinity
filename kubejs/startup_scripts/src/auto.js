StartupEvents.registry('item', event => { 

    function regNewDust( name , displayname , color1 , color2 ) {
        if (color2 !== undefined && color2 !== null) {
            event.create('zti:dust_' + name)
            .displayName( displayname + '粉')
            .tag('forge:dusts')
            .tag('forge:dusts/'+name)
            .texture('layer0', 'zti:item/base/dust1')
            .texture('layer1', 'zti:item/base/dust2')
            .color(0, color1)
            .color(1, color2);
        } else {
            event.create('zti:dust_' + name)
            .displayName( displayname + '粉')
            .tag('forge:dusts')
            .tag('forge:dusts/'+name)
            .texture('zti:item/base/dust')
            .color(0, color1);
        }
    }
    function regNewStar( name , displayname , color1 , color2 ) {
        if (color2 !== undefined && color2 !== null) {
            event.create('zti:star_' + name)
            .displayName( displayname + '之星')
            .rarity('epic')
            .tag('forge:stars')
            .tag('forge:stars/'+name)
            .texture('layer0', 'zti:item/base/star1')
            .texture('layer1', 'zti:item/base/star2')
            .color(0, color1)
            .color(1, color2);
        } else {
            event.create('zti:star_' + name)
            .displayName( displayname + '之星')
            .rarity('epic')
            .tag('forge:stars')
            .tag('forge:stars/'+name)
            .texture('zti:item/base/star')
            .color(0, color1);
        }
    }

    function regNewRod( name , displayname , color1 , color2 ) {
        if (color2 !== undefined && color2 !== null) {
            event.create('zti:rod_' + name)
            .displayName( displayname + '杆')
            .tag('forge:rods')
            .tag('forge:rods/'+name)
            .texture('layer0', 'zti:item/base/rod1')
            .texture('layer1', 'zti:item/base/rod2')
            .color(0, color1)
            .color(1, color2);
        } else {
            event.create('zti:rod_' + name)
            .displayName( displayname + '杆')
            .tag('forge:rods')
            .tag('forge:rods/'+name)
            .texture('zti:item/base/rod')
            .color(0, color1);
        }
    }

    function regNewIngot( name , displayname , color1 , color2 ) {
        if (color2 !== undefined && color2 !== null) {
            event.create('zti:ingot_' + name)
            .displayName( displayname + '锭')
            .tag('forge:ingots')
            .tag('forge:ingots/'+name)
            .texture('layer0', 'zti:item/base/ingot1')
            .texture('layer1', 'zti:item/base/ingot2')
            .color(0, color1)
            .color(1, color2);
        } else {
            event.create('zti:ingot_' + name)
            .displayName( displayname + '锭')
            .tag('forge:ingots')
            .tag('forge:ingots/'+name)
            .texture('zti:item/base/ingot')
            .color(0, color1);
        }
    }

    function regExistingMetal( name , displayname , color1 , color2 ) { 
        regNewStar( name , displayname , color1 , color2 );
        regNewRod( name , displayname , color1 , color2 );
    }
    function regNewMetal( name , displayname , color1 , color2 ) { 
        regNewIngot( name , displayname , color1 , color2 );
        regNewDust( name , displayname , color1 , color2 );
        regExistingMetal( name , displayname , color1 , color2 );
    }

    function regExistingGem( name , displayname , color1 , color2 ) { 
        regNewStar( name , displayname , color1 , color2 );
        regNewRod( name , displayname , color1 , color2 );
        regNewDust( name , displayname , color1 , color2 );
    }

    function regNewGem( name , displayname , color1 , color2 ) { 
        regExistingGem( name , displayname , color1 , color2 );
    }

    function regExistingGemRedstone( name , displayname , color1 , color2 ) { 
        regNewStar( name , displayname , color1 , color2 );
        regNewRod( name , displayname , color1 , color2 );
        regNewDust( name , displayname , color1 , color2 );
    }

    global.existing_metal.forEach(element => {
        regExistingMetal( element.name , element.displayname , element.color1 , element.color2 );
    });

    global.new_metal.forEach(element => {
        regNewMetal( element.name , element.displayname , element.color1 , element.color2 );
    });

    global.new_gem.forEach(element => {
        regNewGem( element.name , element.displayname , element.color1 , element.color2 );
    });

    global.existing_gem.forEach(element => {
        regExistingGem( element.name , element.displayname , element.color1 , element.color2 );
    });

    global.exsisting_gem_redstone.forEach(element => {
        regExistingGemRedstone( element.name , element.displayname , element.color1 , element.color2 );
    });

    global.new_dust.forEach(element => {
        regNewDust( element.name , element.displayname , element.color1 , element.color2 );
    });

    /*newDust('silica', '二氧化硅', '#ffffdd')
    newDust('calcium_carbonate', '碳酸钙', '#bbdddd')

    newMetal('stone', '石头', '#afafaf')
    newMetal('gold', '金', '#fdf55f')
    newMetal('iron', '铁', '#d8d8d8')
    newMetal('copper', '铜', '#e77c56' , '#9c4529')
    newMetal('netherite', '下界合金', '#5a575a' , '#271c1d')

    newGem('diamond', '钻石', '#4aedd9')
    newGem('emerald', '绿宝石', '#41f384')
    newGem('lapis', '青金石', '#12408b')
    newGem('redstone', '红石', '#ff0000')
    newGem('quartz', '石英', '#ffffe0')*/
});