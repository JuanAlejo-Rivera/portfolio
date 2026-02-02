import { useEffect } from 'react';
import { createChat } from '@n8n/chat';

export const useChatBot = () => {
    useEffect(() => {
        createChat({
            webhookUrl: import.meta.env.VITE_CHATBOT_WEBHOOK_URL || '',
            webhookConfig: {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            },
            mode: 'window',
            chatInputKey: 'chatInput',
            chatSessionKey: 'sessionId',
            metadata: {},
            showWelcomeScreen: true,
            defaultLanguage: 'en',
            initialMessages: [
                '¡Hola! 👋 Soy JarBot, el asistente virtual de Juan Rivera.',
                'Pregúntame sobre sus proyectos, tecnologías, experiencia o lo que quieras saber.'
            ],
            i18n: {
                en: {
                    title: '🤖 JarBot - Asistente IA',
                    subtitle: 'Tu asistente virtual del portafolio',
                    footer: '',
                    getStarted: '🚀 Comenzar conversación',
                    inputPlaceholder: '💭 Pregúntame lo que quieras...',
                    closeButtonTooltip: 'Cerrar chat',
                },
            },
        });
    }, []);
};
