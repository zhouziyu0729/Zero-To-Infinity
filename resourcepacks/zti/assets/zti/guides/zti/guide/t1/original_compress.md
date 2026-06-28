---
navigation:
  parent: t1/t1.md
  title: 原始压缩
  position: 300
  icon: shard_stone
item_ids:
- compressing_tool
- 1compressed_cobblestone
---
# 原始压缩

<Row>
  <ItemImage id="compressing_tool" scale="4" />
</Row>

只能用来获得<ItemLink id="1compressed_cobblestone" />，其他压缩物品请使用<ItemLink id="compressor" />获取。

<Row>
  将圆石摆放成3\*3\*3的结构，手持
  <ItemLink id="compressing_tool" />
  右击顶部中心的圆石，即可得到一个
  <ItemLink id="1compressed_cobblestone" />
</Row>

<GameScene zoom="4" background="transparent" interactive={true}>
  <ImportStructure src="assets/compress.nbt" />

  <BoxAnnotation color="#00ffff" min="1 2 1" max="2 3 2">
        手持 <ItemImage id="compressing_tool" scale="1" /><ItemLink id="compressing_tool" />右键
  </BoxAnnotation>

  <IsometricCamera yaw="195" pitch="30" />
</GameScene>
