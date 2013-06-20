var overlay = function(){
    var overlayId='overlay';
    var init = function(){
        var body = document.getElementsByTagName('body')[0];
        var overlay = document.createElement('div');
        overlay.setAttribute('style', ' background: rgba(255, 255, 255, 0.7);  width: 100%;  height: 100%;  position: fixed;  z-index: 10000000;  display: none;  top: 0;  left: 0;');
        overlay.setAttribute('id', overlayId);
        body.appendChild(overlay);
    };
    init();
    return {
        'on':function(){
            document.getElementById(overlayId).style.display='block';
        },
        'off':function(){
            document.getElementById(overlayId).style.display='none';
        }
    };
}();