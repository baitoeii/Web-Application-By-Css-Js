(function() {
    `use strict`;
    var input = document.querySelector(`#input`),
        button = document.querySelector(`#button`),
        xo=0, //ใช้เป็นตัวนับรอบว่ารอบของใคร
        txo=document.querySelector(`#t`),  //ตัวแปลสำหรับแสดง X . O . ในข้อความ
       //ตัวแปลสำหรับแสดง X . O . ในตาราง
        g1 = document.querySelector(`#G1`),
        g2 = document.querySelector(`#G2`),
        g3 = document.querySelector(`#G3`),
        g4 = document.querySelector(`#G4`),
        g5 = document.querySelector(`#G5`),
        g6 = document.querySelector(`#G6`),
        g7 = document.querySelector(`#G7`),
        g8 = document.querySelector(`#G8`),
        g9 = document.querySelector(`#G9`),
        //ตัวแปลสำหรับเก็บค่า X . O.เพื่อหาผู้ชนะ
            cx1=0,cx2=0,cx3=0,
            rx1=0,rx2=0,rx3=0,
            cy1=0,cy2=0,cy3=0,
            ry1=0,ry2=0,ry3=0,
            ux=0, dx=0, uy=0, dy=0,
        //ตัวแปลสำหรับเก็บค่าช่องในตารางว่าได้ใช้ไปหรือยัง    
        n1=0,n2=0,n3=0,
        n4=0,n5=0,n6=0,
        n7=0,n8=0,n9=0;
          
        function search(){
            var inputValue = input.value; //ตัวเเปลเก็บค่าในช่อง input
            if(inputValue != ''){   //ตรวจสอบว่าไม่ใช้ช่องว่างถึงทำงาน
            //ให้ทำง่านแค่ค่า 1 - 9 นอกนั้นข้าม 
            //-----------ภาคแสดงและเก็บค่าว่าใส่ค่าตรงไหนในตาราง-------------
            if(inputValue == '1' && n1==0){
                 if(xo % 2 == 0 ){g1.textContent = " X " ;  xo++;  cx1++; rx1++; dx++;  } 
                 else { g1.textContent = " O " ;  xo++;    cy1++; ry1++; dy++;  }
                 n1++;
            }

            else if(inputValue == '2'  && n2==0){
                if(xo % 2 == 0 ){g2.textContent = " X " ;  xo++;  cx2++; rx1++; } 
                else { g2.textContent = " O " ;  xo++; cy2++; ry1++; }
                n2++;
                }

            else if(inputValue == '3'  && n3==0){
                if(xo % 2 == 0 ){g3.textContent = " X " ;  xo++; cx3++; rx1++; ux++;  } 
                else { g3.textContent = " O " ;  xo++; cy3++; ry1++; uy++; }
                n3++;
            }

            else if(inputValue == '4'  && n4==0){
                if(xo % 2 == 0 ){g4.textContent = " X " ;  xo++; cx1++; rx2++; } 
                else { g4.textContent = " O " ;  xo++; cy1++; ry2++; }
                n4++;
            }

            else if(inputValue == '5'  && n5==0){
               if(xo % 2 == 0 ){g5.textContent = " X " ;  xo++; cx1++; cx2++; cx3++; rx1++; rx2++; rx3++; ux++; dx++;} 
               else { g5.textContent = " O " ;  xo++; cy1++; cy2++; cy3++; ry1++; ry2++; ry3++; uy++; dy++;}
               n5++;
               }

            else if(inputValue == '6'  && n6==0){
               if(xo % 2 == 0 ){g6.textContent = " X " ;  xo++; cx3++; rx2++;} 
               else { g6.textContent = " O " ;  xo++; cy3++; ry2++;}
               n6++;
           }

            else if(inputValue == '7'  && n7==0){
            if(xo % 2 == 0 ){g7.textContent = " X " ;  xo++; cx1++; rx3++; ux++;} 
            else { g7.textContent = " O " ;  xo++; cy1++; ry3++; uy++; }
            n7++;
          }
 
            else if(inputValue == '8'  && n8==0){
             if(xo % 2 == 0 ){g8.textContent = " X " ;  xo++; cx2++; rx3++;} 
             else { g8.textContent = " O " ;  xo++; cy2++; ry3++;}
             n8++;
          }

          else if(inputValue == '9'  && n9==0){
             if(xo % 2 == 0 ){g9.textContent = " X " ;  xo++; cx3++; rx3++; dx++;} 
             else { g9.textContent = " O " ;  xo++; cy3++; ry3++; dy++;}
             n9++;
          }
          //-------จบ----ภาคแสดงและเก็บค่าว่าใส่ค่าตรงไหนในตาราง-------------

          else{ //ถ้าค่าที่ป้อนมาไม่ใช้ 1-9 ให้ทำง่าน
            alert('ป้อนค่า ไม่ถูกต้อง ป้อนค่าใหม่อีกครั้ง');
          }
          //------แสดง X . O . ในข้อความ
          if(xo % 2 == 0 ){txo.textContent = " X "}
          else{ txo.textContent = " O " }
          //--จบ----แสดง X . O . ในข้อความ
          //-------หาผลแพ้ชนะ---------
          if(cx1==3||cx2==3||cx3==3||rx1==3||rx2==3||rx3==3||ux==3||dx==3){ alert('X เป็นฝ่ายชนะยินดีด้วย');  location.reload(); }
         else if(cy1==3||cy2==3||cy3==3||ry1==3||ry2==3||ry3==3||uy==3||dy==3){ alert('O เป็นฝ่ายชนะยินดีด้วย'); location.reload(); }
         else if(xo==9){ alert('ไม่มีฝ่ายใดชนะ ผลเสมอกัน'); location.reload(); }
          //----จบ---หาผลแพ้ชนะ---------
          }
        }
         button.addEventListener(`click`, search, false);//ทำงานเมือกดปุ่ม
})();