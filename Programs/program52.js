
class Arithematic
{
    constructor(A, B) 
    {
        this.No1 = A;
        this.No2 = B;
    }

    Addition() 
    {
        let iAns = 0;

        iAns = this.No1 + this.No2;

        return iAns;
    }

    Substraction()
    {
        let iAns = 0;

        iAns = this.No1 - this.No2;

        return iAns;
    }

    Multiplication()
    {
        let iAns = 0;

        iAns = this.No1 * this.No2;

        return iAns;
    }

    Division()
    {
        let iAns = 0;

        iAns = this.No1 / this.No2;

        return iAns;
    }
}

function main()
{
    let iRet = 0;
    let obj = new Arithematic(11,10);

    iRet = obj.Addition();
    console.log("Addition is       :", iRet);

    iRet = obj.Substraction();
    console.log("Substraction is   :", iRet);

    iRet = obj.Multiplication();
    console.log("Multiplication is :", iRet);

    iRet = obj.Division();
    console.log("Division is       :", iRet);
}

main();
