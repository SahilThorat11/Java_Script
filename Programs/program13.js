
function Display(No)
{
    console.log("Jay Ganesh..." + No);
    return ++No;
}

function main() 
{
    let iRet = 0;

    iRet = Display(11);    

    console.log("Return Value is : "+iRet);
}

main();