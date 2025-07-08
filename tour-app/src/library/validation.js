export function validateTestimonial(data) {
  const { name, email, content } = data;
  const errors = [];

  if (!name || name.trim().length === 0) {
    errors.push('Name is required');
  }
  if (name && name.length > 100) {
    errors.push('Name must be less than 100 characters');
  }
  
  if (!email || email.trim().length === 0) {
    errors.push('Email is required');
  }
  if (email && email.length > 255) {
    errors.push('Email must be less than 255 characters');
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!content || content.trim().length === 0) {
    errors.push('Review content is required');
  }
  if (content && content.length > 1000) {
    errors.push('Review must be less than 1000 characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function checkProfanity(text) {
  const profanityWords = ['spam', 'fake', 'scam']; // Add more as needed
  const textToCheck = text.toLowerCase();
  return profanityWords.some(word => textToCheck.includes(word.toLowerCase()));
}