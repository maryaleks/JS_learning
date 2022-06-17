//4***:
//Преобразовать задание 3* таким образом, 
//чтобы возраст вводится используя функцию prompt в привязанной верстке

let age_1 = prompt('Check_Age:', '');                      
let age_2 = 18                      
let age_3 = 60 
let age = [age_1, age_2, age_3]
let age_type = typeof(age_1)
const checkAge = function(age) {
    if (age_type != 'number') {
        age_1 = Number(age_1)
    }
    //console.log(age_1, typeof(age_1))
//}
//checkAge ()

        if (age_1 < age_2) {
        console.log("You don't have access cause your age is  " +  age_1 + " It’s less then " +  age_2 );
        } 
            else if (age_1 >=  age_2 && age_1 <  age_3) {
            console.log('Welcome  !');
        }   
            else if (age_1  > age_3) {
            console.log('Keep calm and look Culture channel');
        } 
            else {
            console.log('Technical work')
        } }

checkAge ()
alert()