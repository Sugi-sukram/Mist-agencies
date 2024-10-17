import { ThemeConfig } from "antd";

// Use this site to create theme
// https://theme.antd.group/

const theme: Theme = {
  dark: {
    components: {
      Menu: {
        colorItemBgHover: "#3B3A3E",
        colorItemTextHover: "white",
        colorItemBgSelected: "#1C1B1F",
        colorItemTextSelected: "white",
      },
      Select: {
        colorBorder: "#e5e7eb",
        colorPrimaryHover: "#d9d9d9",
        selectorBg: "#E2EDFA",
        colorPrimary: "#E2EDFA",
        controlOutline: "white",
        optionSelectedBg: "rgba(217, 217, 217, 0.38)",
      },
      Steps: {
        colorPrimary: "#8CC63F",
        colorTextDescription: "#D9D9D9",
      },
      Radio: {
        buttonSolidCheckedBg: "#8CC63F",
        buttonCheckedBg: "rgba(140, 198, 63, 0.1);",
        colorPrimary: "#8CC63F",
        colorPrimaryHover: "#8CC63F",
        buttonSolidCheckedColor: "white",
        buttonSolidCheckedHoverBg:
          "linear-gradient(100.15deg, #9EDC4C 0.53%, #88D71F 98.59%);",
      },
      Checkbox: {
        colorPrimary: "#8CC63F",
        colorPrimaryHover:
          "linear-gradient(100.15deg, #9EDC4C 0.53%, #88D71F 98.59%);",
      },
      Table: {
        cellPaddingBlock: 6,
      },
      Switch: {
        colorPrimary: "#8CC63F",
        colorPrimaryHover:
          "linear-gradient(100.15deg, #9EDC4C 0.53%, #88D71F 98.59%);",
      },
      DatePicker: {
        colorPrimary: "#8CC63F",
        colorPrimaryHover:
          "linear-gradient(100.15deg, #9EDC4C 0.53%, #88D71F 98.59%);",
      },
      Dropdown: {
        colorPrimary: "#8CC63F",
        colorPrimaryHover:
          "linear-gradient(100.15deg, #9EDC4C 0.53%, #88D71F 98.59%);",
      },
      Pagination: {
        colorBgTextHover: "transparent",
        // colorPrimary: "transparent",
        colorPrimaryBorder: "transparent",
        colorPrimaryHover: "transparent",
      },
    },
  },
  light: {
    token: {
      colorPrimary: "#486aff",
      colorBgContainer: "#ffffff",
    },
    components: {
      Layout: {
        colorBgHeader: "#ffffff",
        colorBgBody: "#e9edf2",
        colorBgTrigger: "#d9d9d9",
      },
      Menu: {
        paddingContentVertical: 20,
        fontWeightStrong: 600,
      },
    },
  },
};

interface Theme {
  dark: ThemeConfig;
  light: ThemeConfig;
}

export default theme;
