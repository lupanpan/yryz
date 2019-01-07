/**
 * Created by lupan on 2018/12/18.
 */
var textureDetailPage = function () {
    return this;
}

//初始化
textureDetailPage.prototype.init = function () {
    //设置购买枕头列表数据
    this.setData();
    //设置购买枕头列表数据
    this.setDataListHtml();
    //初始化事件
    this.initEvent();
}

//枕头列表数据
textureDetailPage.prototype.setData = function () {
    this.listData = {
        'pink':{
            'name': '粉色TPE弹性体',
            'headImg' : 'texture-head1.png',
            'textureImg' : 'textureDetail-pink-img.png',
            'title' : 'PE+TPE 弹性体',
            'subtitle' : 'PE+TPE Elastomer',
            'color' : 'Pink',
            'textureHead2' : 'textureDetail-pink-head2.png',
            'feature' : 'VCollection从日本精心选购的PE+TPE弹性体是一种热塑性弹性体材料，具有高强度高回弹性，环保无毒触感柔软等特点由于拥有舒适的手感，广泛用于人造皮肤通过欧盟EU-10/2011食品级测试标准及欧盟RoHS环保安全标准。 中医养生云：头凉脚热七分饱在睡眠时，头部保持低温有效降低大脑皮层活跃度利于大脑皮层休息。软管枕具有透气排热的特点，能够有效排出枕头内的热量，保持枕头内部温度提高睡眠质量。',
            'suitableCrowd' : '颈椎不舒服，长时间坐姿工作压力大年轻人'

        },
        'white': {
            'name': '芝士乳胶条',
            'headImg': 'textureDetail-white-head.png',
            'textureImg': 'textureDetail-white-img.png',
            'title': '芝士乳胶条',
            'subtitle': 'Charcoal  Elastomer+Incienso',
            'color': 'white',
            'textureHead2': 'textureDetail-white-hardness.png',
            'feature': 'VCollection Team精心选择的“天然芝士乳胶条”（天然乳胶含量达百分之八十）是乳胶枕品类中全新的呈现形式整块的乳胶被冲压成条状，保持了所有乳胶的优势的同时可以最方便的取出和填充给你最方便的高度调节方式，弹性好，有乳胶独特气味，很好的吸湿性和透气性无污染无毒',
            'suitableCrowd' : '颈椎不舒服，长时间坐姿工作压力大年轻人'
        },
        'lightbrown': {
            'name': '白色TPE弹体',
            'headImg': 'textureDetail-lightbrown-head.png',
            'textureImg': 'textureDetail-lightbrown-img.png',
            'title': 'PE+TPE弹性体',
            'subtitle': 'PE+TPE  Elastomer',
            'color': 'White',
            'hardnessImg': 'textureDetail-lightbrown-hardness.png',
            'elasticityImg': 'textureDetail-lightbrown-elasticity.png',
            'feature': 'PE+TPE弹性体是一种热塑性弹性体材料中空管状弹性体在提供完美支撑力的同时有良好的透气性除螨抑菌触感柔软，环保无味极易清洁。具有高强度，高回弹性等特点，由于拥有舒适的手感，广泛用于人造皮肤通过欧盟EU-10/2011食品级测试标准及欧盟RoHS环保安全标准。在睡眠时，头部保持低温，有效降低大脑皮层活跃度，利于大脑皮层休息。软管枕具有透气排热的特点，能够有效排出枕头内的热量，保持枕头内部温度提高睡眠质量',
            'suitableCrowd': '颈椎不舒服，长时间坐姿工作压力大年轻人',
            'washingMethod': '可水洗，一般每3-6个月清洗一次即可，洗后脱水后用电扇吹干平铺晾干或烘箱低温烘干。切忌日晒，日晒会使其弹性降低，使用寿命缩短'
        }
    }
}

//数据列表
textureDetailPage.prototype.setDataListHtml = function () {
    var htmlArr = [];

    //获取链接重的参数
    var type = window.location.href.split('?')[1].split('=')[1];
    //获取对应的数据
    var data = this.listData[type];

    var htmlArr = [];

        <!--顶部图片-->
        htmlArr.push('<img class="texture-head1" src="../images/' + data.headImg + ' ">');

        <!--中间材质部分-->
        htmlArr.push('<div class="texture-name-wrap">');
        htmlArr.push('<img class="texture-name-img" src="../images/' + data.textureImg + '">');
        htmlArr.push('<div class="texture-name">');
        htmlArr.push('<p class="texture-title">' + data.title + '</p>');
        htmlArr.push('<p class="texture-subtitle">' + data.subtitle + '</p>');
        htmlArr.push('<p class="texture-color">颜色 Color: ' + data.subtitle + '</p>');
        htmlArr.push('</div>');
        htmlArr.push('</div>');
        <!--顶部图片2-->
        htmlArr.push('<img class="texture-head2" src="../images/' + data.textureHead2 + '">');

        <!--介绍部分-->
        htmlArr.push('<div class="texture-text-wrap fix">');
        <!--特性-->
        htmlArr.push('<div class="texture-text-line fix">');
        <!--左侧名称部分-->
        htmlArr.push('<div class="texture-text-name">');
        htmlArr.push('<div class="texture-name-title">特性：</div>');
        htmlArr.push('<div class="texture-name-subtitle">Feature</div>');
        htmlArr.push('</div>');

        <!--右侧描述部分-->
        htmlArr.push('<div class="texture-desc">');
        htmlArr.push('<p> ' + data.feature+ '</p>');
        htmlArr.push('</div>');
        htmlArr.push('</div>');
        <!--适宜人群-->
        htmlArr.push('<div class="texture-text-line fix">');
        <!--左侧名称部分-->
        htmlArr.push('<div class="texture-text-name">');
        htmlArr.push('<div class="texture-name-title">适宜人群:</div>');
        htmlArr.push('<div class="texture-name-subtitle">Suitable Crowd</div>')
        htmlArr.push('</div>');
        <!--右侧描述部分-->
        htmlArr.push('<div class="texture-desc">');
        htmlArr.push('<p> ' + data.suitableCrowd+ ' </p>');
        htmlArr.push('</div>');
        htmlArr.push('</div>');
        htmlArr.push('</div>');

        $('.main').html(htmlArr.join(''));
}


//初始化事件
textureDetailPage.prototype.initEvent = function () {

}

$(function () {
    var textureDetailPageObj = new textureDetailPage();
    textureDetailPageObj.init();
})