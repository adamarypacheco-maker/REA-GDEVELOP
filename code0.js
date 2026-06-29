gdjs.PortadaCode = {};
gdjs.PortadaCode.localVariables = [];
gdjs.PortadaCode.idToCallbackMap = new Map();
gdjs.PortadaCode.GDFondoObjects1= [];
gdjs.PortadaCode.GDFondoObjects2= [];
gdjs.PortadaCode.GDPortadaObjects1= [];
gdjs.PortadaCode.GDPortadaObjects2= [];
gdjs.PortadaCode.GDYellowJellyButtonObjects1= [];
gdjs.PortadaCode.GDYellowJellyButtonObjects2= [];
gdjs.PortadaCode.GDPuntos2Objects1= [];
gdjs.PortadaCode.GDPuntos2Objects2= [];
gdjs.PortadaCode.GDvidasObjects1= [];
gdjs.PortadaCode.GDvidasObjects2= [];


gdjs.PortadaCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("YellowJellyButton"), gdjs.PortadaCode.GDYellowJellyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PortadaCode.GDYellowJellyButtonObjects1.length;i<l;++i) {
    if ( gdjs.PortadaCode.GDYellowJellyButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.PortadaCode.GDYellowJellyButtonObjects1[k] = gdjs.PortadaCode.GDYellowJellyButtonObjects1[i];
        ++k;
    }
}
gdjs.PortadaCode.GDYellowJellyButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Panel", false);
}
}

}


};

gdjs.PortadaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PortadaCode.GDFondoObjects1.length = 0;
gdjs.PortadaCode.GDFondoObjects2.length = 0;
gdjs.PortadaCode.GDPortadaObjects1.length = 0;
gdjs.PortadaCode.GDPortadaObjects2.length = 0;
gdjs.PortadaCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.PortadaCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.PortadaCode.GDPuntos2Objects1.length = 0;
gdjs.PortadaCode.GDPuntos2Objects2.length = 0;
gdjs.PortadaCode.GDvidasObjects1.length = 0;
gdjs.PortadaCode.GDvidasObjects2.length = 0;

gdjs.PortadaCode.eventsList0(runtimeScene);
gdjs.PortadaCode.GDFondoObjects1.length = 0;
gdjs.PortadaCode.GDFondoObjects2.length = 0;
gdjs.PortadaCode.GDPortadaObjects1.length = 0;
gdjs.PortadaCode.GDPortadaObjects2.length = 0;
gdjs.PortadaCode.GDYellowJellyButtonObjects1.length = 0;
gdjs.PortadaCode.GDYellowJellyButtonObjects2.length = 0;
gdjs.PortadaCode.GDPuntos2Objects1.length = 0;
gdjs.PortadaCode.GDPuntos2Objects2.length = 0;
gdjs.PortadaCode.GDvidasObjects1.length = 0;
gdjs.PortadaCode.GDvidasObjects2.length = 0;


return;

}

gdjs['PortadaCode'] = gdjs.PortadaCode;
