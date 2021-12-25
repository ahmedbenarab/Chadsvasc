



function getCheckedCheckboxes (name){
    let checkboxes = document.querySelectorAll('input[name="chdv"]:checked');
    let resultat = 0 ;
    let values = [];

    checkboxes.forEach((checkboxe)=> {
        values.push(checkboxe.value);

    })
    for (i in values){

        resultat = resultat + Number(values[i])

    }
    return resultat

}

const btn = document.querySelector('#btn');
btn.addEventListener('click' , (event)=> {
    alert(getCheckedCheckboxes('chdv'))
})