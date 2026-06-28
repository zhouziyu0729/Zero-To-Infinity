/*EntityEvents.spawned(e => {
    e.cancel(); // 取消生成
});*/

// startup_scripts/doMobSpawning.js

// 1. 服务器加载时先设置一次
ServerEvents.loaded(event => {
    event.server.runCommandSilent('gamerule doMobSpawning false')
})

EntityEvents.spawned(event => {
    let level = event.level
    let gameRules = level.getGameRules()
    let doMobSpawning = gameRules.kjs$getBoolean('doMobSpawning')
    
    if (doMobSpawning) {
        event.server.runCommandSilent('gamerule doMobSpawning false')
        event.server.tell("§c本整合包已禁用生物自然生成，请勿尝试使用命令重新启用自然生成，否则可能导致对其他形式的生物生成造成影响。")
        event.cancel()
    }
})