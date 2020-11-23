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
        value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
        message: "Number format: XXX XXX XXXX"
      }
    },
};