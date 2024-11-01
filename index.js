
const input = document.querySelectorAll('.controls input')
// console.log(input);

function handelUpdates(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

input.forEach(input => input.addEventListener('change', handelUpdates));
input.forEach(input => input.addEventListener('mousemove', handelUpdates));