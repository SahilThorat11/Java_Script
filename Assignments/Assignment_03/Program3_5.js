

function ChkVowel(cValue)
{
    if (cValue == 'A' || cValue == 'E' || cValue == 'I' || cValue == 'O' || cValue == 'U' ||
        cValue == 'a' || cValue == 'e' || cValue == 'i' || cValue == 'o' || cValue == 'u') 
    {
        return true;
    } 
    else 
    {
        return false;
    }
}

function main()
{
    let ch = 'z';
    let bRet = false;

    bRet = ChkVowel(ch);

    if(bRet == true)
    {
        console.log("It is Vowel");
    }
    else
    {
        console.log("It is not Vowel");
    }
}

main();