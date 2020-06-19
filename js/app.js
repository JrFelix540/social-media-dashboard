const checkbox = document.querySelector('input[name=theme]');
const toggleLight = document.querySelector('.toggle__light');
const toggleDark = document.querySelector('.toggle__dark');

checkbox.addEventListener('change', function() {
    if(this.checked){
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleDark.style.display = "flex";
        toggleLight.style.display = "none";
    } else{
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
        toggleDark.style.display = "none";
        toggleLight.style.display = "flex";
    }
})

const trans = ()=> {
    document.documentElement.classList.add('transition');
    window.setTimeout(()=> {
        document.documentElement.classList.remove('transition');
    }, 1000)
}
