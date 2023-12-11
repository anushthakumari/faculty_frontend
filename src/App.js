import { useEffect } from "react";
import React from "react";

// the hook
import { useTranslation } from "react-i18next";

function App() {
	const { t, i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage("hi");
	}, [i18n]);

	return <h1>{t("greeet")}</h1>;
}

export default App;
