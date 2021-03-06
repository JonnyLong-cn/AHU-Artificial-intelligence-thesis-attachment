schemes['literature'] = {
    //三个学科 其中第一个是主学科 后两个是相关学科
    subj: ['文学', '艺术学', '哲学'],
    //至少1个有关第一个学科的 字面上可以解释为物理结构的词
    stru: ['乌托邦', '欲望机器'],
    //至少9个有关第一个学科的名人名言
    cele: [
        ['华尔华兹', 'Poetry is the spontaneous overflow of powerful feelings.'],
        ['M.H. 艾布拉姆斯', '事物在镜子面前保持着清晰的完整，在灯的折射下成为变幻莫测的影子，而浪漫主义者将这个影子与其本体之间的距离通过象征符号的转换无限拉长。'],
        ['柏拉图', '平庸的诗歌使听众感觉乏味，因为它只展现表像而不揭示真理，只滋长听众的情感而不增进他们的理智。他还指出，诗人在创作时，不能依靠自己的技巧或知识，而必须等候神赐的灵感和自己的心灵迷狂。'],
        ['J.G.赫尔德', '一个人对自我挖掘得越深，对自己那些崇高思想的形成和源泉探究得越深，就越会闭眼驻足而说：“我之所以有现在，乃生长而成。我像一棵树一样生长：树芽是原本存在的；但是，空气、土壤、以及各种自然要素却非我所自有，是它们促使树种发芽、结果、生长成树。'],
        ['济慈', '诗必须来得“像树上长出叶子一样自然。'],
        ['柯尔律治', '诗歌确实是自然情感的产物，但是这种情感会因为崇尚秩序的冲动而产生一种创造的张力，因而激发起具有同化作用的想象力，并且自动组织成为一种平常的中介体，其中部分与整体既互相协调，也共同服从于引发快感的目的。'],
        ['本·琼生', '语言最能暴露一个人，只要你说话，我就能了解你。'],
        ['杜勃罗留波夫', '艺术家所创造的形象，好像一个焦点一样，把现实生活的许多事实都集中在本身之中，它大大地推进了事物的正确概念在人们之间的形成和传播。'],
        ['卡尔维洛', '你用刀刃在纸张中开路，犹如用思想在文字中开路，因为阅读就像在密林中前进。'],
    ],
    //至少3个有关第一个学科的思想（主义）
    prin: ['魔幻现实', '超验', '浪漫'],
    //至少3个有关第一个学科的性质
    prop: ['四元素相互制约影响', '晦涩', '文学'],
    //至少6个有关第一个学科的概念
    conc: ['俄狄浦斯情节', '超验', '福斯塔夫式', '原始美学','罗曼司', '修辞学手段'],
    init: function () {
        shuffle(this.stru);
        shuffle(this.cele);
        shuffle(this.prin);
        shuffle(this.prop);
        shuffle(this.conc);
    }
}
