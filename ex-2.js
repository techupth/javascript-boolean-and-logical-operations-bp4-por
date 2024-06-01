// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true; //4001
let isWeekday = true; //Friday
let hasBoughtProductFromITCategory = false; //never buy IT
let hasAttendedDiscountEvent = true; //joined
let isPlatinum = false; //gold

let hasPromotion;
hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent) || isPlatinum
console.log(hasPromotion);
