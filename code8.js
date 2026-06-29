gdjs.Contenido1Code = {};
gdjs.Contenido1Code.localVariables = [];
gdjs.Contenido1Code.idToCallbackMap = new Map();
gdjs.Contenido1Code.GDNewTiledSpriteObjects1= [];
gdjs.Contenido1Code.GDNewTiledSpriteObjects2= [];
gdjs.Contenido1Code.GDContenido_95951Objects1= [];
gdjs.Contenido1Code.GDContenido_95951Objects2= [];
gdjs.Contenido1Code.GDContenido2Objects1= [];
gdjs.Contenido1Code.GDContenido2Objects2= [];
gdjs.Contenido1Code.GDContenido3Objects1= [];
gdjs.Contenido1Code.GDContenido3Objects2= [];
gdjs.Contenido1Code.GDContenido4Objects1= [];
gdjs.Contenido1Code.GDContenido4Objects2= [];
gdjs.Contenido1Code.GDSiguienteObjects1= [];
gdjs.Contenido1Code.GDSiguienteObjects2= [];
gdjs.Contenido1Code.GDPuntos2Objects1= [];
gdjs.Contenido1Code.GDPuntos2Objects2= [];
gdjs.Contenido1Code.GDvidasObjects1= [];
gdjs.Contenido1Code.GDvidasObjects2= [];


gdjs.Contenido1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Siguiente"), gdjs.Contenido1Code.GDSiguienteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Contenido1Code.GDSiguienteObjects1.length;i<l;++i) {
    if ( gdjs.Contenido1Code.GDSiguienteObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Contenido1Code.GDSiguienteObjects1[k] = gdjs.Contenido1Code.GDSiguienteObjects1[i];
        ++k;
    }
}
gdjs.Contenido1Code.GDSiguienteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Conten ido2", false);
}
}

}


};

gdjs.Contenido1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Contenido1Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Contenido1Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Contenido1Code.GDContenido_95951Objects1.length = 0;
gdjs.Contenido1Code.GDContenido_95951Objects2.length = 0;
gdjs.Contenido1Code.GDContenido2Objects1.length = 0;
gdjs.Contenido1Code.GDContenido2Objects2.length = 0;
gdjs.Contenido1Code.GDContenido3Objects1.length = 0;
gdjs.Contenido1Code.GDContenido3Objects2.length = 0;
gdjs.Contenido1Code.GDContenido4Objects1.length = 0;
gdjs.Contenido1Code.GDContenido4Objects2.length = 0;
gdjs.Contenido1Code.GDSiguienteObjects1.length = 0;
gdjs.Contenido1Code.GDSiguienteObjects2.length = 0;
gdjs.Contenido1Code.GDPuntos2Objects1.length = 0;
gdjs.Contenido1Code.GDPuntos2Objects2.length = 0;
gdjs.Contenido1Code.GDvidasObjects1.length = 0;
gdjs.Contenido1Code.GDvidasObjects2.length = 0;

gdjs.Contenido1Code.eventsList0(runtimeScene);
gdjs.Contenido1Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Contenido1Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Contenido1Code.GDContenido_95951Objects1.length = 0;
gdjs.Contenido1Code.GDContenido_95951Objects2.length = 0;
gdjs.Contenido1Code.GDContenido2Objects1.length = 0;
gdjs.Contenido1Code.GDContenido2Objects2.length = 0;
gdjs.Contenido1Code.GDContenido3Objects1.length = 0;
gdjs.Contenido1Code.GDContenido3Objects2.length = 0;
gdjs.Contenido1Code.GDContenido4Objects1.length = 0;
gdjs.Contenido1Code.GDContenido4Objects2.length = 0;
gdjs.Contenido1Code.GDSiguienteObjects1.length = 0;
gdjs.Contenido1Code.GDSiguienteObjects2.length = 0;
gdjs.Contenido1Code.GDPuntos2Objects1.length = 0;
gdjs.Contenido1Code.GDPuntos2Objects2.length = 0;
gdjs.Contenido1Code.GDvidasObjects1.length = 0;
gdjs.Contenido1Code.GDvidasObjects2.length = 0;


return;

}

gdjs['Contenido1Code'] = gdjs.Contenido1Code;
