'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import emailjs from 'emailjs-com';

interface FormValues {
    name: string;
    email: string;
    message: string;
}

export const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>();

    const [buttonState, setButtonState] = useState({
        loading: false,
        message: 'Send Message',
        color: '#fc7622',
        colorHover: '#d66219'
    });

    const onSubmit: SubmitHandler<FormValues> = async (formData) => {
        try {
            // Cambiar el estado del botón mientras se envía el mensaje
            setButtonState({
                loading: true,
                message: 'Sending...',
                color: '#d66219',
                colorHover: '#d66219',
            });

            const SERVICE_ID = 'service_tnq5efl';
            const TEMPLATE_ID = 'template_wihkgsn';
            const USER_ID = 'NQUd1751pPVcQNUfm';

            const templateParams = {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            };

            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);

            // Cambiar el estado del botón a éxito
            setButtonState({
                loading: false,
                message: 'Message sent successfully!',
                color: '#23A455', // Color de éxito
                colorHover: '#1a8845'
            });

            reset();

            // Revertir el estado del botón después de 3 segundos
            setTimeout(() => {
                setButtonState({
                    loading: false,
                    message: 'Send Message',
                    color: '#fc7622', 
                    colorHover: '#d66219'
                });
            }, 3000);

        } catch (error) {
            console.error('Failed to send the message:', error);

            // Cambiar el estado del botón a error
            setButtonState({
                loading: false,
                message: 'An error occurred. Please try again.',
                color: '#dc3545', // Color de error
                colorHover: '#fc3545'

            });

            // Revertir el estado del botón después de 3 segundos
            setTimeout(() => {
                setButtonState({
                    loading: false,
                    message: 'Send Message',
                    color: '#fc7622', // Color original
                    colorHover: '#d66219'
                });
            }, 3000);
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-section-gradient-top p-8 rounded-lg shadow-xl space-y-6"
                style={{ backgroundColor: '#252525' }}
            >
                {/* Campo de Nombre */}
                <TextField
                    label="Your Name"
                    variant="outlined"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ''}
                    {...register('name', { required: 'Name is required' })}
                    InputLabelProps={{ style: { color: '#E5E7EB' } }}
                    InputProps={{
                        style: {
                            backgroundColor: '#252525',
                            color: '#fc7622',
                            borderColor: '#fc7622',
                        },
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': { borderColor: '#fc7622' },
                            '&.Mui-focused fieldset': { borderColor: '#fc7622' },
                        },
                    }}
                />

                {/* Campo de Email */}
                <TextField
                    label="Your Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                            message: 'Only Gmail addresses are allowed',
                        },
                    })}
                    InputLabelProps={{ style: { color: '#E5E7EB' } }}
                    InputProps={{
                        style: {
                            backgroundColor: '#252525',
                            color: '#fc7622',
                            borderColor: '#fc7622',
                        },
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': { borderColor: '#fc7622' },
                            '&.Mui-focused fieldset': { borderColor: '#fc7622' },
                        },
                    }}
                />

                {/* Campo de Mensaje */}
                <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    error={!!errors.message}
                    helperText={errors.message ? errors.message.message : ''}
                    {...register('message', { required: 'Message is required' })}
                    InputLabelProps={{ style: { color: '#E5E7EB' } }}
                    InputProps={{
                        style: {
                            backgroundColor: '#252525',
                            color: '#fc7622',
                            borderColor: '#fc7622',
                        },
                    }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': { borderColor: '#fc7622' },
                            '&.Mui-focused fieldset': { borderColor: '#fc7622' },
                        },
                    }}
                />

                {/* Botón de Enviar */}
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: buttonState.color,
                        '&:hover': { backgroundColor: buttonState.colorHover },
                        color: '#F3F4F6',
                        fontWeight: 'bold',
                    }}
                    disabled={buttonState.loading}
                >
                    {buttonState.message}
                </Button>
            </form>
        </div>
    );
};
