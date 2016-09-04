//Problem #1

var reviewsData = {
  data: [
    {
      id: 1,
      attributes: {
        'review-title': 'Terrible!',
        'stars': 1,
        'cost': 'high'
      }
    },
    {
      id: 2,
      attributes: {
        'review-title': 'Decent place',
        'stars': 3,
        'cost': 'average'
      }
    },
    {
      id: 3,
      attributes: {
        'review-title': 'I would come again',
        'stars': 3.5,
        'cost': 'average'
      }
    },
    {
      id: 4,
      attributes: {
        'review-title': 'So good, and cheap!',
        'stars': 4,
        'cost': 'low-average'
      }
    },
    {
      id: 5,
      attributes: {
        'review-title': 'Good, but pricey!',
        'stars': 4,
        'cost': 'high'
      }
    }
  ]
};



function extractReviews(reviewData) {
  var extractIndividualReview = reviewsData.data.map(function(review){
    
    review.attributes.id = review.id;
    return review.attributes
    
  });
  return extractIndividualReview
}

console.log(extractReviews(reviewsData));


//Problem #2

var reviews = [
  { id: 1, title: 'Terrible!', stars: 1, cost: 'high' },
  { id: 2, title: 'Decent place', stars: 3, cost: 'average' },
  { id: 3, title: 'I would come again', stars: 3.5, cost: 'average' },
  { id: 4, title: 'So good, and cheap!', stars: 4, cost: 'low-average' },
  { id: 5, title: 'Good, but pricey!', stars: 4, cost: 'high' }
];


 function findGoodReviews(reviews) {
   var goodReviews = reviews.filter(function(review){
   return review.title.toLowerCase().indexOf('good') !== -1
 });
   return goodReviews
 }

 console.log(findGoodReviews(reviews));

//Problem #3

var reviews = [
  { id: 1, title: 'Terrible!', stars: 1, cost: 'high' },
  { id: 2, title: 'Decent place', stars: 3, cost: 'average' },
  { id: 3, title: 'I would come again', stars: 3.5, cost: 'average' },
  { id: 4, title: 'So good, and cheap!', stars: 4, cost: 'low-average' },
  { id: 5, title: 'Good, but pricey!', stars: 4, cost: 'high' }
];


 function classifyReviewsByCost(reviews) {
   
   var reviewsByCost = reviews.reduce(function(iterating, review){
    
    var reviewCost = review.cost;
    iterating.hasOwnProperty(reviewCost)? iterating[reviewCost]++ : iterating[reviewCost] = 1;
   
    return iterating;  
   },{});
  
   return reviewsByCost
 }

 console.log(classifyReviewsByCost(reviews));
