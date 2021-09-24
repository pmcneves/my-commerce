
export const GET_ITEM = 'GET_ITEM';
export const SET_ITEM = 'SET_ITEM';

export const starRating = (rating: number): number[] => {
    const starArr: number [] = [];
    const roundedNum = Math.round(rating);
    console.log(starArr);
    console.log(roundedNum);
    for (let i = 0; i <= 4; i++) {
        if (i+1 <= roundedNum) {
            starArr.push(1);
        } else {
            starArr.push(0);
        }
    }
    return starArr;
};
