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
                '¡Hola! 👋 Soy JarBot, el asistente virtual de Juan 😁',
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
