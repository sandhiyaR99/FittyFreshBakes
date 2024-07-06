import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const customerreviews = [
    { name: 'Kavitha', review: 'Absolutely the best chocolate cake I have ever had! Moist, rich, and utterly delicious.' },
    { name: 'Manju', review: 'I ordered the red velvet cake for my birthday and it was a hit! Everyone loved it.' },
    {name:'Gopika', review:'The white forest cake was light and fluffy, with just the right amount of sweetness.'},
    {name:'Dinesh', review:'The blueberry cake had such a fresh, fruity flavor. It was a refreshing change from the usual.'},
    {name:'Priya', review:'The Mango cake exceeded my expectations! The flavor was perfectly balanced, not too sweet, and the texture was just right.'},
    {name:'Latha', review:'The Black Forest cake was absolutely divine! The combination of rich chocolate, creamy layers, and the perfect amount of cherry flavor was heavenly.'},
    {name:'Lakshit', review:'The Football cake was a touchdown! The kids at the party were so excited when they saw it. The design was very realistic, and the cake itself was delicious.'},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentReview = customerreviews[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % customerreviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [customerreviews.length]);

  return (
    <div className="my-8 text-center">
      <div className="m-5 bg-black bg-opacity-5 p-4 rounded-lg shadow-lg mx-10">
        <h1 className="mb-2 text-pink-600 font-semibold text-2xl ">Reviews</h1>
        <div className="relative w-full h-1 bg-gray-200 mb-4 overflow-hidden">
          <div
            key={currentIndex}
            className="absolute top-0 left-0 h-full bg-pink-600 animate-highlight"
          ></div>
        </div>
        <p className="text-lg text-gray-800">{currentReview.review}</p>
        <p className="text-sm text-gray-500">{currentReview.name}</p>
      </div>
    </div>
  );
};

export default Reviews;
