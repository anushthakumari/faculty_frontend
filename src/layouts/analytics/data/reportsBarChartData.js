import i18next from "i18n";

const label = i18next.t("analytics.eng_rate");

export default {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: { label, data: [50, 20, 10, 22, 50, 10, 40] },
};
