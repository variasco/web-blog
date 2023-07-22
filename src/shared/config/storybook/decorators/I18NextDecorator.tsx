import { Story, StoryContext } from "@storybook/react";
import { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n/i18n";

export const I18NextDecorator = (StoryComponent: Story, context: StoryContext) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <StoryComponent />
      </I18nextProvider>
    </Suspense>
  );
};
