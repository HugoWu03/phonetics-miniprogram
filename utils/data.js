// ===== 48 个国际音标数据 =====
// group: long长元音 short短元音 diph双元音 stop爆破音 fric摩擦音 affr破擦音 nasal鼻音 lat边音 semi半元音

const phonemes = [
  // ---------- 元音 20 个 ----------
  { sym: 'iː', group: 'long', name: '长元音', tips: '嘴角向两边咧开，像微笑，舌尖抵下齿，声带振动，音要拉长。', mouth: '口型扁平，上下齿几乎合拢，嘴唇不圆。', examples: [
    { w: 'see', p: '/siː/', c: '看见' }, { w: 'meet', p: '/miːt/', c: '遇见' }, { w: 'read', p: '/riːd/', c: '读' }, { w: 'green', p: '/ɡriːn/', c: '绿色' }, { w: 'team', p: '/tiːm/', c: '队伍' }] },
  { sym: 'ɑː', group: 'long', name: '长元音', tips: '嘴巴张大，舌身低平后缩，声带振动，音拉长，像医生检查喉咙时发声。', mouth: '口型大开，双唇自然放松不圆。', examples: [
    { w: 'car', p: '/kɑː/', c: '汽车' }, { w: 'far', p: '/fɑː/', c: '远的' }, { w: 'park', p: '/pɑːk/', c: '公园' }, { w: 'star', p: '/stɑː/', c: '星星' }, { w: 'father', p: '/ˈfɑːðə/', c: '父亲' }] },
  { sym: 'ɔː', group: 'long', name: '长元音', tips: '双唇收圆向前突出，舌身后缩，声带振动，音拉长。', mouth: '口型圆而小，像吹蜡烛前的唇形。', examples: [
    { w: 'ball', p: '/bɔːl/', c: '球' }, { w: 'door', p: '/dɔː/', c: '门' }, { w: 'more', p: '/mɔː/', c: '更多' }, { w: 'walk', p: '/wɔːk/', c: '走路' }, { w: 'four', p: '/fɔː/', c: '四' }] },
  { sym: 'uː', group: 'long', name: '长元音', tips: '双唇收得很圆很小并向前突出，舌身后缩抬高，音拉长，像火车"呜——"。', mouth: '口型小圆且前突，肌肉紧张。', examples: [
    { w: 'food', p: '/fuːd/', c: '食物' }, { w: 'blue', p: '/bluː/', c: '蓝色' }, { w: 'moon', p: '/muːn/', c: '月亮' }, { w: 'school', p: '/skuːl/', c: '学校' }, { w: 'two', p: '/tuː/', c: '二' }] },
  { sym: 'ɜː', group: 'long', name: '长元音', tips: '嘴唇微开，舌位居中，发"呃——"的延续音，口型保持不变，音拉长。', mouth: '口型自然微开，双唇不圆不扁。', examples: [
    { w: 'bird', p: '/bɜːd/', c: '鸟' }, { w: 'girl', p: '/ɡɜːl/', c: '女孩' }, { w: 'work', p: '/wɜːk/', c: '工作' }, { w: 'her', p: '/hɜː/', c: '她的' }, { w: 'learn', p: '/lɜːn/', c: '学习' }] },
  { sym: 'ɪ', group: 'short', name: '短元音', tips: '与 /iː/ 相比嘴角略松、开口稍大，短促有力，一声即止。', mouth: '口型半扁平，比 /iː/ 松弛，唇不拉伸。', examples: [
    { w: 'sit', p: '/sɪt/', c: '坐' }, { w: 'big', p: '/bɪɡ/', c: '大的' }, { w: 'fish', p: '/fɪʃ/', c: '鱼' }, { w: 'city', p: '/ˈsɪti/', c: '城市' }, { w: 'window', p: '/ˈwɪndəʊ/', c: '窗户' }] },
  { sym: 'e', group: 'short', name: '短元音', tips: '嘴角向两侧微拉，舌尖抵下齿，短促清晰，近似汉语"哎"但更扁。', mouth: '口型半开半扁，上下齿间约一指宽。', examples: [
    { w: 'bed', p: '/bed/', c: '床' }, { w: 'pen', p: '/pen/', c: '钢笔' }, { w: 'ten', p: '/ten/', c: '十' }, { w: 'best', p: '/best/', c: '最好的' }, { w: 'head', p: '/hed/', c: '头' }] },
  { sym: 'æ', group: 'short', name: '短元音', tips: '嘴张得比 /e/ 大，嘴角尽量向两边拉平，像大笑时的口型，短促。', mouth: '口大而扁，下颌明显下沉。', examples: [
    { w: 'cat', p: '/kæt/', c: '猫' }, { w: 'map', p: '/mæp/', c: '地图' }, { w: 'hand', p: '/hænd/', c: '手' }, { w: 'back', p: '/bæk/', c: '后面' }, { w: 'apple', p: '/ˈæpl/', c: '苹果' }] },
  { sym: 'ʌ', group: 'short', name: '短元音', tips: '嘴巴自然半开，舌身放平略后缩，短促地发"啊"，比 /ɑː/ 开口小。', mouth: '口型半开，双唇放松，肌肉不紧张。', examples: [
    { w: 'cup', p: '/kʌp/', c: '杯子' }, { w: 'bus', p: '/bʌs/', c: '公交车' }, { w: 'sun', p: '/sʌn/', c: '太阳' }, { w: 'love', p: '/lʌv/', c: '爱' }, { w: 'mother', p: '/ˈmʌðə/', c: '母亲' }] },
  { sym: 'ɒ', group: 'short', name: '短元音', tips: '双唇收圆但不突出，舌身后缩压低，短促地发"奥"，比 /ɔː/ 松弛。', mouth: '口型圆而松，开口比 /ɔː/ 大。', examples: [
    { w: 'hot', p: '/hɒt/', c: '热的' }, { w: 'dog', p: '/dɒɡ/', c: '狗' }, { w: 'box', p: '/bɒks/', c: '盒子' }, { w: 'stop', p: '/stɒp/', c: '停止' }, { w: 'clock', p: '/klɒk/', c: '时钟' }] },
  { sym: 'ʊ', group: 'short', name: '短元音', tips: '双唇微圆略前突，比 /uː/ 松弛、开口稍大，短促。', mouth: '口型小圆而放松，肌肉不紧张。', examples: [
    { w: 'book', p: '/bʊk/', c: '书' }, { w: 'good', p: '/ɡʊd/', c: '好的' }, { w: 'put', p: '/pʊt/', c: '放' }, { w: 'full', p: '/fʊl/', c: '满的' }, { w: 'look', p: '/lʊk/', c: '看' }] },
  { sym: 'ə', group: 'short', name: '短元音(央元音)', tips: '最常用的弱读音，嘴唇、舌头完全放松，轻轻发一个含糊的"呃"。', mouth: '口型自然微开，全身（口腔）放松。', examples: [
    { w: 'about', p: '/əˈbaʊt/', c: '关于' }, { w: 'banana', p: '/bəˈnɑːnə/', c: '香蕉' }, { w: 'teacher', p: '/ˈtiːtʃə/', c: '老师' }, { w: 'sofa', p: '/ˈsəʊfə/', c: '沙发' }, { w: 'camera', p: '/ˈkæmrə/', c: '相机' }] },
  { sym: 'eɪ', group: 'diph', name: '双元音', tips: '由 /e/ 滑向 /ɪ/，前重后轻，口型从半扁收到更扁，一气呵成。', mouth: '起始口半扁，结束时更扁更小。', examples: [
    { w: 'face', p: '/feɪs/', c: '脸' }, { w: 'day', p: '/deɪ/', c: '天' }, { w: 'cake', p: '/keɪk/', c: '蛋糕' }, { w: 'play', p: '/pleɪ/', c: '玩' }, { w: 'rain', p: '/reɪn/', c: '雨' }] },
  { sym: 'aɪ', group: 'diph', name: '双元音', tips: '由 /ɑː/ 滑向 /ɪ/，口从大收到小扁，前重后轻，像喊"哎"。', mouth: '起始口大开，结束口小而扁。', examples: [
    { w: 'time', p: '/taɪm/', c: '时间' }, { w: 'like', p: '/laɪk/', c: '喜欢' }, { w: 'five', p: '/faɪv/', c: '五' }, { w: 'night', p: '/naɪt/', c: '夜晚' }, { w: 'my', p: '/maɪ/', c: '我的' }] },
  { sym: 'ɔɪ', group: 'diph', name: '双元音', tips: '由 /ɔː/ 滑向 /ɪ/，先圆唇后扁唇，前重后轻。', mouth: '起始圆唇，结束变扁，滑动连贯。', examples: [
    { w: 'boy', p: '/bɔɪ/', c: '男孩' }, { w: 'toy', p: '/tɔɪ/', c: '玩具' }, { w: 'oil', p: '/ɔɪl/', c: '油' }, { w: 'noise', p: '/nɔɪz/', c: '噪音' }, { w: 'join', p: '/dʒɔɪn/', c: '加入' }] },
  { sym: 'əʊ', group: 'diph', name: '双元音', tips: '由央元音 /ə/ 滑向 /ʊ/，口型由放松滑向圆唇，类似"欧"。', mouth: '起始自然微开，结束收圆。', examples: [
    { w: 'go', p: '/ɡəʊ/', c: '去' }, { w: 'home', p: '/həʊm/', c: '家' }, { w: 'nose', p: '/nəʊz/', c: '鼻子' }, { w: 'boat', p: '/bəʊt/', c: '船' }, { w: 'know', p: '/nəʊ/', c: '知道' }] },
  { sym: 'aʊ', group: 'diph', name: '双元音', tips: '由 /ɑː/ 滑向 /ʊ/，口从大开收成小圆，前重后轻，像被烫到时喊"嗷"。', mouth: '起始口大开，结束圆唇前突。', examples: [
    { w: 'now', p: '/naʊ/', c: '现在' }, { w: 'out', p: '/aʊt/', c: '外面' }, { w: 'house', p: '/haʊs/', c: '房子' }, { w: 'cow', p: '/kaʊ/', c: '奶牛' }, { w: 'down', p: '/daʊn/', c: '向下' }] },
  { sym: 'ɪə', group: 'diph', name: '双元音', tips: '由 /ɪ/ 滑向 /ə/，先扁后放松，尾部含糊拖长。', mouth: '起始口扁平，结束自然放松微开。', examples: [
    { w: 'ear', p: '/ɪə/', c: '耳朵' }, { w: 'near', p: '/nɪə/', c: '近的' }, { w: 'here', p: '/hɪə/', c: '这里' }, { w: 'beer', p: '/bɪə/', c: '啤酒' }, { w: 'clear', p: '/klɪə/', c: '清晰的' }] },
  { sym: 'eə', group: 'diph', name: '双元音', tips: '由 /e/ 滑向 /ə/，先扁后松，尾部含糊。', mouth: '起始半扁，结束放松，滑动平稳。', examples: [
    { w: 'air', p: '/eə/', c: '空气' }, { w: 'hair', p: '/heə/', c: '头发' }, { w: 'care', p: '/keə/', c: '关心' }, { w: 'pear', p: '/peə/', c: '梨' }, { w: 'there', p: '/ðeə/', c: '那里' }] },
  { sym: 'ʊə', group: 'diph', name: '双元音', tips: '由 /ʊ/ 滑向 /ə/，先圆唇后放松，此音在口语中常简化为 /ɔː/。', mouth: '起始小圆唇，结束放松微开。', examples: [
    { w: 'tour', p: '/tʊə/', c: '旅行' }, { w: 'pure', p: '/pjʊə/', c: '纯净的' }, { w: 'sure', p: '/ʃʊə/', c: '确定的' }, { w: 'cure', p: '/kjʊə/', c: '治愈' }, { w: 'poor', p: '/pʊə/', c: '贫穷的' }] },

  // ---------- 辅音 28 个 ----------
  { sym: 'p', group: 'stop', name: '清爆破音', tips: '双唇闭紧憋气，然后突然弹开送气，声带不振动。位于词首时送气强（纸片测试能吹动）。', mouth: '双唇阻塞→爆破，口型由闭合到微开。', examples: [
    { w: 'pen', p: '/pen/', c: '钢笔' }, { w: 'pig', p: '/pɪɡ/', c: '猪' }, { w: 'map', p: '/mæp/', c: '地图' }, { w: 'stop', p: '/stɒp/', c: '停止' }, { w: 'apple', p: '/ˈæpl/', c: '苹果' }] },
  { sym: 'b', group: 'stop', name: '浊爆破音', tips: '口型动作与 /p/ 完全相同，但声带振动，送气弱，摸喉咙能感到振动。', mouth: '双唇阻塞→爆破，发音时喉部振动。', examples: [
    { w: 'book', p: '/bʊk/', c: '书' }, { w: 'big', p: '/bɪɡ/', c: '大的' }, { w: 'cab', p: '/kæb/', c: '出租车' }, { w: 'baby', p: '/ˈbeɪbi/', c: '婴儿' }, { w: 'best', p: '/best/', c: '最好的' }] },
  { sym: 't', group: 'stop', name: '清爆破音', tips: '舌尖抵上齿龈憋气，然后弹开送气，声带不振动。', mouth: '舌尖抵上齿龈→爆破，双唇微开。', examples: [
    { w: 'ten', p: '/ten/', c: '十' }, { w: 'time', p: '/taɪm/', c: '时间' }, { w: 'cat', p: '/kæt/', c: '猫' }, { w: 'sit', p: '/sɪt/', c: '坐' }, { w: 'water', p: '/ˈwɔːtə/', c: '水' }] },
  { sym: 'd', group: 'stop', name: '浊爆破音', tips: '与 /t/ 口型相同，但声带振动，送气弱。', mouth: '舌尖抵上齿龈→爆破，喉部振动。', examples: [
    { w: 'dog', p: '/dɒɡ/', c: '狗' }, { w: 'day', p: '/deɪ/', c: '天' }, { w: 'red', p: '/red/', c: '红色' }, { w: 'read', p: '/riːd/', c: '读' }, { w: 'hand', p: '/hænd/', c: '手' }] },
  { sym: 'k', group: 'stop', name: '清爆破音', tips: '舌后部抬起抵住软腭憋气，然后突然放开送气，声带不振动。', mouth: '舌根抵软腭→爆破，口自然微开。', examples: [
    { w: 'key', p: '/kiː/', c: '钥匙' }, { w: 'cat', p: '/kæt/', c: '猫' }, { w: 'back', p: '/bæk/', c: '后面' }, { w: 'school', p: '/skuːl/', c: '学校' }, { w: 'clock', p: '/klɒk/', c: '时钟' }] },
  { sym: 'g', group: 'stop', name: '浊爆破音', tips: '与 /k/ 口型相同，但声带振动，送气弱。', mouth: '舌根抵软腭→爆破，喉部振动。', examples: [
    { w: 'go', p: '/ɡəʊ/', c: '去' }, { w: 'big', p: '/bɪɡ/', c: '大的' }, { w: 'green', p: '/ɡriːn/', c: '绿色' }, { w: 'egg', p: '/eɡ/', c: '鸡蛋' }, { w: 'good', p: '/ɡʊd/', c: '好的' }] },
  { sym: 'f', group: 'fric', name: '清摩擦音', tips: '上齿轻咬下唇，气流从唇齿缝隙挤出摩擦成音，声带不振动。', mouth: '上齿触下唇，留出窄缝送气。', examples: [
    { w: 'five', p: '/faɪv/', c: '五' }, { w: 'face', p: '/feɪs/', c: '脸' }, { w: 'life', p: '/laɪf/', c: '生活' }, { w: 'off', p: '/ɒf/', c: '离开' }, { w: 'food', p: '/fuːd/', c: '食物' }] },
  { sym: 'v', group: 'fric', name: '浊摩擦音', tips: '与 /f/ 口型相同，但声带振动，有嗡嗡感。', mouth: '上齿触下唇，送气且喉部振动。', examples: [
    { w: 'very', p: '/ˈveri/', c: '非常' }, { w: 'five', p: '/faɪv/', c: '五' }, { w: 'love', p: '/lʌv/', c: '爱' }, { w: 'voice', p: '/vɔɪs/', c: '声音' }, { w: 'live', p: '/lɪv/', c: '居住' }] },
  { sym: 'θ', group: 'fric', name: '清摩擦音', tips: '舌尖轻伸出上下齿之间，气流从舌齿缝隙挤出，声带不振动。注意不要读成 /s/。', mouth: '舌尖外露于齿间，留窄缝送气。', examples: [
    { w: 'think', p: '/θɪŋk/', c: '思考' }, { w: 'three', p: '/θriː/', c: '三' }, { w: 'mouth', p: '/maʊθ/', c: '嘴' }, { w: 'teeth', p: '/tiːθ/', c: '牙齿' }, { w: 'thank', p: '/θæŋk/', c: '感谢' }] },
  { sym: 'ð', group: 'fric', name: '浊摩擦音', tips: '与 /θ/ 口型相同，但声带振动。注意不要读成 /z/ 或 /d/。', mouth: '舌尖外露于齿间，送气且喉部振动。', examples: [
    { w: 'this', p: '/ðɪs/', c: '这' }, { w: 'that', p: '/ðæt/', c: '那' }, { w: 'mother', p: '/ˈmʌðə/', c: '母亲' }, { w: 'father', p: '/ˈfɑːðə/', c: '父亲' }, { w: 'they', p: '/ðeɪ/', c: '他们' }] },
  { sym: 's', group: 'fric', name: '清摩擦音', tips: '舌尖接近上齿龈但不接触，气流从窄缝挤出发出"嘶"，声带不振动。', mouth: '口微开，舌尖近齿龈留窄缝。', examples: [
    { w: 'see', p: '/siː/', c: '看见' }, { w: 'sun', p: '/sʌn/', c: '太阳' }, { w: 'bus', p: '/bʌs/', c: '公交车' }, { w: 'house', p: '/haʊs/', c: '房子' }, { w: 'best', p: '/best/', c: '最好的' }] },
  { sym: 'z', group: 'fric', name: '浊摩擦音', tips: '与 /s/ 口型相同，但声带振动，像蜜蜂"嗡嗡"。', mouth: '舌尖近齿龈留窄缝，喉部振动。', examples: [
    { w: 'zoo', p: '/zuː/', c: '动物园' }, { w: 'zero', p: '/ˈzɪərəʊ/', c: '零' }, { w: 'nose', p: '/nəʊz/', c: '鼻子' }, { w: 'rose', p: '/rəʊz/', c: '玫瑰' }, { w: 'eyes', p: '/aɪz/', c: '眼睛(复数)' }] },
  { sym: 'ʃ', group: 'fric', name: '清摩擦音', tips: '双唇略圆前突，舌前部抬向硬腭，气流摩擦而出，像让人安静的"嘘"。', mouth: '双唇微圆前突，口型比 /s/ 更收拢。', examples: [
    { w: 'she', p: '/ʃiː/', c: '她' }, { w: 'fish', p: '/fɪʃ/', c: '鱼' }, { w: 'shop', p: '/ʃɒp/', c: '商店' }, { w: 'wash', p: '/wɒʃ/', c: '洗' }, { w: 'sure', p: '/ʃʊə/', c: '确定的' }] },
  { sym: 'ʒ', group: 'fric', name: '浊摩擦音', tips: '与 /ʃ/ 口型相同，但声带振动。多出现在外来词与 -sion 结尾。', mouth: '双唇微圆前突，喉部振动。', examples: [
    { w: 'usually', p: '/ˈjuːʒuəli/', c: '通常' }, { w: 'pleasure', p: '/ˈpleʒə/', c: '愉快' }, { w: 'television', p: '/ˈtelɪvɪʒn/', c: '电视' }, { w: 'measure', p: '/ˈmeʒə/', c: '测量' }, { w: 'garage', p: '/ˈɡærɑːʒ/', c: '车库' }] },
  { sym: 'h', group: 'fric', name: '清摩擦音', tips: '口自然张开，气流从喉咙呼出轻擦声带，像哈气，声带不振动。', mouth: '口半开放松，轻哈气。', examples: [
    { w: 'hat', p: '/hæt/', c: '帽子' }, { w: 'hand', p: '/hænd/', c: '手' }, { w: 'home', p: '/həʊm/', c: '家' }, { w: 'behind', p: '/bɪˈhaɪnd/', c: '在后面' }, { w: 'have', p: '/hæv/', c: '有' }] },
  { sym: 'r', group: 'fric', name: '浊摩擦音(近音)', tips: '舌尖卷起接近硬腭但不接触，双唇略圆，气流滑出，舌不碰任何部位。切勿读成汉语"日"。', mouth: '舌尖上卷悬空，双唇微圆。', examples: [
    { w: 'red', p: '/red/', c: '红色' }, { w: 'run', p: '/rʌn/', c: '跑' }, { w: 'read', p: '/riːd/', c: '读' }, { w: 'room', p: '/ruːm/', c: '房间' }, { w: 'rain', p: '/reɪn/', c: '雨' }] },
  { sym: 'tʃ', group: 'affr', name: '清破擦音', tips: '先摆好 /t/ 的阻塞姿势，再放开成 /ʃ/ 摩擦，先破后擦，声带不振动。', mouth: '舌尖抵齿龈→弹开，双唇微圆。', examples: [
    { w: 'chair', p: '/tʃeə/', c: '椅子' }, { w: 'check', p: '/tʃek/', c: '检查' }, { w: 'teach', p: '/tiːtʃ/', c: '教' }, { w: 'watch', p: '/wɒtʃ/', c: '手表' }, { w: 'China', p: '/ˈtʃaɪnə/', c: '中国' }] },
  { sym: 'dʒ', group: 'affr', name: '浊破擦音', tips: '与 /tʃ/ 口型相同，但声带振动。', mouth: '舌尖抵齿龈→弹开摩擦，喉部振动。', examples: [
    { w: 'job', p: '/dʒɒb/', c: '工作' }, { w: 'jump', p: '/dʒʌmp/', c: '跳' }, { w: 'page', p: '/peɪdʒ/', c: '页' }, { w: 'bridge', p: '/brɪdʒ/', c: '桥' }, { w: 'join', p: '/dʒɔɪn/', c: '加入' }] },
  { sym: 'tr', group: 'affr', name: '清破擦音', tips: '舌尖卷起贴住硬腭前部，然后弹开送气，像"戳"的一声，声带不振动。', mouth: '舌尖上卷贴腭→弹开，双唇略圆。', examples: [
    { w: 'tree', p: '/triː/', c: '树' }, { w: 'try', p: '/traɪ/', c: '尝试' }, { w: 'train', p: '/treɪn/', c: '火车' }, { w: 'trip', p: '/trɪp/', c: '旅行' }, { w: 'country', p: '/ˈkʌntri/', c: '国家' }] },
  { sym: 'dr', group: 'affr', name: '浊破擦音', tips: '与 /tr/ 口型相同，但声带振动。', mouth: '舌尖上卷贴腭→弹开，喉部振动。', examples: [
    { w: 'dream', p: '/driːm/', c: '梦' }, { w: 'drink', p: '/drɪŋk/', c: '喝' }, { w: 'drive', p: '/draɪv/', c: '驾驶' }, { w: 'dry', p: '/draɪ/', c: '干的' }, { w: 'hundred', p: '/ˈhʌndrəd/', c: '一百' }] },
  { sym: 'ts', group: 'affr', name: '清破擦音', tips: '舌尖抵上齿龈发 /t/ 后接 /s/，像汉语"呲"，声带不振动。多见于名词复数。', mouth: '舌尖抵齿龈→放开挤气成 /s/。', examples: [
    { w: 'cats', p: '/kæts/', c: '猫(复数)' }, { w: 'seats', p: '/siːts/', c: '座位(复数)' }, { w: 'students', p: '/ˈstjuːdnts/', c: '学生(复数)' }, { w: 'hits', p: '/hɪts/', c: '击打(三单)' }, { w: 'boats', p: '/bəʊts/', c: '船(复数)' }] },
  { sym: 'dz', group: 'affr', name: '浊破擦音', tips: '与 /ts/ 口型相同，但声带振动。多见于名词复数 /d/ 结尾加 -s。', mouth: '舌尖抵齿龈→放开成 /z/，喉部振动。', examples: [
    { w: 'beds', p: '/bedz/', c: '床(复数)' }, { w: 'hands', p: '/hændz/', c: '手(复数)' }, { w: 'words', p: '/wɜːdz/', c: '单词(复数)' }, { w: 'birds', p: '/bɜːdz/', c: '鸟(复数)' }, { w: 'needs', p: '/niːdz/', c: '需要(三单)' }] },
  { sym: 'm', group: 'nasal', name: '浊鼻音', tips: '双唇闭紧，软腭下垂，气流从鼻腔通过，声带振动，像闭口哼"嗯"。', mouth: '双唇闭合，气流走鼻腔。', examples: [
    { w: 'man', p: '/mæn/', c: '男人' }, { w: 'moon', p: '/muːn/', c: '月亮' }, { w: 'some', p: '/sʌm/', c: '一些' }, { w: 'time', p: '/taɪm/', c: '时间' }, { w: 'mother', p: '/ˈmʌðə/', c: '母亲' }] },
  { sym: 'n', group: 'nasal', name: '浊鼻音', tips: '舌尖抵上齿龈，气流从鼻腔通过，声带振动，像哼"呢"。', mouth: '舌尖抵齿龈，口微开，气流走鼻腔。', examples: [
    { w: 'no', p: '/nəʊ/', c: '不' }, { w: 'sun', p: '/sʌn/', c: '太阳' }, { w: 'ten', p: '/ten/', c: '十' }, { w: 'know', p: '/nəʊ/', c: '知道' }, { w: 'night', p: '/naɪt/', c: '夜晚' }] },
  { sym: 'ŋ', group: 'nasal', name: '浊鼻音', tips: '舌后部抬起抵软腭，堵住口腔通道，气流全部从鼻腔出，像哼"嗯"但位置更靠后。', mouth: '口微开，舌根抵软腭，气流走鼻腔。', examples: [
    { w: 'sing', p: '/sɪŋ/', c: '唱歌' }, { w: 'long', p: '/lɒŋ/', c: '长的' }, { w: 'thank', p: '/θæŋk/', c: '感谢' }, { w: 'English', p: '/ˈɪŋɡlɪʃ/', c: '英语' }, { w: 'bank', p: '/bæŋk/', c: '银行' }] },
  { sym: 'l', group: 'lat', name: '浊边音', tips: '舌尖抵上齿龈，气流从舌头两侧通过。在元音前清晰（like），在词尾含糊卷舌（ball）。', mouth: '舌尖抵齿龈，气流走舌两侧。', examples: [
    { w: 'look', p: '/lʊk/', c: '看' }, { w: 'leg', p: '/leɡ/', c: '腿' }, { w: 'ball', p: '/bɔːl/', c: '球' }, { w: 'full', p: '/fʊl/', c: '满的' }, { w: 'blue', p: '/bluː/', c: '蓝色' }] },
  { sym: 'w', group: 'semi', name: '半元音', tips: '双唇收圆前突，迅速滑向后元音 /ʊ/ 再接元音，像"我"的起始。', mouth: '起始小圆唇，快速滑向后面的元音。', examples: [
    { w: 'we', p: '/wiː/', c: '我们' }, { w: 'water', p: '/ˈwɔːtə/', c: '水' }, { w: 'window', p: '/ˈwɪndəʊ/', c: '窗户' }, { w: 'watch', p: '/wɒtʃ/', c: '手表' }, { w: 'quick', p: '/kwɪk/', c: '快的' }] },
  { sym: 'j', group: 'semi', name: '半元音', tips: '口型扁平像发 /iː/，迅速滑向后面的元音，像"耶"的起始。注意它不是辅音"dʒ"。', mouth: '起始扁平口型，快速滑向元音。', examples: [
    { w: 'yes', p: '/jes/', c: '是' }, { w: 'you', p: '/juː/', c: '你' }, { w: 'year', p: '/jɪə/', c: '年' }, { w: 'young', p: '/jʌŋ/', c: '年轻的' }, { w: 'use', p: '/juːz/', c: '使用' }] }
];

// ===== 分类标签 =====
const GROUPS = [
  { key: 'long', label: '长元音', count: 5 },
  { key: 'short', label: '短元音', count: 7 },
  { key: 'diph', label: '双元音', count: 8 },
  { key: 'stop', label: '爆破音', count: 6 },
  { key: 'fric', label: '摩擦音', count: 10 },
  { key: 'affr', label: '破擦音', count: 6 },
  { key: 'nasal', label: '鼻音', count: 3 },
  { key: 'lat', label: '边音', count: 1 },
  { key: 'semi', label: '半元音', count: 2 }
];

// ===== 测验词库（标注音标的生词）=====
const quizWords = [
  { w: 'bread', p: '/bred/', c: '面包' },
  { w: 'cheer', p: '/tʃɪə/', c: '欢呼' },
  { w: 'shirt', p: '/ʃɜːt/', c: '衬衫' },
  { w: 'they', p: '/ðeɪ/', c: '他们' },
  { w: 'wrong', p: '/rɒŋ/', c: '错误的' },
  { w: 'thanks', p: '/θæŋks/', c: '谢谢' },
  { w: 'cough', p: '/kɒf/', c: '咳嗽' },
  { w: 'usually', p: '/ˈjuːʒuəli/', c: '通常' },
  { w: 'double', p: '/ˈdʌbl/', c: '双倍' },
  { w: 'through', p: '/θruː/', c: '通过' },
  { w: 'honest', p: '/ˈɒnɪst/', c: '诚实的' },
  { w: 'pleasure', p: '/ˈpleʒə/', c: '愉快' },
  { w: 'sew', p: '/səʊ/', c: '缝纫' },
  { w: 'young', p: '/jʌŋ/', c: '年轻的' },
  { w: 'answer', p: '/ˈɑːnsə/', c: '回答' },
  { w: 'choir', p: '/ˈkwaɪə/', c: '合唱团' },
  { w: 'island', p: '/ˈaɪlənd/', c: '岛屿' },
  { w: 'friend', p: '/frend/', c: '朋友' },
  { w: 'busy', p: '/ˈbɪzi/', c: '忙碌的' },
  { w: 'measure', p: '/ˈmeʒə/', c: '测量' },
  { w: 'women', p: '/ˈwɪmɪn/', c: '女人(复数)' },
  { w: 'sword', p: '/sɔːd/', c: '剑' },
  { w: 'tongue', p: '/tʌŋ/', c: '舌头' },
  { w: 'climb', p: '/klaɪm/', c: '攀爬' },
  { w: 'colonel', p: '/ˈkɜːnl/', c: '上校' },
  { w: 'sugar', p: '/ˈʃʊɡə/', c: '糖' },
  { w: 'stomach', p: '/ˈstʌmək/', c: '胃' },
  { w: 'receipt', p: '/rɪˈsiːt/', c: '收据' },
  { w: 'yacht', p: '/jɒt/', c: '游艇' },
  { w: 'vegetable', p: '/ˈvedʒtəbl/', c: '蔬菜' },
  { w: 'literature', p: '/ˈlɪtrətʃə/', c: '文学' },
  { w: 'February', p: '/ˈfebruəri/', c: '二月' },
  { w: 'restaurant', p: '/ˈrestrɒnt/', c: '餐厅' },
  { w: 'comfortable', p: '/ˈkʌmftəbl/', c: '舒适的' },
  { w: 'necessary', p: '/ˈnesəsəri/', c: '必要的' },
  { w: 'photograph', p: '/ˈfəʊtəɡrɑːf/', c: '照片' }
];

// ===== 15 天学习计划（每天 40-60 分钟）=====
const plan = [
  { day: 1,  title: '前元音：iː / ɪ / e / æ',            focus: ['iː','ɪ','e','æ'],            task: '学习 4 个前元音的发音要领与口型；每个音标跟读 5 个例词各 10 遍；用镜子检查口型。', mins: '40-50' },
  { day: 2,  title: '后元音：ɑː / ɒ / ɔː / ʊ / uː',      focus: ['ɑː','ɒ','ɔː','ʊ','uː'],      task: '学习 5 个后元音；重点区分圆唇与不圆唇；跟读例词并录音自检。', mins: '45-60' },
  { day: 3,  title: '中元音：ʌ / ɜː / ə',                 focus: ['ʌ','ɜː','ə'],                task: '学习 3 个中元音；体会央元音 /ə/ 的放松感；在单词中找出弱读 /ə/。', mins: '40-50' },
  { day: 4,  title: '双元音（一）：eɪ / aɪ / ɔɪ',         focus: ['eɪ','aɪ','ɔɪ'],              task: '练习"前重后轻"的滑动要领；每个双元音跟读 15 遍；对比 /e/ 与 /eɪ/。', mins: '40-50' },
  { day: 5,  title: '双元音（二）：əʊ / aʊ / ɪə / eə / ʊə + 元音总复习', focus: ['əʊ','aʊ','ɪə','eə','ʊə'], task: '学完剩余双元音；把 20 个元音全部串读一遍；错音标记并加练。', mins: '50-60' },
  { day: 6,  title: '爆破音：p / b / t / d',              focus: ['p','b','t','d'],             task: '练习清浊对立：手摸喉咙感受声带振动；纸片测试 /p/ 的送气。', mins: '40-50' },
  { day: 7,  title: '爆破音：k / g + 元音阶段测验',       focus: ['k','g'],                     task: '完成爆破音学习；进入测验模块完成 10 词元音测验，正确率 ≥ 8 才过关。', mins: '45-60' },
  { day: 8,  title: '摩擦音：f / v / θ / ð',              focus: ['f','v','θ','ð'],             task: '练习唇齿音与咬舌音；对着镜子确认舌尖位置；不要用 /s/、/z/ 代替。', mins: '40-50' },
  { day: 9,  title: '摩擦音：s / z / ʃ / ʒ',              focus: ['s','z','ʃ','ʒ'],             task: '区分平舌 /s/ 与翘唇 /ʃ/；跟读 usually、pleasure 等难点词。', mins: '40-50' },
  { day: 10, title: '摩擦音：h / r + 摩擦音阶段测验',     focus: ['h','r'],                     task: '注意 /r/ 舌尖悬空不碰腭；完成 10 词摩擦音测验。', mins: '45-60' },
  { day: 11, title: '破擦音：tʃ / dʒ / tr / dr',          focus: ['tʃ','dʒ','tr','dr'],         task: '体会"先爆破后摩擦"的连贯动作；跟读 China、dream 等例词。', mins: '40-50' },
  { day: 12, title: '破擦音：ts / dz + 鼻音：m / n / ŋ',  focus: ['ts','dz','m','n','ŋ'],       task: '练习名词复数的 -ts / -dz；三个鼻音对比哼读，分清口腔阻塞位置。', mins: '45-60' },
  { day: 13, title: '边音 l + 半元音 w / j',              focus: ['l','w','j'],                 task: '区分清晰 l 与含糊 l；注意 /j/ 与 /dʒ/ 的区别（yes ≠ 姐）。', mins: '40-50' },
  { day: 14, title: '48 音标总复习 + 重音、连读、吞音概念', focus: [],                           task: '快速串读全部 48 个音标各 5 遍；学习概念：重音(重读音节更响更长)、连读(辅音+元音连成一体如 not at all)、吞音(失去爆破如 goo(d) morning)。', mins: '50-60' },
  { day: 15, title: '综合测验：标注音标生词朗读测试',     focus: [],                            task: '测验模块连续完成 20 词，正确率 ≥ 90%；录音自检能听出与示范读音的差别。达成完成标志！', mins: '40-60' }
];

// ===== 推荐资源 =====
const resources = [
  { name: 'B 站「英语兔」音标全集', desc: '免费视频课，口型演示直观，适合入门跟学' },
  { name: '赖世雄《美语音标》配套音频', desc: '经典教材，讲解细致，适合精听模仿' },
  { name: '每日英语听力 App', desc: '海量真人口语材料，用于跟读与听力自检' }
];

// ===== 进度存储 =====
function getCheckins() {
  return wx.getStorageSync('checkins') || {};
}
function toggleCheckin(day) {
  const c = getCheckins();
  if (c[day]) { delete c[day]; } else { c[day] = new Date().toLocaleDateString(); }
  wx.setStorageSync('checkins', c);
  return c;
}

// ===== 音标符号 -> 音频文件名（ASCII 安全，与 tools/gen_audio.py 中映射一致）=====
const AUDIO_IDS = {
  'iː': 'ii', 'ɪ': 'i', 'e': 'e', 'æ': 'ae', 'ɑː': 'aa', 'ɒ': 'o',
  'ɔː': 'oo', 'ʊ': 'u', 'uː': 'uu', 'ʌ': 'uh', 'ɜː': 'er', 'ə': 'schwa',
  'eɪ': 'ei', 'aɪ': 'ai', 'ɔɪ': 'oi', 'əʊ': 'ou', 'aʊ': 'au',
  'ɪə': 'ia', 'eə': 'ea', 'ʊə': 'ua',
  'p': 'p', 'b': 'b', 't': 't', 'd': 'd', 'k': 'k', 'g': 'g',
  'f': 'f', 'v': 'v', 'θ': 'th', 'ð': 'dh', 's': 's', 'z': 'z',
  'ʃ': 'sh', 'ʒ': 'zh', 'h': 'h', 'r': 'r',
  'tʃ': 'ch', 'dʒ': 'dj', 'tr': 'tr', 'dr': 'dr', 'ts': 'ts', 'dz': 'dz',
  'm': 'm', 'n': 'n', 'ŋ': 'ng', 'l': 'l', 'w': 'w', 'j': 'y'
};
function audioId(sym) {
  return AUDIO_IDS[sym] || '';
}

module.exports = {
  phonemes: phonemes,
  groups: GROUPS,
  quizWords: quizWords,
  plan: plan,
  resources: resources,
  getCheckins: getCheckins,
  toggleCheckin: toggleCheckin,
  audioId: audioId
};
