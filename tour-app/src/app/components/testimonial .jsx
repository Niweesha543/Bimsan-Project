'use client';

import React, { useState, useEffect } from 'react';


const TestimonialCard = ({ content, name, email, createdAt }) => {
  return (
    <div className="bg-white rounded shadow-lg p-8 mx-4 h-full flex flex-col relative">
      <div className="mb-6 flex-grow">
        <p className="text-gray-800 text-lg">{content}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-600 font-semibold text-lg">
              {name ? name.charAt(0).toUpperCase() : 'U'}
            </span>
          </div>
          <div>
            <p className="font-medium text-gray-900">{name}</p>
            <p className="text-gray-600 text-sm">{email}</p>
          </div>
        </div>
        <div className="text-xs text-gray-500">
          {new Date(createdAt).toLocaleDateString()}
        </div>
      </div>
      <div className="absolute right-8 bottom-8 text-orange-500 text-6xl font-serif">"</div>
    </div>
  );
};

const TestimonialForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      setFormData({ name: '', email: '', content: '' });
      onClose();
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      alert('Failed to submit testimonial. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    // Only close if clicking on the backdrop, not the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Add Your Testimonial</h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email address"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Review *
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Share your experience with us..."
            />
          </div>
          
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:opacity-50 transition-colors"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const AllTestimonialsModal = ({ isOpen, onClose, testimonials }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    // Only close if clicking on the backdrop, not the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">All Testimonials</h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id || testimonial._id} {...testimonial} />
          ))}
        </div>
        
        {testimonials.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No testimonials yet. Be the first to share your experience!
          </div>
        )}
      </div>
    </div>
  );
};

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState(2);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isAllTestimonialsOpen, setIsAllTestimonialsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch testimonials from backend
  const fetchTestimonials = async () => {
    console.log('kkkkkkkk')
    try {
      const response = await fetch('/api/v1/testimonials');
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1);
      } else {
        setVisibleTestimonials(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (testimonials.length > visibleTestimonials) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => 
          (prevIndex + 1) % (testimonials.length - visibleTestimonials + 1)
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [visibleTestimonials, testimonials.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const handleSubmitTestimonial = async (formData) => {
    console.log('aaaaaaaaaaaaaa')
    try {
      const response = await fetch('/api/v1/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await fetchTestimonials(); // Refresh testimonials
      } else {
        throw new Error('Failed to submit testimonial');
      }
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      throw error;
    }
  };

  if (loading) {
    return (
      <div className="relative py-16 overflow-hidden bg-cover bg-center bg-no-repeat h-83 flex items-center justify-center">
        <div className="text-white text-xl">Loading testimonials...</div>
      </div>
    );
  }

  return (
    <div 
      className="relative py-16 overflow-hidden bg-cover bg-center bg-no-repeat h-83 cursor-pointer"
      style={{ 
        backgroundImage: "url('/image_10.jpg')" 
      }}
      onClick={() => {
        // Only open "All Testimonials" modal if the form is not open
        if (!isFormOpen) {
          setIsAllTestimonialsOpen(true);
        }
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-serif md:text-3xl uppercase tracking-wider mb-4">
            TESTIMONIALS ~ Happy Customers
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFormOpen(true);
            }}
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            Add Your Review
          </button>
        </div>

        {testimonials.length > 0 ? (
          <div className="relative font-sans text-base">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${activeIndex * (100 / visibleTestimonials)}%)`,
                width: `${(testimonials.length / visibleTestimonials) * 100}%`
              }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id || testimonial._id} 
                  className="flex-shrink-0"
                  style={{ width: `${100 / testimonials.length * visibleTestimonials}%` }}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>

            {testimonials.length > visibleTestimonials && (
              <div className="flex justify-center mt-8">
                {Array.from({ length: testimonials.length - visibleTestimonials + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      goToSlide(index);
                    }}
                    className={`w-3 h-3 mx-1 rounded-full ${
                      activeIndex === index ? 'bg-orange-500' : 'bg-white bg-opacity-50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center text-white">
            <p className="text-xl mb-4">No testimonials yet</p>
            <p className="text-gray-300">Be the first to share your experience!</p>
          </div>
        )}
      </div>

      <TestimonialForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleSubmitTestimonial}
      />

      {/* Only show "All Testimonials" modal if form is not open */}
      {!isFormOpen && (
        <AllTestimonialsModal
          isOpen={isAllTestimonialsOpen}
          onClose={() => setIsAllTestimonialsOpen(false)}
          testimonials={testimonials}
        />
      )}
    </div>
  );
};

export default TestimonialCarousel;