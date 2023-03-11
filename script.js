const counters=document.querySelectorAll('.counter');
counters.forEach((counter)=>{
    counter.innerHTML=0;

// +counter.getAttribute() shows conversion of string into number , there is also another method to conversion is number(str);    
    const updateCounter=()=>{
        const targetCount = +counter.getAttribute('data-target');
    //     console.log(targetCount);
    // Another method of conversion string into number using Number(str);
    const startingCount = Number(counter.innerHTML);

    const increment=targetCount/100;
    if(startingCount<targetCount){
        counter.innerHTML=`${Math.round(startingCount + increment)}`
        setTimeout(updateCounter,10);
    }else{
        counter.innerHTML=targetCount;
    }

    }
    updateCounter();
})