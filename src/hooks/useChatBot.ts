import { useEffect } from 'react';
import { createChat } from '@n8n/chat';

export const useChatBot = () => {
    useEffect(() => {
        createChat({
            webhookUrl: 'https://primary-production-ec56.up.railway.app/webhook/35ebee41-0e73-456e-ad86-e172bb6f5080/chat',
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
