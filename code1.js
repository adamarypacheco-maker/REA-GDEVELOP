gdjs.PanelCode = {};
gdjs.PanelCode.localVariables = [];
gdjs.PanelCode.idToCallbackMap = new Map();
gdjs.PanelCode.GDFondoObjects1= [];
gdjs.PanelCode.GDFondoObjects2= [];
gdjs.PanelCode.GDCreditosObjects1= [];
gdjs.PanelCode.GDCreditosObjects2= [];
gdjs.PanelCode.GDbot_95243n_9595contenidosObjects1= [];
gdjs.PanelCode.GDbot_95243n_9595contenidosObjects2= [];
gdjs.PanelCode.GDMenuObjects1= [];
gdjs.PanelCode.GDMenuObjects2= [];
gdjs.PanelCode.GDbot_95243n_9595juegoObjects1= [];
gdjs.PanelCode.GDbot_95243n_9595juegoObjects2= [];
gdjs.PanelCode.GDbot_95243n_9595creditosObjects1= [];
gdjs.PanelCode.GDbot_95243n_9595creditosObjects2= [];
gdjs.PanelCode.GDbot_95243n_9595pruebadiagnosticaObjects1= [];
gdjs.PanelCode.GDbot_95243n_9595pruebadiagnosticaObjects2= [];
gdjs.PanelCode.GDPuntos2Objects1= [];
gdjs.PanelCode.GDPuntos2Objects2= [];
gdjs.PanelCode.GDvidasObjects1= [];
gdjs.PanelCode.GDvidasObjects2= [];


gdjs.PanelCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("botón_creditos"), gdjs.PanelCode.GDbot_95243n_9595creditosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PanelCode.GDbot_95243n_9595creditosObjects1.length;i<l;++i) {
    if ( gdjs.PanelCode.GDbot_95243n_9595creditosObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.PanelCode.GDbot_95243n_9595creditosObjects1[k] = gdjs.PanelCode.GDbot_95243n_9595creditosObjects1[i];
        ++k;
    }
}
gdjs.PanelCode.GDbot_95243n_9595creditosObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Créditos", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("botón_pruebadiagnostica"), gdjs.PanelCode.GDbot_95243n_9595pruebadiagnosticaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PanelCode.GDbot_95243n_9595pruebadiagnosticaObjects1.length;i<l;++i) {
    if ( gdjs.PanelCode.GDbot_95243n_9595pruebadiagnosticaObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.PanelCode.GDbot_95243n_9595pruebadiagnosticaObjects1[k] = gdjs.PanelCode.GDbot_95243n_9595pruebadiagnosticaObjects1[i];
        ++k;
    }
}
gdjs.PanelCode.GDbot_95243n_9595pruebadiagnosticaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Prueba Diagnostica", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("botón_contenidos"), gdjs.PanelCode.GDbot_95243n_9595contenidosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PanelCode.GDbot_95243n_9595contenidosObjects1.length;i<l;++i) {
    if ( gdjs.PanelCode.GDbot_95243n_9595contenidosObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.PanelCode.GDbot_95243n_9595contenidosObjects1[k] = gdjs.PanelCode.GDbot_95243n_9595contenidosObjects1[i];
        ++k;
    }
}
gdjs.PanelCode.GDbot_95243n_9595contenidosObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Contenido1", false);
}
}

}


};

gdjs.PanelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PanelCode.GDFondoObjects1.length = 0;
gdjs.PanelCode.GDFondoObjects2.length = 0;
gdjs.PanelCode.GDCreditosObjects1.length = 0;
gdjs.PanelCode.GDCreditosObjects2.length = 0;
gdjs.PanelCode.GDbot_95243n_9595contenidosObjects1.length = 0;
gdjs.PanelCode.GDbot_95243n_9595contenidosObjects2.length = 0;
gdjs.PanelCode.GDMenuObjects1.length = 0;
gdjs.PanelCode.GDMenuObjects2.length = 0;
gdjs.PanelCode.GDbot_95243n_9595juegoObjects1.length = 0;
gdjs.PanelCode.GDbot_95243n_9595juegoObjects2.length = 0;
gdjs.PanelCode.GDbot_95243n_9595creditosObjects1.length = 0;
gdjs.PanelCode.GDbot_95243n_9595creditosObjects2.length = 0;
gdjs.PanelCode.GDbot_95243n_9595pruebadiagnosticaObjects1.length = 0;
gdjs.PanelCode.GDbot_95243n_9595pruebadiagnosticaObjects2.length = 0;
gdjs.PanelCode.GDPuntos2Objects1.length = 0;
gdjs.PanelCode.GDPuntos2Objects2.length = 0;
gdjs.PanelCode.GDvidasObjects1.length = 0;
gdjs.PanelCode.GDvidasObjects2.length = 0;

gdjs.PanelCode.eventsList0(runtimeScene);
gdjs.PanelCode.GDFondoObjects1.length = 0;
gdjs.PanelCode.GDFondoObjects2.length = 0;
gdjs.PanelCode.GDCreditosObjects1.length = 0;
gdjs.PanelCode.GDCreditosObjects2.length = 0;
gdjs.PanelCode.GDbot_95243n_9595contenidosObjects1.length = 0;
gdjs.PanelCode.GDbot_95243n_9595contenidosObjects2.length = 0;
gdjs.PanelCode.GDMenuObjects1.length = 0;
gdjs.PanelCode.GDMenuObjects2.length = 0;
gdjs.PanelCode.GDbot_95243n_9595juegoObjects1.length = 0;
gdjs.PanelCode.GDbot_95243n_9595juegoObjects2.length = 0;
gdjs.PanelCode.GDbot_95243n_9595creditosObjects1.length = 0;
gdjs.PanelCode.GDbot_95243n_9595creditosObjects2.length = 0;
gdjs.PanelCode.GDbot_95243n_9595pruebadiagnosticaObjects1.length = 0;
gdjs.PanelCode.GDbot_95243n_9595pruebadiagnosticaObjects2.length = 0;
gdjs.PanelCode.GDPuntos2Objects1.length = 0;
gdjs.PanelCode.GDPuntos2Objects2.length = 0;
gdjs.PanelCode.GDvidasObjects1.length = 0;
gdjs.PanelCode.GDvidasObjects2.length = 0;


return;

}

gdjs['PanelCode'] = gdjs.PanelCode;
