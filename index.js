var els_wrapper = document.getElementsByClassName("winamaz-multiple-container");

Array.from(els_wrapper).forEach(el => {
    var els = el.getElementsByClassName('winamaz-product-wrapper');
    el.style.position = "relative";
    Array.from(els).forEach((product,i) => {
        product.style.paddingLeft  = "40px";
        product.innerHTML = 
            `<div 
                style="display: flex; align-items: center; justify-content: center; height: 100%; width: 40px; position: absolute; top: 0px; left: 0px; background-color: #2DC87A;"
            >
                <p style="color: white; margin-bottom: 0px;">
                    ${i+1}
                </p>
            </div>` + product.innerHTML;
    })
})