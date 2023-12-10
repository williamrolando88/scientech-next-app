import ThemeColorPresets from "./ThemeColorPresets";
import ThemeContrast from "./ThemeContrast";

type Props = {
  children: React.ReactNode;
};

export default function ThemeSettings({ children }: Props) {
  return (
    <ThemeColorPresets>
      <ThemeContrast>{children}</ThemeContrast>
    </ThemeColorPresets>
  );
}
