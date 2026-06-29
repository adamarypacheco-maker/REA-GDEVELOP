gdjs.certificadoCode = {};
gdjs.certificadoCode.localVariables = [];
gdjs.certificadoCode.idToCallbackMap = new Map();
gdjs.certificadoCode.GDNewTiledSpriteObjects1= [];
gdjs.certificadoCode.GDNewTiledSpriteObjects2= [];
gdjs.certificadoCode.GDNewTiledSprite2Objects1= [];
gdjs.certificadoCode.GDNewTiledSprite2Objects2= [];
gdjs.certificadoCode.GDNewTiledSprite3Objects1= [];
gdjs.certificadoCode.GDNewTiledSprite3Objects2= [];
gdjs.certificadoCode.GDBlueButtonObjects1= [];
gdjs.certificadoCode.GDBlueButtonObjects2= [];
gdjs.certificadoCode.GDPuntos2Objects1= [];
gdjs.certificadoCode.GDPuntos2Objects2= [];
gdjs.certificadoCode.GDvidasObjects1= [];
gdjs.certificadoCode.GDvidasObjects2= [];


gdjs.certificadoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.certificadoCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.certificadoCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.certificadoCode.GDBlueButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.certificadoCode.GDBlueButtonObjects1[k] = gdjs.certificadoCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.certificadoCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Panel", false);
}
}

}


};

gdjs.certificadoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.certificadoCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.certificadoCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.certificadoCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.certificadoCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.certificadoCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.certificadoCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.certificadoCode.GDBlueButtonObjects1.length = 0;
gdjs.certificadoCode.GDBlueButtonObjects2.length = 0;
gdjs.certificadoCode.GDPuntos2Objects1.length = 0;
gdjs.certificadoCode.GDPuntos2Objects2.length = 0;
gdjs.certificadoCode.GDvidasObjects1.length = 0;
gdjs.certificadoCode.GDvidasObjects2.length = 0;

gdjs.certificadoCode.eventsList0(runtimeScene);
gdjs.certificadoCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.certificadoCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.certificadoCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.certificadoCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.certificadoCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.certificadoCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.certificadoCode.GDBlueButtonObjects1.length = 0;
gdjs.certificadoCode.GDBlueButtonObjects2.length = 0;
gdjs.certificadoCode.GDPuntos2Objects1.length = 0;
gdjs.certificadoCode.GDPuntos2Objects2.length = 0;
gdjs.certificadoCode.GDvidasObjects1.length = 0;
gdjs.certificadoCode.GDvidasObjects2.length = 0;


return;

}

gdjs['certificadoCode'] = gdjs.certificadoCode;
