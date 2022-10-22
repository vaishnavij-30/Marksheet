    function Add() 
		{
			for(var i = 1; i<7; i++){
     		      var a = parseInt(document.getElementById('i'+i).value);
			      var b = parseInt(document.getElementById('e'+i).value);
			      var c = document.getElementById('t'+i).value=a+b;
			}

                var d = parseInt(document.getElementById("i1").value);
                var e = parseInt(document.getElementById("i2").value);
                var f = parseInt(document.getElementById("i3").value);
                var g = parseInt(document.getElementById("i4").value);
                var h = parseInt(document.getElementById("i5").value);
                var j = parseInt(document.getElementById("i6").value);
                var k = document.getElementById("i7").value=d+e+f+g+h+j;

                var l = parseInt(document.getElementById("e1").value);
                var m = parseInt(document.getElementById("e2").value);
                var n = parseInt(document.getElementById("e3").value);
                var o = parseInt(document.getElementById("e4").value);
                var p = parseInt(document.getElementById("e5").value);
                var q = parseInt(document.getElementById("e6").value);
                var r = document.getElementById("e7").value=l+m+n+o+p+q;

                var T1 = parseInt(document.getElementById("t1").value);
                var T2 = parseInt(document.getElementById("t2").value);
                var T3 = parseInt(document.getElementById("t3").value);
                var T4 = parseInt(document.getElementById("t4").value);
                var T5 = parseInt(document.getElementById("t5").value);
                var T6 = parseInt(document.getElementById("t6").value);
                var T7 = document.getElementById("t7").value=T1+T2+T3+T4+T5+T6;
			
        }

        function grade()
        {   
        	for(var a = 1; a<5; a++)
            {	
        	       	  var x = document.getElementById("t"+a).value;
        	       	  	
        	       if(x<=100 && x>=80)
        	       {                    
                      var x = document.getElementById("g"+a).value="O";
                   }
                   else if(x<=79 && x>=70)
                   {   
                      var x = document.getElementById("g"+a).value="A+";
                   }
                   else if(x<=69 && x>=60)
                   {   
                      var x = document.getElementById("g"+a).value="A";
                   }
                   else if(x<=59 && x>=50)
                   {   
                      var x = document.getElementById("g"+a).value="B";
                   }
                   else if(x<=49 && x>=45)
                   {   
                      var x = document.getElementById("g"+a).value="C";
                   }
                   else if(x<=44 && x>=40)
                   {   
                      var x = document.getElementById("g"+a).value="D";
                   }
                   
                   else if(x<39) 	                  
                   {  
                      var x = document.getElementById("g"+a).value="F";    
                   } 
            }       
            
        }

        function grade1()
        {   
        	for(var a = 5; a<7; a++)
            {	
        	       	  var x = document.getElementById("t"+a).value;
        	       	  	
        	       if(x<=100/2 && x>=80/2)
        	       {                    
                      var x = document.getElementById("g"+a).value="O";
                   }
                   else if(x<=79/2 && x>=70/2)
                   {   
                      var x = document.getElementById("g"+a).value="A+";
                   }
                   else if(x<=69/2 && x>=60/2)
                   {   
                      var x = document.getElementById("g"+a).value="A";
                   }
                   else if(x<=59/2 && x>=50/2)
                   {   
                      var x = document.getElementById("g"+a).value="B";
                   }
                   else if(x<=49/2 && x>=45/2)
                   {   
                      var x = document.getElementById("g"+a).value="C";
                   }
                   else if(x<=44/2 && x>=40/2)
                   {   
                      var x = document.getElementById("g"+a).value="D";
                   }
                   
                   else if(x<39/2) 	                  
                   {  
                      var x = document.getElementById("g"+a).value="F";    
                   } 
            }       
            
        }

        function RP()
        {
                var T1 = parseInt(document.getElementById("t1").value);
                var T2 = parseInt(document.getElementById("t2").value);
                var T3 = parseInt(document.getElementById("t3").value);
                var T4 = parseInt(document.getElementById("t4").value);
                var T5 = parseInt(document.getElementById("t5").value);
                var T6 = parseInt(document.getElementById("t6").value);
                var T7 = document.getElementById("G3").value=T1+T2+T3+T4+T5+T6;

                
                
                var per = T7/500*100;
                var per1 = document.getElementById("P").value=per.toFixed(2);
                 document.getElementById("P").value=per + '%';
                
             
        }

        function result()
        {
            var i1 = parseInt(document.getElementById("i1").value);
            var i2 = parseInt(document.getElementById("i2").value);
            var i3 = parseInt(document.getElementById("i3").value);
            var i4 = parseInt(document.getElementById("i4").value);
            var i5 = parseInt(document.getElementById("i5").value);
            var i6 = parseInt(document.getElementById("i6").value);

            var e1 = parseInt(document.getElementById("e1").value);
            var e2 = parseInt(document.getElementById("e2").value);
            var e3 = parseInt(document.getElementById("e3").value);
            var e4 = parseInt(document.getElementById("e4").value);
            var e5 = parseInt(document.getElementById("e5").value);
            var e6 = parseInt(document.getElementById("e6").value);

            if(i1<9 || i2<9 || i3<9 || i4<9 || i5<9 || i6<9 || e5<9 || e6<9 || e1<28 || e2<28 || e3<28 || e4<28)
            {
            document.getElementById("R").value="Fail";
            	
            }
            else
            {
            document.getElementById("R").value="Pass";

            }

        }

        function Alert()
        {
            var I1 = parseInt(document.getElementById("i1").value);
            var I2 = parseInt(document.getElementById("i2").value);
            var I3 = parseInt(document.getElementById("i3").value);
            var I4 = parseInt(document.getElementById("i4").value);
            var I5 = parseInt(document.getElementById("i5").value);
            var I6 = parseInt(document.getElementById("i6").value);

            var E1 = parseInt(document.getElementById("e1").value);
            var E2 = parseInt(document.getElementById("e2").value);
            var E3 = parseInt(document.getElementById("e3").value);
            var E4 = parseInt(document.getElementById("e4").value);
            var E5 = parseInt(document.getElementById("e5").value);
            var E6 = parseInt(document.getElementById("e6").value);


          
            if(I1>25)
            {
                 alert("Please Enter valid input");
                 document.getElementById("i1").value=" ";
            }
            if(I2>25)
            {
                 alert("Please Enter valid input");
                 document.getElementById("i2").value=" ";
            }
            if(I3>25)
            {
                 alert("Please Enter valid input");
                 document.getElementById("i3").value=" ";
            }
            if(I4>25)
            {
                 alert("Please Enter valid input");
                 document.getElementById("i4").value=" ";
            }
            if(I5>25)
            {
                 alert("Please Enter valid input");
                 document.getElementById("i5").value=" ";
            }
            if(I6>25)
            {
                 alert("Please Enter valid input");
                 document.getElementById("i6").value=" ";
            }
            if(E1>75)
            {
                 alert("Please Enter valid input");
                 document.getElementById("e1").value=" ";
            }
            if(E2>75)
            {
                 alert("Please Enter valid input");
                 document.getElementById("e2").value=" ";
            }
            if(E3>75)
            {
                 alert("Please Enter valid input");
                 document.getElementById("e3").value=" ";
            }
            if(E4>75)
            {
                 alert("Please Enter valid input");
                 document.getElementById("e4").value=" ";
            }
            if(E5>25)
            {
                 alert("Please Enter valid input");
                 document.getElementById("e5").value=" ";
            }
            if(E6>25)
            {
                 alert("Please Enter valid input");
                 document.getElementById("e6").value=" ";
            }


          
            
        }

