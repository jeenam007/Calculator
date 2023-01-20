function btclick(val)
{
    var x=document.getElementById("screen").value=
    document.getElementById('screen').value+val;

}
function clearDisp()
{
    document.getElementById("screen").value="";
}
function eqlClk()
{
    var text=document.getElementById('screen').value;
    var res=eval(text);
    document.getElementById('screen').value=res;
}
