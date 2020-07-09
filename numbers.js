export default function compareNumbers(myInput, correctNumber) {
    if (myInput === correctNumber) {
        return 0;
    } else if (myInput < correctNumber) {
        return -1; 
    } else if (myInput > correctNumber) {
        return 1;
    }
}