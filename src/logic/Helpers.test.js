import {extractDigits} from './Helpers';

export const UNIT_TESTS = () =>  {

   //general case
   if(extractDigits("123 123") == "246"){
       console.log("PASS");
   }

   if(extractDigits("010101 101010") == "111111"){
       console.log("PASS");
   }
   //empty input
   if(extractDigits("") == ""){
       console.log("PASS");
   }

   //mixed input
   if(extractDigits("-21 apple 1") == "-20"){
       console.log("PASS");
   }

   if(extractDigits("sh4m33k r4y") == "41"){
       console.log("PASS");
   }
   //zero should output as 0
   if(extractDigits("-21 0 21") == "0"){
       console.log("PASS");
   }

   //no digits
   if(extractDigits("hello world") == ""){
       console.log("PASS");
   }

   //mixed negative and letters
   if(extractDigits("-21sham33k") == "12"){
       console.log("PASS");
   }

   //leading 0
   if(extractDigits("000003") == "3"){
       console.log("PASS");
   }

   //mixed negative and letters
   if(extractDigits("--3") == "12"){
       console.log("PASS");
   }


}
