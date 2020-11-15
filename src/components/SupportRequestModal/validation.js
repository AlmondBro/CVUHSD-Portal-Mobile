export default {
    title: { 
            required: {   
              value: true,  
              message: 'Title is required'
            }
    },
    category: { 
      required: {   
        value: true,  
        message: 'Category is required'
      }
    },
    description: { 
      required: {   
        value: true,  
        message: 'Description is required'
      }
    },
    location: { 
      required: {   
        value: true,  
        message: 'Location is required'
      }
    },

    phoneNumber: { 
      required: {   
        value: true,  
        message: 'Location is required'
      }
    },

    phoneNumber: { 
      required: {   
        value: true,  
        message: 'Location is required'
      },
      pattern: {
        value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
        message: "Number format: (XXX) XXX-XXXX"
      }
    },

    // roomNumber: { 
    //   required: {   
    //     value: false,  
    //   }
    // },

    email: {
      required: {value: true, message: 'Email is required'},
      pattern: {
        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Invalid Email Format',
      },
    },
    password: {
      required: {value: true, message: 'Password is required'},
    },
  };