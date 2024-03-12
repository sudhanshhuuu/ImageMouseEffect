const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector('#throuthel').addEventListener("mousemove", throttleFunction((details) => {


    var div = document.createElement("div");
    div.classList.add('imagemove');

    div.style.left = details.clientX + "px";
    div.style.top = details.clientY + "px";

    var  img = document.createElement("img");
    img.setAttribute("src" ,"image/i-1.jpeg")
 
    div.appendChild(img);
    
    document.body.append(div)

    gsap.to(img , {
        y:"0",
        ease: Power2
    })
    
    setTimeout(function () {
        div.remove()
    }, 1000)




}, 200));