gdjs.Mal_32pregunta1Code = {};
gdjs.Mal_32pregunta1Code.localVariables = [];
gdjs.Mal_32pregunta1Code.idToCallbackMap = new Map();
gdjs.Mal_32pregunta1Code.GDNewTiledSpriteObjects1= [];
gdjs.Mal_32pregunta1Code.GDNewTiledSpriteObjects2= [];
gdjs.Mal_32pregunta1Code.GDNewTiledSprite2Objects1= [];
gdjs.Mal_32pregunta1Code.GDNewTiledSprite2Objects2= [];
gdjs.Mal_32pregunta1Code.GDBlueButtonObjects1= [];
gdjs.Mal_32pregunta1Code.GDBlueButtonObjects2= [];
gdjs.Mal_32pregunta1Code.GDPuntos2Objects1= [];
gdjs.Mal_32pregunta1Code.GDPuntos2Objects2= [];
gdjs.Mal_32pregunta1Code.GDvidasObjects1= [];
gdjs.Mal_32pregunta1Code.GDvidasObjects2= [];


gdjs.Mal_32pregunta1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.Mal_32pregunta1Code.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Mal_32pregunta1Code.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.Mal_32pregunta1Code.GDBlueButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Mal_32pregunta1Code.GDBlueButtonObjects1[k] = gdjs.Mal_32pregunta1Code.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.Mal_32pregunta1Code.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Panel", false);
}
}

}


};

gdjs.Mal_32pregunta1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Mal_32pregunta1Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Mal_32pregunta1Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Mal_32pregunta1Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Mal_32pregunta1Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Mal_32pregunta1Code.GDBlueButtonObjects1.length = 0;
gdjs.Mal_32pregunta1Code.GDBlueButtonObjects2.length = 0;
gdjs.Mal_32pregunta1Code.GDPuntos2Objects1.length = 0;
gdjs.Mal_32pregunta1Code.GDPuntos2Objects2.length = 0;
gdjs.Mal_32pregunta1Code.GDvidasObjects1.length = 0;
gdjs.Mal_32pregunta1Code.GDvidasObjects2.length = 0;

gdjs.Mal_32pregunta1Code.eventsList0(runtimeScene);
gdjs.Mal_32pregunta1Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Mal_32pregunta1Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Mal_32pregunta1Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Mal_32pregunta1Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Mal_32pregunta1Code.GDBlueButtonObjects1.length = 0;
gdjs.Mal_32pregunta1Code.GDBlueButtonObjects2.length = 0;
gdjs.Mal_32pregunta1Code.GDPuntos2Objects1.length = 0;
gdjs.Mal_32pregunta1Code.GDPuntos2Objects2.length = 0;
gdjs.Mal_32pregunta1Code.GDvidasObjects1.length = 0;
gdjs.Mal_32pregunta1Code.GDvidasObjects2.length = 0;


return;

}

gdjs['Mal_32pregunta1Code'] = gdjs.Mal_32pregunta1Code;
