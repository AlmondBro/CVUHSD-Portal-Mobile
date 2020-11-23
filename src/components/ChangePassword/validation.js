export default {
    currentPassword: { 
            required: {   
              value: true,  
              message: 'Current password is required'
            }
    },

    newPassword: { 
      required: {   
        value: true,  
        message: 'New password is required'
      },

      minLength: {
        value: 14,
        message: "14 character minimum length"
      }
    },

    newPasswordConfirmed: { 
      required: {   
        value: true,  
        message: 'New password confirmation is required'
      },

      minLength: {
        value: 14,
        message: "14 character minimum length"
      }
    },
};