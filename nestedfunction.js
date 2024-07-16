var num1=101;
function hello()
{
    function hai()
    {
     num1=100;
    }
    hai();
}
hello(); 
console.log(num1);
