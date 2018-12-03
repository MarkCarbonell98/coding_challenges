const check1800 = str => {
    //separate string in an array length 2
    //containing the last two letters

    //declare object with all consonants and silabes
    // ^[aeyiou]+$
    // ^[^aeyiou]+$ consonants

    //declare another object to check characters contained in the same index position of the string
    const buttons = {
        2: []
    };

    //posibilities must be tried in order consonant-vocal-consonant or vocal-consonant-vocal-vocal depending on the length of the word;
    //cons - vow - vow -const
    //vow - cons - const - vow 
    //count
    
    //if among the combinations one char contains a vocal, then all other combinations must be tried into the array

    //all matches must be pushed to the array and returned

}