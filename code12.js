gdjs.Contenido5Code = {};
gdjs.Contenido5Code.localVariables = [];
gdjs.Contenido5Code.idToCallbackMap = new Map();
gdjs.Contenido5Code.GDNewTiledSpriteObjects1= [];
gdjs.Contenido5Code.GDNewTiledSpriteObjects2= [];
gdjs.Contenido5Code.GDNewTiledSprite2Objects1= [];
gdjs.Contenido5Code.GDNewTiledSprite2Objects2= [];
gdjs.Contenido5Code.GDSiguienteObjects1= [];
gdjs.Contenido5Code.GDSiguienteObjects2= [];
gdjs.Contenido5Code.GDPuntos2Objects1= [];
gdjs.Contenido5Code.GDPuntos2Objects2= [];
gdjs.Contenido5Code.GDvidasObjects1= [];
gdjs.Contenido5Code.GDvidasObjects2= [];


gdjs.Contenido5Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs.Contenido5Code.GDSiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Contenido5Code.GDSiguienteObjects1.length;i<l;++i) {
    if ( gdjs.Contenido5Code.GDSiguienteObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Contenido5Code.GDSiguienteObjects1[k] = gdjs.Contenido5Code.GDSiguienteObjects1[i];
        ++k;
    }
}
gdjs.Contenido5Code.GDSiguienteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Panel", false);
}
}

}


};

gdjs.Contenido5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Contenido5Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Contenido5Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Contenido5Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Contenido5Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Contenido5Code.GDSiguienteObjects1.length = 0;
gdjs.Contenido5Code.GDSiguienteObjects2.length = 0;
gdjs.Contenido5Code.GDPuntos2Objects1.length = 0;
gdjs.Contenido5Code.GDPuntos2Objects2.length = 0;
gdjs.Contenido5Code.GDvidasObjects1.length = 0;
gdjs.Contenido5Code.GDvidasObjects2.length = 0;

gdjs.Contenido5Code.eventsList0(runtimeScene);
gdjs.Contenido5Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Contenido5Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Contenido5Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Contenido5Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Contenido5Code.GDSiguienteObjects1.length = 0;
gdjs.Contenido5Code.GDSiguienteObjects2.length = 0;
gdjs.Contenido5Code.GDPuntos2Objects1.length = 0;
gdjs.Contenido5Code.GDPuntos2Objects2.length = 0;
gdjs.Contenido5Code.GDvidasObjects1.length = 0;
gdjs.Contenido5Code.GDvidasObjects2.length = 0;


return;

}

gdjs['Contenido5Code'] = gdjs.Contenido5Code;
