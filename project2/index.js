var bullshit = document.querySelectorAll(".item");
console.log(bullshit);

var the = document.getElementById("textin");

the.addEventListener('keyup', (key) => 
{
    bullshit.forEach((obj, num, p) => 
    {
        if(num == the.value)
        {
            obj.style.borderRadius = "0px 25px 0px 0px";
            obj.style.top = "0px";
        }
        else
        {
            obj.style.cssText += "transform: scale(0.9, 0.9)";
            obj.style.opacity = "0.1";
        }

        if(the.value.length <= 0)
        {
            if(obj.attributes[1].name == "child")
            {
                obj.style.borderRadius = "0px";
            }
            obj.style.cssText += "transform: scale(1, 1)";
            obj.style.opacity = "1";
            switch(num)
            {
                case 0:
                    obj.style.top = "0px";
                    break;
                case 1:
                    obj.style.top = "81px";
                    break;
                case 2:
                    obj.style.top = "162px";
                    break;
                case 3:
                    obj.style.top = "243px";
                    break;
                case 4:
                    obj.style.top = "324px";
                    break;
                case 5:
                    obj.style.top = "405px";
                    break;
            }
        }
    });
});