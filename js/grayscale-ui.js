// Small helper to toggle a visual grayscale mode by applying a CSS class to the canvas.
(function(){
    const STORAGE_KEY = 'zeroWasteGrayscale';

    function setGrayscale(on){
        const canvas = document.getElementById('myCanvas');
        const btn = document.getElementById('grayscaleToggle');
        if(!canvas || !btn) return;
        if(on){
            canvas.classList.add('grayscale-on');
            btn.textContent = 'Grayscale: On';
            btn.setAttribute('aria-pressed', 'true');
        } else {
            canvas.classList.remove('grayscale-on');
            btn.textContent = 'Grayscale: Off';
            btn.setAttribute('aria-pressed', 'false');
        }
        try{ localStorage.setItem(STORAGE_KEY, on ? '1' : '0'); }catch(e){}
    }

    function toggle(){
        const current = localStorage.getItem(STORAGE_KEY) === '1';
        setGrayscale(!current);
    }

    window.addEventListener('DOMContentLoaded', function(){
        const btn = document.getElementById('grayscaleToggle');
        if(!btn) return;
        btn.addEventListener('click', toggle);
        const saved = localStorage.getItem(STORAGE_KEY) === '1';
        setGrayscale(saved);
    });
})();