export const GET_ITEM = "GET_ITEM";
export const SET_ITEM = "SET_ITEM";

export const starRating = (rating: number): number[] => {
  const starArr: number[] = [0, 0, 0, 0, 0];
  const roundedNum = Math.round(rating);
  return starArr.map((_, i) => (i + 1 <= roundedNum ? 1 : 0));
};
