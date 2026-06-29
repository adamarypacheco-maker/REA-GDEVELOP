gdjs.Conten_32ido2Code = {};
gdjs.Conten_32ido2Code.localVariables = [];
gdjs.Conten_32ido2Code.idToCallbackMap = new Map();
gdjs.Conten_32ido2Code.GDNewTiledSpriteObjects1= [];
gdjs.Conten_32ido2Code.GDNewTiledSpriteObjects2= [];
gdjs.Conten_32ido2Code.GDNewTiledSprite2Objects1= [];
gdjs.Conten_32ido2Code.GDNewTiledSprite2Objects2= [];
gdjs.Conten_32ido2Code.GDSiguienteObjects1= [];
gdjs.Conten_32ido2Code.GDSiguienteObjects2= [];
gdjs.Conten_32ido2Code.GDPuntos2Objects1= [];
gdjs.Conten_32ido2Code.GDPuntos2Objects2= [];
gdjs.Conten_32ido2Code.GDvidasObjects1= [];
gdjs.Conten_32ido2Code.GDvidasObjects2= [];


gdjs.Conten_32ido2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs.Conten_32ido2Code.GDSiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Conten_32ido2Code.GDSiguienteObjects1.length;i<l;++i) {
    if ( gdjs.Conten_32ido2Code.GDSiguienteObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Conten_32ido2Code.GDSiguienteObjects1[k] = gdjs.Conten_32ido2Code.GDSiguienteObjects1[i];
        ++k;
    }
}
gdjs.Conten_32ido2Code.GDSiguienteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Contenido3", false);
}
}

}


};

gdjs.Conten_32ido2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Conten_32ido2Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Conten_32ido2Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Conten_32ido2Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Conten_32ido2Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Conten_32ido2Code.GDSiguienteObjects1.length = 0;
gdjs.Conten_32ido2Code.GDSiguienteObjects2.length = 0;
gdjs.Conten_32ido2Code.GDPuntos2Objects1.length = 0;
gdjs.Conten_32ido2Code.GDPuntos2Objects2.length = 0;
gdjs.Conten_32ido2Code.GDvidasObjects1.length = 0;
gdjs.Conten_32ido2Code.GDvidasObjects2.length = 0;

gdjs.Conten_32ido2Code.eventsList0(runtimeScene);
gdjs.Conten_32ido2Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Conten_32ido2Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Conten_32ido2Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Conten_32ido2Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Conten_32ido2Code.GDSiguienteObjects1.length = 0;
gdjs.Conten_32ido2Code.GDSiguienteObjects2.length = 0;
gdjs.Conten_32ido2Code.GDPuntos2Objects1.length = 0;
gdjs.Conten_32ido2Code.GDPuntos2Objects2.length = 0;
gdjs.Conten_32ido2Code.GDvidasObjects1.length = 0;
gdjs.Conten_32ido2Code.GDvidasObjects2.length = 0;


return;

}

gdjs['Conten_32ido2Code'] = gdjs.Conten_32ido2Code;
