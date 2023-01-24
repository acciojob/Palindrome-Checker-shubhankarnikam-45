// complete the given function

function palindrome(str){
	let flag=true;
	str.toLowerCase();
	let i=0;
	let j=str.length-1;

	while(i<j)
		{
			if(str[i]==str[j])
			{
				i++;
				j--;
			}
			else
			{
				flag=false;
				break;
			}
		}


	return flag;
	
	
}
module.exports = palindrome
