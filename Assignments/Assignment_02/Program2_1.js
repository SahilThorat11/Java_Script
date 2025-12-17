

function Display(iNo)
{
    let iCnt = 0;

    iCnt = 1; 

    while(iCnt <= iNo)
    {
        console.log("*");
        iCnt++;
    }
}
function main()
{
    let iValue = 5;

    Display(iValue);
}

main();