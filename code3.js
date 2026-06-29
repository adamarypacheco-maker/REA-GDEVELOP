gdjs.Prueba_32DiagnosticaCode = {};
gdjs.Prueba_32DiagnosticaCode.localVariables = [];
gdjs.Prueba_32DiagnosticaCode.idToCallbackMap = new Map();
gdjs.Prueba_32DiagnosticaCode.GDFondoObjects1= [];
gdjs.Prueba_32DiagnosticaCode.GDFondoObjects2= [];
gdjs.Prueba_32DiagnosticaCode.GDProtagonistaObjects1= [];
gdjs.Prueba_32DiagnosticaCode.GDProtagonistaObjects2= [];
gdjs.Prueba_32DiagnosticaCode.GDpregunta1Objects1= [];
gdjs.Prueba_32DiagnosticaCode.GDpregunta1Objects2= [];
gdjs.Prueba_32DiagnosticaCode.GDrhoObjects1= [];
gdjs.Prueba_32DiagnosticaCode.GDrhoObjects2= [];
gdjs.Prueba_32DiagnosticaCode.GD_95952LObjects1= [];
gdjs.Prueba_32DiagnosticaCode.GD_95952LObjects2= [];
gdjs.Prueba_32DiagnosticaCode.GD_95952_9595mlObjects1= [];
gdjs.Prueba_32DiagnosticaCode.GD_95952_9595mlObjects2= [];
gdjs.Prueba_32DiagnosticaCode.GDcursorObjects1= [];
gdjs.Prueba_32DiagnosticaCode.GDcursorObjects2= [];
gdjs.Prueba_32DiagnosticaCode.GDPuntos2Objects1= [];
gdjs.Prueba_32DiagnosticaCode.GDPuntos2Objects2= [];
gdjs.Prueba_32DiagnosticaCode.GDvidasObjects1= [];
gdjs.Prueba_32DiagnosticaCode.GDvidasObjects2= [];


gdjs.Prueba_32DiagnosticaCode.mapOfGDgdjs_9546Prueba_959532DiagnosticaCode_9546GDrhoObjects1Objects = Hashtable.newFrom({"rho": gdjs.Prueba_32DiagnosticaCode.GDrhoObjects1});
gdjs.Prueba_32DiagnosticaCode.mapOfGDgdjs_9546Prueba_959532DiagnosticaCode_9546GD_959595952LObjects1Objects = Hashtable.newFrom({"_2L": gdjs.Prueba_32DiagnosticaCode.GD_95952LObjects1});
gdjs.Prueba_32DiagnosticaCode.mapOfGDgdjs_9546Prueba_959532DiagnosticaCode_9546GDProtagonistaObjects1Objects = Hashtable.newFrom({"Protagonista": gdjs.Prueba_32DiagnosticaCode.GDProtagonistaObjects1});
gdjs.Prueba_32DiagnosticaCode.asyncCallback11100516 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Prueba_32DiagnosticaCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bien Pregunta1", false);
}
gdjs.Prueba_32DiagnosticaCode.localVariables.length = 0;
}
gdjs.Prueba_32DiagnosticaCode.idToCallbackMap.set(11100516, gdjs.Prueba_32DiagnosticaCode.asyncCallback11100516);
gdjs.Prueba_32DiagnosticaCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Prueba_32DiagnosticaCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Prueba_32DiagnosticaCode.asyncCallback11100516(runtimeScene, asyncObjectsList)), 11100516, asyncObjectsList);
}
}

}


};gdjs.Prueba_32DiagnosticaCode.mapOfGDgdjs_9546Prueba_959532DiagnosticaCode_9546GD_959595952_95959595mlObjects1Objects = Hashtable.newFrom({"_2_ml": gdjs.Prueba_32DiagnosticaCode.GD_95952_9595mlObjects1});
gdjs.Prueba_32DiagnosticaCode.mapOfGDgdjs_9546Prueba_959532DiagnosticaCode_9546GDProtagonistaObjects1Objects = Hashtable.newFrom({"Protagonista": gdjs.Prueba_32DiagnosticaCode.GDProtagonistaObjects1});
gdjs.Prueba_32DiagnosticaCode.asyncCallback11102476 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Prueba_32DiagnosticaCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Mal pregunta1", false);
}
gdjs.Prueba_32DiagnosticaCode.localVariables.length = 0;
}
gdjs.Prueba_32DiagnosticaCode.idToCallbackMap.set(11102476, gdjs.Prueba_32DiagnosticaCode.asyncCallback11102476);
gdjs.Prueba_32DiagnosticaCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Prueba_32DiagnosticaCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Prueba_32DiagnosticaCode.asyncCallback11102476(runtimeScene, asyncObjectsList)), 11102476, asyncObjectsList);
}
}

}


};gdjs.Prueba_32DiagnosticaCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("pregunta1"), gdjs.Prueba_32DiagnosticaCode.GDpregunta1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Prueba_32DiagnosticaCode.GDpregunta1Objects1.length;i<l;++i) {
    if ( gdjs.Prueba_32DiagnosticaCode.GDpregunta1Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Prueba_32DiagnosticaCode.GDpregunta1Objects1[k] = gdjs.Prueba_32DiagnosticaCode.GDpregunta1Objects1[i];
        ++k;
    }
}
gdjs.Prueba_32DiagnosticaCode.GDpregunta1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Prueba_32DiagnosticaCode.GDpregunta1Objects1 */
{for(var i = 0, len = gdjs.Prueba_32DiagnosticaCode.GDpregunta1Objects1.length ;i < len;++i) {
    gdjs.Prueba_32DiagnosticaCode.GDpregunta1Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rho"), gdjs.Prueba_32DiagnosticaCode.GDrhoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Prueba_32DiagnosticaCode.mapOfGDgdjs_9546Prueba_959532DiagnosticaCode_9546GDrhoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs.Prueba_32DiagnosticaCode.GDcursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("pregunta1"), gdjs.Prueba_32DiagnosticaCode.GDpregunta1Objects1);
{for(var i = 0, len = gdjs.Prueba_32DiagnosticaCode.GDpregunta1Objects1.length ;i < len;++i) {
    gdjs.Prueba_32DiagnosticaCode.GDpregunta1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Prueba_32DiagnosticaCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Prueba_32DiagnosticaCode.GDcursorObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Protagonista"), gdjs.Prueba_32DiagnosticaCode.GDProtagonistaObjects1);
gdjs.copyArray(runtimeScene.getObjects("_2L"), gdjs.Prueba_32DiagnosticaCode.GD_95952LObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Prueba_32DiagnosticaCode.mapOfGDgdjs_9546Prueba_959532DiagnosticaCode_9546GD_959595952LObjects1Objects, gdjs.Prueba_32DiagnosticaCode.mapOfGDgdjs_9546Prueba_959532DiagnosticaCode_9546GDProtagonistaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Puntos2"), gdjs.Prueba_32DiagnosticaCode.GDPuntos2Objects1);
{for(var i = 0, len = gdjs.Prueba_32DiagnosticaCode.GDPuntos2Objects1.length ;i < len;++i) {
    gdjs.Prueba_32DiagnosticaCode.GDPuntos2Objects1[i].getBehavior("Text").setText("Puntos: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}

{ //Subevents
gdjs.Prueba_32DiagnosticaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Protagonista"), gdjs.Prueba_32DiagnosticaCode.GDProtagonistaObjects1);
gdjs.copyArray(runtimeScene.getObjects("_2_ml"), gdjs.Prueba_32DiagnosticaCode.GD_95952_9595mlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Prueba_32DiagnosticaCode.mapOfGDgdjs_9546Prueba_959532DiagnosticaCode_9546GD_959595952_95959595mlObjects1Objects, gdjs.Prueba_32DiagnosticaCode.mapOfGDgdjs_9546Prueba_959532DiagnosticaCode_9546GDProtagonistaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("vidas"), gdjs.Prueba_32DiagnosticaCode.GDvidasObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}
{for(var i = 0, len = gdjs.Prueba_32DiagnosticaCode.GDvidasObjects1.length ;i < len;++i) {
    gdjs.Prueba_32DiagnosticaCode.GDvidasObjects1[i].getBehavior("Text").setText("Vidas: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}

{ //Subevents
gdjs.Prueba_32DiagnosticaCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Prueba_32DiagnosticaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Prueba_32DiagnosticaCode.GDFondoObjects1.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDFondoObjects2.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDProtagonistaObjects1.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDProtagonistaObjects2.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDpregunta1Objects1.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDpregunta1Objects2.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDrhoObjects1.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDrhoObjects2.length = 0;
gdjs.Prueba_32DiagnosticaCode.GD_95952LObjects1.length = 0;
gdjs.Prueba_32DiagnosticaCode.GD_95952LObjects2.length = 0;
gdjs.Prueba_32DiagnosticaCode.GD_95952_9595mlObjects1.length = 0;
gdjs.Prueba_32DiagnosticaCode.GD_95952_9595mlObjects2.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDcursorObjects1.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDcursorObjects2.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDPuntos2Objects1.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDPuntos2Objects2.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDvidasObjects1.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDvidasObjects2.length = 0;

gdjs.Prueba_32DiagnosticaCode.eventsList2(runtimeScene);
gdjs.Prueba_32DiagnosticaCode.GDFondoObjects1.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDFondoObjects2.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDProtagonistaObjects1.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDProtagonistaObjects2.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDpregunta1Objects1.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDpregunta1Objects2.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDrhoObjects1.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDrhoObjects2.length = 0;
gdjs.Prueba_32DiagnosticaCode.GD_95952LObjects1.length = 0;
gdjs.Prueba_32DiagnosticaCode.GD_95952LObjects2.length = 0;
gdjs.Prueba_32DiagnosticaCode.GD_95952_9595mlObjects1.length = 0;
gdjs.Prueba_32DiagnosticaCode.GD_95952_9595mlObjects2.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDcursorObjects1.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDcursorObjects2.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDPuntos2Objects1.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDPuntos2Objects2.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDvidasObjects1.length = 0;
gdjs.Prueba_32DiagnosticaCode.GDvidasObjects2.length = 0;


return;

}

gdjs['Prueba_32DiagnosticaCode'] = gdjs.Prueba_32DiagnosticaCode;
