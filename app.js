

// function sum( x1, x2, x3){
//     let res = x1 + x2 + x3;
//     return res;
// }
// let test = sum(5, 6, 7);
// console.log(test);

// 1)Funksiya yozing, u berilgan sonning juft yoki toq ekanligini aniqlasin.

// let x = +prompt('son kirting')
// function son(x){
//     return x % 2 == 0 ? 'juft':'toq '
// }
// console.log(son(x));

// 2)Funksiya yozing, u berilgan sonning musbat, manfiy yoki nol ekanligini aniqlasin

// function son(x){
//     if(x>0) return 'musbat';
//     if(x<0) return 'manfiy';
//     return "nol";
// }
// let x = +prompt('son kirting')
// console.log(son(x));

// 3)Funksiya yozing, u berilgan ikki sondan kattasini qaytarsin.

// function son(x1 , x2){
//     return x1 > x2 ? x1: x2;
// }
// let x1 = +prompt('1-son kirting')
// let x2 = +prompt('2-son kirting')
// console.log(son(x1 , x2));

// 4)Funksiya yozing, u uchta sondan eng kattasini aniqlasin.

// function son(x1, x2 , x3){
//     return Math.max(x1, x2 , x3)
// }

// let x1 = +prompt('1-sonni kirting')
// let x2 = +prompt('2-sonni kirting')
// let x3 = +prompt('3-sonni kirting')
// console.log(son(x1, x2 ,x3));

// 5)Funksiya yozing, u berilgan sonning 3 ga bo‘linishini aniqlasin.

// function son(x){
// return x % 3 == 0 ? 'bolinadi': 'bolinmaydi'
// }
// let x = +prompt('son kirting')
// console.log(son(x));

// 6)Funksiya yozing, u berilgan sonning kvadratini qaytarsin.

// function son(x){
//     return x ** 2;
// }
// let x = +prompt('son kirting')
// console.log(son(x));

// 7)Funksiya yozing, u ikki sonning ko‘paytmasini hisoblasin.

// function son(x1 , x2){
//     return x1 * x2;
// }
// let x1 = +prompt('1-son kirting')
// let x2 = +prompt('2-son kirting')
// console.log(son(x1, x2));

// 8)Funksiya yozing, u berilgan sonni 1 dan boshlab o‘sha songacha bo‘lgan barcha sonlarning yig‘indisini hisoblasin.

// function son (x){
//     let sum = 0;
//     for(let i = 1; i<=x; i++){
//         sum +=i;
//     }
//     return sum;
// }
// let x = +prompt('son kirting')
// console.log(son(x));

// 9)Funksiya yozing, u 1 dan 10 gacha bo‘lgan sonlarning ko‘paytmasini qaytarsin.

// function son(){
//     let p = 1;
//     for(let i = 1; i<= 10; i++){
//         p*=i;
//     }
//     return p;
// }
// console.log(son());

// 10)Funksiya yozing, u berilgan sondan boshlab 1 ga kamaytirib chiqaradi.

// function son(x){
//     for(let i = x; i>= 1; i--){
//         console.log(i);
//     }
// }
// let x = +prompt('son kirting')
// son(x);

// 11)Funksiya yozing, u berilgan sonni faqat juft bo‘lsa ekranga chiqaradi.

// function son(x){
//     if(x % 2 == 0){
//         console.log(x);
//     }
// }
// let x = +prompt('son kirting')
// son(x)

// 12)Funksiya yozing, u berilgan ikki sondan kattasini ternary operator yordamida aniqlasin.

// function son (x1, x2){
//     return x1 > x2 ? `${x1} => katta `: `${x2} => kichik`
// }
// let x1 = +prompt('1-son kirting')
// let x2 = +prompt('2-son kirting')
// console.log(son(x1, x2));

// 13)Funksiya yozing, u berilgan son 5 ga va 3 ga bo‘linishini tekshiradi.

// function son(x){
//     if(x % 5 == 0 && x % 3 ==0){
//         return 'bolinadi'
//     }else{
//         return 'bolinmaydi'
//     }
// }
// let x = +prompt('son kirting')
// console.log(son(x));

// 14)Funksiya yozing, u berilgan sonning kvadrati va kubini qaytaradi.

// function son(x){
//     let res = `${Math.pow(x, 2)} " kubi => " ${Math.pow(x,3)}`
//     return res;
// }
// let x = +prompt('son kirting')
// console.log(son(x));


// 15)Funksiya yozing, u 1 dan 100 gacha bo‘lgan faqat juft sonlarni ekranga chiqaradi.

// function son (){
//     for(let i = 2; i<= 100; i+=2){
//         console.log(i);
// }
// }
// son()

// 16)Funksiya yozing, u 1 dan n gacha bo‘lgan toq sonlarni ekranga chiqaradi.

// function son(n){
//     for(let i = 1; i<=n; i+=2){
//         console.log(i);
        
//     }
// }
// let n = +prompt('son kirting')
// son(n)

// 17)Funksiya yozing, u kiritilgan sonning faktorialini hisoblaydi.

// function son ( x){
//     let p =1;
//     for(let i = 1; i<= x; i++){
//         p*=i;
//     }
//     return p;
// }
// let x = +prompt('son kirting')
// console.log(son(x));

// 18)Funksiya yozing, u kiritilgan sonni 10 ga bo‘lgandagi qoldiqni qaytaradi.

// function son(x){
//     return x % 10;
// }
// let x = +prompt('son kirting')
// console.log(son(x));


// 19)Funksiya yozing, u ikki sonni o‘zaro solishtirib, qaysi biri katta ekanligini ekranga chiqaradi.

// function son(x1, x2){
//     if ( x1> x2){
//         console.log(`${x1} katta`);
        
//     }else if(x1<x2){
//         console.log(`${x1} kichik`);
        
//     }else{
//         console.log('ikki son teng');
        
//     }
// }
// let x1 = +prompt('1-son kiriting')
// let x2 = +prompt('2-son kiriting')
// son(x1,x2)

// 20)Funksiya yozing, u 1 dan 50 gacha bo‘lgan barcha sonlarning yig‘indisini qaytaradi.

// function son(){
//     let sum = 0;
//     for(let i =1; i<=50; i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(son());

// 21)Funksiya yozing, u berilgan sonning kvadrat ildizini hisoblaydi (math metodlari ishlatilmasin).

// function son(x){
//     let res = x ** 0.5;
//     return res;
// }
// let x = +prompt('son kirting')
// console.log(son(x));

// 22)Funksiya yozing, u ikkita sonning o‘rta arifmetik qiymatini hisoblaydi.

// function son(x1, x2){
//     let res = (x1 + x2)/2;
//     return res;
// }
// let x1 = +prompt('1-son')
// let x2 = +prompt('2-son')
// console.log(son(x1,x2));

// 23)Funksiya yozing, u berilgan son musbatmi yoki manfiy ekanligini if orqali aniqlasin

// function  son(x){
//     if( x> 0){
//         return 'musbat';
//     }
//     else{
//         return 'manfiy'
//     }
// }
// let x = +prompt('son')
// console.log(son(x));

// 24)Funksiya yozing, u berilgan sonni juft sonlar yig‘indisini hisoblaydi.

// function son(x){
//     let sum = 0;
//     for(let i = 2; i<=x ; i+=2){
//         sum += i;
//     }
//     return sum;
// }
// let x = +prompt('son')
// console.log(son(x));


// 25)Funksiya yozing, u ikki sonni qo‘shadi, lekin agar sonlardan biri manfiy bo/‘lsa, natijaga 10 qo‘shadi.

// function son(x1, x2){
//     let res = x1 + x2;
//     if(x1 < 0 || x2 < 0){
//         res+=10;
//     }
//     return res;
// }
// let x1 = +prompt('1-son')
// let x2 = +prompt('2-son')
// console.log(son(x1, x2));

// 26)Funksiya yozing, u berilgan ikkita sonni qo‘shadi va ko‘paytiradi, natijalarni alohida qaytaradi.

// function son(x1, x2){
//     let y = x1 + x2;
//     let k = x1 * x2;
//     return { y , k};
// }
// let x1 = +prompt('1-son')
// let x2 = +prompt('2-son')
// let res = son(x1, x2)
// console.log(`qoshganda ${res.y}`);
// console.log(`kopaytirganda ${res.k}`);

// 27)Funksiya yozing, u foydalanuvchi kiritgan son 7 ga bo‘linishini aniqlaydi.

// function son(x){
//     return x % 7 == 0 ? 'bolinadi': 'bolinmaydi'
// }
// let x  = +prompt( 'son')
// console.log(son(x));


// 28)Funksiya yozing, u berilgan sonni xuddi shu tartibda 10 marta ko‘paytirib chiqaradi.

// function son (x){
//     for(let i = 1; i<=10; i++){
//         console.log(`${x} x ${i} = ${x * i}`);
//     }
// }
// let x = +prompt('son')
// son(x)

// 29)Funksiya yozing, u ikki sonni ko‘paytiradi, lekin agar sonlardan biri 0 bo‘lsa, natija 1 bo‘ladi.

// function son(x1, x2){
//     if(x1 ==0 || x2 ==0){
//         return 1;
//     }
//     return x1 *x2;
// }
// let x1 = +prompt('1-son')
// let x2 = +prompt('2-son')
// console.log(son(x1,x2));

// 30)Funksiya yozing, u foydalanuvchi kiritgan ikkita sonning modulini hisoblaydi.

// function son(x1, x2){
//     return{y1:Math.abs(x1), y2:Math.abs(x2)};

// }
// let x1 = +prompt('1-son')
// let x2 = +prompt('2-son')
// let res = son( x1, x2);
// console.log(`birinchi son ${res.y1}`);
// console.log(`ikkinchi son ${res.y2}`);

// 31)Funksiya yozing, u foydalanuvchi kiritgan sonni faqat manfiy bo‘lsa ekranga chiqaradi.

// function son (x){
//     if(x<0){
//         console.log(x);
        
//     }
// }
// let x = +prompt('son')
// son(x)

// 32)Funksiya yozing, u 1 dan 100 gacha bo‘lgan sonlardan faqat 5 ga karrali bo/‘lganlarni ekranga chiqaradi.

// function son(){
//     for( let i = 5; i<=100; i+=5){
//         console.log(i);
//     }
// }
// son()

// 33)Funksiya yozing, u berilgan ikki sonning yig‘indisini hisoblaydi, agar natija juft bo‘lsa, "Juft" deb qaytaradi.

// function son(x1, x2){
//     let sum = 0;
//     for(let i = x1; i<=x2; i++){
//         sum +=i;
//     }
//     return sum % 2 == 0 ? 'juft': sum;
// }
// let x1 = +prompt('1-son')
// let x2 = +prompt('2-son')
// console.log(son(x1,x2));

// 34)Funksiya yozing, u foydalanuvchi kiritgan sonning bo‘luvchilarini ekranga chiqaradi.

// function son(x){
//     for(let i = 1; i<= x; i++){
//         if(x % i ==0){
//             console.log(i);
            
//         }
//     }
// }

// let x = +prompt('son')
// son(x)

// 36)Funksiya yozing, u berilgan sonni 1 dan 20 gacha bo‘lgan sonlarga bo‘lib, har birining qoldig‘ini chiqaradi.

// function son( x){
//     for(let i = 1; i<= 20; i++){
//         console.log(`${ x} ni ${i} ga bolgandagi qoldiq ${x % i}`);
        
//     }
// }
// let x = +prompt('son')
// son(x)

// 37)Funksiya yozing, u foydalanuvchi kiritgan sonning barcha bo‘luvchilarini hisoblaydi va yig‘indisini qaytaradi.

// function son ( x){
//     let sum = 0;
//     for (let i = 1; i<= x; i++){
//         if( x % i ==0){
//             sum +=i
//         }
//     }
//     return sum;
// }
// let x = +prompt('son ')
// console.log(`yigindi ${son(x)}`);

// 38)Funksiya yozing, u foydalanuvchi kiritgan sonni faqat juft bo‘lsa kvadratini hisoblaydi.

// function son (x){
//     if(x % 2 ==0){
//         return x **2;
//     }
// }
// let x = +prompt('son')
// console.log(son(x));

// 39)Funksiya yozing, u berilgan son 100 dan katta bo‘lsa, uni ikki barobar oshiradi, aks holda 10 qo‘shadi.

// function son(x){
//     if(x > 100){
//         return x *2;
//     }
//     else{
//         return x + 10;
//     }
// }
// let x = +prompt('son')
// console.log(son(x));

// 41)Funksiya yozing, u foydalanuvchi kiritgan ikki sonning o‘zaro karrali ekanligini aniqlaydi.

// function son( x1, x2){
//     return x1 % x2 ==0 || x2 % x1 ==0;
// }

// let x1 = +prompt('1-son')
// let x2 = +prompt('2-son')

// if(son(x1,x2)){
//     console.log('karrali');
    
// }
// else{
//     console.log('karrali emas');
    
// }

// 43)Funksiya yozing, u 1 dan foydalanuvchi kiritgan sondan katta bo‘lgan barcha sonlarni ekranga chiqaradi.

// function son(x){
//     for(let i = x+1; i<=100; i++){
//         console.log(i);
        
//     }
// }
// let x = +prompt('son')
// son(x)

// 44)Funksiya yozing, u foydalanuvchi kiritgan ikkita sonning bo‘linmasini /hisoblaydi (qoldiqsiz).

// function son(x1 , x2){
//     if(x2 ==0){
//         return 'ikkinchi son 0 ga teng emas'
//     }
//     if(x1 % x2 ==0){
//         return x1/x2;
// }
// else{
//     return 'qoldiqsiz emas'
// }
// }
// let x1 = prompt('1-son')
// let x2 = prompt('2-son')
// console.log(son(x1, x2));

// 45)Funksiya yozing, u 1 dan n gacha bo‘lgan barcha sonlarning kvadratlarini ekranga chiqaradi.

// function son(x){
//     let p = 1;
//     for(let i = 1; i<= x; i++){
//         p*=i;
//     }
//     return p;
// }
// let x = +prompt('son')
// console.log(son(x));

// 46)Funksiya yozing, u foydalanuvchi kiritgan sonning o‘z-o‘ziga karraligini aniqlaydi.

// function son(x){
//     return x * x == x **2
// }
// let x = +prompt('son')
// if(son(x)){
//     console.log(`${x} karrali`);
    
// }else{
//     console.log(`${x} karrali emas`);
    
// }



// 48)Funksiya yozing, u 1 dan 50 gacha bo‘lgan barcha sonlarning faqat toqlari yig‘indisini hisoblaydi.

// function son(){
//     let sum =0;
//     for(let i =1; i<= 50; i+=2){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(son());

// oxiridagilarni chiqmaganlarni ustoz korib beradi 