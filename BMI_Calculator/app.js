const form=document.querySelector('form')

form.addEventListener('click',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')
    if(height==''||height<0||isNaN(height))
    {
        result.innerHTML=`Please give us a valid height ${height} `
    }
    if(weight==''||weight<0||isNaN(weight))
    {
        result.innerHTML=`Please give us a valid height ${weight} `
    }
    else
    {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi<18.6)
        {
            result.innerHTML=`<span>${bmi}</span><br>You are Under Weight :(`
        }
        else if(bmi>=18.6&&bmi<24.9)
        {
            result.innerHTML=`<span>${bmi}</span><br>You are Fit :)`
        }
        else
        {
            result.innerHTML=`<span>${bmi}</span><br>You are Over Weight :(`
        }
    }
})