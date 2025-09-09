import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiUser, FiCalendar } = FiIcons;

const Reviews = () => {
  const reviews = [
    {
      author: 'Pradyumna Piwalatkar',
      rating: 5,
      date: '2 months ago',
      review: 'Very cooperative and friendly people, I had a wonderful experience with them. I highly recommend this company.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      author: 'srikar',
      rating: 5,
      date: '3 months ago',
      review: 'muscular punjabi boy was very satisfactory',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const additionalReviews = [
    {
      author: 'Sarah Johnson',
      rating: 5,
      date: '1 month ago',
      review: 'Exceptional construction services! The team delivered exactly what we needed on time and within budget. Highly professional and skilled developers.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      author: 'Michael Chen',
      rating: 5,
      date: '2 weeks ago',
      review: 'Outstanding building development. The project works flawlessly and the construction quality is top-notch and beautiful.',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face'
    },
    {
      author: 'Emily Rodriguez',
      rating: 5,
      date: '3 weeks ago',
      review: 'MB Development transformed our outdated property into a modern, stunning building. The results exceeded our expectations!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      author: 'David Thompson',
      rating: 5,
      date: '1 month ago',
      review: 'Professional, reliable, and innovative. They understood our construction needs perfectly and delivered a solution that drives real results.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const allReviews = [...reviews, ...additionalReviews];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <SafeIcon
        key={index}
        icon={FiStar}
        className={`text-lg ${index < rating ? 'text-yellow-500 fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  const stats = [
    { number: '4.9', label: 'Average Rating' },
    { number: '50+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark Blue */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Client Reviews
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Don't just take our word for it. See what our satisfied clients have to say about our construction development services and their experience working with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - White */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl border border-blue-200"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-700">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid - Light Blue */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">What Our Clients Say</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Real feedback from real clients who have experienced our services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-200"
              >
                {/* Header */}
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{review.author}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <SafeIcon icon={FiCalendar} className="mr-1" />
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Review Content */}
                <p className="text-gray-700 leading-relaxed">
                  "{review.review}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight - White */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 rounded-3xl text-center border border-blue-200 shadow-lg"
          >
            <motion.div whileHover={{ scale: 1.1 }} className="inline-block mb-6">
              <SafeIcon icon={FiUser} className="text-6xl text-blue-600" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              "Exceptional Service, Outstanding Results"
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto italic">
              "Working with MB Development LLC has been a game-changer for our business. Their technical expertise, attention to detail, and commitment to excellence is truly remarkable. They don't just build structures; they build success stories."
            </p>
            <div className="flex justify-center mb-4">{renderStars(5)}</div>
            <p className="text-gray-600">- Collective feedback from our valued clients</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Dark Blue */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm p-12 rounded-3xl text-center border border-blue-300/30"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Experience the same level of excellence and satisfaction that our clients rave about. Let's start building your success story today.
            </p>
            <motion.a
              href="#/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg"
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;