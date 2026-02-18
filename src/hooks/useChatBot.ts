import { useEffect } from 'react';
import { createChat } from '@n8n/chat';
import { useTranslation } from 'react-i18next';

export const useChatBot = () => {
    const { t } = useTranslation();

    useEffect(() => {
        createChat({
            webhookUrl: 'https://primary-production-59094.up.railway.app/webhook/35ebee41-0e73-456e-ad86-e172bb6f5080/chat',
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
                t('chatbot.greeting1'),
                t('chatbot.greeting2')
            ],
            i18n: {
                en: {
                    title: t('chatbot.title'),
                    subtitle: t('chatbot.subtitle'),
                    footer: t('chatbot.footer'),
                    getStarted: t('chatbot.getStarted'),
                    inputPlaceholder: t('chatbot.inputPlaceholder'),
                    closeButtonTooltip: t('chatbot.closeButtonTooltip'),
                },
            },
        });
    }, [t]);
};
