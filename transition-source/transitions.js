class TransitionManager
{
    blackTransition = document.createElement('div');
    direction = "down";
    onTransBegin = null;
    whileTrans = null;
    onTransFinish = null;

    constructor()
    {
        this.rewriteStyle();

        document.body.insertBefore(this.blackTransition, document.body.firstChild);
    }

    rewriteStyle()
    {
        this.blackTransition.style = "width: 100%; height: 100%; background-color: black; transition: 0.5s ease-in-out; position: absolute;";

        switch(this.direction)
        {
            case "up":
                this.blackTransition.style.cssText += "bottom: 2000px; top: 0px; left: 0px; right: 0px;";
                break;
            case "down":
                this.blackTransition.style.cssText += "bottom: 0px; top: -2000px; left: 0px; right: 0px;";
                break;
            case "left":
                this.blackTransition.style.cssText += "bottom: 0px; top: 0px; left: -2000px; right: 0px;";
                break;
            case "right":
                this.blackTransition.style.cssText += "bottom: 0px; top: 0px; left: 0px; right: 2000px;";
                break;
        }

        console.log(this.blackTransition.style);
    }

    doTransition(direction)
    {
        var timer = undefined;

        this.direction = direction;
        this.rewriteStyle();

        this.nullFuncCheck();

        switch(direction)
        {
            case "up":
                this.onTransBegin();
                this.blackTransition.style.bottom = "0px";
                timer = setTimeout(() => 
                {
                    this.blackTransition.style.top = "-2000px";
                    this.whileTrans();
                    clearTimeout(timer);
                    timer = undefined;
                    this.onTransFinish();
                }, 1500);
                break;
            case "down":
                break;
            case "left":
                break;
            case "right":
                break;
        }
    }

    nullFuncCheck()
    {
        if(this.onTransBegin == null){ this.onTransBegin = function() {} }
        if(this.whileTrans == null){ this.whileTrans = function() {} }
        if(this.onTransFinish == null){ this.onTransFinish = function() {} }
    }
}

var transitManager = new TransitionManager();