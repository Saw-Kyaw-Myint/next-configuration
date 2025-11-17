'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { createSignInSchema, SignInSchemaType } from '@/schemas/loginSchema';

export default function LoginPage() {

    const t = useTranslations();
    const schema = createSignInSchema(t);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: { email: '', password: '' },
    });

    const onSubmit: SubmitHandler<SignInSchemaType> = async (data) => {
        console.log('Login Data:', data);
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