export default {
  supportRequestTitle: { 
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

    phoneExt: { 
      required: {   
        value: true,  
        message: 'Phone number is required'
      },
      pattern: {
        value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
        message: "Number format: (XXX) XXX-XXXX"
      }
    },
};