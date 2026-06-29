gdjs.Cr_233ditosCode = {};
gdjs.Cr_233ditosCode.localVariables = [];
gdjs.Cr_233ditosCode.idToCallbackMap = new Map();
gdjs.Cr_233ditosCode.GDFondoObjects1= [];
gdjs.Cr_233ditosCode.GDFondoObjects2= [];
gdjs.Cr_233ditosCode.GDNewTiledSpriteObjects1= [];
gdjs.Cr_233ditosCode.GDNewTiledSpriteObjects2= [];
gdjs.Cr_233ditosCode.GDmenuObjects1= [];
gdjs.Cr_233ditosCode.GDmenuObjects2= [];
gdjs.Cr_233ditosCode.GDPuntos2Objects1= [];
gdjs.Cr_233ditosCode.GDPuntos2Objects2= [];
gdjs.Cr_233ditosCode.GDvidasObjects1= [];
gdjs.Cr_233ditosCode.GDvidasObjects2= [];


gdjs.Cr_233ditosCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.Cr_233ditosCode.GDmenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Cr_233ditosCode.GDmenuObjects1.length;i<l;++i) {
    if ( gdjs.Cr_233ditosCode.GDmenuObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Cr_233ditosCode.GDmenuObjects1[k] = gdjs.Cr_233ditosCode.GDmenuObjects1[i];
        ++k;
    }
}
gdjs.Cr_233ditosCode.GDmenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "aprendizaje", false);
}
}

}


};

gdjs.Cr_233ditosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cr_233ditosCode.GDFondoObjects1.length = 0;
gdjs.Cr_233ditosCode.GDFondoObjects2.length = 0;
gdjs.Cr_233ditosCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Cr_233ditosCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Cr_233ditosCode.GDmenuObjects1.length = 0;
gdjs.Cr_233ditosCode.GDmenuObjects2.length = 0;
gdjs.Cr_233ditosCode.GDPuntos2Objects1.length = 0;
gdjs.Cr_233ditosCode.GDPuntos2Objects2.length = 0;
gdjs.Cr_233ditosCode.GDvidasObjects1.length = 0;
gdjs.Cr_233ditosCode.GDvidasObjects2.length = 0;

gdjs.Cr_233ditosCode.eventsList0(runtimeScene);
gdjs.Cr_233ditosCode.GDFondoObjects1.length = 0;
gdjs.Cr_233ditosCode.GDFondoObjects2.length = 0;
gdjs.Cr_233ditosCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Cr_233ditosCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Cr_233ditosCode.GDmenuObjects1.length = 0;
gdjs.Cr_233ditosCode.GDmenuObjects2.length = 0;
gdjs.Cr_233ditosCode.GDPuntos2Objects1.length = 0;
gdjs.Cr_233ditosCode.GDPuntos2Objects2.length = 0;
gdjs.Cr_233ditosCode.GDvidasObjects1.length = 0;
gdjs.Cr_233ditosCode.GDvidasObjects2.length = 0;


return;

}

gdjs['Cr_233ditosCode'] = gdjs.Cr_233ditosCode;
