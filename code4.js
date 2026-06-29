gdjs.Bien_32Pregunta1Code = {};
gdjs.Bien_32Pregunta1Code.localVariables = [];
gdjs.Bien_32Pregunta1Code.idToCallbackMap = new Map();
gdjs.Bien_32Pregunta1Code.GDNewTiledSpriteObjects1= [];
gdjs.Bien_32Pregunta1Code.GDNewTiledSpriteObjects2= [];
gdjs.Bien_32Pregunta1Code.GDNewTiledSprite2Objects1= [];
gdjs.Bien_32Pregunta1Code.GDNewTiledSprite2Objects2= [];
gdjs.Bien_32Pregunta1Code.GDNewTiledSprite3Objects1= [];
gdjs.Bien_32Pregunta1Code.GDNewTiledSprite3Objects2= [];
gdjs.Bien_32Pregunta1Code.GDBlueButtonObjects1= [];
gdjs.Bien_32Pregunta1Code.GDBlueButtonObjects2= [];
gdjs.Bien_32Pregunta1Code.GDPuntos2Objects1= [];
gdjs.Bien_32Pregunta1Code.GDPuntos2Objects2= [];
gdjs.Bien_32Pregunta1Code.GDvidasObjects1= [];
gdjs.Bien_32Pregunta1Code.GDvidasObjects2= [];


gdjs.Bien_32Pregunta1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.Bien_32Pregunta1Code.GDBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bien_32Pregunta1Code.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.Bien_32Pregunta1Code.GDBlueButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Bien_32Pregunta1Code.GDBlueButtonObjects1[k] = gdjs.Bien_32Pregunta1Code.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.Bien_32Pregunta1Code.GDBlueButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "certificado", false);
}
}

}


};

gdjs.Bien_32Pregunta1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Bien_32Pregunta1Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Bien_32Pregunta1Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Bien_32Pregunta1Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Bien_32Pregunta1Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Bien_32Pregunta1Code.GDNewTiledSprite3Objects1.length = 0;
gdjs.Bien_32Pregunta1Code.GDNewTiledSprite3Objects2.length = 0;
gdjs.Bien_32Pregunta1Code.GDBlueButtonObjects1.length = 0;
gdjs.Bien_32Pregunta1Code.GDBlueButtonObjects2.length = 0;
gdjs.Bien_32Pregunta1Code.GDPuntos2Objects1.length = 0;
gdjs.Bien_32Pregunta1Code.GDPuntos2Objects2.length = 0;
gdjs.Bien_32Pregunta1Code.GDvidasObjects1.length = 0;
gdjs.Bien_32Pregunta1Code.GDvidasObjects2.length = 0;

gdjs.Bien_32Pregunta1Code.eventsList0(runtimeScene);
gdjs.Bien_32Pregunta1Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Bien_32Pregunta1Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Bien_32Pregunta1Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Bien_32Pregunta1Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Bien_32Pregunta1Code.GDNewTiledSprite3Objects1.length = 0;
gdjs.Bien_32Pregunta1Code.GDNewTiledSprite3Objects2.length = 0;
gdjs.Bien_32Pregunta1Code.GDBlueButtonObjects1.length = 0;
gdjs.Bien_32Pregunta1Code.GDBlueButtonObjects2.length = 0;
gdjs.Bien_32Pregunta1Code.GDPuntos2Objects1.length = 0;
gdjs.Bien_32Pregunta1Code.GDPuntos2Objects2.length = 0;
gdjs.Bien_32Pregunta1Code.GDvidasObjects1.length = 0;
gdjs.Bien_32Pregunta1Code.GDvidasObjects2.length = 0;


return;

}

gdjs['Bien_32Pregunta1Code'] = gdjs.Bien_32Pregunta1Code;
