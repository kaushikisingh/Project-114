lipstickx=0;
lipsticky=0;

function preload()
{
    
}

function setup()
{
    canvas=createCanvas(400,400);
    canvas.center();
    canvas.position(500,100);
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
  
}
function modelLoaded()
{
 console.log('model loaded');
}
function draw()
{

}