export interface AppVariant {
  first: string;
  second: string;
  third: string;
}
export interface AppTheme {
  background: string;
  blue: string;
  gray: string;
}
export interface ButtonVariant {
  background: string;
  color: string;
}
export interface ButtonVariantToggle {
  selected_background: string;
  selected_color: string;
  borderColor: string;
  textColor: string;
}
export interface ButtonTheme {
  primary: ButtonVariant;
  secondary: ButtonVariant;
  success: ButtonVariant;
  danger: ButtonVariant;
  disabled: ButtonVariant;
  toggle: ButtonVariantToggle;
}
export interface TextTheme {
  regular: string;
  yellow: string;
  primary: string;
  secondary: string;
  danger: string;
  warning: string;
  info: string;
  gray: string;
}
export interface ColorThemes {
  background: string;
}
const APP_THEME: AppTheme = {
  background: "#FFFFFF",
  blue: "#1269EB",
  gray: "#595959",
};

const BUTTON_THEME: ButtonTheme = {
  primary: {
    background: "#FFED89",
    color: "#fff",
  },
  secondary: {
    background: "#2ecc71",
    color: "#fff",
  },
  success: {
    background: "#28a745",
    color: "#fff",
  },
  danger: {
    background: "#dc3545",
    color: "#fff",
  },
  disabled: {
    background: "#dcdcdd",
    color: "#fff",
  },
  toggle: {
    selected_background: "#5BD894",
    selected_color: "#fff",
    borderColor: "black",
    textColor: "black",
  },
};
const TEXT_THEME: TextTheme = {
  regular: "#FFFFFF",
  yellow: "#FFED89",
  primary: "#576780",
  secondary: "#ccc",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#17a2b8",
  gray: "#0B1710",
};
const BACKGROUND_THEME: ColorThemes = {
  background: "#1269EB",
};

export { APP_THEME, BUTTON_THEME, TEXT_THEME, BACKGROUND_THEME };
