import React from 'react';

const Feedback = () => {
  const feedbacks = [
    {
      name: "Guy Hawkins",
      time: "1 week ago",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      feedback: "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.",
    },
    {
      name: "Dianne Russell",
      time: "51 mins ago",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      feedback: "This course is just amazing! It has great course content, best practices, and a lot of real-world knowledge. I love the way of giving examples, and the tips by the instructor are pretty interesting, fun, and knowledgeable. This course meets more than my expectations, and I made the best investment of time to learn and practice what I am passionate about. Thank you so much to our excellent instructor Vako!! Highly recommend this course! Take the next step.",
    },
  ];

  return (
    <div className="container max-w-4xl  py-8 mx-auto">
      <h2 className="mb-6 text-2xl font-bold">Students Feedback</h2>
      
      <div className="flex justify-end mb-4">
        <select className="p-2 border border-gray-300 rounded-lg">
          <option>5 Star Rating</option>
          <option>4 Star Rating</option>
          <option>3 Star Rating</option>
        </select>
      </div>

      {feedbacks.map((feedback, index) => (
        <div key={index} className="pb-6 mb-6 border-b border-gray-300">
          <div className="flex items-start">
            <img
              src={feedback.image}
              alt={feedback.name}
              className="w-12 h-12 mr-4 rounded-full"
            />
            <div className="flex-grow">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">{feedback.name}</h4>
                <span className="text-sm text-gray-500">{feedback.time}</span>
              </div>
              <div className="flex items-center mb-2">
                {Array(feedback.rating).fill().map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-1 text-yellow-500"
                  >
                    <path d="M12 17.75l-6.16 3.56 1.18-6.9-5.02-4.9 6.94-1.01L12 2l3.06 6.2 6.94 1.01-5.02 4.9 1.18 6.9z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">{feedback.feedback}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
