import { useEffect } from 'react';
import { createChat } from '@n8n/chat';

export const useChatBot = () => {
    useEffect(() => {
        createChat({
            webhookUrl: import.meta.env.VITE_CHATBOT_WEBHOOK_URL || '',
            webhookConfig: {
                method: 'POST',
                headers: {},
            },
            mode: 'window',
            chatInputKey: 'chatInput',
            chatSessionKey: 'sessionId',
            metadata: {},
            showWelcomeScreen: true,
            defaultLanguage: 'en',
            initialMessages: [
                '¡Hola! 👋 Soy un asistente IA de Juan Rivera.',
                'Pregúntame sobre sus proyectos, tech stack o experiencia.'
            ],
            i18n: {
                en: {
                    title: 'Chat del Portafolio',
                    subtitle: '¿Tienes alguna pregunta?',
                    footer: '',
                    getStarted: 'Comenzar conversación',
                    inputPlaceholder: 'Escribe tu mensaje...',
                    closeButtonTooltip: 'Cerrar chat',
                },
            },
        });
    }, []);
};
