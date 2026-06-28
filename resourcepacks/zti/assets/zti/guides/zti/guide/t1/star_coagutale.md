---
navigation:
  parent: t1/t1.md
  title: 星之凝聚
  position: 300
  icon: star_stone
item_ids:
- star_stone
- star_coagulator
---
# 星之凝聚

<Row>
  <ItemImage id="star_coagulator" scale="4" />
  <ItemImage id="star_stone" scale="4" />
</Row>

<Row>
  摆放成下图的结构，空手右击后，会消耗除了
  <ItemLink id="star_coagulator" />
  外的所有方块，并得到一个
  <ItemLink id="star_stone" />
</Row>

<GameScene zoom="3" background="transparent" interactive={true}>
  <ImportStructure src="assets/star.nbt" />

  <BoxAnnotation color="#00ffff" min="6 0 6" max="7 1 7 ">
        空手右键
  </BoxAnnotation>

  <IsometricCamera yaw="0" pitch="90" />
</GameScene>