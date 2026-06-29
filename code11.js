gdjs.Contenido4Code = {};
gdjs.Contenido4Code.localVariables = [];
gdjs.Contenido4Code.idToCallbackMap = new Map();
gdjs.Contenido4Code.GDNewTiledSpriteObjects1= [];
gdjs.Contenido4Code.GDNewTiledSpriteObjects2= [];
gdjs.Contenido4Code.GDNewTiledSprite2Objects1= [];
gdjs.Contenido4Code.GDNewTiledSprite2Objects2= [];
gdjs.Contenido4Code.GDSiguienteObjects1= [];
gdjs.Contenido4Code.GDSiguienteObjects2= [];
gdjs.Contenido4Code.GDPuntos2Objects1= [];
gdjs.Contenido4Code.GDPuntos2Objects2= [];
gdjs.Contenido4Code.GDvidasObjects1= [];
gdjs.Contenido4Code.GDvidasObjects2= [];


gdjs.Contenido4Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs.Contenido4Code.GDSiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Contenido4Code.GDSiguienteObjects1.length;i<l;++i) {
    if ( gdjs.Contenido4Code.GDSiguienteObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Contenido4Code.GDSiguienteObjects1[k] = gdjs.Contenido4Code.GDSiguienteObjects1[i];
        ++k;
    }
}
gdjs.Contenido4Code.GDSiguienteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Contenido5", false);
}
}

}


};

gdjs.Contenido4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Contenido4Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Contenido4Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Contenido4Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Contenido4Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Contenido4Code.GDSiguienteObjects1.length = 0;
gdjs.Contenido4Code.GDSiguienteObjects2.length = 0;
gdjs.Contenido4Code.GDPuntos2Objects1.length = 0;
gdjs.Contenido4Code.GDPuntos2Objects2.length = 0;
gdjs.Contenido4Code.GDvidasObjects1.length = 0;
gdjs.Contenido4Code.GDvidasObjects2.length = 0;

gdjs.Contenido4Code.eventsList0(runtimeScene);
gdjs.Contenido4Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Contenido4Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Contenido4Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.Contenido4Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.Contenido4Code.GDSiguienteObjects1.length = 0;
gdjs.Contenido4Code.GDSiguienteObjects2.length = 0;
gdjs.Contenido4Code.GDPuntos2Objects1.length = 0;
gdjs.Contenido4Code.GDPuntos2Objects2.length = 0;
gdjs.Contenido4Code.GDvidasObjects1.length = 0;
gdjs.Contenido4Code.GDvidasObjects2.length = 0;


return;

}

gdjs['Contenido4Code'] = gdjs.Contenido4Code;
