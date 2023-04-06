import { useState } from "react";
import { Select } from "@material-ui/core";

const Langue = ({ languetype }) => {
  const [selectedLang, setSelectedLang] = useState("fr");

  const handleChange = (event) => {
    const langValue = event.target.value;
    setSelectedLang(langValue);
    languetype(langValue);
    console.log(langValue);
  };

  const languages = [
    { value: "fr", label: "FR" },
    { value: "es", label: "ES" },
    { value: "en", label: "EN" },
    { value: "it", label: "IT" },
    { value: "de", label: "DE" },
    { value: "ko", label: "KO" },
    { value: "roomaji", label: "RO" },
    { value: "ja", label: "JA" },
    { value: "zh-Hant", label: "ZH-HANT" },
    { value: "ja-Hrkt", label: "JA-HRKT" },
    { value: "zh-Hans", label: "ZH-HANS" },
  ];

  return (
      <div className="App">
        <Select value={selectedLang} onChange={handleChange}>
          {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
          ))}
        </Select>
      </div>
  );
};

export default Langue;
