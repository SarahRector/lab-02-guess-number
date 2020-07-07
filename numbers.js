export default function compareNumbers(myInput, correctNumber) {
    if (myInput === correctNumber) {
        return 0;
    } else if (myInput < correctNumber) {
        return -1; 
    } else if (myInput > correctNumber) {
        return 1;
    } else if (myInput > 20 || myInput < 1){
        alert('Please enter a number between 1-20');
    }
}