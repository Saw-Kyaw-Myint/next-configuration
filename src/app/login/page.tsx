'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
// Import the schema definition and its type
import { createSignInSchema, SignInSchemaType } from '@/schemas/loginSchema';
// Removed FormEvent import as it's no longer needed

// The error is fixed by removing the manually typed 'event?: FormEvent<HTMLFormElement>' 
// from the onSubmit function signature.

export default function LoginPage() {
  // 1. Get the translation function
  const t = useTranslations(); // Assuming 'LoginPage' namespace for component text

  // 2. Create the schema, passing the translation function for error localization
  const schema = createSignInSchema(t); 

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '' },
  });

  // ✅ CORRECTED: Removed the problematic 'event?: FormEvent<HTMLFormElement>' parameter.
  const onSubmit: SubmitHandler<SignInSchemaType> = async (data) => {
    // In a real application, you would make an API call here
    console.log('Login Data:', data);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Login successful (simulated)!');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2>Test</h2>

        {/* Email Field */}
        <div>
          <label htmlFor="email">Test</label>
          <input 
            id="email" 
            type="email" 
            {...register('email')} 
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>
        
        {/* Password Field */}
        <div>
          <label htmlFor="password">Test</label>
          <input 
            id="password" 
            type="password" 
            {...register('password')} 
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>
        
        {/* Submit Button */}
        <button type="submit" disabled={isSubmitting}>
          Test
        </button>
      </form>
    </div>
  );
}