
function likes(names) {
    const length = names.length;
    if(length === 1) {
        return `${names[0]} likes this`;
    } else if(length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if(length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if(length >= 4) {
        return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
    } else {
        return "no one likes this";
    }
}

return 

console.log(likes(['yo' ,'tu', 'el', 'nosotros']))