
// 分类
const keyMap = {
    // 明星
    'start': '5109e05248d5b9368bb559dc',
    // 物语
    'story': '4fb47a465ba1c65561000028',
    // 男人
    'man': '4e4d610cdf714d2966000006',
    // 机械
    'machine': '4e4d610cdf714d2966000005',
    // 城市
    'city': '4fb47a305ba1c60ca5000223',
    // 动物
    'animal': '4e4d610cdf714d2966000001',
    // 设计
    'design': '4fb47a195ba1c60ca5000222',
    // 情感
    'emotion': '4ef0a35c0569795756000000',
    //视觉
    'view': '4fb479f75ba1c65561000027',
    // 文字
    'word': '5109e04e48d5b9364ae9ac45',
    //游戏
    'game': '4e4d610cdf714d2966000007',
    //风景
    'scenery': '4e4d610cdf714d2966000002',
    // 动漫
    'comic': '4e4d610cdf714d2966000003',
    // 美女
    'beauty': '4e4d610cdf714d2966000000',

}
// 根据传入的分类名, pageSize默认10, pageStart 默认1，返回对应的分类id 然后拼接成一个url
// url 组成规则为 https://wallpaper.shiyongmodule.com/v1/vertical/category/{分类id}//vertical?appver=2.1.19&limit={pageSize}&skip={pageStart}
const getUrl = (category, pageSize = 10, pageStart = 1) => {
    // 如果传入的分类名不在keyMap中，返回beauty分类
    if (!keyMap[category]) {
        category = 'beauty';
    }
    const categoryId = keyMap[category];
    return `https://wallpaper.shiyongmodule.com/v1/vertical/category/${categoryId}/vertical?appver=2.1.19&limit=${pageSize}&skip=${pageStart}`
}

module.exports = {
    getUrl
}