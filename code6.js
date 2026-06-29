gdjs.aprendizajeCode = {};
gdjs.aprendizajeCode.localVariables = [];
gdjs.aprendizajeCode.idToCallbackMap = new Map();
gdjs.aprendizajeCode.GDNewTiledSpriteObjects1= [];
gdjs.aprendizajeCode.GDNewTiledSpriteObjects2= [];
gdjs.aprendizajeCode.GDNewTiledSprite2Objects1= [];
gdjs.aprendizajeCode.GDNewTiledSprite2Objects2= [];
gdjs.aprendizajeCode.GDBlueButtonObjects1= [];
gdjs.aprendizajeCode.GDBlueButtonObjects2= [];
gdjs.aprendizajeCode.GDPuntos2Objects1= [];
gdjs.aprendizajeCode.GDPuntos2Objects2= [];
gdjs.aprendizajeCode.GDvidasObjects1= [];
gdjs.aprendizajeCode.GDvidasObjects2= [];


gdjs.aprendizajeCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.aprendizajeCode.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.aprendizajeCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.aprendizajeCode.GDBlueButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.aprendizajeCode.GDBlueButtonObjects1[k] = gdjs.aprendizajeCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.aprendizajeCode.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Panel", false);
}
}

}


};

gdjs.aprendizajeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.aprendizajeCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.aprendizajeCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.aprendizajeCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.aprendizajeCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.aprendizajeCode.GDBlueButtonObjects1.length = 0;
gdjs.aprendizajeCode.GDBlueButtonObjects2.length = 0;
gdjs.aprendizajeCode.GDPuntos2Objects1.length = 0;
gdjs.aprendizajeCode.GDPuntos2Objects2.length = 0;
gdjs.aprendizajeCode.GDvidasObjects1.length = 0;
gdjs.aprendizajeCode.GDvidasObjects2.length = 0;

gdjs.aprendizajeCode.eventsList0(runtimeScene);
gdjs.aprendizajeCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.aprendizajeCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.aprendizajeCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.aprendizajeCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.aprendizajeCode.GDBlueButtonObjects1.length = 0;
gdjs.aprendizajeCode.GDBlueButtonObjects2.length = 0;
gdjs.aprendizajeCode.GDPuntos2Objects1.length = 0;
gdjs.aprendizajeCode.GDPuntos2Objects2.length = 0;
gdjs.aprendizajeCode.GDvidasObjects1.length = 0;
gdjs.aprendizajeCode.GDvidasObjects2.length = 0;


return;

}

gdjs['aprendizajeCode'] = gdjs.aprendizajeCode;
