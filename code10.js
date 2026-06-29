gdjs.Contenido3Code = {};
gdjs.Contenido3Code.localVariables = [];
gdjs.Contenido3Code.idToCallbackMap = new Map();
gdjs.Contenido3Code.GDNewTiledSpriteObjects1= [];
gdjs.Contenido3Code.GDNewTiledSpriteObjects2= [];
gdjs.Contenido3Code.GDNewTiledSprite2Objects1= [];
gdjs.Contenido3Code.GDNewTiledSprite2Objects2= [];
gdjs.Contenido3Code.GDSiguienteObjects1= [];
gdjs.Contenido3Code.GDSiguienteObjects2= [];
gdjs.Contenido3Code.GDPuntos2Objects1= [];
gdjs.Contenido3Code.GDPuntos2Objects2= [];
gdjs.Contenido3Code.GDvidasObjects1= [];
gdjs.Contenido3Code.GDvidasObjects2= [];


gdjs.Contenido3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs.Contenido3Code.GDSiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Contenido3Code.GDSiguienteObjects1.length;i<l;++i) {
    if ( gdjs.Contenido3Code.GDSiguienteObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Contenido3Code.GDSiguienteObjects1[k] = gdjs.Contenido3Code.GDSiguienteObjects1[i];
        ++k;
    }
}
gdjs.Contenido3Code.GDSiguienteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Contenido4", false);
}
}

}


};

gdjs.Contenido3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Contenido3Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Contenido3Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Contenido3Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Contenido3Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Contenido3Code.GDSiguienteObjects1.length = 0;
gdjs.Contenido3Code.GDSiguienteObjects2.length = 0;
gdjs.Contenido3Code.GDPuntos2Objects1.length = 0;
gdjs.Contenido3Code.GDPuntos2Objects2.length = 0;
gdjs.Contenido3Code.GDvidasObjects1.length = 0;
gdjs.Contenido3Code.GDvidasObjects2.length = 0;

gdjs.Contenido3Code.eventsList0(runtimeScene);
gdjs.Contenido3Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Contenido3Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Contenido3Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Contenido3Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Contenido3Code.GDSiguienteObjects1.length = 0;
gdjs.Contenido3Code.GDSiguienteObjects2.length = 0;
gdjs.Contenido3Code.GDPuntos2Objects1.length = 0;
gdjs.Contenido3Code.GDPuntos2Objects2.length = 0;
gdjs.Contenido3Code.GDvidasObjects1.length = 0;
gdjs.Contenido3Code.GDvidasObjects2.length = 0;


return;

}

gdjs['Contenido3Code'] = gdjs.Contenido3Code;
