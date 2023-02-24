import { render as rtlRender } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";
import i18n from "./i18nForTesting";

const customRender = (ui) => {
  return rtlRender(
    <Router>
      <I18nextProvider i18n={i18n}>{ui}</I18nextProvider>
    </Router>
  );
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
